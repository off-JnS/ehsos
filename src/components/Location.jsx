import { useState } from 'react'

const ADDRESS = 'Bornheide 47b, 22549 Hamburg'
const MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`
const APPLE_MAPS_URL = `maps://?q=${encodeURIComponent(ADDRESS)}`

const HOURS = [
  { day: 'Montag',     open: '15:00', close: '00:00' },
  { day: 'Dienstag',   open: '15:00', close: '00:00' },
  { day: 'Mittwoch',   open: '15:00', close: '00:00' },
  { day: 'Donnerstag', open: '15:00', close: '00:00' },
  { day: 'Freitag',    open: '15:00', close: '02:00' },
  { day: 'Samstag',    open: '13:00', close: '02:00' },
  { day: 'Sonntag',    open: '13:00', close: '00:00' },
]

/**
 * Returns the index (Mon=0 … Sun=6) of the day whose shift is currently
 * active or most recently finished.
 *
 * A closing time of "00:00" means midnight on the dot (no late-night
 * spillover). Any other time that is <= "06:00" is treated as a
 * late-night close that crosses into the next calendar day, so if the
 * current wall-clock time is still before that closing time we keep the
 * highlight on the previous (business) day.
 */
function activeDay() {
  const now  = new Date()
  const jsDay = now.getDay()            // 0 = Sun
  const calIdx = (jsDay + 6) % 7        // Mon=0 … Sun=6

  const hhmm = (str) => {
    const [h, m] = str.split(':').map(Number)
    return h * 60 + m
  }

  const nowMin = now.getHours() * 60 + now.getMinutes()

  // Check if the PREVIOUS day's shift is still running past midnight.
  // "Still running" = close time is between 00:01 and 06:00 (late-night)
  // AND current time hasn't reached that close time yet.
  const prevIdx = (calIdx + 6) % 7
  const prevClose = hhmm(HOURS[prevIdx].close)

  if (prevClose > 0 && prevClose <= 6 * 60 && nowMin < prevClose) {
    return prevIdx
  }

  return calIdx
}

function HoursCard() {
  const today = activeDay()

  return (
    <div className="info-card hours-card" data-animate="fade-up" data-delay="1">
      <div className="info-card-header">
        <span className="info-card-emoji" aria-hidden="true">🕐</span>
        <div>
          <h3>Öffnungszeiten</h3>
        </div>
      </div>
      <ul className="hours-list">
        {HOURS.map(({ day, open, close }, i) => {
          const isToday = i === today

          return (
            <li key={day} className={`hours-row${isToday ? ' hours-row--today' : ''}`}>
              <span className="hours-day">{day}</span>
              <span className="hours-time">{open} – {close}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function Location() {
  const [showMapPicker, setShowMapPicker] = useState(false)
  const isAppleDevice = /iPhone|iPad|iPod/.test(navigator.userAgent)

  const handleAddressClick = () => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768
    if (isMobile) {
      setShowMapPicker(true)
    } else {
      window.open(MAPS_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section className="section location-section" id="location">
      <div className="container">
        <p className="section-kicker" data-animate="fade-up">Standort & Kontakt</p>
        <h2 className="section-title" data-animate="fade-up">Hier findest du uns</h2>
        <p className="section-subtitle" data-animate="fade-up">
          Komm vorbei, ruf an oder bestell direkt nach Hause.
        </p>

        <div className="info-grid">

          {/* ── Left column: address + contact ── */}
          <div className="info-col">

            <button
              className="info-card info-card--clickable"
              onClick={handleAddressClick}
              aria-label="Adresse in Karten-App öffnen"
              data-animate="fade-up"
              data-delay="0"
            >
              <div className="info-card-row">
                <span className="info-card-emoji" aria-hidden="true">📍</span>
                <div className="info-card-body">
                  <h3>Adresse</h3>
                  <p>Bornheide 47b<br />22549 Hamburg</p>
                </div>
                <span className="info-card-cta">In Karten öffnen →</span>
              </div>
            </button>

            <a
              href="tel:+4904076487272"
              className="info-card info-card--clickable"
              data-animate="fade-up"
              data-delay="1"
            >
              <div className="info-card-row">
                <span className="info-card-emoji" aria-hidden="true">📞</span>
                <div className="info-card-body">
                  <h3>Telefon</h3>
                  <p>040 764 87 272</p>
                </div>
                <span className="info-card-cta">Anrufen →</span>
              </div>
            </a>

            <a
              href="https://www.lieferando.de/speisekarte/ehsos-burger"
              target="_blank"
              rel="noopener noreferrer"
              className="info-card info-card--clickable"
              data-animate="fade-up"
              data-delay="2"
            >
              <div className="info-card-row">
                <div className="info-card-img-wrap">
                  <img
                    src="/menu-images/sonstiges/lieferando-logo.png"
                    alt="Lieferando"
                    className="info-lieferando-logo"
                  />
                </div>
                <div className="info-card-body">
                  <h3>Lieferando</h3>
                  <p>Jetzt online bestellen & liefern lassen</p>
                </div>
                <span className="info-card-cta">Bestellen →</span>
              </div>
            </a>

            <a
              href="https://wolt.com/de/deu/hamburg/restaurant/ehsos-burger?srsltid=AfmBOooYAJS45pBlr2k7eZnUhGHUQj7Jo8B5rjO1BPIHzFSGqd32cwD3"
              target="_blank"
              rel="noopener noreferrer"
              className="info-card info-card--clickable"
              data-animate="fade-up"
              data-delay="3"
            >
              <div className="info-card-row">
                <div className="info-card-img-wrap">
                  <img
                    src="/menu-images/sonstiges/wolt-logo.png"
                    alt="Wolt"
                    className="info-lieferando-logo"
                  />
                </div>
                <div className="info-card-body">
                  <h3>Wolt</h3>
                  <p>Jetzt online bestellen & liefern lassen</p>
                </div>
                <span className="info-card-cta">Bestellen →</span>
              </div>
            </a>

            <a
              href="https://www.ubereats.com/de/store/ehsos-burger/2Em64aJsUc-urJq2ww0PKQ?diningMode=DELIVERY&surfaceName="
              target="_blank"
              rel="noopener noreferrer"
              className="info-card info-card--clickable"
              data-animate="fade-up"
              data-delay="4"
            >
              <div className="info-card-row">
                <div className="info-card-img-wrap">
                  <img
                    src="/menu-images/sonstiges/ubereats-logo.png"
                    alt="Uber Eats"
                    className="info-lieferando-logo"
                  />
                </div>
                <div className="info-card-body">
                  <h3>Uber Eats</h3>
                  <p>Jetzt online bestellen & liefern lassen</p>
                </div>
                <span className="info-card-cta">Bestellen →</span>
              </div>
            </a>

          </div>

          {/* ── Right column: hours ── */}
          <div className="info-col" data-animate="fade-up" data-delay="0">
            <HoursCard />
          </div>

        </div>
      </div>

      {showMapPicker && (
        <div
          className="map-picker-overlay"
          onClick={() => setShowMapPicker(false)}
          role="presentation"
        >
          <div
            className="map-picker-sheet"
            role="dialog"
            aria-modal="true"
            aria-label="In Karten öffnen"
            onClick={e => e.stopPropagation()}
          >
            <p className="map-picker-title">In Karten öffnen</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="map-picker-btn"
              onClick={() => setShowMapPicker(false)}
            >
              🗺️ Google Maps
            </a>
            {isAppleDevice && (
              <a
                href={APPLE_MAPS_URL}
                className="map-picker-btn"
                onClick={() => setShowMapPicker(false)}
              >
                🍎 Apple Maps
              </a>
            )}
            <button
              className="map-picker-btn map-picker-btn--cancel"
              onClick={() => setShowMapPicker(false)}
            >
              Abbrechen
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
