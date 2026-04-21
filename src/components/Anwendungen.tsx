import { motion } from 'framer-motion'

type Dish = {
  title: string
  caption: string
  image: { sm: string; md: string }
  gridArea: string
  mobileHero?: boolean
}

const dishes: Dish[] = [
  {
    title: 'Dönerbrot',
    caption: 'Der Klassiker. Im Brot mit Kraut, Tomate, Tahini.',
    image: { sm: '/images/food-doenerbrot-new-sm.webp', md: '/images/food-doenerbrot-new-md.webp' },
    gridArea: 'doen',
    mobileHero: true,
  },
  {
    title: 'Pidebrot',
    caption: 'Gefülltes Fladenbrot. Sättigend, frisch, beliebt.',
    image: { sm: '/images/food-pidebrot-new-sm.webp', md: '/images/food-pidebrot-new-md.webp' },
    gridArea: 'pide',
  },
  {
    title: 'Falafel pur',
    caption: 'Golden, knusprig, sesam-gestreut. Der erste Eindruck zählt.',
    image: { sm: '/images/falafel-arranged-new-sm.webp', md: '/images/falafel-arranged-new-md.webp' },
    gridArea: 'falpur',
  },
  {
    title: 'Bowls',
    caption: 'Gesund, sättigend, bunt. Lunch-Favorit für Bürogäste.',
    image: { sm: '/images/food-bowl-new-sm.webp', md: '/images/food-bowl-new-md.webp' },
    gridArea: 'bowls',
  },
  {
    title: 'Finger-Food & Catering',
    caption: 'XS-Größe. Für Catering-Platten, Apéro, Buffets.',
    image: { sm: '/images/falafel-group-new-sm.webp', md: '/images/falafel-group-new-md.webp' },
    gridArea: 'ffood',
  },
]

function Card({ d, i, desktopArea }: { d: Dish; i: number; desktopArea?: boolean }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: i * 0.06, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-sm bg-brand-ink h-full min-h-[175px]${d.mobileHero ? ' col-span-2' : ''}`}
      style={desktopArea ? { gridArea: d.gridArea } : undefined}
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
        <div className="font-serif text-[16px] md:text-[20px] font-semibold leading-tight mb-1">
          {d.title}
        </div>
        <div className="text-[11px] md:text-[13px] text-brand-cream-soft/80 leading-relaxed max-w-[36ch]">
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
          className="max-w-3xl mb-8 md:mb-14"
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

        {/* Mobile: Dönerbrot full-width hero, rest 2-col */}
        <div className="grid grid-cols-2 gap-2 md:hidden" style={{ gridAutoRows: '200px' }}>
          {dishes.map((d, i) => (
            <Card key={d.title} d={d} i={i} />
          ))}
        </div>

        {/* Desktop: Dönerbrot als 2-wide Hero links oben */}
        <div
          className="hidden md:grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: '320px 260px',
            gridTemplateAreas: `
              "doen doen pide"
              "falpur bowls ffood"
            `,
          }}
        >
          {dishes.map((d, i) => (
            <Card key={d.title} d={d} i={i} desktopArea />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-script text-3xl md:text-4xl text-brand-forest text-center mt-8 md:mt-14"
        >
          Werdet kreativ mit uns.
        </motion.p>
      </div>
    </section>
  )
}
