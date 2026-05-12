import SeoPageLayout from '../components/SeoPageLayout'

export default function FalafelMadeInGermany() {
  return (
    <SeoPageLayout
      eyebrow="Falafel Made in Germany · Hergestellt in Berlin"
      headline={<>Falafel <span className="italic text-brand-sand">Made in Germany</span> — produziert in Berlin.</>}
      intro="Unsere Falafel werden zu 100% in Berlin hergestellt — Made in Germany. Kurze Produktionswege, frische Zutaten, deutsche Qualitätsstandards. Für Gastronomen, die wissen möchten woher ihr Produkt kommt."
      sections={[
        {
          title: 'Warum "Made in Germany" bei Falafel wichtig ist',
          text: 'Viele Tiefkühl-Falafel auf dem deutschen Markt kommen aus dem Ausland — oft aus Ländern mit weniger strengen Lebensmittelstandards. Als Berliner Hersteller unterliegen wir deutschen und europäischen Lebensmittelgesetzen. Das bedeutet: strenge Hygienestandards, lückenlose Rückverfolgbarkeit und ehrliche Zutatendeklaration.',
        },
        {
          title: 'Produktion in Berlin — Qualität die man schmeckt',
          text: 'Unser Produktionsstandort in Berlin (Turiner Str. 24, 13347 Berlin) ist der Ausgangspunkt für alle unsere Produkte. Wir kaufen frische Zutaten vom regionalen Markt, verarbeiten sie täglich und frieren die fertige Ware direkt ein. Keine langen Transportwege vor der Produktion — das schmeckt man.',
        },
        {
          title: 'Deutschlandweite Lieferung vom deutschen Hersteller',
          text: 'Als deutscher Falafel-Hersteller liefern wir unsere Ware deutschlandweit. Gekühlter Expressversand, 3–4 Tage Lieferzeit, 50 Stück pro Beutel tiefgefroren. Für Großabnehmer sind individuelle Liefervereinbarungen möglich — sprecht uns direkt an.',
        },
        {
          title: 'Transparenz als Versprechen',
          text: 'Wir haben nichts zu verbergen — deshalb darf ihr jederzeit in unsere Produktion kommen. Kein Showroom, keine Präsentation, nur ehrliche Einblicke wie wir täglich arbeiten. Das ist unser Versprechen: Made in Germany bedeutet bei uns nicht nur ein Herkunftslabel. Es ist eine Arbeitsweise.',
        },
      ]}
      benefits={[
        'Produktion in Berlin, Deutschland',
        'Deutsche Lebensmittelstandards',
        'Lückenlose Rückverfolgbarkeit',
        'Frische Zutaten, täglich verarbeitet',
        'Kein Import-Fertigprodukt',
        'Betriebsbesichtigung jederzeit möglich',
        'Deutschlandweiter Versand 3–4 Tage',
        'Proben kostenlos',
      ]}
      ctaText="Anfrage an den deutschen Hersteller"
    />
  )
}
