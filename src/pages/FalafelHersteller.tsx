import SeoPageLayout from '../components/SeoPageLayout'

export default function FalafelHersteller() {
  return (
    <SeoPageLayout
      eyebrow="Falafel Hersteller · Berlin · Seit 2007"
      headline={<>Ihr <span className="italic text-brand-sand">Falafel-Hersteller</span> aus Berlin.</>}
      intro="Coriander Falafel ist ein handwerklicher Falafel-Hersteller aus Berlin. Wir produzieren seit 2007 nach einem Familienrezept, das seit 1960 weitergegeben wird — für Gastronomen, die keine Kompromisse machen."
      sections={[
        {
          title: 'Was einen echten Falafel-Hersteller ausmacht',
          text: 'Viele Produkte auf dem Markt kommen aus industrieller Massenproduktion — eingefrorene Fertigware ohne Charakter. Als handwerklicher Falafel-Hersteller gehen wir einen anderen Weg: Jede Falafel wird von Hand geformt, aus frischen Kichererbsen, frischen Kräutern und unseren Familienrezept-Gewürzen. Kein Pulver, keine Aromen, keine Stabilisatoren.',
        },
        {
          title: 'Berliner Produktion — deutschlandweite Lieferung',
          text: 'Unser Produktionsstandort liegt in Berlin (Turiner Str. 24, 13347 Berlin). Von hier aus beliefern wir Imbisse, Restaurants, Caterer, Hotels und Großhändler in ganz Deutschland. Wir produzieren frisch, frieren tiefgefroren ein und liefern meist innerhalb von 3–4 Tagen per gekühltem Expressversand.',
        },
        {
          title: 'Direkt vom Hersteller — keine Zwischenhändler',
          text: 'Als Direkthersteller arbeiten wir ohne Zwischenhändler. Das bedeutet für euch: faire Preise, kurze Kommunikationswege und Flexibilität. Individuelle Größen, eigene Rezepturen oder Private-Label-Produktion? Wir produzieren was ihr braucht — ab einer gewissen Abnahmemenge auch nach euren Vorstellungen.',
        },
        {
          title: '19 Jahre Erfahrung in der Falafel-Herstellung',
          text: 'Seit 2007 stellen wir Falafel für die Gastronomie her. In diesen Jahren haben wir über 100 Gastro-Partner aufgebaut — vom Berliner Imbiss bis zum bundesweiten Caterer. Unser Rezept hat sich nicht verändert. Unsere Erfahrung schon.',
        },
      ]}
      benefits={[
        'Handgemachte Produktion in Berlin',
        'Familienrezept seit 1960',
        'Vegan, glutenfrei, halal',
        'Keine Konservierungsstoffe',
        'Tiefgefroren, 6+ Monate haltbar',
        'Deutschlandweite Lieferung',
        'Private-Label auf Anfrage',
        'Proben kostenlos',
      ]}
      ctaText="Jetzt beim Hersteller anfragen"
    />
  )
}
