import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '../lib/cn'

const links = [
  { href: '#story', label: 'Geschichte' },
  { href: '#produkte', label: 'Produkte' },
  { href: '#prozess', label: 'Prozess' },
  { href: '#anwendungen', label: 'Anwendungen' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-brand-cream-soft/[0.97] backdrop-blur-xl shadow-[0_1px_0_rgba(26,18,9,0.07),0_6px_28px_rgba(26,18,9,0.06)]'
          : 'bg-transparent'
      )}
    >
      <div className="container-prose flex items-center justify-between h-[76px]">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Coriander Falafel Startseite"
        >
          <div className="h-11 w-11 rounded-full overflow-hidden flex-shrink-0 shadow-[0_4px_16px_rgba(0,0,0,0.25)]">
            <img
              src="/images/logo-crop-sm.webp"
              alt="Coriander Falafel"
              width={44}
              height={44}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="sync"
            />
          </div>
          <div className="hidden sm:block">
            <div
              className={cn(
                'font-serif text-[17px] font-bold leading-none tracking-tight transition-colors duration-500',
                scrolled ? 'text-brand-forest' : 'text-brand-cream-soft'
              )}
            >
              Coriander Falafel
            </div>
            <div
              className={cn(
                'text-[10px] uppercase tracking-[0.22em] mt-1 transition-colors duration-500',
                scrolled ? 'text-brand-charcoal/60' : 'text-brand-cream-soft/60'
              )}
            >
              Großhandel Berlin
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                'relative text-[14px] font-medium transition-colors duration-300 group py-1',
                scrolled
                  ? 'text-brand-ink/75 hover:text-brand-ink'
                  : 'text-brand-cream-soft/80 hover:text-brand-cream-soft'
              )}
            >
              {l.label}
              <span
                className={cn(
                  'absolute -bottom-0.5 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300',
                  scrolled ? 'bg-brand-forest' : 'bg-brand-sand'
                )}
              />
            </a>
          ))}
          <a
            href="#kontakt"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-rust hover:bg-brand-rust-dark text-brand-cream-soft rounded-full text-[13.5px] font-semibold transition-all duration-200 hover:shadow-[0_6px_20px_rgba(184,65,46,0.45)] active:scale-[0.97]"
          >
            Anfragen
            <ArrowRight size={13} />
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={cn(
            'md:hidden p-2 -mr-2 transition-colors duration-300',
            scrolled ? 'text-brand-ink' : 'text-brand-cream-soft'
          )}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                className="block"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                className="block"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 top-[76px] bg-brand-ink/40 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="relative z-50 bg-brand-cream-soft border-t border-brand-ink/5 shadow-[0_20px_50px_rgba(26,18,9,0.14)]"
            >
              <nav className="container-prose py-6 flex flex-col">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.045, duration: 0.22 }}
                    className="py-4 text-[18px] font-serif font-semibold text-brand-ink border-b border-brand-ink/6 last:border-0 flex items-center justify-between group"
                  >
                    {l.label}
                    <ArrowRight
                      size={16}
                      className="text-brand-forest/35 group-hover:text-brand-rust transition-colors"
                    />
                  </motion.a>
                ))}
                <motion.a
                  href="#kontakt"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.28 }}
                  className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-4 bg-brand-rust text-brand-cream-soft rounded-full text-[15px] font-semibold"
                >
                  Jetzt Angebot anfragen
                  <ArrowRight size={17} />
                </motion.a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
