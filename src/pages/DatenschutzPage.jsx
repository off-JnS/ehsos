import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const STORAGE_KEY = 'ehsos_cookie_consent'

export default function DatenschutzPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const revokeConsent = () => {
    localStorage.removeItem(STORAGE_KEY)
    window.location.reload()
  }

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
                Diese Website ist eine Informationsseite. Es werden <strong>keine
                personenbezogenen Daten</strong> durch uns aktiv erhoben, gespeichert oder
                verarbeitet. Es gibt keine Kontaktformulare und keine Nutzerkonten.
                Analyse-Cookies werden nur mit deiner ausdrücklichen Einwilligung gesetzt
                (siehe Abschnitt 4).
              </p>

              <h2>3. Hosting (Hostinger)</h2>
              <p>
                Diese Website wird über Hostinger International Ltd. (61 Lordou Vironos Street,
                6023 Larnaka, Zypern) gehostet. Beim Aufruf der Seite werden durch den
                Hostinganbieter technisch bedingt Server-Logfiles gespeichert (z. B.
                IP-Adresse, Browsertyp, Datum und Uhrzeit des Zugriffs). Dies erfolgt auf
                Basis von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
                Sicherheit und dem Betrieb der Website).
              </p>
              <p>
                Weitere Informationen zum Datenschutz bei Hostinger:{' '}
                <a href="https://www.hostinger.de/datenschutzrichtlinie" target="_blank" rel="noopener noreferrer">
                  hostinger.de/datenschutzrichtlinie
                </a>
              </p>

              <h2>4. Google Analytics (nur mit Einwilligung)</h2>
              <p>
                Mit deiner Einwilligung setzen wir Google Analytics 4 ein, einen
                Webanalysedienst der Google Ireland Limited (Gordon House, Barrow Street,
                Dublin 4, Irland). Google Analytics verwendet Cookies, um die Nutzung der
                Website statistisch auszuwerten. Die dadurch erzeugten Informationen werden
                in der Regel an einen Server von Google in den USA übertragen und dort
                gespeichert. IP-Adressen werden dabei anonymisiert.
              </p>
              <p>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die Einwilligung
                ist freiwillig und kann jederzeit widerrufen werden.
              </p>
              <p>
                Wir verwenden <strong>Google Consent Mode v2</strong>: Tracking findet
                ausschließlich statt, wenn du aktiv zugestimmt hast. Ohne Zustimmung werden
                keine Tracking-Daten erhoben.
              </p>
              <p>
                Weitere Informationen:{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  policies.google.com/privacy
                </a>
              </p>
              <p>
                <strong>Einwilligung widerrufen:</strong>{' '}
                <button
                  onClick={revokeConsent}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-primary)',
                    cursor: 'pointer',
                    fontSize: 'inherit',
                    fontFamily: 'inherit',
                    padding: 0,
                    textDecoration: 'underline',
                    textUnderlineOffset: '2px',
                  }}
                >
                  Cookie-Einstellungen zurücksetzen
                </button>
              </p>

              <h2>5. Bestellungen</h2>
              <p>
                Bestellungen werden über externe Dienste (Lieferando, Wolt, Uber Eats)
                abgewickelt. Für die dort erhobenen Daten gilt die jeweilige
                Datenschutzerklärung des Anbieters. Wir haben keinen Zugriff auf die bei
                diesen Diensten gespeicherten personenbezogenen Daten.
              </p>

              <h2>6. Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO),
                Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO) sowie
                das Recht auf Datenübertragbarkeit (Art. 20 DSGVO). Sie haben zudem das Recht,
                sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig ist der{' '}
                <a href="https://www.datenschutz-hamburg.de" target="_blank" rel="noopener noreferrer">
                  Hamburgische Beauftragte für Datenschutz und Informationsfreiheit
                </a>.
              </p>

              <h2>7. Externe Links</h2>
              <p>
                Diese Website enthält Links zu externen Diensten (Lieferando, Wolt, Uber Eats,
                Google Maps). Für den Datenschutz dieser Drittanbieter sind wir nicht
                verantwortlich. Beim Anklicken eines Links verlassen Sie unsere Website.
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

