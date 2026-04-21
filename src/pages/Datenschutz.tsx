import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Datenschutz() {
  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40 pb-24 bg-brand-cream-soft min-h-screen">
        <div className="container-prose max-w-3xl">
          <div className="eyebrow mb-5">Rechtliches</div>
          <h1 className="display-lg text-brand-ink mb-10">Datenschutzerklärung</h1>

          <div className="space-y-8 text-[15px] leading-relaxed text-brand-charcoal/90">
            <section>
              <h2 className="font-serif text-[22px] font-bold text-brand-ink mb-3">1. Verantwortlicher</h2>
              <p>
                Coriander Falafel Großhandel<br />
                Abas Kasim Mahmood &amp; Mustafa Kassim<br />
                Turiner Str. 24, 13347 Berlin<br />
                E-Mail: coriander-falafel@hotmail.com
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[22px] font-bold text-brand-ink mb-3">2. Erhebung allgemeiner Informationen</h2>
              <p>
                Beim Aufruf dieser Website werden automatisch Informationen allgemeiner Natur erfasst (Browsertyp/-version, Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage). Diese Informationen sind technisch notwendig, um die Inhalte der Website korrekt auszuliefern und werden nicht personenbezogen ausgewertet.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[22px] font-bold text-brand-ink mb-3">3. Kontaktformular</h2>
              <p>
                Wenn du uns per Kontaktformular Anfragen zukommen lässt, werden deine Angaben aus dem Anfrageformular inklusive der von dir dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
              </p>
              <p className="mt-3">
                Die Daten werden ausschließlich für die Bearbeitung deiner Anfrage verwendet und nicht an Dritte weitergegeben. Für den Versand nutzen wir den Dienst <strong>Resend</strong> (Resend Inc., USA) — die Datenübermittlung erfolgt auf Basis der EU-Standardvertragsklauseln.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[22px] font-bold text-brand-ink mb-3">4. Cookies</h2>
              <p>
                Wir verwenden technisch notwendige Cookies, um die Grundfunktionen der Website sicherzustellen. Mit deiner Einwilligung setzen wir außerdem Analyse-Cookies ein, um unsere Website zu verbessern. Du kannst deine Einwilligung jederzeit widerrufen.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[22px] font-bold text-brand-ink mb-3">5. Hosting</h2>
              <p>
                Diese Website wird bei <strong>Vercel Inc.</strong> (440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet. Beim Besuch der Website werden serverseitig Zugriffsdaten verarbeitet. Vercel ist unter dem EU-US Data Privacy Framework zertifiziert.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[22px] font-bold text-brand-ink mb-3">6. Deine Rechte</h2>
              <p>
                Du hast jederzeit das Recht auf unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu und zu weiteren Fragen zum Thema personenbezogene Daten kannst du dich jederzeit unter <a href="mailto:coriander-falafel@hotmail.com" className="text-brand-forest underline">coriander-falafel@hotmail.com</a> an uns wenden.
              </p>
              <p className="mt-3">
                Des Weiteren steht dir ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[22px] font-bold text-brand-ink mb-3">7. SSL-Verschlüsselung</h2>
              <p>
                Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du an der Adresszeile des Browsers (&quot;https://&quot;) sowie am Schloss-Symbol.
              </p>
            </section>

            <section className="pt-6 border-t border-brand-ink/10 text-[13px] text-brand-charcoal/60">
              <p>Stand: {new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
