import { useState, useEffect } from 'react'

const links = ['Inicio', 'Nosotros', 'Servicios', 'Proyectos', 'Contacto']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (section) => {
    if (section === 'Inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const map = { 'Proyectos': 'proyectos', 'Nosotros': 'nosotros', 'Contacto': 'contacto', 'Servicios': 'proyectos' }
      document.getElementById(map[section])?.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: '#ffffff',
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
      borderBottom: '1px solid var(--border)',
      transition: 'all .3s',
      height: '80px',
      display: 'flex', alignItems: 'center'
    }}>
      <div className="container flex-between" style={{ width: '100%' }}>
        
        {/* LOGO */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <img src="https://res.cloudinary.com/dwjy3y6va/image/upload/v1776982738/image_4_p2iyhz.jpg" alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '8px' }} />
           <div style={{ fontWeight: 800, fontSize: '20px', color: 'var(--primary)', letterSpacing: '-0.5px' }}>
             HARRY<span style={{ color: 'var(--accent)' }}>SYSTEMS</span>
           </div>
        </div>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '32px' }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontWeight: 600, fontSize: '14px', color: 'var(--text-dark)', transition: 'color 0.2s'
            }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dark)'}>
              {l.toUpperCase()}
            </button>
          ))}
        </nav>

        {/* BOTÓN DERECHA */}
        <div className="desktop-nav">
          <button className="btn btn-blue" onClick={() => scrollTo('Contacto')}>Cotiza tu proyecto</button>
        </div>

        {/* HAMBURGUESA MOBILE */}
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: 'var(--primary)'
        }}>
          ☰
        </button>
      </div>

      {/* MENÚ MOBILE */}
      {menuOpen && (
        <div style={{ position: 'absolute', top: '80px', left: 0, right: 0, background: '#fff', borderBottom: '1px solid var(--border)', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{ background: 'none', border: 'none', textAlign: 'left', fontWeight: 600, fontSize: '16px', color: 'var(--primary)', padding: '8px 0' }}>{l}</button>
          ))}
          <button className="btn btn-blue" style={{ width: '100%', marginTop: '10px' }} onClick={() => scrollTo('Contacto')}>Cotiza tu proyecto</button>
        </div>
      )}
    </header>
  )
}
