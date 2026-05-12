import { useState, useEffect } from 'react'
import FlowingMenu from './FlowingMenu'
import OrderDropdown from './OrderDropdown'
import './LocationsStripe.css'

const LOCATIONS = [
  {
    id: 'osdorf',
    text: 'Osdorf',
    image: '/images/osdorf/Front Center.jpeg',
    coming: false,
    address: 'Bornheide 47b\n22549 Hamburg',
    hours: 'Mo–So: 11:00 – 22:00 Uhr',
    phone: null,
    lieferando: 'https://www.lieferando.de/speisekarte/ehsos-burger',
  },
  {
    id: 'coming-soon',
    text: 'Harburg',
    image: '/images/kommt-bald/Harburg.jpeg',
    coming: false,
    address: 'An den Höfen 1\n21217 Seevetal',
    hours: null,
    phone: null,
    lieferando: null,
  },
]

function LocationModal({ loc, onClose }) {
  const mapsAddress = loc.address ? loc.address.replace('\n', ', ') : ''
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(mapsAddress)}`

  const handleAddressClick = () => {
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer')
  }

  // Close on Escape key
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="loc-backdrop" onClick={onClose} role="presentation">
      <div
        className="loc-modal"
        role="dialog"
        aria-modal="true"
        aria-label={loc.text}
        onClick={e => e.stopPropagation()}
      >
        <div className="loc-modal-accent" />

        {loc.image && (
          <div className="loc-modal-img" style={{ backgroundImage: `url("${loc.image}")` }} aria-hidden="true" />
        )}

        <button className="loc-modal-close" aria-label="Schließen" onClick={onClose}>
          ✕
        </button>

        <p className="loc-modal-kicker">Standort</p>
        <h2 className="loc-modal-title">{loc.text}</h2>

        {loc.coming ? (
          <div className="loc-modal-coming">
            <span className="loc-modal-coming-icon">🚀</span>
            <p>Wir expandieren! Unser nächster Standort ist bereits in Planung.</p>
            <p className="loc-modal-coming-sub">Bleib gespannt – bald geht's los.</p>
          </div>
        ) : (
          <div className="loc-modal-body">
            <button
              className="loc-modal-row loc-modal-row--clickable"
              onClick={handleAddressClick}
              aria-label="Adresse in Karten-App öffnen"
            >
              <span className="loc-modal-row-icon">📍</span>
              <div>
                <p className="loc-modal-label">Adresse</p>
                <p className="loc-modal-value">
                  {loc.address.split('\n').map((line, i, arr) => (
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  ))}
                </p>
              </div>
              <span className="loc-modal-row-cta">In Karten öffnen →</span>
            </button>

            {loc.hours && (
              <div className="loc-modal-row">
                <span className="loc-modal-row-icon">🕐</span>
                <div>
                  <p className="loc-modal-label">Öffnungszeiten</p>
                  <p className="loc-modal-value">{loc.hours}</p>
                </div>
              </div>
            )}

            {loc.phone && (
              <div className="loc-modal-row">
                <span className="loc-modal-row-icon">📞</span>
                <div>
                  <p className="loc-modal-label">Telefon</p>
                  <a href={`tel:${loc.phone}`} className="loc-modal-value loc-modal-tel">
                    {loc.phone}
                  </a>
                </div>
              </div>
            )}

            {loc.lieferando && (
              <OrderDropdown
                label="Jetzt bestellen"
                buttonClass="loc-modal-cta"
                wrapperClass="loc-modal-order-picker"
                openUp
              />
            )}
          </div>
        )}

      </div>
    </div>
  )
}

export default function LocationsStripe() {
  const [activeIdx, setActiveIdx] = useState(null)
  const loc = activeIdx !== null ? LOCATIONS[activeIdx] : null

  return (
    <>
      <section className="locations-stripe-section" aria-label="Standorte">
        <div className="locations-stripe-heading">
          <p className="section-kicker" data-animate="fade-up">Locations</p>
          <h2 className="section-title" data-animate="fade-up">Bald zwei mal in Hamburg</h2>
        </div>
        <div style={{ height: '300px', position: 'relative' }}>
          <FlowingMenu
            items={LOCATIONS}
            speed={18}
            bgColor="#111"
            textColor="#f8f8f8"
            marqueeBgColor="#f97316"
            marqueeTextColor="#fff"
            borderColor="rgba(255,255,255,0.08)"
            onItemClick={setActiveIdx}
          />
        </div>
      </section>

      {loc && <LocationModal loc={loc} onClose={() => setActiveIdx(null)} />}
    </>
  )
}
