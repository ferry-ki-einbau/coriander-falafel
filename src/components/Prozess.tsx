import { motion } from 'framer-motion'
import { MessageSquare, Package, Truck, ArrowRight } from 'lucide-react'

const steps = [
  {
    nr: '01',
    icon: MessageSquare,
    titel: 'Anfrage',
    sub: 'Heute',
    text: 'Formular ausfüllen oder anrufen. Wir melden uns innerhalb eines Werktags mit allen Informationen — unverbindlich und ohne Bullshit.',
  },
  {
    nr: '02',
    icon: Package,
    titel: 'Probebeutel',
    sub: 'In 3 Tagen',
    text: 'Auf Wunsch schicken wir dir einen Probebeutel zum Testen. Fritteuse, Ofen, Heißluft — du entscheidest, ob unsere Falafel zu euch passen.',
  },
  {
    nr: '03',
    icon: Truck,
    titel: 'Dauerlieferung',
    sub: 'Flexibel & zuverlässig',
    text: 'Passt alles? Dann läuft. Feste Preise, flexible Mengen, pünktliche Lieferung. Mit Ansprechpartner direkt am Telefon — keine Warteschleife.',
  },
]

export default function Prozess() {
  return (
    <section id="prozess" className="section-pad relative bg-brand-cream-soft texture-paper overflow-hidden">
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-8 md:mb-16"
        >
          <div className="eyebrow mb-5">So arbeiten wir zusammen</div>
          <h2 className="display-lg text-brand-ink mb-6">
            Drei Schritte.<br />
            <span className="italic text-brand-forest">Kein Vertragstheater.</span>
          </h2>
          <p className="text-[18px] text-brand-charcoal/85 max-w-[56ch] leading-relaxed">
            Wir sind Produzenten — keine Vertriebler. Deshalb ist der Weg zu uns so kurz wie möglich.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[68px] left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-brand-forest/0 via-brand-forest/25 to-brand-forest/0" />

          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.nr}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
                className="relative bg-brand-cream border border-brand-ink/5 p-5 md:p-8 rounded-sm hover:border-brand-forest/20 transition-colors"
              >
                {/* Number */}
                <div className="absolute -top-4 left-7 md:left-8 bg-brand-forest text-brand-cream-soft font-serif text-[13px] font-bold tracking-[0.15em] px-3 py-1 rounded-sm">
                  {s.nr}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-brand-forest/8 border border-brand-forest/15 flex items-center justify-center mb-5 mt-3">
                  <Icon size={22} strokeWidth={1.6} className="text-brand-forest" />
                </div>

                <div className="text-[11px] uppercase tracking-[0.22em] text-brand-rust font-semibold mb-2">
                  {s.sub}
                </div>
                <h3 className="font-serif text-[26px] md:text-[28px] font-bold text-brand-ink mb-3 leading-tight">
                  {s.titel}
                </h3>
                <p className="text-[15px] text-brand-charcoal/85 leading-relaxed">
                  {s.text}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Risk-Reversal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 md:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-brand-forest-deep text-brand-cream-soft p-6 md:p-10 rounded-sm"
        >
          <div className="max-w-2xl">
            <div className="font-script text-[22px] md:text-[26px] text-brand-sand mb-2">
              Kein Risiko.
            </div>
            <h3 className="font-serif text-[22px] md:text-[28px] font-bold text-brand-cream-soft leading-tight">
              Probebeutel kostenlos. Keine Mindestabnahme für den Test.
            </h3>
          </div>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-brand-rust hover:bg-brand-rust-dark text-brand-cream-soft px-7 py-3.5 rounded-full font-semibold whitespace-nowrap transition-colors"
          >
            Jetzt anfragen
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
