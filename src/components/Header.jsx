import { useState, useEffect } from 'react'

const links = ['Inicio', 'Proyectos', 'Nosotros', 'Contacto']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (section) => {
    const map = { 'Inicio': 'hero', 'Proyectos': 'proyectos', 'Nosotros': 'nosotros', 'Contacto': 'contacto' }
    document.getElementById(map[section])?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 24px',
        background: scrolled ? 'rgba(5,5,15,0.97)' : 'rgba(5,5,15,0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0,212,255,0.1)',
        transition: 'all .3s',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="https://res.cloudinary.com/dwjy3y6va/image/upload/v1772825437/image_e6kyib.jpg"
              alt="HarrySystems"
              style={{ width: '36px', height: '36px', borderRadius: '8px', border: '1px solid rgba(0,212,255,0.3)' }} />
            <div>
              <div style={{ fontFamily: "'Orbitron',monospace", fontSize: '13px', fontWeight: 800, color: '#ffffff', letterSpacing: '1px' }}>
                HARRY<span style={{ color: '#00d4ff' }}>SYSTEMS</span>
              </div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '7px', color: '#aaaacc', letterSpacing: '2px' }}>
                SOFTWARE & APPS
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="desktop-nav">
            {links.map(l => (
              <button key={l} onClick={() => scrollTo(l)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Space Mono',monospace", fontSize: '10px',
                letterSpacing: '1px', color: '#ffffff',
                padding: '8px 14px', borderRadius: '6px',
                transition: 'color .2s, background .2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = '#00d4ff'; e.currentTarget.style.background = 'rgba(0,212,255,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.background = 'none' }}
              >
                {l.toUpperCase()}
              </button>
            ))}
            <a href="https://apkpure.com/promedius-pro/com.harrysystems.promediuspro"
              target="_blank" rel="noreferrer"
              style={{
                marginLeft: '8px', padding: '8px 16px',
                background: '#00d4ff', color: '#000', borderRadius: '8px',
                fontFamily: "'Space Mono',monospace", fontSize: '10px',
                fontWeight: 700, textDecoration: 'none', letterSpacing: '1px',
                whiteSpace: 'nowrap',
              }}>
              DESCARGAR APP
            </a>
          </nav>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: '1px solid rgba(0,212,255,0.3)',
            borderRadius: '8px', padding: '8px', cursor: 'pointer',
            display: 'none', flexDirection: 'column', gap: '4px',
          }} className="hamburger">
            {[0,1,2].map(i => (
              <div key={i} style={{ width: '20px', height: '2px', background: '#00d4ff', borderRadius: '2px' }} />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(5,5,15,0.98)', borderBottom: '1px solid rgba(0,212,255,0.1)',
          padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '8px',
        }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Space Mono',monospace", fontSize: '12px',
              letterSpacing: '2px', color: '#ffffff', padding: '12px 0',
              textAlign: 'left', borderBottom: '1px solid rgba(0,212,255,0.08)',
            }}>
              {l.toUpperCase()}
            </button>
          ))}
          <a href="https://apkpure.com/promedius-pro/com.harrysystems.promediuspro"
            target="_blank" rel="noreferrer"
            style={{
              marginTop: '8px', padding: '12px', textAlign: 'center',
              background: '#00d4ff', color: '#000', borderRadius: '8px',
              fontFamily: "'Space Mono',monospace", fontSize: '11px',
              fontWeight: 700, textDecoration: 'none',
            }}>
            DESCARGAR APP
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
