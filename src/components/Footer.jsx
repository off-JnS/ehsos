import OrderDropdown from './OrderDropdown'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">EHSO'S<span>BURGER</span></a>
            <p>Takeaway &amp; Delivery in Hamburg Lurup</p>
          </div>

          <div className="footer-links">
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
          </div>

          <div className="footer-actions">
            <OrderDropdown label="Jetzt bestellen" openUp />
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Ehso's Burger. Alle Rechte vorbehalten.</p>
          <a
            href="https://prj1.de"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-attribution"
          >
            Gefällt dir diese Website?
          </a>
        </div>
      </div>
    </footer>
  )
}
