import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

const PLATFORMS = [
  {
    name: 'Lieferando',
    url: 'https://www.lieferando.de/speisekarte/ehsos-burger',
    logo: '/menu-images/sonstiges/lieferando-logo.png',
  },
  {
    name: 'Wolt',
    url: 'https://wolt.com/de/deu/hamburg/restaurant/ehsos-burger?srsltid=AfmBOooYAJS45pBlr2k7eZnUhGHUQj7Jo8B5rjO1BPIHzFSGqd32cwD3',
    logo: '/menu-images/sonstiges/wolt-logo.png',
  },
  {
    name: 'Uber Eats',
    url: 'https://www.ubereats.com/de/store/ehsos-burger/2Em64aJsUc-urJq2ww0PKQ?diningMode=DELIVERY&surfaceName=',
    logo: '/menu-images/sonstiges/ubereats-logo.png',
  },
]

export default function OrderDropdown({
  label = 'Bestellen',
  buttonClass = 'btn btn-primary',
  wrapperClass = '',
  openUp = false,
}) {
  const [open, setOpen] = useState(false)
  const [menuPos, setMenuPos] = useState({ top: null, bottom: null, left: 0, width: 0 })
  const btnRef = useRef(null)
  const menuRef = useRef(null)

  const calcPos = () => {
    if (!btnRef.current) return
    const r = btnRef.current.getBoundingClientRect()
    if (openUp) {
      setMenuPos({ top: null, bottom: window.innerHeight - r.top + 8, left: r.left, width: Math.max(r.width, 200) })
    } else {
      setMenuPos({ top: r.bottom + 8, bottom: null, left: r.left, width: Math.max(r.width, 200) })
    }
  }

  const toggle = () => {
    if (!open) calcPos()
    setOpen((v) => !v)
  }

  // Close on outside click / touch
  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        btnRef.current && !btnRef.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [open])

  // Reposition while open (scroll / resize)
  useEffect(() => {
    if (!open) return
    const reposition = () => calcPos()
    window.addEventListener('scroll', reposition, { passive: true, capture: true })
    window.addEventListener('resize', reposition, { passive: true })
    return () => {
      window.removeEventListener('scroll', reposition, { capture: true })
      window.removeEventListener('resize', reposition)
    }
  }, [open])

  return (
    <div className={`order-picker ${wrapperClass}`.trim()}>
      <button
        ref={btnRef}
        className={buttonClass}
        onClick={toggle}
        aria-haspopup="listbox"
        aria-expanded={open}
        type="button"
      >
        {label}
        <svg
          className={`order-picker-chevron${open ? ' order-picker-chevron--open' : ''}`}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 5l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open &&
        createPortal(
          <div
            ref={menuRef}
            className="order-picker-menu"
            role="listbox"
            style={{
              position: 'fixed',
              ...(menuPos.top !== null ? { top: menuPos.top } : {}),
              ...(menuPos.bottom !== null ? { bottom: menuPos.bottom } : {}),
              left: menuPos.left,
              width: menuPos.width,
            }}
          >
            {PLATFORMS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="order-picker-item"
                role="option"
                onClick={() => setOpen(false)}
              >
                <img src={p.logo} alt={p.name} className="order-picker-logo" />
                <span>{p.name}</span>
              </a>
            ))}
          </div>,
          document.body
        )}
    </div>
  )
}
