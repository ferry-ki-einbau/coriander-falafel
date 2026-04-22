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

const esc = (s: string) =>
  s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))

// ─── Email Templates ────────────────────────────────────────────────────────

function dealerHtml(d: z.infer<typeof schema>): string {
  const waLink = d.telefon
    ? `https://wa.me/${d.telefon.replace(/\D/g, '').replace(/^0/, '49')}`
    : null

  const row = (label: string, value: string, alt = false) =>
    value && value !== '—'
      ? `<tr>
          <td style="padding:11px 20px;font-size:13px;color:#7a6448;white-space:nowrap;background:${alt ? '#faf7f2' : '#ffffff'};border-bottom:1px solid #ede5d5;width:120px">${label}</td>
          <td style="padding:11px 20px;font-size:14px;color:#1A1209;background:${alt ? '#faf7f2' : '#ffffff'};border-bottom:1px solid #ede5d5"><strong>${esc(value)}</strong></td>
        </tr>`
      : ''

  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#ede8db;font-family:Arial,Helvetica,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#ede8db;padding:40px 16px">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:6px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.12)">

  <!-- Header -->
  <tr>
    <td style="background:#1F4A2C;padding:28px 36px">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <div style="font-family:Georgia,'Times New Roman',serif;font-size:20px;color:#F5E6B8;font-weight:bold;letter-spacing:0.04em">CORIANDER FALAFEL</div>
            <div style="font-size:11px;color:#b8c9b0;letter-spacing:0.22em;text-transform:uppercase;margin-top:5px">Großhandel · Berlin · Seit 2007</div>
          </td>
          <td align="right" valign="middle">
            <span style="background:#B8412E;color:#ffffff;font-size:11px;font-weight:bold;padding:5px 12px;border-radius:2px;text-transform:uppercase;letter-spacing:0.1em;white-space:nowrap">● Neue Anfrage</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Intro -->
  <tr>
    <td style="background:#FAF1D3;padding:28px 36px 20px">
      <p style="margin:0;font-size:15px;color:#1A1209;line-height:1.6">
        Neue Anfrage über <strong>coriander-falafel.de</strong>
      </p>
    </td>
  </tr>

  <!-- Data Table -->
  <tr>
    <td style="background:#FAF1D3;padding:0 36px 24px">
      <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:4px;overflow:hidden;border:1px solid #ded5c2">
        ${row('Name', d.name, false)}
        ${row('Firma', d.firma, true)}
        ${row('E-Mail', d.email, false)}
        ${row('Telefon', d.telefon || '—', true)}
        ${row('Interesse', d.interesse || '—', false)}
        ${row('Menge', d.menge || '—', true)}
      </table>
    </td>
  </tr>

  <!-- Nachricht -->
  ${d.nachricht ? `
  <tr>
    <td style="background:#FAF1D3;padding:0 36px 24px">
      <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:4px;overflow:hidden;border:1px solid #ded5c2">
        <tr>
          <td style="background:#1F4A2C;padding:10px 20px">
            <span style="font-size:11px;color:#b8c9b0;text-transform:uppercase;letter-spacing:0.2em">Nachricht</span>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:16px 20px;font-size:14px;color:#1A1209;line-height:1.7;white-space:pre-wrap">${esc(d.nachricht)}</td>
        </tr>
      </table>
    </td>
  </tr>
  ` : ''}

  <!-- CTA Buttons -->
  <tr>
    <td style="background:#FAF1D3;padding:0 36px 32px">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding-right:${waLink ? '8px' : '0'}">
            <a href="mailto:${esc(d.email)}" style="display:block;background:#1F4A2C;color:#F5E6B8;text-align:center;padding:13px 20px;font-size:14px;font-weight:bold;text-decoration:none;border-radius:3px;letter-spacing:0.02em">
              Per E-Mail antworten
            </a>
          </td>
          ${waLink ? `
          <td style="padding-left:8px;width:50%">
            <a href="${waLink}" style="display:block;background:#25D366;color:#ffffff;text-align:center;padding:13px 20px;font-size:14px;font-weight:bold;text-decoration:none;border-radius:3px;letter-spacing:0.02em">
              WhatsApp schreiben
            </a>
          </td>
          ` : ''}
        </tr>
      </table>
    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td style="background:#1A1209;padding:20px 36px">
      <p style="margin:0;font-size:12px;color:#6b5a3a;text-align:center;line-height:1.6">
        Coriander Falafel Großhandel &nbsp;·&nbsp; Turiner Str. 24, 13347 Berlin<br>
        <a href="https://coriander-falafel.de" style="color:#7a9e6e;text-decoration:none">coriander-falafel.de</a>
      </p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

function customerHtml(d: z.infer<typeof schema>): string {
  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#ede8db;font-family:Arial,Helvetica,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#ede8db;padding:40px 16px">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:6px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.12)">

  <!-- Header -->
  <tr>
    <td style="background:#1F4A2C;padding:36px 36px 28px;text-align:center">
      <div style="font-family:Georgia,'Times New Roman',serif;font-size:24px;color:#F5E6B8;font-weight:bold;letter-spacing:0.06em">CORIANDER FALAFEL</div>
      <div style="font-size:11px;color:#b8c9b0;letter-spacing:0.25em;text-transform:uppercase;margin-top:6px">Großhandel · Berlin · Seit 2007</div>
      <div style="margin-top:20px;display:inline-block">
        <span style="background:#F5E6B8;color:#1F4A2C;font-size:13px;font-weight:bold;padding:7px 18px;border-radius:20px;letter-spacing:0.04em">✓ Anfrage erhalten</span>
      </div>
    </td>
  </tr>

  <!-- Main -->
  <tr>
    <td style="background:#FAF1D3;padding:36px 36px 28px">
      <p style="margin:0 0 16px;font-size:17px;color:#1A1209;line-height:1.6">
        Hallo <strong>${esc(d.name)}</strong>,
      </p>
      <p style="margin:0 0 16px;font-size:15px;color:#3a2e20;line-height:1.7">
        vielen Dank für dein Interesse — deine Anfrage ist bei uns angekommen. Wir melden uns <strong>in der Regel innerhalb eines Werktags</strong> mit einem persönlichen Angebot.
      </p>
      <p style="margin:0;font-size:15px;color:#3a2e20;line-height:1.7">
        Vegan, glutenfrei &amp; halal — nach Familienrezept. Seit 2007 aus Berlin.
      </p>
    </td>
  </tr>

  <!-- Summary -->
  <tr>
    <td style="background:#FAF1D3;padding:0 36px 28px">
      <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:4px;overflow:hidden;border:1px solid #ded5c2">
        <tr>
          <td colspan="2" style="background:#1F4A2C;padding:11px 20px">
            <span style="font-size:11px;color:#b8c9b0;text-transform:uppercase;letter-spacing:0.22em">Deine Anfrage</span>
          </td>
        </tr>
        ${d.interesse ? `<tr><td style="padding:10px 20px;font-size:13px;color:#7a6448;background:#fff;border-bottom:1px solid #ede5d5;width:120px">Interesse</td><td style="padding:10px 20px;font-size:14px;color:#1A1209;background:#fff;border-bottom:1px solid #ede5d5">${esc(d.interesse)}</td></tr>` : ''}
        ${d.menge ? `<tr><td style="padding:10px 20px;font-size:13px;color:#7a6448;background:#faf7f2;border-bottom:1px solid #ede5d5">Menge</td><td style="padding:10px 20px;font-size:14px;color:#1A1209;background:#faf7f2;border-bottom:1px solid #ede5d5">${esc(d.menge)}</td></tr>` : ''}
        <tr>
          <td style="padding:10px 20px;font-size:13px;color:#7a6448;background:${d.menge ? '#fff' : '#faf7f2'}">Firma</td>
          <td style="padding:10px 20px;font-size:14px;color:#1A1209;background:${d.menge ? '#fff' : '#faf7f2'}">${esc(d.firma)}</td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Divider + Contact -->
  <tr>
    <td style="background:#FAF1D3;padding:0 36px 32px">
      <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #ded5c2;padding-top:24px">
        <tr>
          <td style="padding-top:20px">
            <p style="margin:0 0 16px;font-size:14px;color:#6b5a3a;font-weight:bold;text-transform:uppercase;letter-spacing:0.12em">Direkt erreichbar</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:12px;width:50%">
                  <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #ded5c2;border-radius:4px">
                    <tr><td style="padding:16px 18px">
                      <div style="font-size:13px;font-weight:bold;color:#1F4A2C;margin-bottom:4px">Abas Kasim</div>
                      <div style="font-size:13px;color:#3a2e20">Großhandel</div>
                      <div style="margin-top:10px">
                        <a href="tel:+4917624831232" style="display:block;background:#1F4A2C;color:#F5E6B8;text-align:center;padding:9px;font-size:13px;font-weight:bold;text-decoration:none;border-radius:3px">0176 24 83 12 32</a>
                      </div>
                    </td></tr>
                  </table>
                </td>
                <td style="padding-left:12px;width:50%">
                  <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #ded5c2;border-radius:4px">
                    <tr><td style="padding:16px 18px">
                      <div style="font-size:13px;font-weight:bold;color:#1F4A2C;margin-bottom:4px">Mustafa Kassim</div>
                      <div style="font-size:13px;color:#3a2e20">Produktion</div>
                      <div style="margin-top:10px">
                        <a href="https://wa.me/4917871199918" style="display:block;background:#25D366;color:#fff;text-align:center;padding:9px;font-size:13px;font-weight:bold;text-decoration:none;border-radius:3px">WhatsApp</a>
                      </div>
                    </td></tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Sign-off -->
  <tr>
    <td style="background:#f0e8cc;padding:24px 36px;border-top:1px solid #ded5c2">
      <p style="margin:0;font-size:14px;color:#3a2e20;line-height:1.7">
        Viele Grüße,<br>
        <strong style="font-family:Georgia,serif;font-size:16px;color:#1F4A2C">Abas &amp; Mustafa</strong><br>
        <span style="font-size:13px;color:#6b5a3a">Coriander Falafel Großhandel</span>
      </p>
    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td style="background:#1A1209;padding:20px 36px">
      <p style="margin:0;font-size:12px;color:#6b5a3a;text-align:center;line-height:1.6">
        Coriander Falafel Großhandel &nbsp;·&nbsp; Turiner Str. 24, 13347 Berlin<br>
        <a href="https://coriander-falafel.de" style="color:#7a9e6e;text-decoration:none">coriander-falafel.de</a>
        &nbsp;·&nbsp;
        <a href="mailto:info@coriander-falafel.de" style="color:#7a9e6e;text-decoration:none">info@coriander-falafel.de</a>
      </p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

// ─── Handler ────────────────────────────────────────────────────────────────

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method Not Allowed' })
  }

  const parsed = schema.safeParse(req.body)
  if (!parsed.success) {
    return res.status(400).json({ ok: false, message: 'Bitte prüfe deine Eingaben.' })
  }

  const data = parsed.data

  if (data.website && data.website.trim().length > 0) {
    return res.status(200).json({ ok: true })
  }

  const resendKey = process.env.RESEND_API_KEY
  const tgToken = process.env.TELEGRAM_BOT_TOKEN
  const tgChat = process.env.TELEGRAM_CHAT_ID
  const fromAddr = process.env.MAIL_FROM || 'Coriander Falafel <info@coriander-falafel.de>'
  const toAddr = process.env.MAIL_TO || 'info@coriander-falafel.de'

  if (!resendKey) {
    console.error('RESEND_API_KEY fehlt')
    return res.status(500).json({ ok: false, message: 'E-Mail-Versand aktuell nicht möglich. Bitte ruf uns direkt an.' })
  }

  const resend = new Resend(resendKey)

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

  // 1. Dealer-Email (blocking)
  try {
    await resend.emails.send({
      from: fromAddr,
      to: [toAddr],
      replyTo: data.email,
      subject: `Neue Anfrage: ${data.firma} (${data.interesse || 'allg.'})`,
      text: plain,
      html: dealerHtml(data),
    })
  } catch (err) {
    console.error('Resend (dealer) fehlgeschlagen:', err)
    return res.status(500).json({ ok: false, message: 'E-Mail konnte nicht gesendet werden. Bitte ruf uns direkt an.' })
  }

  // 2. Telegram + Kunden-Bestätigung (non-blocking)
  const tasks: Promise<unknown>[] = []

  if (tgToken && tgChat) {
    tasks.push(
      fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: tgChat,
          text: `🥙 Neue Coriander Anfrage\n\n${plain}`,
          disable_web_page_preview: true,
        }),
      }).then(async r => {
        if (!r.ok) {
          console.error('Telegram (MD) fehlgeschlagen, versuche plain:', await r.text())
          return fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: tgChat, text: `Neue Coriander Anfrage\n\n${plain}` }),
          })
        }
      })
    )
  }

  tasks.push(
    resend.emails.send({
      from: fromAddr,
      to: [data.email],
      subject: `Deine Anfrage bei Coriander Falafel — wir melden uns bald`,
      text: [
        `Hallo ${data.name},`,
        ``,
        `vielen Dank für dein Interesse — deine Anfrage ist bei uns angekommen.`,
        `Wir melden uns in der Regel innerhalb eines Werktags.`,
        ``,
        `Direkt erreichbar:`,
        `• Abas: 0176 24 83 12 32`,
        `• Mustafa: 0178 711 99 18 (WhatsApp)`,
        ``,
        `Viele Grüße`,
        `Abas & Mustafa`,
        `Coriander Falafel Großhandel`,
        `Turiner Str. 24, 13347 Berlin`,
      ].join('\n'),
      html: customerHtml(data),
    }).catch(err => console.error('Resend (Kunde) fehlgeschlagen:', err))
  )

  await Promise.allSettled(tasks)

  return res.status(200).json({ ok: true })
}
