import { motion } from 'framer-motion'

export default function VideoReveal() {
  return (
    <section className="relative bg-brand-forest-deep overflow-hidden section-pad">
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="eyebrow text-brand-sand/80 mb-4">Produziert in Berlin</div>
          <h2 className="font-serif text-[clamp(1.8rem,4.5vw,3.75rem)] font-bold text-brand-cream-soft leading-tight">
            So entsteht dein Falafel.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-sm overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.8)] aspect-video bg-brand-ink"
        >
          <video
            src="/video/hero-desktop.mp4"
            poster="/images/hero-poster-lg.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-forest-deep/60 via-transparent to-brand-forest-deep/20 pointer-events-none" />
          {/* Corner label */}
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-brand-ink/70 backdrop-blur-sm text-brand-cream-soft/80 text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm">
            Berlin · Seit 2007
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-center text-[13px] text-brand-cream-soft/50 leading-relaxed"
        >
          Tiefgefroren in wenigen Minuten goldbraun — in der Fritteuse, im Ofen oder in der Heißluft.
        </motion.p>
      </div>
    </section>
  )
}
