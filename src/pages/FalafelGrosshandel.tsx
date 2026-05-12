import SeoPageLayout from '../components/SeoPageLayout'

export default function FalafelGrosshandel() {
  return (
    <SeoPageLayout
      eyebrow="Falafel Großhandel · Große Mengen · Direktbezug"
      headline={<>Falafel in <span className="italic text-brand-sand">großen Mengen</span> kaufen — direkt vom Hersteller.</>}
      intro="Falafel in großen Mengen kaufen, direkt beim Berliner Hersteller — ohne Zwischenhändler, zu fairen Preisen. Für Imbisse, Restaurants, Caterer, Großhändler und alle, die regelmäßig große Mengen benötigen."
      sections={[
        {
          title: 'Falafel direkt vom Hersteller kaufen',
          text: 'Wer Falafel in großen Mengen kaufen möchte, sollte direkt beim Hersteller anfragen — nicht beim Zwischenhändler. Als Produzent können wir flexible Mengen, individuelle Größen und direkte Preisverhandlung anbieten. Unser Grundsatz: langfristige Partnerschaft statt kurzfristiger Transaktionen. Wer bei uns bestellt, bekommt einen festen Ansprechpartner — keine Hotline.',
        },
        {
          title: 'Mindestbestellmenge und Konditionen',
          text: 'Wir liefern standardmäßig in Beuteln à 50 Stück. Mindestbestellmenge und Lieferkonditionen besprechen wir individuell — je nach Abnahmemenge, Häufigkeit und Region. Für Großabnehmer und Großmärkte gibt es Sonderkonditionen. Sprecht uns einfach direkt an — wir finden eine Lösung.',
        },
        {
          title: 'Verschiedene Falafel-Größen für verschiedene Konzepte',
          text: 'Beim Kauf großer Mengen Falafel ist die richtige Größenwahl entscheidend. Wir bieten verschiedene Größen an: von der kleinen Finger-Food-Variante für Catering bis zur großen Donutform für den Imbiss. Für individuelle Anforderungen produzieren wir auch Sondergrößen und -formen — ab einer gewissen Abnahmemenge auch nach Private-Label.',
        },
        {
          title: 'Zuverlässige Dauerlieferung',
          text: 'Gastronomen, die Falafel in großen Mengen kaufen, brauchen Verlässlichkeit. Wir liefern pünktlich, zu festen Preisen und mit direktem Ansprechpartner. Kein Callcenter, keine Warteschleife — wenn ihr anruft, nehmen Abas oder Mustafa ab. Das ist unser Unterschied zu Großhändlern mit anonymer Struktur.',
        },
      ]}
      benefits={[
        'Direktkauf beim Hersteller',
        'Keine Zwischenhändler',
        'Flexible Mengen & Konditionen',
        '50 Stück pro Beutel, tiefgefroren',
        'Verschiedene Größen verfügbar',
        'Private-Label auf Anfrage',
        'Fester Ansprechpartner persönlich',
        'Gekühlter Expressversand 3–4 Tage',
      ]}
      ctaText="Großmengen-Anfrage stellen"
    />
  )
}
