import { motion } from 'framer-motion'

const zutaten = [
  'Kichererbsen — eingeweicht, niemals aus der Dose',
  'Frische Petersilie & Koriander',
  'Familienrezept-Gewürze seit 2007',
  'Weißer Sesam',
]

export default function VideoReveal() {
  return (
    <section className="relative bg-brand-forest-deep overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[420px] lg:min-h-[680px]">

        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center px-8 py-10 md:px-14 lg:px-16 xl:px-20 lg:py-20"
        >
          <div className="eyebrow text-brand-sand/70 mb-5">Produziert in Berlin</div>

          <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-bold text-brand-cream-soft leading-[1.08] mb-6">
            Handgemacht.<br />
            <span className="italic text-brand-rust">Seit 2007.</span>
          </h2>

          <p className="text-[16px] md:text-[17px] text-brand-cream-soft/75 leading-relaxed max-w-[44ch] mb-8">
            Jede Falafel wird nach unserem Familienrezept von Hand geformt. Frische Zutaten, keine Shortcuts — das schmeckt man.
          </p>

          <ul className="space-y-3 mb-10">
            {zutaten.map((z, i) => (
              <motion.li
                key={z}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                className="flex items-start gap-3 text-[14px] md:text-[15px] text-brand-cream-soft/80"
              >
                <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-brand-rust/20 border border-brand-rust/40 flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                    <path d="M1.5 4.5l1.5 1.5 3.5-4" stroke="#B8412E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {z}
              </motion.li>
            ))}
          </ul>

          <div className="border-t border-brand-cream-soft/10 pt-6">
            <p className="font-serif italic text-[1.1rem] text-brand-sand/90 leading-relaxed">
              „Keine Chemie. Keine Konservierung.<br />Keine Kompromisse."
            </p>
            <p className="mt-2 text-[12px] text-brand-cream-soft/40 uppercase tracking-[0.2em]">
              — Abas & Mustafa
            </p>
          </div>
        </motion.div>

        {/* Right — Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[240px] lg:min-h-0 overflow-hidden"
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet="/images/zutaten-flatlay-lg.webp" />
            <source media="(min-width: 560px)" srcSet="/images/zutaten-flatlay-md.webp" />
            <img
              src="/images/zutaten-flatlay-sm.webp"
              alt="Zutaten für Coriander Falafel — Kichererbsen, frische Kräuter, Sesam"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </picture>
          {/* Dark edge bleed into left panel on desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-forest-deep to-transparent" />
          {/* Bottom fade on mobile */}
          <div className="lg:hidden absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-forest-deep to-transparent" />
        </motion.div>

      </div>
    </section>
  )
}
