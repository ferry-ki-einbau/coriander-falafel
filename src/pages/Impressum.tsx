import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Impressum() {
  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40 pb-24 bg-brand-cream-soft min-h-screen">
        <div className="container-prose max-w-3xl">
          <div className="eyebrow mb-5">Rechtliches</div>
          <h1 className="display-lg text-brand-ink mb-10">Impressum</h1>

          <div className="prose-custom space-y-8 text-[15px] leading-relaxed text-brand-charcoal/90">
            <section>
              <h2 className="font-serif text-[22px] font-bold text-brand-ink mb-3">Angaben gemäß § 5 TMG</h2>
              <p>
                Coriander Falafel Großhandel<br />
                Turiner Str. 24<br />
                13347 Berlin<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[22px] font-bold text-brand-ink mb-3">Vertreten durch</h2>
              <p>
                Abas Kasim Mahmood<br />
                Mustafa Kassim
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[22px] font-bold text-brand-ink mb-3">Kontakt</h2>
              <p>
                Telefon: <a href="tel:+4917624831232" className="text-brand-forest underline">0176 24 83 12 32</a><br />
                E-Mail: <a href="mailto:info@coriander-falafel.de" className="text-brand-forest underline">info@coriander-falafel.de</a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[22px] font-bold text-brand-ink mb-3">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                <strong>DE363376749</strong>
              </p>
              <p className="mt-3">
                Steuernummer: <strong>23/375/00149</strong>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[22px] font-bold text-brand-ink mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                Abas Kasim Mahmood &amp; Mustafa Kassim<br />
                Turiner Str. 24, 13347 Berlin
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[22px] font-bold text-brand-ink mb-3">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener"
                  className="text-brand-forest underline break-all"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-3">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[22px] font-bold text-brand-ink mb-3">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[22px] font-bold text-brand-ink mb-3">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

            <section className="pt-6 border-t border-brand-ink/10">
              <p className="text-[13px] text-brand-charcoal/60">
                Website-Design &amp; Entwicklung:{' '}
                <a href="https://ferryemirer.de" target="_blank" rel="noopener" className="text-brand-forest underline">
                  Ferry Emirer — Webdesign Berlin &amp; Stuttgart
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
