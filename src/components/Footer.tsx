import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-brand-forest-deep text-brand-cream-soft/85 pt-20 md:pt-24 pb-10">
      <div className="container-prose">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 md:gap-12 pb-14 border-b border-brand-cream-soft/10">
          {/* Brand */}
          <div>
            <div className="w-16 h-16 rounded-full overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.35)] mb-5">
              <img
                src="/images/logo-crop-sm.webp"
                alt="Coriander Falafel"
                width={64}
                height={64}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="font-serif text-[20px] text-brand-cream-soft leading-snug mb-4 max-w-[28ch]">
              Coriander Falafel.<br />
              <span className="italic text-brand-sand">Dein Falafel-Großhandel aus Berlin.</span>
            </p>
            <p className="text-[13.5px] text-brand-cream-soft/60 leading-relaxed max-w-[38ch]">
              Vegan · Glutenfrei · Halal · Handmade. Seit 2007 — für Gastronomen, die keine Kompromisse machen.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="eyebrow text-brand-sand mb-4">Navigation</div>
            <ul className="space-y-2.5 text-[14px]">
              <li><a href="#story" className="hover:text-brand-sand transition-colors">Unsere Geschichte</a></li>
              <li><a href="#produkte" className="hover:text-brand-sand transition-colors">Produkte</a></li>
              <li><a href="#anwendungen" className="hover:text-brand-sand transition-colors">Anwendungen</a></li>
              <li><a href="#kontakt" className="hover:text-brand-sand transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <div className="eyebrow text-brand-sand mb-4">Kontakt</div>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a href="tel:+4917624831232" className="flex items-start gap-2 hover:text-brand-sand transition-colors">
                  <Phone size={14} strokeWidth={1.8} className="flex-shrink-0 mt-1" />
                  <span>0176 24 83 12 32<br /><span className="text-[12px] text-brand-cream-soft/55">Abas Kasim Mahmood</span></span>
                </a>
              </li>
              <li>
                <a href="tel:+4917871199918" className="flex items-start gap-2 hover:text-brand-sand transition-colors">
                  <Phone size={14} strokeWidth={1.8} className="flex-shrink-0 mt-1" />
                  <span>0178 711 99 18<br /><span className="text-[12px] text-brand-cream-soft/55">Mustafa Kassim</span></span>
                </a>
              </li>
              <li>
                <a href="mailto:coriander-falafel@hotmail.com" className="flex items-start gap-2 hover:text-brand-sand transition-colors break-all">
                  <Mail size={14} strokeWidth={1.8} className="flex-shrink-0 mt-1" />
                  <span>coriander-falafel@hotmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <MapPin size={14} strokeWidth={1.8} className="flex-shrink-0 mt-1" />
                  <span>Turiner Str. 24<br />13347 Berlin</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <div className="eyebrow text-brand-sand mb-4">Rechtliches</div>
            <ul className="space-y-2.5 text-[14px]">
              <li><a href="/impressum" className="hover:text-brand-sand transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-brand-sand transition-colors">Datenschutz</a></li>
            </ul>
            <div className="mt-6 pt-4 border-t border-brand-cream-soft/10 text-[12px] text-brand-cream-soft/55 leading-relaxed">
              USt-IdNr.: DE363376749<br />
              St.-Nr.: 23/375/00149
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row gap-3 md:gap-0 md:items-center md:justify-between text-[12px] text-brand-cream-soft/50">
          <div>© {year} Coriander Falafel Großhandel · Alle Rechte vorbehalten.</div>
          <div>
            Website von{' '}
            <a
              href="https://ferryemirer.de"
              target="_blank"
              rel="noopener"
              className="underline underline-offset-2 hover:text-brand-sand transition-colors"
            >
              Ferry Emirer — Webdesign Berlin &amp; Stuttgart
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
