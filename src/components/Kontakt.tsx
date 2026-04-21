import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Send, Check, AlertCircle, Gift, Clock, Shield, Handshake } from 'lucide-react'

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.873L.057 23.9a.5.5 0 0 0 .611.61l6.101-1.461A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.241-1.374l-.375-.217-3.892.931.966-3.813-.237-.392A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  )
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Kontakt() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'loading') return

    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = {
      name: String(fd.get('name') || ''),
      firma: String(fd.get('firma') || ''),
      email: String(fd.get('email') || ''),
      telefon: String(fd.get('telefon') || ''),
      interesse: String(fd.get('interesse') || ''),
      menge: String(fd.get('menge') || ''),
      nachricht: String(fd.get('nachricht') || ''),
      website: String(fd.get('website') || ''),
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/anfrage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.message || 'Anfrage konnte nicht gesendet werden.')
      }
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Unbekannter Fehler')
    }
  }

  return (
    <section id="kontakt" className="section-pad relative bg-brand-ink text-brand-cream-soft overflow-hidden">
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-10 md:mb-14"
        >
          <div className="eyebrow text-brand-rust mb-5">Kontakt</div>
          <h2 className="display-lg text-brand-cream-soft mb-6">
            Lass uns reden.<br />
            <span className="italic text-brand-sand">Schnell. Direkt. Ehrlich.</span>
          </h2>
          <p className="text-[18px] text-brand-cream-soft/80 max-w-[52ch] leading-relaxed">
            Ruf uns an, schreib uns per WhatsApp oder nutze das Formular. Wir melden uns in der Regel innerhalb eines Werktags.
          </p>

          {/* Trust-Reassurance Row */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
            {[
              { icon: Gift, label: 'Probebeutel gratis', sub: 'Ohne Mindestabnahme' },
              { icon: Clock, label: 'Antwort in 24 h', sub: 'An Werktagen' },
              { icon: Shield, label: 'DSGVO-konform', sub: 'Nur für Anfrage' },
              { icon: Handshake, label: 'Unverbindlich', sub: 'Kein Vertrag nötig' },
            ].map((t) => {
              const Icon = t.icon
              return (
                <div
                  key={t.label}
                  className="flex items-start gap-2.5 bg-brand-cream-soft/[0.04] border border-brand-cream-soft/10 rounded-sm px-3 py-2.5 md:px-4 md:py-3"
                >
                  <Icon size={18} strokeWidth={1.6} className="flex-shrink-0 text-brand-sand mt-0.5" />
                  <div>
                    <div className="text-[13.5px] font-semibold text-brand-cream-soft leading-tight">
                      {t.label}
                    </div>
                    <div className="text-[11.5px] text-brand-cream-soft/60 mt-0.5 leading-tight">
                      {t.sub}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          {/* WhatsApp Shortcut */}
          <motion.a
            href="https://wa.me/4917871199918?text=Hallo%2C%20ich%20habe%20Interesse%20an%20euren%20Falafel%20f%C3%BCr%20mein%20Restaurant."
            target="_blank"
            rel="noopener"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/25 hover:bg-[#25D366]/15 rounded-sm px-6 py-5 transition-colors group"
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)]">
              <WhatsAppIcon />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-brand-cream-soft text-[15px] leading-tight">Direkt per WhatsApp schreiben</div>
              <div className="text-[13px] text-brand-cream-soft/60 mt-0.5">Mustafa antwortet meist innerhalb einer Stunde</div>
            </div>
            <MessageCircle size={18} className="flex-shrink-0 text-[#25D366] group-hover:scale-110 transition-transform" />
          </motion.a>

          {/* Linke Spalte: Ansprechpartner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Abas */}
            <div className="bg-brand-cream-soft/5 border border-brand-cream-soft/10 rounded-sm p-6 md:p-8">
              <div className="eyebrow text-brand-sand/80 mb-3">Ansprechpartner 1</div>
              <div className="font-serif text-[24px] font-bold text-brand-cream-soft mb-1">Abas Kasim Mahmood</div>
              <div className="text-[13px] text-brand-cream-soft/60 mb-5">Gründer · Großhandel-Betreuung</div>
              <div className="space-y-3">
                <a
                  href="tel:+4917624831232"
                  className="flex items-center gap-3 text-brand-cream-soft hover:text-brand-sand transition-colors"
                >
                  <Phone size={17} strokeWidth={1.8} className="flex-shrink-0" />
                  <span className="font-medium">0176 24 83 12 32</span>
                </a>
                <a
                  href="https://wa.me/4917624831232"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-3 text-brand-cream-soft hover:text-brand-sand transition-colors"
                >
                  <MessageCircle size={17} strokeWidth={1.8} className="flex-shrink-0" />
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Mustafa */}
            <div className="bg-brand-cream-soft/5 border border-brand-cream-soft/10 rounded-sm p-6 md:p-8">
              <div className="eyebrow text-brand-sand/80 mb-3">Ansprechpartner 2</div>
              <div className="font-serif text-[24px] font-bold text-brand-cream-soft mb-1">Mustafa Kassim</div>
              <div className="text-[13px] text-brand-cream-soft/60 mb-5">Gründer · Produktion &amp; Rezeptur</div>
              <div className="space-y-3">
                <a
                  href="tel:+4917871199918"
                  className="flex items-center gap-3 text-brand-cream-soft hover:text-brand-sand transition-colors"
                >
                  <Phone size={17} strokeWidth={1.8} className="flex-shrink-0" />
                  <span className="font-medium">0178 711 99 18</span>
                </a>
                <a
                  href="https://wa.me/4917871199918"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-3 text-brand-cream-soft hover:text-brand-sand transition-colors"
                >
                  <MessageCircle size={17} strokeWidth={1.8} className="flex-shrink-0" />
                  <span className="font-medium">WhatsApp · Telegram</span>
                </a>
              </div>
            </div>

            {/* Email + Adresse */}
            <div className="pt-2 space-y-4 text-[14.5px]">
              <a
                href="mailto:coriander-falafel@hotmail.com"
                className="flex items-center gap-3 text-brand-cream-soft/90 hover:text-brand-sand transition-colors"
              >
                <Mail size={17} strokeWidth={1.8} className="flex-shrink-0 text-brand-sand" />
                <span>coriander-falafel@hotmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-brand-cream-soft/80">
                <MapPin size={17} strokeWidth={1.8} className="flex-shrink-0 text-brand-sand mt-0.5" />
                <span>
                  Turiner Str. 24<br />
                  13347 Berlin
                </span>
              </div>
            </div>
          </motion.div>

          {/* Rechte Spalte: Formular */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="bg-brand-cream-soft text-brand-ink rounded-sm p-6 md:p-10"
          >
            <div className="eyebrow text-brand-rust mb-3">Unverbindliche Anfrage</div>
            <h3 className="font-serif text-[22px] md:text-[26px] font-bold text-brand-ink mb-5 md:mb-7">
              Angebot anfordern
            </h3>

            {status === 'success' ? (
              <div className="py-10 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-forest text-brand-cream-soft mb-5">
                  <Check size={22} strokeWidth={2.5} />
                </div>
                <h4 className="font-serif text-[24px] font-bold text-brand-ink mb-3">
                  Danke — wir melden uns.
                </h4>
                <p className="text-[15px] text-brand-charcoal/80 max-w-[40ch] mx-auto leading-relaxed">
                  Deine Anfrage ist bei Abas und Mustafa gelandet. In der Regel hörst du innerhalb eines Werktags von uns.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                {/* Honeypot */}
                <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden="true">
                  <label>
                    Website
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Name *" name="name" required />
                  <Field label="Firma *" name="firma" required />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Email *" name="email" type="email" required />
                  <Field label="Telefon" name="telefon" type="tel" />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] uppercase tracking-[0.15em] text-brand-charcoal/70 font-semibold mb-2">
                      Interesse
                    </label>
                    <select
                      name="interesse"
                      className="w-full bg-white border border-brand-ink/15 rounded-sm px-4 py-3 text-[15px] text-brand-ink focus:outline-none focus:border-brand-forest transition-colors"
                      defaultValue=""
                    >
                      <option value="" disabled>Bitte wählen</option>
                      <option value="XS">XS — Finger-Food</option>
                      <option value="S">S — Standard (5 cm)</option>
                      <option value="M">M — Mid-Size</option>
                      <option value="XL">XL — Premium</option>
                      <option value="Individuell">Individuelle Größe / Rezeptur</option>
                      <option value="Probebeutel">Probebeutel</option>
                    </select>
                  </div>
                  <Field label="Menge (Beutel/Monat)" name="menge" placeholder="z. B. 50 Beutel" />
                </div>

                <div>
                  <label className="block text-[12px] uppercase tracking-[0.15em] text-brand-charcoal/70 font-semibold mb-2">
                    Nachricht
                  </label>
                  <textarea
                    name="nachricht"
                    rows={3}
                    placeholder="Erzähl uns von deinem Konzept, deiner Größenpräferenz oder deinen Fragen."
                    className="w-full bg-white border border-brand-ink/15 rounded-sm px-4 py-3 text-[15px] text-brand-ink focus:outline-none focus:border-brand-forest transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-2 text-[13.5px] text-brand-rust-dark bg-brand-rust/10 border border-brand-rust/25 rounded-sm p-3">
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                    <span>{errorMsg || 'Etwas ist schiefgelaufen. Bitte ruf uns direkt an.'}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center gap-2 bg-brand-forest text-brand-cream-soft px-8 py-4 rounded-full font-semibold hover:bg-brand-forest-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Wird gesendet…' : (
                    <>
                      Anfrage absenden
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p className="text-[11.5px] text-brand-charcoal/55 leading-relaxed">
                  Mit dem Absenden akzeptierst du unsere{' '}
                  <a href="/datenschutz" className="underline hover:text-brand-forest">Datenschutzerklärung</a>.
                  Deine Daten werden ausschließlich zur Bearbeitung deiner Anfrage verwendet.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label className="block text-[12px] uppercase tracking-[0.15em] text-brand-charcoal/70 font-semibold mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white border border-brand-ink/15 rounded-sm px-4 py-3 text-[15px] text-brand-ink focus:outline-none focus:border-brand-forest transition-colors"
      />
    </div>
  )
}
