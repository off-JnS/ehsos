import { useState, useEffect } from 'react'
import './CookieBanner.css'

const STORAGE_KEY = 'ehsos_cookie_consent'

function grantAnalytics() {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', { analytics_storage: 'granted' })
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) {
      // Small delay so the banner doesn't flash instantly on load
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
    if (saved === 'accepted') {
      grantAnalytics()
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    grantAnalytics()
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-modal="false" aria-label="Cookie-Einstellungen">
      <div className="cookie-banner__inner">
        <div className="cookie-banner__text">
          <p className="cookie-banner__title">🍪 Cookie-Einstellungen</p>
          <p className="cookie-banner__desc">
            Wir verwenden Google Analytics, um unsere Website zu verbessern. Deine Daten werden
            anonym ausgewertet. Du kannst der Nutzung jederzeit zustimmen oder ablehnen.{' '}
            <a href="/datenschutz" className="cookie-banner__link">Mehr erfahren</a>
          </p>
        </div>
        <div className="cookie-banner__actions">
          <button className="cookie-banner__btn cookie-banner__btn--reject" onClick={reject}>
            Ablehnen
          </button>
          <button className="cookie-banner__btn cookie-banner__btn--accept" onClick={accept}>
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}
