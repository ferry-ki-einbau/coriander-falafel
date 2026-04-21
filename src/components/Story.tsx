import { motion } from 'framer-motion'

export default function Story() {
  return (
    <section id="story" className="section-pad relative bg-brand-cream-soft texture-paper">
      <div className="container-prose">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[3/2] lg:aspect-[4/5] rounded-[2px] overflow-hidden bg-brand-forest">
              <picture>
                <source media="(min-width: 768px)" srcSet="/images/gruender-hands-lg.webp" />
                <img
                  src="/images/gruender-hands-md.webp"
                  alt="Hände formen handgemachte Falafel aus frischer Kichererbsen-Kräuter-Masse"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              {/* Deep frame accent */}
              <div className="absolute inset-0 ring-1 ring-inset ring-brand-ink/15" />
            </div>

            {/* Decorative stat-tile */}
            <div className="absolute -bottom-8 -right-6 md:-right-10 bg-brand-rust text-brand-cream-soft px-7 py-6 rounded-sm shadow-[0_20px_40px_-20px_rgba(184,65,46,0.5)]">
              <div className="text-[11px] uppercase tracking-[0.22em] text-brand-cream-soft/75 mb-1">
                Erfahrung
              </div>
              <div className="font-serif text-5xl md:text-6xl font-bold leading-none">
                18<span className="text-[28px] font-normal align-top ml-0.5">+</span>
              </div>
              <div className="text-[12px] uppercase tracking-[0.18em] mt-1 text-brand-cream-soft/80">
                Jahre
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="eyebrow mb-5">Unsere Geschichte</div>
            <h2 className="display-lg text-brand-ink mb-8">
              18 Jahre.<br />
              Ein Familien&shy;rezept.<br />
              <span className="italic text-brand-forest">Berlin.</span>
            </h2>

            <div className="space-y-5 text-[17px] leading-[1.75] text-brand-charcoal/90 max-w-[52ch]">
              <p>
                Angefangen haben wir 2007 in Berlin. Mit einem Rezept, das seit Generationen
                in unserer Familie weitergegeben wird. Mit der Überzeugung, dass Falafel mehr
                verdient als ein beigelegtes Fertigprodukt aus dem Karton.
              </p>
              <p>
                Heute beliefern wir Imbisse, Restaurants, Caterer und Hotels in ganz Deutschland.
                Aber eins hat sich nie geändert: <strong className="font-medium text-brand-ink">Wir produzieren jeden Tag so, als würden wir für unsere eigene Familie kochen.</strong>
              </p>
              <p>
                Feinste Kichererbsen, frische Kräuter, weißer Sesam, Gewürze nach Familienrezept.
                Keine Chemie. Keine Konservierungsstoffe. Keine Kompromisse.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="font-script text-3xl text-brand-forest">— Abas &amp; Mustafa</div>
              <div className="h-px flex-1 bg-brand-ink/10 max-w-[120px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
