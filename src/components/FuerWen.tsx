import { motion } from 'framer-motion'
import { UtensilsCrossed, ChefHat, Building2, Truck, Coffee, Users, Sparkles, Store } from 'lucide-react'

const kunden = [
  { icon: Store, label: 'Imbiss & Food-Trucks', sub: 'Zeit sparen bei gleichbleibender Qualität.' },
  { icon: UtensilsCrossed, label: 'Restaurants', sub: 'Premium-Falafel ohne eigene Produktion.' },
  { icon: ChefHat, label: 'Gastronomen', sub: 'Konstante Qualität, skalierbare Mengen.' },
  { icon: Truck, label: 'Großhändler', sub: 'Regelmäßige Lieferung, feste Konditionen.' },
  { icon: Users, label: 'Caterer', sub: 'Für Events, Hochzeiten und Großveranstaltungen.' },
  { icon: Building2, label: 'Hotels & Kantinen', sub: 'Buffet-tauglich, vegetarisch-freundlich.' },
  { icon: Coffee, label: 'Betriebsgastronomie', sub: 'Mitarbeiter-Verpflegung auf Top-Niveau.' },
  { icon: Sparkles, label: 'Feinschmecker', sub: 'Auch für deine Küche zuhause verfügbar.' },
]

export default function FuerWen() {
  return (
    <section className="section-pad relative bg-brand-cream-soft">
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <div className="eyebrow mb-5">Für wen wir produzieren</div>
          <h2 className="display-lg text-brand-ink">
            Falafel ist für jeden da.<br />
            <span className="italic text-brand-forest">In allen Größen &amp; Formen.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {kunden.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative bg-brand-cream border border-brand-ink/5 rounded-sm p-6 hover:bg-brand-forest hover:border-brand-forest transition-all duration-300"
            >
              <k.icon
                size={28}
                strokeWidth={1.5}
                className="text-brand-forest mb-5 group-hover:text-brand-sand transition-colors"
              />
              <div className="font-serif text-[20px] font-semibold text-brand-ink mb-1.5 group-hover:text-brand-cream-soft transition-colors">
                {k.label}
              </div>
              <div className="text-[13.5px] leading-relaxed text-brand-charcoal/70 group-hover:text-brand-cream-soft/80 transition-colors">
                {k.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
