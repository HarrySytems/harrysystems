import { useState, useEffect } from 'react'

const slides = [
  {
    tag: 'Soluciones a medida',
    title: 'Software de alto impacto para Latinoamérica',
    sub: 'Desarrollamos aplicaciones y sistemas escalables con un enfoque en rendimiento y experiencia de usuario.',
  },
  {
    tag: 'Producto Destacado',
    title: 'Promedius: Herramienta académica inteligente',
    sub: 'La plataforma definitiva para el cálculo de promedios universitarios en Perú y la región.',
  },
  {
    tag: 'Ecosistema Digital',
    title: 'StreamElevate: Control total para Streamers',
    sub: 'Gestiona tu audiencia y alertas en tiempo real sin sacrificar recursos de tu hardware.',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent(p => (p + 1) % slides.length)
    }, 6000)
    return () => clearInterval(t)
  }, [])

  const slide = slides[current]

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 24px',
      background: 'radial-gradient(circle at top, #18181b 0%, #09090b 100%)',
    }}>
      <div className="animate-fade" style={{ maxWidth: '800px', textAlign: 'center' }}>
        
        {/* Badge superior profesional */}
        <div style={{
          display: 'inline-block',
          padding: '6px 12px',
          borderRadius: '20px',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid var(--border)',
          fontSize: '12px',
          fontWeight: 500,
          color: 'var(--text-muted)',
          marginBottom: '24px'
        }}>
          {slide.tag}
        </div>

        {/* Imagen centrada profesional */}
        <div style={{ marginBottom: '32px' }}>
          <img
            src="https://res.cloudinary.com/dwjy3y6va/image/upload/v1776982738/image_4_p2iyhz.jpg"
            alt="Logo"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '16px',
              border: '1px solid var(--border)',
              objectFit: 'cover'
            }}
          />
        </div>

        <h1 style={{
          fontSize: 'clamp(32px, 8vw, 64px)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '24px',
          color: 'var(--text-main)'
        }}>
          {slide.title}
        </h1>

        <p style={{
          fontSize: '18px',
          color: 'var(--text-muted)',
          maxWidth: '600px',
          margin: '0 auto 40px',
          lineHeight: 1.6
        }}>
          {slide.sub}
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <a href="https://apkpure.com/promedius-pro/com.harrysystems.promediuspro" target="_blank" rel="noreferrer" className="hs-btn hs-btn-primary">
            Obtener Promedius
          </a>
          <button onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })} className="hs-btn hs-btn-outline">
            Contactar
          </button>
        </div>

        {/* Stats Minimalistas */}
        <div style={{
          marginTop: '80px',
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          borderTop: '1px solid var(--border)',
          paddingTop: '40px'
        }}>
          {[
            { n: '1+', label: 'Apps Publicadas' },
            { n: 'LATAM', label: 'Región' },
            { n: 'RUC', label: '10770540734' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '24px', fontWeight: 700 }}>{s.n}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
