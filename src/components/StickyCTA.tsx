import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.873L.057 23.9a.5.5 0 0 0 .611.61l6.101-1.461A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.241-1.374l-.375-.217-3.892.931.966-3.813-.237-.392A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  )
}

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setVisible(y > 500 && y < max - 900)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.92 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed z-40 bottom-5 right-5 md:bottom-8 md:right-8 flex flex-col sm:flex-row items-end sm:items-center gap-2"
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/4917871199918"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fba58] text-white pl-4 pr-4 py-3 rounded-full font-semibold text-[14px] shadow-[0_12px_32px_-8px_rgba(37,211,102,0.55)] transition-all"
            aria-label="WhatsApp schreiben"
          >
            <WhatsAppIcon />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          {/* Anfragen */}
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2.5 bg-brand-rust hover:bg-brand-rust-dark text-brand-cream-soft pl-5 pr-4 py-3.5 rounded-full font-semibold text-[14.5px] shadow-[0_20px_40px_-12px_rgba(184,65,46,0.55)] transition-all group"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cream-soft opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cream-soft" />
            </span>
            Angebot anfragen
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
