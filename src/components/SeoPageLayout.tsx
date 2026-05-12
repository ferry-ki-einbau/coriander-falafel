import { ReactNode } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { ArrowRight, Phone } from 'lucide-react'

interface Props {
  eyebrow: string
  headline: ReactNode
  intro: string
  sections: { title: string; text: string }[]
  benefits: string[]
  ctaText: string
}

export default function SeoPageLayout({ eyebrow, headline, intro, sections, benefits, ctaText }: Props) {
  return (
    <div className="min-h-screen bg-brand-cream-soft">
      <Nav />

      {/* Hero */}
      <section className="relative bg-brand-forest-deep text-brand-cream-soft pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,180,80,0.08)_0%,_transparent_60%)]" />
        <div className="container-prose relative">
          <div className="eyebrow text-brand-sand/70 mb-5">{eyebrow}</div>
          <h1 className="display-lg text-brand-cream-soft mb-6 max-w-3xl">{headline}</h1>
          <p className="text-[18px] md:text-[20px] text-brand-cream-soft/80 leading-relaxed max-w-[56ch] mb-10">
            {intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/#kontakt" className="btn-primary group inline-flex">
              {ctaText}
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform ml-2" />
            </a>
            <a href="tel:+4917624831232" className="btn-outline group inline-flex">
              <Phone size={17} className="mr-2" />
              0176 24 83 12 32
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-brand-cream-soft">
        <div className="container-prose">
          <div className="grid md:grid-cols-[1fr_340px] gap-12 lg:gap-20">
            {/* Main text */}
            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="font-serif text-[26px] md:text-[30px] font-bold text-brand-ink mb-4">{s.title}</h2>
                  <p className="text-[17px] leading-[1.75] text-brand-charcoal/85">{s.text}</p>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-brand-forest text-brand-cream-soft p-6 rounded-sm">
                <div className="eyebrow text-brand-sand/80 mb-4">Auf einen Blick</div>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[14px] text-brand-cream-soft/85">
                      <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-brand-rust/30 border border-brand-rust/50 flex items-center justify-center">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                          <path d="M1.5 4.5l1.5 1.5 3.5-4" stroke="#B8412E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-cream border border-brand-ink/8 p-6 rounded-sm">
                <div className="font-serif text-[18px] font-bold text-brand-ink mb-3">Direkt anfragen</div>
                <p className="text-[14px] text-brand-charcoal/70 mb-4 leading-relaxed">
                  Antwort innerhalb weniger Stunden — von Abas & Mustafa persönlich.
                </p>
                <a href="/#kontakt" className="inline-flex items-center gap-2 bg-brand-rust text-brand-cream-soft px-5 py-3 rounded-full text-[14px] font-semibold hover:bg-brand-rust-dark transition-colors w-full justify-center">
                  Jetzt anfragen
                  <ArrowRight size={15} />
                </a>
                <a href="https://wa.me/4917624831232" target="_blank" rel="noopener" className="mt-3 inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full text-[14px] font-semibold hover:bg-[#1fba58] transition-colors w-full justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.873L.057 23.9a.5.5 0 0 0 .611.61l6.101-1.461A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.241-1.374l-.375-.217-3.892.931.966-3.813-.237-.392A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                  WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-rust py-14">
        <div className="container-prose text-center">
          <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] font-bold text-brand-cream-soft mb-4">
            Proben kostenlos. Kein Risiko.
          </h2>
          <p className="text-[17px] text-brand-cream-soft/85 mb-8 max-w-[44ch] mx-auto">
            Lass deine Zunge entscheiden — wir liefern Proben, du entscheidest.
          </p>
          <a href="/#kontakt" className="inline-flex items-center gap-2 bg-white text-brand-rust px-8 py-4 rounded-full font-bold text-[15px] hover:bg-brand-cream-soft transition-colors shadow-lg">
            Proben anfragen
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
