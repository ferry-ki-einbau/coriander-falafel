import { motion } from 'framer-motion'
import { ArrowRight, Package } from 'lucide-react'

type Size = {
  name: string
  tagline: string
  durchmesser: string
  hoehe: string
  gewicht: string
  useCase: string
  image: string
  bestseller?: boolean
}

const sizes: Size[] = [
  {
    name: 'XS',
    tagline: 'Finger-Food',
    durchmesser: '~ 3 cm',
    hoehe: '~ 2,5 cm',
    gewicht: '~ 20 g',
    useCase: 'Snack · Catering-Platten · Bowls',
    image: '/images/produkt-xs-sm.webp',
  },
  {
    name: 'S',
    tagline: 'Standard',
    durchmesser: '5 cm',
    hoehe: '4 cm',
    gewicht: '50 g',
    useCase: 'Wraps · Burger · Sandwiches',
    image: '/images/produkt-s-sm.webp',
    bestseller: true,
  },
  {
    name: 'M',
    tagline: 'Mid-Size',
    durchmesser: '~ 6 cm',
    hoehe: '~ 5 cm',
    gewicht: '~ 75 g',
    useCase: 'Teller · Bowls · Gastro-Standard',
    image: '/images/produkt-m-sm.webp',
  },
  {
    name: 'XL',
    tagline: 'Showpiece',
    durchmesser: '~ 8 cm',
    hoehe: '~ 7 cm',
    gewicht: '~ 130 g',
    useCase: 'Premium-Teller · Fine-Dining',
    image: '/images/produkt-xl-md.webp',
  },
]

export default function Produkte() {
  return (
    <section id="produkte" className="section-pad relative bg-brand-cream texture-paper">
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-10 md:mb-16"
        >
          <div className="eyebrow mb-5">Unsere Produkte</div>
          <h2 className="display-lg text-brand-ink mb-6">
            Vier Größen.<br />
            <span className="italic text-brand-forest">Pro Beutel: 50 Stück.</span>
          </h2>
          <p className="text-[18px] text-brand-charcoal/85 max-w-[54ch] leading-relaxed">
            Tiefgefroren angeliefert, haltbar über 12 Monate. In der Fritteuse, im Ofen oder in der Heißluft fertig in wenigen Minuten.
            <strong className="font-medium text-brand-ink"> Individuelle Größen und Formen produzieren wir auf Anfrage.</strong>
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {sizes.map((size, i) => (
            <motion.article
              key={size.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              className={`group relative bg-brand-cream-soft rounded-sm border transition-all duration-300 ${
                size.bestseller
                  ? 'border-brand-rust/40 shadow-[0_12px_40px_-12px_rgba(184,65,46,0.35)] ring-1 ring-brand-rust/20'
                  : 'border-brand-ink/5 hover:border-brand-forest/20'
              }`}
            >
              {/* Bestseller Badge */}
              {size.bestseller && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10 bg-brand-rust text-brand-cream-soft text-[10.5px] font-bold uppercase tracking-[0.18em] px-3.5 py-1 rounded-sm shadow-md">
                  Bestseller
                </div>
              )}

              {/* Image */}
              <div className="relative aspect-square bg-gradient-to-br from-brand-cream to-brand-sand/60 overflow-hidden rounded-t-sm">
                <img
                  src={size.image}
                  alt={`Falafel Größe ${size.name}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                {/* Size badge */}
                <div className="absolute top-4 left-4 bg-brand-forest text-brand-cream-soft font-serif text-2xl md:text-3xl font-bold px-4 py-1.5 rounded-sm">
                  {size.name}
                </div>
              </div>

              {/* Content */}
              <div className="p-3.5 sm:p-5 md:p-5 lg:p-6">
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-brand-rust font-semibold mb-2">
                  {size.tagline}
                </div>

                <dl className="space-y-1.5 mb-3 text-[12px] sm:text-[13px]">
                  <div className="flex justify-between border-b border-brand-ink/5 pb-1.5">
                    <dt className="text-brand-charcoal/60">
                      <span className="sm:hidden">Ø</span>
                      <span className="hidden sm:inline">Durchmesser</span>
                    </dt>
                    <dd className="font-medium text-brand-ink whitespace-nowrap ml-2">{size.durchmesser}</dd>
                  </div>
                  <div className="flex justify-between border-b border-brand-ink/5 pb-1.5">
                    <dt className="text-brand-charcoal/60">Höhe</dt>
                    <dd className="font-medium text-brand-ink whitespace-nowrap ml-2">{size.hoehe}</dd>
                  </div>
                  <div className="flex justify-between pb-1.5">
                    <dt className="text-brand-charcoal/60">Gew.</dt>
                    <dd className="font-medium text-brand-ink whitespace-nowrap ml-2">{size.gewicht}</dd>
                  </div>
                </dl>

                <div className="text-[11px] sm:text-[13px] text-brand-charcoal/80 italic mb-3 leading-relaxed">
                  {size.useCase}
                </div>

                <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] font-medium text-brand-forest border-t border-brand-ink/5 pt-2.5">
                  <Package size={13} strokeWidth={1.8} className="flex-shrink-0" />
                  <span className="sm:hidden whitespace-nowrap">50 Stück</span>
                  <span className="hidden sm:inline whitespace-nowrap">50 Stück / Beutel</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Custom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 md:mt-20 bg-brand-forest text-brand-cream-soft p-8 md:p-12 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="eyebrow text-brand-sand/80 mb-3">Flexibel produziert</div>
            <h3 className="display-md text-brand-cream-soft mb-3">
              Dein Wunsch-Produkt ist nicht dabei?
            </h3>
            <p className="text-[16px] text-brand-cream-soft/85 leading-relaxed">
              Wir produzieren individuelle Größen, Formen und Rezepturen nach deinen Anforderungen — von der Probeproduktion bis zur Großmenge.
            </p>
          </div>
          <a href="#kontakt" className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-rust text-brand-cream-soft px-8 py-4 rounded-full font-semibold whitespace-nowrap hover:bg-brand-rust-dark transition-colors">
            Beratung anfragen
            <ArrowRight size={17} />
          </a>
        </motion.div>

        <p className="mt-6 text-center text-[12px] text-brand-charcoal/50">
          Maße sind Richtwerte — verbindliche Spezifikationen gerne auf Anfrage.
        </p>
      </div>
    </section>
  )
}
