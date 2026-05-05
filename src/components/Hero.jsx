import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation'
import BounceCards from './BounceCards'
import OrderDropdown from './OrderDropdown'

const IMAGES = [
  '/menu-images/burger/Hamburger.jpeg',
  '/menu-images/wrap/Bacon Ei Wrap.jpeg',
  '/menu-images/burger/Blue Cheese Bacon.jpeg',
  '/menu-images/burger/Cheese.jpeg',
  '/menu-images/croque/Pute Bacon Croque.jpeg',
  '/menu-images/burger/Double Cheese.jpeg',
]

const TRANSFORMS = [
  'rotate(8deg) translate(-160px, -118px)',
  'rotate(-4deg) translate(0px, -122px)',
  'rotate(6deg) translate(160px, -118px)',
  'rotate(-7deg) translate(-160px, 116px)',
  'rotate(3deg) translate(0px, 118px)',
  'rotate(-5deg) translate(160px, 116px)',
]

export default function Hero() {
  useScrollAnimation()
  useParallax()

  return (
    <header className="hero" id="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <img
            src="/images/Logo/logo.png"
            alt="Ehso's Burger"
            className="hero-logo"
            data-animate="fade-down"
          />
          <p className="hero-tagline" data-animate="fade-down">Takeaway &amp; Delivery</p>
          <p className="hero-sub" data-animate="fade-up" data-delay="1">
            Frische, handgemachte Burger – direkt zu dir nach Hause oder zum Mitnehmen.
          </p>
          <div className="hero-buttons" data-animate="fade-up" data-delay="2">
            <OrderDropdown />
            <a href="/speisekarte" className="btn btn-outline">Speisekarte</a>
          </div>
        </div>
        <div className="hero-cards-wrap" aria-hidden="true">
          <BounceCards
            images={IMAGES}
            transformStyles={TRANSFORMS}
            containerWidth={660}
            containerHeight={600}
            animationDelay={0.6}
            animationStagger={0.05}
            easeType="elastic.out(1, 0.5)"
            enableHover
            verticalIndices={[0, 5]}
          />
        </div>
      </div>
    </header>
  )
}
