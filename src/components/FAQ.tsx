import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Wie werden die Falafel geliefert?',
    a: 'Frisch zubereitet und tiefgefroren, oder als Rohmasse (Teilfertigware) lieferbar. Haltbar über 6 Monate bei Tiefkühlung. Lieferung deutschlandweit — Mindestbestellmenge und Lieferfenster besprechen wir individuell.',
  },
  {
    q: 'Welche Größen gibt es?',
    a: 'Wir haben bewährte Bestseller-Größen für Finger-Food, Wraps, Bowls und Premium-Teller. Individuelle Größen, Formen und Rezepturen produzieren wir ab einer gewissen Abnahmemenge gerne nach deiner Vorstellung — sprich uns direkt an.',
  },
  {
    q: 'Sind eure Falafel wirklich vegan und halal?',
    a: 'Ja. Unsere Falafel sind 100 % pflanzlich, glutenfrei und durch die rein pflanzliche Herstellung auch halal geeignet. Keine tierischen Produkte, keine Kreuzkontamination.',
  },
  {
    q: 'Wie bereitet man die Falafel zu?',
    a: 'Aus dem Tiefkühlschrank auftauen lassen, dann in die Fritteuse, den Ofen, den Airfryer oder die Pfanne — außen knusprig, innen saftig und grün. Wir beraten gerne bei der Zubereitung und senden dir auch eine Anleitung für deine Systemgastronomie.',
  },
  {
    q: 'Könnt ihr Sonderwünsche produzieren?',
    a: 'Ja, gerne. Eigene Rezepturen, individuelle Formen, andere Gewürze oder Private-Label — wir fahren ab einer gewissen Abnahmemenge Sonderproduktionen. Sprech uns direkt an.',
  },
  {
    q: 'Wie läuft die erste Bestellung ab?',
    a: 'Unverbindliche Anfrage über unser Formular oder WhatsApp — wir rufen zurück, klären Mengen, Größen und Konditionen. Auf Wunsch senden wir Proben. Gekühlter Expressversand meist in 3–4 Tagen.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-pad relative bg-brand-cream-soft">
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-8 md:mb-20"
        >
          <div className="eyebrow mb-5">Häufige Fragen</div>
          <h2 className="display-lg text-brand-ink">
            Was Gastronomen{' '}
            <span className="italic text-brand-forest">vor der Bestellung fragen.</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="border-b border-brand-ink/10"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-serif text-[18px] md:text-[22px] font-semibold text-brand-ink group-hover:text-brand-forest transition-colors leading-snug">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-9 h-9 rounded-full border border-brand-ink/15 flex items-center justify-center text-brand-forest group-hover:border-brand-forest group-hover:bg-brand-forest group-hover:text-brand-cream-soft transition-colors"
                  >
                    <Plus size={16} strokeWidth={2} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div id={`faq-answer-${i}`} className="pb-5 md:pb-8 pr-12 text-[15px] md:text-[16px] leading-relaxed text-brand-charcoal/85">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
