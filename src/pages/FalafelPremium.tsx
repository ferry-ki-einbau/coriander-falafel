import SeoPageLayout from '../components/SeoPageLayout'

export default function FalafelPremium() {
  return (
    <SeoPageLayout
      eyebrow="Premium Falafel · Handgemacht · Familienrezept"
      headline={<>Premium Falafel — <span className="italic text-brand-sand">außen knusprig, innen grün.</span></>}
      intro="Was Premium bedeutet, zeigt sich beim ersten Bissen: außen golden-knusprig, innen saftig-grün mit sichtbaren frischen Kräutern. Kein Industrieprodukt — echte Handarbeit nach einem Rezept mit Seele."
      sections={[
        {
          title: 'Was Premium-Falafel von Massenware unterscheidet',
          text: 'Premium-Falafel beginnen mit der Zutat: echte Kichererbsen, eingeweicht über Nacht — niemals aus der Dose. Frische Petersilie, frischer Koriander, frischer Knoblauch werden täglich verarbeitet. Unsere Familienrezept-Gewürze sind eine über Generationen verfeinerte Mischung, die kein Lebensmitteltechnologe im Labor nachbauen kann. Das schmeckt man.',
        },
        {
          title: 'Grünes Inneres — das Qualitätsmerkmal',
          text: 'Eine echte Premium-Falafel erkennst du am Inneren: es muss frisch-grün sein. Das grüne Innere entsteht durch den hohen Kräuteranteil und zeigt, dass die Falafel aus frischen Zutaten und nicht aus Pulvermischungen hergestellt wurde. Bei uns ist das garantiert — jede Charge, jeder Tag.',
        },
        {
          title: 'Für Konzepte, die aus der Masse herausstechen wollen',
          text: 'Premium-Falafel sind die richtige Wahl für Restaurants, die keine Kompromisse machen, für Caterer die auf Qualität positioniert sind, und für Imbisse die wissen: ein gutes Produkt spricht sich rum. Unsere Gastro-Partner bestellen nicht bei uns, weil wir billig sind — sondern weil ihre Gäste den Unterschied schmecken.',
        },
        {
          title: 'Premium in verschiedenen Größen',
          text: 'Unsere Premium-Falafel sind in verschiedenen Größen erhältlich — von der eleganten Donutform (L) über die klassische runde Falafel (N) bis zur imposanten XL-Variante für Premium-Teller und Fine-Dining. Alle handgemacht, alle nach gleichem Rezept, alle mit dem gleichen Anspruch an Qualität.',
        },
      ]}
      benefits={[
        'Frische Kichererbsen — nie aus der Dose',
        'Frische Kräuter täglich verarbeitet',
        'Grünes Inneres — Qualitätsmerkmal',
        'Kein Pulver, keine Aromen',
        'Handgeformt nach Familienrezept',
        'Vegan, glutenfrei, halal',
        '20+ Jahre Erfahrung',
        'Proben kostenlos',
      ]}
      ctaText="Premium-Falafel bestellen"
    />
  )
}
