import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Probemuster() {
  return (
    <section className="relative bg-brand-rust overflow-hidden py-14 md:py-16">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_50%,white_0%,transparent_60%)]" />

      <div className="container-prose relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-brand-cream-soft/70 mb-3">
              <span className="h-px w-6 bg-brand-cream-soft/40" />
              Für neue Gastro-Partner
              <span className="h-px w-6 bg-brand-cream-soft/40" />
            </div>
            <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-bold text-brand-cream-soft leading-tight mb-2">
              Probebeutel kostenlos.
            </h2>
            <p className="text-[16px] md:text-[17px] text-brand-cream-soft/85 max-w-[48ch] leading-relaxed">
              Überzeug dich selbst — kein Risiko, keine Mindestabnahme. Einfach anfragen, wir schicken dir eine Auswahl unserer Größen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-3 flex-shrink-0"
          >
            <a
              href="https://wa.me/4917871199918?text=Hallo%2C%20ich%20w%C3%BCrde%20gerne%20einen%20kostenlosen%20Probebeutel%20anfragen."
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-brand-rust px-7 py-4 rounded-full font-bold text-[15px] hover:bg-brand-cream-soft transition-colors shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
            >
              <WhatsAppIcon />
              Per WhatsApp anfragen
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-cream-soft/40 text-brand-cream-soft px-7 py-4 rounded-full font-semibold text-[15px] hover:border-brand-cream-soft/80 hover:bg-brand-cream-soft/10 transition-all group"
            >
              Formular
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.873L.057 23.9a.5.5 0 0 0 .611.61l6.101-1.461A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.241-1.374l-.375-.217-3.892.931.966-3.813-.237-.392A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  )
}
