import { Routes, Route } from 'react-router-dom'
import CookieBanner from './components/CookieBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import LocationsStripe from './components/LocationsStripe'
import Location from './components/Location'
import Footer from './components/Footer'
import MenuPage from './pages/MenuPage'
import ImpressumPage from './pages/ImpressumPage'
import DatenschutzPage from './pages/DatenschutzPage'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <LocationsStripe />
      <Location />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <CookieBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/speisekarte" element={<MenuPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
      </Routes>
    </>
  )
}
