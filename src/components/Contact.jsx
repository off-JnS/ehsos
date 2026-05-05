export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <p className="section-kicker" data-animate="fade-up">Erreichbarkeit</p>
        <h2 className="section-title" data-animate="fade-up">Kontakt</h2>
        <p className="section-subtitle" data-animate="fade-up">
          Bestell online, ruf uns an oder komm einfach vorbei – wir sind für dich da.
        </p>

        <div className="contact-methods">

          {/* ── Lieferando ── */}
          <a
            href="https://www.lieferando.de/speisekarte/ehsos-burger"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            data-animate="fade-up"
            data-delay="0"
          >
            <div className="contact-card-img-wrap">
              <img
                src="/menu-images/sonstiges/lieferando-logo.png"
                alt="Lieferando"
                className="contact-lieferando-logo"
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'block'
                }}
              />
              <span className="contact-lieferando-fallback" style={{ display: 'none' }}>🛵</span>
            </div>
            <div className="contact-card-body">
              <h3>Lieferando</h3>
              <p>Jetzt online bestellen & liefern lassen</p>
            </div>
            <span className="contact-card-cta">Bestellen →</span>
          </a>

          {/* ── Wolt ── */}
          <a
            href="https://wolt.com/de/deu/hamburg/restaurant/ehsos-burger?srsltid=AfmBOooYAJS45pBlr2k7eZnUhGHUQj7Jo8B5rjO1BPIHzFSGqd32cwD3"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            data-animate="fade-up"
            data-delay="0.5"
          >
            <div className="contact-card-img-wrap">
              <img
                src="/menu-images/sonstiges/wolt-logo.png"
                alt="Wolt"
                className="contact-order-logo"
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'block'
                }}
              />
              <span className="contact-order-fallback" style={{ display: 'none' }}>🍽️</span>
            </div>
            <div className="contact-card-body">
              <h3>Wolt</h3>
              <p>Jetzt online bestellen &amp; liefern lassen</p>
            </div>
            <span className="contact-card-cta">Bestellen →</span>
          </a>

          {/* ── Uber Eats ── */}
          <a
            href="https://www.ubereats.com/de/store/ehsos-burger/2Em64aJsUc-urJq2ww0PKQ?diningMode=DELIVERY&surfaceName="
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            data-animate="fade-up"
            data-delay="0.6"
          >
            <div className="contact-card-img-wrap">
              <img
                src="/menu-images/sonstiges/ubereats-logo.png"
                alt="Uber Eats"
                className="contact-order-logo"
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'block'
                }}
              />
              <span className="contact-order-fallback" style={{ display: 'none' }}>🚗</span>
            </div>
            <div className="contact-card-body">
              <h3>Uber Eats</h3>
              <p>Jetzt online bestellen &amp; liefern lassen</p>
            </div>
            <span className="contact-card-cta">Bestellen →</span>
          </a>

          {/* ── Telefon ── */}
          <a
            href="tel:+4904076487272"
            className="contact-card"
            data-animate="fade-up"
            data-delay="1"
          >
            <div className="contact-card-img-wrap">
              <span className="contact-card-emoji" aria-hidden="true">📞</span>
            </div>
            <div className="contact-card-body">
              <h3>Telefon</h3>
              <p>040 764 87 272</p>
            </div>
            <span className="contact-card-cta">Anrufen →</span>
          </a>

        </div>
      </div>
    </section>
  )
}
