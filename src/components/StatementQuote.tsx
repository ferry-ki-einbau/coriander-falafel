import { motion } from 'framer-motion'

const lines = [
  { text: 'Handgemacht.', size: 'text-[clamp(2.2rem,7vw,6.5rem)]', color: 'text-brand-cream-soft' },
  { text: 'Tiefgefroren geliefert.', size: 'text-[clamp(1.5rem,4.8vw,4.5rem)]', color: 'text-brand-sand/70' },
  { text: 'In Minuten fertig.', size: 'text-[clamp(2.2rem,7vw,6.5rem)]', color: 'text-brand-rust' },
]

export default function StatementQuote() {
  return (
    <section className="relative bg-brand-ink overflow-hidden py-20 md:py-32">
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(31,74,44,0.15)_0%,_transparent_70%)]" />

      <div className="relative container-prose">
        <div className="text-center">
          {lines.map((line, i) => (
            <motion.div
              key={line.text}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] }}
              className={`block font-serif italic leading-[1.05] tracking-[-0.02em] ${line.size} ${line.color}`}
            >
              {line.text}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.7, ease: 'easeOut' }}
          className="mt-14 md:mt-20 h-px bg-gradient-to-r from-transparent via-brand-sand/25 to-transparent origin-left"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-7 text-center text-[11px] uppercase tracking-[0.35em] text-brand-cream-soft/35"
        >
          Berlin · Seit 2007 · Familienrezept
        </motion.p>
      </div>
    </section>
  )
}
