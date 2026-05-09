import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import StaggeredMenu from './StaggeredMenu'
import OrderDropdown from './OrderDropdown'

const MOBILE_ITEMS = [
  { label: 'Über uns',    ariaLabel: 'Über uns',          link: '/#about' },
  { label: 'Speisekarte', ariaLabel: 'Speisekarte',        link: '/speisekarte' },
  { label: 'Standort',    ariaLabel: 'Standort & Kontakt', link: '#location' },
  { label: 'Bestellen',   ariaLabel: 'Jetzt bestellen' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="container nav-container">
          <Link to="/" className="logo logo--img" aria-label="Ehso's Burger – Startseite">
            <img src="/images/Logo/logo.png" alt="" className="nav-logo-img" />
            <span className="nav-logo-text">EHSO'S<em>BURGER</em></span>
          </Link>

          <ul className="nav-links" id="navLinks">
            <li><Link to="/speisekarte">Speisekarte</Link></li>
            <li>
              <OrderDropdown label="Jetzt bestellen" buttonClass="btn btn-sm" wrapperClass="order-picker--auto" />
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile full-screen staggered menu */}
      <StaggeredMenu
        isFixed
        position="right"
        items={MOBILE_ITEMS}
        socialItems={[]}
        displaySocials={false}
        displayItemNumbering={false}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={false}
        colors={['#1a1a1a', '#111111']}
        logoUrl=""
        accentColor="#f97316"
        closeOnClickAway
        className="sm-mobile-menu"
      />
    </>
  )
}
