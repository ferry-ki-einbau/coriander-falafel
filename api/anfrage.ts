import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'
import { z } from 'zod'

export const config = {
  api: { bodyParser: { sizeLimit: '25mb' } },
}

const schema = z.object({
  name: z.string().min(2).max(120),
  firma: z.string().min(1).max(160),
  email: z.string().email().max(160),
  telefon: z.string().max(40).optional().default(''),
  interesse: z.string().max(60).optional().default(''),
  menge: z.string().max(60).optional().default(''),
  nachricht: z.string().max(4000).optional().default(''),
  website: z.string().max(200).optional().default(''),
})

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method Not Allowed' })
  }

  const parsed = schema.safeParse(req.body)
  if (!parsed.success) {
    return res.status(400).json({ ok: false, message: 'Bitte prüfe deine Eingaben.' })
  }

  const data = parsed.data

  // Honeypot
  if (data.website && data.website.trim().length > 0) {
    return res.status(200).json({ ok: true })
  }

  const resendKey = process.env.RESEND_API_KEY
  const tgToken = process.env.TELEGRAM_BOT_TOKEN
  const tgChat = process.env.TELEGRAM_CHAT_ID
  const fromAddr = process.env.MAIL_FROM || 'Coriander Falafel <anfrage@coriander-falafel.de>'
  const toAddr = process.env.MAIL_TO || 'coriander-falafel@hotmail.com'
  const replyTo = data.email

  const subject = `Neue Anfrage: ${data.firma} (${data.interesse || 'allg.'})`
  const plain = [
    `Neue Anfrage über coriander-falafel.de`,
    ``,
    `Name:      ${data.name}`,
    `Firma:     ${data.firma}`,
    `Email:     ${data.email}`,
    `Telefon:   ${data.telefon || '—'}`,
    `Interesse: ${data.interesse || '—'}`,
    `Menge:     ${data.menge || '—'}`,
    ``,
    `Nachricht:`,
    data.nachricht || '—',
  ].join('\n')

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#FAF1D3;color:#1A1209">
      <h2 style="font-family:Georgia,serif;font-size:22px;margin:0 0 16px;color:#1F4A2C">Neue Anfrage — Coriander Falafel</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:6px 0;color:#6b5a3a;width:110px">Name</td><td style="padding:6px 0"><strong>${escapeHtml(data.name)}</strong></td></tr>
        <tr><td style="padding:6px 0;color:#6b5a3a">Firma</td><td style="padding:6px 0"><strong>${escapeHtml(data.firma)}</strong></td></tr>
        <tr><td style="padding:6px 0;color:#6b5a3a">Email</td><td style="padding:6px 0"><a href="mailto:${escapeHtml(data.email)}" style="color:#1F4A2C">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#6b5a3a">Telefon</td><td style="padding:6px 0">${escapeHtml(data.telefon || '—')}</td></tr>
        <tr><td style="padding:6px 0;color:#6b5a3a">Interesse</td><td style="padding:6px 0">${escapeHtml(data.interesse || '—')}</td></tr>
        <tr><td style="padding:6px 0;color:#6b5a3a">Menge</td><td style="padding:6px 0">${escapeHtml(data.menge || '—')}</td></tr>
      </table>
      ${data.nachricht ? `
        <div style="margin-top:18px;padding:14px;background:#fff;border-left:3px solid #1F4A2C">
          <div style="font-size:12px;color:#6b5a3a;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:6px">Nachricht</div>
          <div style="font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(data.nachricht)}</div>
        </div>
      ` : ''}
      <p style="margin-top:24px;font-size:12px;color:#6b5a3a">Absendet über das Anfrageformular auf coriander-falafel.de</p>
    </div>
  `

  if (!resendKey) {
    console.error('RESEND_API_KEY fehlt')
    return res.status(500).json({ ok: false, message: 'E-Mail-Versand aktuell nicht möglich. Bitte ruf uns direkt an.' })
  }

  const resend = new Resend(resendKey)

  // 1. Dealer-Email (await — darf nicht silent fail)
  try {
    await resend.emails.send({
      from: fromAddr,
      to: [toAddr],
      replyTo,
      subject,
      text: plain,
      html,
    })
  } catch (err) {
    console.error('Resend (dealer) fehlgeschlagen:', err)
    return res.status(500).json({ ok: false, message: 'E-Mail konnte nicht gesendet werden. Bitte ruf uns direkt an.' })
  }

  // 2. Telegram + Kunden-Bestätigung non-blocking
  const tasks: Promise<unknown>[] = []

  if (tgToken && tgChat) {
    const tgText = plain // Plain-Text Fallback — kein Markdown wegen Sonderzeichen-Problem
    tasks.push(
      fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: tgChat,
          text: `🥙 Neue Coriander Anfrage\n\n${tgText}`,
          disable_web_page_preview: true,
        }),
      }).then(async r => {
        if (!r.ok) console.error('Telegram fehlgeschlagen:', await r.text())
      })
    )
  }

  tasks.push(
    resend.emails.send({
      from: fromAddr,
      to: [data.email],
      subject: 'Deine Anfrage bei Coriander Falafel',
      text: [
        `Hallo ${data.name},`,
        ``,
        `danke für deine Anfrage — wir haben sie erhalten und melden uns in der Regel innerhalb eines Werktags.`,
        ``,
        `Du hast Fragen, die nicht warten können? Ruf uns direkt an:`,
        `• Abas: 0176 24 83 12 32`,
        `• Mustafa: 0178 711 99 18`,
        ``,
        `Viele Grüße`,
        `Abas & Mustafa`,
        `Coriander Falafel Großhandel`,
      ].join('\n'),
    }).catch(err => console.error('Resend (Kunde) fehlgeschlagen:', err))
  )

  await Promise.allSettled(tasks)

  return res.status(200).json({ ok: true })
}
