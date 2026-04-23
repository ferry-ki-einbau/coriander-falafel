import { useState } from 'react'
import { motion } from 'framer-motion'
import { UtensilsCrossed, ChefHat, Building2, Truck, Coffee, Users, Sparkles, Store } from 'lucide-react'

const kunden = [
  { icon: Store, label: 'Imbiss & Food-Trucks', sub: 'Zeit sparen bei gleichbleibender Qualität.' },
  { icon: UtensilsCrossed, label: 'Restaurants', sub: 'Premium-Falafel ohne eigene Produktion.' },
  { icon: ChefHat, label: 'Gastronomen', sub: 'Konstante Qualität, skalierbare Mengen.' },
  { icon: Truck, label: 'Großhändler', sub: 'Regelmäßige Lieferung, feste Konditionen.' },
  { icon: Users, label: 'Caterer groß & klein', sub: 'Für Events, Hochzeiten und Großveranstaltungen.' },
  { icon: Building2, label: 'Hotels & Kantinen', sub: 'Buffet-tauglich, vegetarisch-freundlich.' },
  { icon: Coffee, label: 'Betriebs\u00ADgastronomie', sub: 'Mitarbeiter-Verpflegung auf Top-Niveau.' },
  { icon: Sparkles, label: 'Feinschmecker & Kreative', sub: 'Für Konzepte, die aus der Masse herausstechen.' },
]

export default function FuerWen() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="section-pad relative bg-brand-forest-deep">
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-8 md:mb-20"
        >
          <div className="eyebrow text-brand-sand mb-5">Für wen wir produzieren</div>
          <h2 className="display-lg text-brand-cream-soft">
            Falafel ist für jeden da.<br />
            <span className="italic text-brand-sand">In allen Größen &amp; Formen.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {kunden.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative bg-brand-cream-soft/5 border border-brand-cream-soft/10 rounded-sm p-4 md:p-6 hover:bg-brand-cream-soft/10 hover:border-brand-sand/30 transition-all duration-300 cursor-pointer sm:cursor-default"
              onClick={() => setActive(active === i ? null : i)}
            >
              <k.icon
                size={24}
                strokeWidth={1.5}
                className="text-brand-sand mb-3 md:mb-5 group-hover:text-brand-rust transition-colors"
              />
              <div className="font-serif text-[14px] md:text-[20px] font-semibold text-brand-cream-soft mb-1">
                {k.label}
              </div>
              <div className={`text-[12px] md:text-[13.5px] leading-relaxed text-brand-cream-soft/60 transition-all duration-200 ${active === i ? 'block' : 'hidden'} sm:block`}>
                {k.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
