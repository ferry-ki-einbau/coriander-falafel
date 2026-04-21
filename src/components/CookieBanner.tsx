import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'cf-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted')
    } catch {}
    setVisible(false)
  }

  function decline() {
    try {
      localStorage.setItem(STORAGE_KEY, 'declined')
    } catch {}
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6"
          role="dialog"
          aria-label="Cookie-Einstellungen"
        >
          <div className="container-prose">
            <div className="bg-brand-ink text-brand-cream-soft rounded-sm p-5 md:p-6 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)] flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8">
              <div className="flex-1 text-[13.5px] md:text-[14px] leading-relaxed">
                <strong className="font-semibold text-brand-sand">Cookies.</strong>{' '}
                Wir nutzen technisch notwendige Cookies und — mit deiner Zustimmung — Analyse-Cookies, um unsere Website zu verbessern.{' '}
                <a href="/datenschutz" className="underline underline-offset-2 hover:text-brand-sand">Mehr erfahren</a>.
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={decline}
                  className="px-5 py-2.5 text-[13px] font-semibold border border-brand-cream-soft/25 text-brand-cream-soft rounded-full hover:border-brand-cream-soft transition-colors"
                >
                  Ablehnen
                </button>
                <button
                  onClick={accept}
                  className="px-6 py-2.5 text-[13px] font-semibold bg-brand-rust text-brand-cream-soft rounded-full hover:bg-brand-rust-dark transition-colors"
                >
                  Akzeptieren
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
