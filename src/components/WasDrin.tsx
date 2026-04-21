import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const drin = [
  { label: 'Feinste Kichererbsen', sub: 'Sortenreine Auswahl, eingeweicht – niemals aus der Dose.' },
  { label: 'Frische Kräuter', sub: 'Petersilie, Koriander und Minze – täglich frisch verarbeitet.' },
  { label: 'Familienrezept-Gewürze', sub: 'Die Mischung, die uns seit 18 Jahren unterscheidet.' },
  { label: 'Weißer Sesam', sub: 'Handgestreut – für den signature Knuspereffekt.' },
  { label: 'Pure Liebe', sub: 'Kein Marketing-Spruch. Eine Arbeitsweise.' },
  { label: 'High Protein & Ballaststoffe', sub: 'Natürlich sättigend – ohne Zusätze.' },
]

const nicht = [
  { label: 'Keine Chemie', sub: 'Keine Stabilisatoren, keine Emulgatoren.' },
  { label: 'Keine Konservierungsstoffe', sub: 'Tiefgefroren – nicht chemisch konserviert.' },
  { label: 'Keine Aromen', sub: 'Geschmack kommt aus der Zutat, nicht aus dem Labor.' },
  { label: 'Keine Massenware', sub: 'Keine 24/7-Industrie-Produktion.' },
  { label: 'Keine Kompromisse', sub: 'Lieber weniger produzieren als Qualität opfern.' },
  { label: 'Kein Verstecken', sub: 'Du darfst jederzeit in unsere Produktion kommen.' },
]

export default function WasDrin() {
  return (
    <section className="section-pad relative bg-brand-ink text-brand-cream-soft overflow-hidden">
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-8 md:mb-20"
        >
          <div className="eyebrow text-brand-rust mb-5">Was drin ist. Und was nicht.</div>
          <h2 className="display-lg text-brand-cream-soft">
            Ehrlichkeit ist keine Marketing-Strategie.{' '}
            <span className="italic text-brand-sand">Sie ist unsere Zutatenliste.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-0 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden">
          {/* Drin */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative bg-brand-forest p-6 md:p-12"
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-brand-cream-soft/15">
              <div className="w-11 h-11 rounded-full bg-brand-cream-soft/10 flex items-center justify-center">
                <Check size={20} strokeWidth={2.5} className="text-brand-sand" />
              </div>
              <div>
                <div className="eyebrow text-brand-sand/80">Was drin ist</div>
                <div className="font-serif text-[26px] md:text-[28px] font-bold text-brand-cream-soft leading-none mt-1">Zutaten</div>
              </div>
            </div>
            <ul className="space-y-3 md:space-y-5">
              {drin.map(item => (
                <li key={item.label} className="flex gap-4">
                  <Check
                    size={20}
                    strokeWidth={2.2}
                    className="text-brand-sand flex-shrink-0 mt-1"
                  />
                  <div>
                    <div className="font-serif text-[18px] font-semibold text-brand-cream-soft mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-[14px] leading-relaxed text-brand-cream-soft/70">
                      {item.sub}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Nicht */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-brand-rust p-6 md:p-12"
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-brand-cream-soft/20">
              <div className="w-11 h-11 rounded-full bg-brand-cream-soft/10 flex items-center justify-center">
                <X size={20} strokeWidth={2.5} className="text-brand-cream-soft" />
              </div>
              <div>
                <div className="eyebrow text-brand-cream-soft/75">Und was nicht</div>
                <div className="font-serif text-[26px] md:text-[28px] font-bold text-brand-cream-soft leading-none mt-1">Verzicht</div>
              </div>
            </div>
            <ul className="space-y-3 md:space-y-5">
              {nicht.map(item => (
                <li key={item.label} className="flex gap-4">
                  <X
                    size={20}
                    strokeWidth={2.2}
                    className="text-brand-cream-soft flex-shrink-0 mt-1 opacity-80"
                  />
                  <div>
                    <div className="font-serif text-[18px] font-semibold text-brand-cream-soft mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-[14px] leading-relaxed text-brand-cream-soft/80">
                      {item.sub}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 md:mt-20 text-center max-w-3xl mx-auto"
        >
          <p className="font-serif text-[24px] md:text-[32px] leading-[1.35] text-brand-cream-soft italic">
            Wir produzieren, was wir selbst essen würden —{' '}
            <span className="text-brand-sand not-italic font-semibold">jeden einzelnen Tag.</span>
          </p>
          <div className="mt-6 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.25em] text-brand-cream-soft/55">
            <span className="h-px w-10 bg-brand-cream-soft/30" />
            Berlin · 2007
            <span className="h-px w-10 bg-brand-cream-soft/30" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
