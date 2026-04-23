import { useState, useEffect } from 'react'

const slides = [
  {
    tag: '// DESARROLLO DE SOFTWARE',
    title: 'Soluciones digitales que transforman tu negocio',
    sub: 'Creamos apps, sistemas y plataformas web de alto impacto para empresas en Peru y Latinoamerica.',
    accent: '#00d4ff',
  },
  {
    tag: '// APPS MOVILES',
    title: 'Promedius: La calculadora definitiva para estudiantes',
    sub: 'Disponible para Android. Soporte para UNMSM, UNI, UTP, UNAM y mas universidades de Latinoamerica.',
    accent: '#00d4ff',
  },
  {
    tag: '// MISION HARRYSYSTEMS',
    title: 'Tecnologia con proposito, no con relleno',
    sub: 'En HarrySystems creemos que el mejor software es el que resuelve algo real. Desarrollamos para estudiantes, empresas y emprendedores.',
    accent: '#00d4ff',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true)
      setTimeout(() => { setCurrent(p => (p + 1) % slides.length); setAnimating(false) }, 300)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  const goNext = () => {
    setAnimating(true)
    setTimeout(() => { setCurrent(p => (p + 1) % slides.length); setAnimating(false) }, 300)
  }

  const goPrev = () => {
    setAnimating(true)
    setTimeout(() => { setCurrent(p => (p - 1 + slides.length) % slides.length); setAnimating(false) }, 300)
  }

  const slide = slides[current]

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 40px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '900px',
        width: '100%',
        textAlign: 'center',
        opacity: animating ? 0 : 1,
        transform: animating ? 'translateY(10px)' : 'translateY(0)',
        transition: 'opacity .3s, transform .3s',
      }}>

        <div style={{
          fontFamily: "'Space Mono',monospace",
          fontSize: '11px',
          letterSpacing: '3px',
          color: '#00d4ff',
          marginBottom: '24px',
        }}>
          {slide.tag}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <img
            src="https://res.cloudinary.com/dwjy3y6va/image/upload/v1776982738/image_4_p2iyhz.jpg"
            alt="HarrySystems"
            className="animate-float"
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '20px',
              border: '2px solid rgba(0,212,255,0.4)',
              boxShadow: '0 0 40px rgba(0,212,255,0.25)',
              objectFit: 'cover',
            }}
          />
        </div>

        <h1 style={{
          fontFamily: "'Orbitron',monospace",
          fontSize: 'clamp(28px, 5vw, 52px)',
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '-1px',
          color: '#ffffff',
          marginBottom: '24px',
        }}>
          {slide.title}
        </h1>

        <p style={{
          fontSize: '16px',
          lineHeight: 1.8,
          color: '#9999bb',
          maxWidth: '620px',
          margin: '0 auto 40px',
        }}>
          {slide.sub}
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          
            href="https://apkpure.com/promedius-pro/com.harrysystems.promediuspro"
            target="_blank"
            rel="noreferrer"
            className="hs-btn hs-btn-primary"
          >
            Descargar Promedius
          </a>
          <button
            className="hs-btn hs-btn-outline"
            onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
          >
            Contactar
          </button>
        </div>

        <div style={{
          display: 'flex',
          gap: '48px',
          justifyContent: 'center',
          marginTop: '64px',
          flexWrap: 'wrap',
        }}>
          {[
            { n: '1+', label: 'APP PUBLICADA' },
            { n: 'LATAM', label: 'ALCANCE' },
            { n: 'RUC', label: '10770540734' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Orbitron',monospace",
                fontSize: '28px',
                fontWeight: 900,
                color: '#00d4ff',
              }}>
                {s.n}
              </div>
              <div style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: '9px',
                color: '#555577',
                letterSpacing: '2px',
                marginTop: '4px',
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '48px' }}>
        <button onClick={goPrev} style={{
          background: 'rgba(0,212,255,.08)',
          border: '1px solid rgba(0,212,255,.2)',
          color: '#00d4ff', width: '36px', height: '36px',
          borderRadius: '50%', cursor: 'pointer', fontSize: '14px',
        }}>
          &larr;
        </button>

        {slides.map((_, i) => (
          <div key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? '24px' : '8px', height: '8px',
            borderRadius: '4px', cursor: 'pointer',
            background: i === current ? '#00d4ff' : '#333355',
            transition: 'all .3s',
          }} />
        ))}

        <button onClick={goNext} style={{
          background: 'rgba(0,212,255,.08)',
          border: '1px solid rgba(0,212,255,.2)',
          color: '#00d4ff', width: '36px', height: '36px',
          borderRadius: '50%', cursor: 'pointer', fontSize: '14px',
        }}>
          &rarr;
        </button>
      </div>

      <div style={{
        position: 'absolute', bottom: '32px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
      }}>
        <div style={{
          fontFamily: "'Space Mono',monospace",
          fontSize: '8px', color: '#333355', letterSpacing: '2px',
        }}>
          SCROLL
        </div>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, #00d4ff, transparent)',
          animation: 'pulse 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  )
}
