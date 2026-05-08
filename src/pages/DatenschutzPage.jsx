import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function DatenschutzPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: '120px' }}>
          <div className="container" style={{ maxWidth: '720px' }}>
            <p className="section-kicker">Rechtliches</p>
            <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Datenschutzerklärung</h1>

            <div className="impressum-content">
              <h2>1. Verantwortlicher</h2>
              <p>
                Ehso's Burger<br />
                Bornheide 47b<br />
                22549 Hamburg
              </p>

              <h2>2. Erhobene Daten</h2>
              <p>
                Diese Website ist eine rein statische Informationsseite. Es werden <strong>keine
                personenbezogenen Daten</strong> durch uns aktiv erhoben, gespeichert oder
                verarbeitet. Es gibt keine Kontaktformulare, keine Nutzerkonten und kein
                Tracking durch uns.
              </p>

              <h2>3. Hosting (Netlify)</h2>
              <p>
                Diese Website wird über Netlify, Inc. (512 2nd Street, Suite 500, San Francisco,
                CA 94107, USA) gehostet. Beim Aufruf der Seite werden durch den Hostinganbieter
                technisch bedingt Server-Logfiles gespeichert (z. B. IP-Adresse, Browsertyp,
                Datum und Uhrzeit des Zugriffs). Dies erfolgt auf Basis von Art. 6 Abs. 1 lit. f
                DSGVO (berechtigtes Interesse an der Sicherheit und dem Betrieb der Website).
              </p>
              <p>
                Weitere Informationen zum Datenschutz bei Netlify finden Sie unter:{' '}
                <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">
                  netlify.com/privacy
                </a>
              </p>

              <h2>4. Bestellungen</h2>
              <p>
                Bestellungen werden über den externen Dienst Lieferando (Takeaway.com Group N.V.)
                abgewickelt. Für die dort erhobenen Daten gilt die Datenschutzerklärung von
                Lieferando. Wir haben keinen Zugriff auf die bei Lieferando gespeicherten
                personenbezogenen Daten.
              </p>

              <h2>5. Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO),
                Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO) sowie
                das Recht auf Datenübertragbarkeit (Art. 20 DSGVO). Da wir selbst keine
                personenbezogenen Daten speichern, können diese Rechte gegenüber uns regelmäßig
                nicht geltend gemacht werden.
              </p>
              <p>
                Sie haben zudem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
                beschweren. Zuständig ist der{' '}
                <a href="https://www.datenschutz-hamburg.de" target="_blank" rel="noopener noreferrer">
                  Hamburgische Beauftragte für Datenschutz und Informationsfreiheit
                </a>.
              </p>

              <h2>6. Externe Links</h2>
              <p>
                Diese Website enthält Links zu externen Diensten (Lieferando, Google Maps).
                Für den Datenschutz dieser Drittanbieter sind wir nicht verantwortlich. Beim
                Anklicken eines Links verlassen Sie unsere Website.
              </p>

              <p style={{ marginTop: '2rem', opacity: 0.5, fontSize: '0.85rem' }}>
                Stand: Mai 2026
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
