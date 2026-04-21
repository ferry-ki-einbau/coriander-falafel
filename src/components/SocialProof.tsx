import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'

type Stat = { target: number; suffix?: string; label: string; sub: string }

const stats: Stat[] = [
  { target: 18, suffix: '+', label: 'Jahre Erfahrung', sub: 'Seit 2007 in Berlin' },
  { target: 100, suffix: '+', label: 'Gastro-Partner', sub: 'In ganz Deutschland' },
  { target: 4, label: 'Größen', sub: 'XS · S · M · XL' },
  { target: 12, suffix: '+', label: 'Monate haltbar', sub: 'Tiefgefroren geliefert' },
]

function StatTile({ s, i }: { s: Stat; i: number }) {
  const [start, setStart] = useState(false)
  const value = useCountUp(s.target, { start, duration: 1400 })
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setStart(true)}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="border-t border-brand-cream-soft/15 pt-6 md:pt-8"
    >
      <div className="font-serif text-[52px] md:text-[72px] leading-none font-bold text-brand-cream-soft mb-3 tabular-nums">
        {value}
        {s.suffix && <span className="text-brand-sand">{s.suffix}</span>}
      </div>
      <div className="text-[14px] uppercase tracking-[0.15em] text-brand-sand font-semibold mb-1">
        {s.label}
      </div>
      <div className="text-[13px] text-brand-cream-soft/70 leading-relaxed">
        {s.sub}
      </div>
    </motion.div>
  )
}

export default function SocialProof() {
  return (
    <section className="section-pad relative bg-brand-forest text-brand-cream-soft overflow-hidden">
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-8 md:mb-20"
        >
          <div className="eyebrow text-brand-sand mb-5">Diese Küchen vertrauen uns</div>
          <h2 className="display-lg text-brand-cream-soft">
            Über 50 Gastro-Partner.{' '}
            <span className="italic text-brand-sand">Eine Qualität.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-6">
          {stats.map((s, i) => (
            <StatTile key={s.label} s={s} i={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 md:mt-24 pt-8 md:pt-12 border-t border-brand-cream-soft/10"
        >
          <div className="text-[11px] uppercase tracking-[0.22em] text-brand-cream-soft/50 mb-5 text-center">
            Beliefern wir deutschlandweit
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[15px] md:text-[17px] font-serif text-brand-cream-soft/80 mb-10 md:mb-14">
            {['Berlin', 'Hamburg', 'München', 'Frankfurt', 'Köln', 'Stuttgart', 'Düsseldorf', 'Bremen'].map((city) => (
              <span key={city} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand-sand inline-block" />
                {city}
              </span>
            ))}
          </div>

          <div className="text-center">
            <p className="font-script text-2xl md:text-3xl text-brand-sand mb-3">
              &ldquo;Wir produzieren jeden Tag so,
            </p>
            <p className="font-serif text-[22px] md:text-[28px] italic text-brand-cream-soft leading-relaxed max-w-[48ch] mx-auto">
              als würden wir für unsere eigene Familie kochen.&rdquo;
            </p>
            <div className="mt-6 text-[13px] uppercase tracking-[0.2em] text-brand-cream-soft/60">
              — Abas &amp; Mustafa · Gründer
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
