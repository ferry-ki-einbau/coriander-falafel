import { motion } from 'framer-motion'

type Dish = {
  title: string
  caption: string
  image: { sm: string; md: string }
  size: 'tall' | 'wide' | 'square'
}

const dishes: Dish[] = [
  {
    title: 'Teller',
    caption: 'Klassisch serviert. Hummus, Tahini, Gurkensalat.',
    image: { sm: '/images/food-teller-new-sm.webp', md: '/images/food-teller-new-md.webp' },
    size: 'tall',
  },
  {
    title: 'Wraps & Brote',
    caption: 'Fladenbrot, Salate, Sauce. Der Dauerbrenner im Imbiss.',
    image: { sm: '/images/food-sandwich-new-sm.webp', md: '/images/food-sandwich-new-md.webp' },
    size: 'square',
  },
  {
    title: 'Bowls',
    caption: 'Gesund, sättigend, bunt. Lunch-Favorit für Bürogäste.',
    image: { sm: '/images/food-bowl-new-sm.webp', md: '/images/food-bowl-new-md.webp' },
    size: 'square',
  },
  {
    title: 'Finger-Food & Catering',
    caption: 'XS-Größe. Für Catering-Platten, Apéro, Buffets.',
    image: { sm: '/images/falafel-group-new-sm.webp', md: '/images/falafel-group-new-md.webp' },
    size: 'wide',
  },
  {
    title: 'Burger',
    caption: 'Veganer Patty-Ersatz. M-Größe, saftig, knusprig.',
    image: { sm: '/images/falafel-xl-new-sm.webp', md: '/images/falafel-xl-new-md.webp' },
    size: 'square',
  },
  {
    title: 'Signature',
    caption: 'XL. Fine-Dining-Präsentation auf höchstem Niveau.',
    image: { sm: '/images/falafel-inside-new-sm.webp', md: '/images/falafel-inside-new-md.webp' },
    size: 'tall',
  },
]

export default function Anwendungen() {
  return (
    <section id="anwendungen" className="section-pad relative bg-brand-cream texture-paper">
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <div className="eyebrow mb-5">Was ihr damit macht</div>
          <h2 className="display-lg text-brand-ink mb-6">
            Eine Zutat.<br />
            <span className="italic text-brand-forest">Hundert Gerichte.</span>
          </h2>
          <p className="text-[18px] text-brand-charcoal/85 max-w-[54ch] leading-relaxed">
            Unsere Falafel sind die Basis — euer Konzept bestimmt den Rest. Vom Streetfood-Wrap bis zur Fine-Dining-Platte.
            <strong className="font-medium text-brand-ink"> Werdet kreativ mit uns.</strong>
          </p>
        </motion.div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden grid grid-cols-1 gap-3 auto-rows-[260px]">
          {dishes.map((d, i) => (
            <motion.figure
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-sm bg-brand-ink"
            >
              <picture>
                <source media="(min-width: 768px)" srcSet={d.image.md} />
                <img src={d.image.sm} alt={d.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[800ms] ease-out" loading="lazy" decoding="async" />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-brand-cream-soft">
                <div className="font-serif text-[18px] font-semibold leading-tight mb-1">{d.title}</div>
                <div className="text-[12px] text-brand-cream-soft/80 leading-relaxed">{d.caption}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Desktop: horizontal film strip */}
        <div className="hidden md:block -mx-[clamp(20px,5vw,64px)]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex overflow-x-auto gap-4 no-scrollbar px-[clamp(20px,5vw,64px)] pb-2"
          >
            {dishes.map((d, i) => {
              const h = d.size === 'tall' ? 'h-[520px]' : d.size === 'wide' ? 'h-[360px]' : 'h-[440px]'
              const w = d.size === 'wide' ? 'w-[560px] lg:w-[640px]' : 'w-[340px] lg:w-[380px]'
              return (
                <motion.figure
                  key={d.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: 'easeOut' }}
                  className={`group relative overflow-hidden rounded-sm bg-brand-ink flex-shrink-0 ${w} ${h}`}
                >
                  <picture>
                    <source media="(min-width: 768px)" srcSet={d.image.md} />
                    <img src={d.image.sm} alt={d.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[800ms] ease-out" loading="lazy" decoding="async" />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/15 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 text-brand-cream-soft">
                    <div className="font-serif text-[22px] font-semibold leading-tight mb-1">{d.title}</div>
                    <div className="text-[13px] text-brand-cream-soft/80 leading-relaxed max-w-[28ch]">{d.caption}</div>
                  </figcaption>
                </motion.figure>
              )
            })}
            {/* Trailing spacer so last card isn't glued to edge */}
            <div className="flex-shrink-0 w-[clamp(20px,5vw,64px)]" />
          </motion.div>
          <p className="mt-4 text-right pr-[clamp(20px,5vw,64px)] text-[11px] text-brand-charcoal/40 uppercase tracking-[0.2em]">
            → scrollen
          </p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-script text-3xl md:text-4xl text-brand-forest text-center mt-14 md:mt-20"
        >
          Werdet kreativ mit uns.
        </motion.p>
      </div>
    </section>
  )
}
