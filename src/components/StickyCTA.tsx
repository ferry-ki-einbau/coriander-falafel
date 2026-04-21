import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      // Show after 70% of hero scrolled, hide near bottom (Kontakt ist da)
      setVisible(y > 500 && y < max - 900)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#kontakt"
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.92 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed z-40 bottom-5 right-5 md:bottom-8 md:right-8 inline-flex items-center gap-2.5 bg-brand-rust hover:bg-brand-rust-dark text-brand-cream-soft pl-5 pr-4 py-3.5 rounded-full font-semibold text-[14.5px] shadow-[0_20px_40px_-12px_rgba(184,65,46,0.55)] hover:shadow-[0_24px_48px_-12px_rgba(184,65,46,0.7)] transition-all group"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cream-soft opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cream-soft" />
          </span>
          Angebot anfragen
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
