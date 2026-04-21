import { Leaf, Wheat, Award, Hand, MapPin, Heart } from 'lucide-react'

const badges = [
  { icon: Leaf, label: 'Vegan', sub: '100% pflanzlich' },
  { icon: Wheat, label: 'Glutenfrei', sub: 'Ohne Weizen' },
  { icon: Award, label: 'Halal', sub: 'Rein pflanzlich' },
  { icon: Hand, label: 'Handmade', sub: 'Keine Industrie-Massenware' },
  { icon: MapPin, label: 'Made in Berlin', sub: 'Seit 2007' },
  { icon: Heart, label: 'Made with Love', sub: 'Familienrezept' },
]

export default function TrustBadges() {
  const doubled = [...badges, ...badges]

  return (
    <section className="relative bg-brand-cream-soft border-y border-brand-ink/[0.07] py-12 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-cream-soft to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-cream-soft to-transparent z-10 pointer-events-none" />

      {/* Marquee track */}
      <div className="flex w-max animate-marquee">
        {doubled.map((b, i) => {
          const Icon = b.icon
          return (
            <div
              key={i}
              className="flex items-center gap-3 px-8 md:px-12 group"
            >
              <div className="w-10 h-10 rounded-full bg-brand-forest/7 border border-brand-forest/15 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-forest group-hover:border-brand-forest transition-all duration-300">
                <Icon
                  size={18}
                  strokeWidth={1.7}
                  className="text-brand-forest group-hover:text-brand-cream-soft transition-colors duration-300"
                />
              </div>
              <div>
                <div className="font-serif text-[16px] font-semibold text-brand-ink leading-tight whitespace-nowrap">
                  {b.label}
                </div>
                <div className="text-[11.5px] text-brand-charcoal/55 leading-none mt-0.5 whitespace-nowrap">
                  {b.sub}
                </div>
              </div>
              {/* Separator dot */}
              <span className="ml-8 md:ml-12 w-1 h-1 rounded-full bg-brand-ink/12 flex-shrink-0" />
            </div>
          )
        })}
      </div>
    </section>
  )
}
