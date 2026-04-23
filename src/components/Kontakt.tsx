import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Check, AlertCircle } from 'lucide-react'

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
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(31,74,44,0.18)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container-prose relative">
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20 items-start">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow text-brand-rust mb-4">Kontakt</div>
            <h2 className="display-lg text-brand-cream-soft mb-4">
              Lass uns reden.<br />
              <span className="italic text-brand-sand">Direkt. Ehrlich.</span>
            </h2>
            <p className="text-[16px] text-brand-cream-soft/65 leading-relaxed mb-8 max-w-[40ch]">
              Proben gratis · Antwort innerhalb weniger Stunden · Unverbindlich
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/4917624831232?text=Hallo%2C%20ich%20habe%20Interesse%20an%20euren%20Falafel%20f%C3%BCr%20mein%20Restaurant."
              target="_blank"
              rel="noopener"
              className="group flex items-center gap-4 bg-[#25D366] hover:bg-[#1fba58] text-white rounded-sm px-5 py-4 mb-8 transition-colors shadow-[0_8px_32px_-8px_rgba(37,211,102,0.5)]"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <WhatsAppIcon />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-[15px] leading-tight">Direkt per WhatsApp</div>
                <div className="text-[12px] text-white/75 mt-0.5">Wir antworten</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Gründer */}
            <div className="mb-8">
              <div className="bg-brand-cream-soft/[0.05] border border-brand-cream-soft/10 rounded-sm p-4">
                <div className="font-serif text-[15px] font-semibold text-brand-cream-soft leading-tight mb-0.5">Abas Kasim & Mustafa Kassim</div>
                <div className="text-[11px] text-brand-cream-soft/50 uppercase tracking-[0.12em] mb-3">Gründer und Berater</div>
                <a href="tel:+4917624831232" className="flex items-center gap-2 text-[13px] text-brand-cream-soft/80 hover:text-brand-sand transition-colors mb-1.5">
                  <Phone size={13} strokeWidth={1.8} />
                  0176 24 83 12 32
                </a>
                <a href="https://wa.me/4917624831232" target="_blank" rel="noopener" className="flex items-center gap-2 text-[13px] text-[#25D366] hover:text-[#1fba58] transition-colors">
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Email + Adresse */}
            <div className="space-y-3 text-[14px] text-brand-cream-soft/60">
              <a href="mailto:info@coriander-falafel.de" className="flex items-center gap-3 hover:text-brand-sand transition-colors">
                <Mail size={15} strokeWidth={1.8} className="flex-shrink-0 text-brand-sand" />
                info@coriander-falafel.de
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={15} strokeWidth={1.8} className="flex-shrink-0 text-brand-sand mt-0.5" />
                <span>Turiner Str. 24 · 13347 Berlin<br /><span className="text-[12px] text-brand-cream-soft/45">Bitte nicht unangekündigt vorbeikommen</span></span>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-brand-cream-soft text-brand-ink rounded-sm p-6 md:p-9"
          >
            <div className="eyebrow text-brand-rust mb-2">Unverbindliche Anfrage</div>
            <h3 className="font-serif text-[22px] md:text-[24px] font-bold text-brand-ink mb-6">
              Angebot anfordern
            </h3>

            {status === 'success' ? (
              <div className="py-12 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-forest text-brand-cream-soft mb-5">
                  <Check size={22} strokeWidth={2.5} />
                </div>
                <h4 className="font-serif text-[22px] font-bold text-brand-ink mb-3">Danke — wir melden uns.</h4>
                <p className="text-[14px] text-brand-charcoal/70 max-w-[36ch] mx-auto leading-relaxed">
                  Deine Anfrage ist bei Abas und Mustafa gelandet. In der Regel innerhalb eines Werktags.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                {/* Honeypot */}
                <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden="true">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="Name *" name="name" required />
                  <Field label="Firma *" name="firma" required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="Email *" name="email" type="text" required placeholder="deine@email.de" />
                  <Field label="Telefon" name="telefon" type="tel" />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-brand-charcoal/60 font-semibold mb-1.5">
                    Interesse
                  </label>
                  <select
                    name="interesse"
                    defaultValue=""
                    className="w-full bg-white border border-brand-ink/15 rounded-sm px-3 py-2.5 text-[14px] text-brand-ink focus:outline-none focus:border-brand-forest transition-colors"
                  >
                    <option value="" disabled>Bitte wählen</option>
                    <option value="Individuell">Individuelles Produkt</option>
                    <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                    <option value="Beratung">Beratung</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-brand-charcoal/60 font-semibold mb-1.5">
                    Nachricht
                  </label>
                  <textarea
                    name="nachricht"
                    rows={3}
                    placeholder="Konzept, Größenpräferenz, Fragen…"
                    className="w-full bg-white border border-brand-ink/15 rounded-sm px-3 py-2.5 text-[14px] text-brand-ink focus:outline-none focus:border-brand-forest transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-2 text-[13px] text-brand-rust bg-brand-rust/8 border border-brand-rust/20 rounded-sm p-3">
                    <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />
                    <span>{errorMsg || 'Etwas ist schiefgelaufen. Bitte ruf uns direkt an.'}</span>
                  </div>
                )}

                <div className="flex items-center gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center gap-2 bg-brand-forest text-brand-cream-soft px-7 py-3.5 rounded-full font-semibold text-[15px] hover:bg-brand-forest-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Wird gesendet…' : (
                      <>Absenden <Send size={15} /></>
                    )}
                  </button>
                  <p className="text-[11px] text-brand-charcoal/45 leading-tight flex-1">
                    Daten nur zur Anfrage · <a href="/datenschutz" className="underline hover:text-brand-forest">Datenschutz</a>
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label, name, type = 'text', required, placeholder,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.15em] text-brand-charcoal/60 font-semibold mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white border border-brand-ink/15 rounded-sm px-3 py-2.5 text-[14px] text-brand-ink focus:outline-none focus:border-brand-forest transition-colors"
      />
    </div>
  )
}
