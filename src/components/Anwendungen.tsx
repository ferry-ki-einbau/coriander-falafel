import { motion } from 'framer-motion'

type Dish = {
  title: string
  caption: string
  image: { sm: string; md: string }
  span?: string
}

const dishes: Dish[] = [
  {
    title: 'Teller',
    caption: 'Klassisch serviert. Hummus, Tahini, Gurkensalat.',
    image: { sm: '/images/food-teller-new-sm.webp', md: '/images/food-teller-new-md.webp' },
  },
  {
    title: 'Wraps & Brote',
    caption: 'Fladenbrot, Salate, Sauce. Der Dauerbrenner im Imbiss.',
    image: { sm: '/images/food-sandwich-new-sm.webp', md: '/images/food-sandwich-new-md.webp' },
  },
  {
    title: 'Bowls',
    caption: 'Gesund, sättigend, bunt. Lunch-Favorit für Bürogäste.',
    image: { sm: '/images/food-bowl-new-sm.webp', md: '/images/food-bowl-new-md.webp' },
  },
  {
    title: 'Finger-Food & Catering',
    caption: 'XS-Größe. Für Catering-Platten, Apéro, Buffets.',
    image: { sm: '/images/falafel-group-new-sm.webp', md: '/images/falafel-group-new-md.webp' },
    span: 'md:col-span-2',
  },
  {
    title: 'Burger',
    caption: 'Veganer Patty-Ersatz. M-Größe, saftig, knusprig.',
    image: { sm: '/images/falafel-xl-new-sm.webp', md: '/images/falafel-xl-new-md.webp' },
  },
  {
    title: 'Signature',
    caption: 'XL. Fine-Dining-Präsentation auf höchstem Niveau.',
    image: { sm: '/images/falafel-inside-new-sm.webp', md: '/images/falafel-inside-new-md.webp' },
    span: 'md:col-span-2',
  },
]

function Card({ d, i }: { d: Dish; i: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: i * 0.06, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-sm bg-brand-ink h-[175px] sm:h-[260px] md:h-[360px] ${d.span ?? ''}`}
    >
      <picture>
        <source media="(min-width: 768px)" srcSet={d.image.md} />
        <img
          src={d.image.sm}
          alt={d.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
          decoding="async"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/20 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-6 text-brand-cream-soft">
        <div className="font-serif text-[18px] md:text-[22px] font-semibold leading-tight mb-1">
          {d.title}
        </div>
        <div className="text-[12px] md:text-[13px] text-brand-cream-soft/80 leading-relaxed max-w-[36ch]">
          {d.caption}
        </div>
      </figcaption>
    </motion.figure>
  )
}

export default function Anwendungen() {
  return (
    <section id="anwendungen" className="section-pad relative bg-brand-cream texture-paper">
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-8 md:mb-20"
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

        {/* Grid — mobile: 1-col, tablet: 2-col, desktop: 3-col bento */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {dishes.map((d, i) => (
            <Card key={d.title} d={d} i={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-script text-3xl md:text-4xl text-brand-forest text-center mt-8 md:mt-20"
        >
          Werdet kreativ mit uns.
        </motion.p>
      </div>
    </section>
  )
}
