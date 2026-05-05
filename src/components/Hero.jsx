import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation'
import BounceCards from './BounceCards'
import OrderDropdown from './OrderDropdown'

const IMAGES = [
  '/menu-images/burger/Hamburger.jpeg',
  '/menu-images/burger/Bacon Egg.jpeg',
  '/menu-images/burger/Blue Cheese Bacon.jpeg',
  '/menu-images/burger/Cheese.jpeg',
  '/menu-images/burger/Chilli Cheese.jpeg',
  '/menu-images/burger/Double Cheese.jpeg',
]

const TRANSFORMS = [
  'rotate(8deg) translate(-170px, -198px)',
  'rotate(-3deg) translate(0px, -202px)',
  'rotate(6deg) translate(170px, -194px)',
  'rotate(-7deg) translate(-170px, -46px)',
  'rotate(4deg) translate(2px, -42px)',
  'rotate(-5deg) translate(170px, -48px)',
]

export default function Hero() {
  useScrollAnimation()
  useParallax()

  return (
    <header className="hero" id="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-tagline" data-animate="fade-down">Takeaway &amp; Delivery</p>
          <h1 data-animate="fade-up">EHSO'S BURGER</h1>
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
            containerWidth={760}
            containerHeight={520}
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
