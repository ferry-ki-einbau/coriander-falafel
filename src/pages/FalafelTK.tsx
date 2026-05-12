import SeoPageLayout from '../components/SeoPageLayout'

export default function FalafelTK() {
  return (
    <SeoPageLayout
      eyebrow="Falafel TK · Tiefkühlware · Gastronomie"
      headline={<>Falafel <span className="italic text-brand-sand">TK</span> für die Gastronomie.</>}
      intro="Unsere Tiefkühl-Falafel (TK) sind frisch produziert und sofort eingefroren — kein Qualitätsverlust, volle Flexibilität. Ideal für Imbisse, Restaurants und Caterer mit hohem Durchsatz."
      sections={[
        {
          title: 'Was macht gute Falafel TK aus?',
          text: 'Schlechte Tiefkühl-Falafel erkennt man daran, dass sie nach dem Aufwärmen trocken, bröselig oder geschmacklos sind. Das passiert, wenn minderwertige Zutaten oder zu viele Zusatzstoffe verwendet werden. Unsere Falafel TK werden frisch aus Kichererbsen, Kräutern und Gewürzen hergestellt und direkt tiefgefroren — dadurch bleibt die Qualität erhalten. Außen knusprig, innen saftig und grün.',
        },
        {
          title: 'Haltbarkeit und Lagerung',
          text: 'Unsere Falafel TK sind bei Tiefkühlung 6+ Monate haltbar. Pro Beutel liefern wir 50 Stück — ideal für die Gastronomie. Die Zubereitung ist denkbar einfach: auftauen lassen, dann in die Fritteuse, den Ofen, den Airfryer oder die Pfanne. In wenigen Minuten fertig.',
        },
        {
          title: 'Falafel TK ohne Konservierungsstoffe',
          text: 'Unsere Tiefkühl-Falafel kommen ohne Konservierungsstoffe, ohne künstliche Aromen und ohne Stabilisatoren aus. Die natürliche Tiefkühlung ersetzt jede Chemie. Das ist auch der Grund, warum wir TK-Ware produzieren: nicht wegen der Bequemlichkeit, sondern weil Tiefkühlung die ehrlichste Art der Konservierung ist.',
        },
        {
          title: 'Verschiedene Größen für jeden Einsatz',
          text: 'Wir liefern Falafel TK in verschiedenen Größen — von der kleinen Finger-Food-Variante bis zur großen Showpiece-Falafel für Premium-Teller. Jede Größe ist für einen bestimmten Einsatz optimiert. Ihr findet garantiert die richtige Größe für euer Konzept — oder wir produzieren individuell nach euren Vorgaben.',
        },
      ]}
      benefits={[
        'Frisch produziert, sofort tiefgefroren',
        '6+ Monate Haltbarkeit bei TK',
        '50 Stück pro Beutel',
        'Ohne Konservierungsstoffe',
        'Verschiedene Größen verfügbar',
        'Schnelle Zubereitung (Fritteuse/Ofen)',
        'Gekühlter Expressversand 3–4 Tage',
        'Proben kostenlos erhältlich',
      ]}
      ctaText="Falafel TK anfragen"
    />
  )
}
