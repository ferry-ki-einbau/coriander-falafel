import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-brand-ink">
      {/* Background: Kling Hero Video */}
      <div className="absolute inset-0">
        <video
          src="/video/hero-desktop.mp4"
          poster="/images/hero-poster-lg.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="h-full w-full object-cover opacity-85"
        />
        {/* Warm dark gradient — no green, just depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-brand-ink/80" />
        {/* Warm amber radial glow at center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,180,80,0.08)_0%,_transparent_65%)]" />
      </div>

      {/* Content */}
      <div className="relative container-prose pt-20 pb-10 md:pt-20 md:pb-12 min-h-[100dvh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Logo — circle crop removes rectangular background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative w-32 md:w-40 h-32 md:h-40 mb-5 md:mb-7 rounded-full overflow-hidden ring-1 ring-brand-cream-soft/20 shadow-[0_24px_64px_rgba(0,0,0,0.55),0_4px_20px_rgba(0,0,0,0.35)] flex-shrink-0"
          >
            <img
              src="/images/logo-crop-md.webp"
              alt="Coriander Falafel Logo"
              width={224}
              height={224}
              className="w-full h-full object-cover object-center scale-[1.06]"
              loading="eager"
              decoding="sync"
            />
          </motion.div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 text-[11px] md:text-[12px] uppercase tracking-[0.32em] text-brand-sand/90 mb-6">
            <span className="h-px w-8 bg-brand-sand/50" />
            Seit 2007 · Berlin
            <span className="h-px w-8 bg-brand-sand/50" />
          </div>

          {/* Main headline */}
          <h1 className="display-xl text-brand-cream-soft mb-2">
            Mit über{' '}
            <span className="relative inline-block">
              <span className="italic text-brand-rust">19 Jahren</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C50 3 150 3 298 9"
                  stroke="currentColor"
                  className="text-brand-rust"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <h2 className="display-xl font-serif italic text-brand-cream-soft/95 mb-6 md:mb-7">
            Erfahrung.
          </h2>

          {/* Slogan */}
          <p className="font-script text-2xl md:text-3xl text-brand-sand mb-4">
            Für die Liebe zum Essen.
          </p>

          {/* Subheadline */}
          <p className="max-w-2xl text-[15px] md:text-[17px] text-brand-cream-soft/85 leading-relaxed mb-6 md:mb-8 font-light">
            <strong className="font-medium text-brand-cream-soft">Coriander Falafel</strong> — dein Falafel-Großhandel aus Berlin.
            Vegan, glutenfrei & halal. In verschiedenen Größen, nach Familienrezept —
            für Imbisse, Restaurants, Caterer und alle, die das Beste wollen.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-5">
            <a href="#kontakt" className="btn-primary group">
              Angebot anfragen
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="tel:+4917871199918" className="btn-outline group">
              <Phone size={17} />
              0178 711 9918
            </a>
          </div>

          {/* Mikro-Stats */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] md:text-[13px] text-brand-cream-soft/75 mb-5 md:mb-6">
            <span className="flex items-center gap-2">
              <Check3 /> Probebeutel gratis
            </span>
            <span className="flex items-center gap-2">
              <Check3 /> Antwort in 24 h
            </span>
            <span className="flex items-center gap-2">
              <Check3 /> Unverbindlich
            </span>
          </div>

          {/* Trust strip — mobile only, desktop has TrustBadges section right below */}
          <div className="md:hidden flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-brand-cream-soft/70 font-medium tracking-wide">
            <span className="flex items-center gap-2">
              <Dot /> Vegan
            </span>
            <span className="flex items-center gap-2">
              <Dot /> Glutenfrei
            </span>
            <span className="flex items-center gap-2">
              <Dot /> Halal
            </span>
            <span className="flex items-center gap-2">
              <Dot /> Handmade
            </span>
            <span className="flex items-center gap-2">
              <Dot /> Made in Berlin
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

function Dot() {
  return <span className="inline-block w-1 h-1 rounded-full bg-brand-rust" />
}

function Check3() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="text-brand-sand flex-shrink-0">
      <path d="M2.5 7.5l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
