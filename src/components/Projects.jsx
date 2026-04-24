import { useState, useEffect } from 'react'

const projects = [
  {
    name: 'Promedius Pro',
    desc: 'La calculadora de promedios definitiva para estudiantes de Latinoamérica. Calcula tu promedio universitario al instante con soporte para UNMSM, UNI, UTP, UNAM y más. Incluye modo oscuro, pizarra de apuntes integrada, modo redondeo y selección por país.',
    tags: ['Android', 'Kotlin', 'LATAM', 'Educación'],
    logo: 'https://res.cloudinary.com/dwjy3y6va/image/upload/v1776982582/LOGOO_o6ehak.png',
    screenshots: [
      'https://res.cloudinary.com/dwjy3y6va/image/upload/v1776982627/FOTO_5_knuyy1.png',
      'https://res.cloudinary.com/dwjy3y6va/image/upload/v1776982628/FOTO_2_1_dlhqpw.png',
    ],
    link: 'https://apkpure.com/p/com.harrysystems.promediuspro',
    status: 'PUBLICADO',
  },
  {
    name: 'StreamElevate',
    desc: 'Panel de control remoto para streamers. Modera y proyecta mensajes en pantalla desde cualquier dispositivo, envía alertas personalizadas y gestiona tu stream en tiempo real. Solo pega el Widget Dinámico en OBS una vez y olvídate. Cero consumo de CPU extra.',
    tags: ['Web App', 'Streaming', 'OBS', 'Kick', 'Tiempo Real'],
    logo: 'https://res.cloudinary.com/dwjy3y6va/image/upload/v1776398083/FA_f3rf45.png',
    screenshots: [
      'https://res.cloudinary.com/dwjy3y6va/image/upload/v1776398083/55d69a35-9b88-4784-b099-35a7e8b14258_xccoev.jpg',
      'https://res.cloudinary.com/dwjy3y6va/image/upload/v1776398083/ORUEBA_3_egrpgj.png',
      'https://res.cloudinary.com/dwjy3y6va/image/upload/v1776398082/PRUEBA_ug6pgb.png',
      'https://res.cloudinary.com/dwjy3y6va/image/upload/v1776398082/LOGIN_voxmzu.png',
    ],
    link: 'https://streamelevate.harrysystems.website/',
    status: 'DISPONIBLE',
    youtube: '4uv2ugnif0I',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" style={{ padding: '100px 0', background: 'var(--bg-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            NUESTROS PROYECTOS
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: 'var(--primary)', marginBottom: '16px' }}>
            Lo que hemos construido
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            Apps y sistemas diseñados para resolver problemas reales con excelencia técnica.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>

        {/* Tarjeta de Próximamente Estilizada */}
        <div style={{
          marginTop: '60px',
          padding: '40px',
          background: '#f8fafc',
          border: '2px dashed var(--border)',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--primary)', marginBottom: '8px' }}>
            Más proyectos en desarrollo
          </h3>
          <p style={{ color: 'var(--text-muted)' }}>
            Sistemas para empresas, plataformas web y más apps móviles muy pronto.
          </p>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p }) {
  const [activeImg, setActiveImg] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    if (showVideo) return
    const t = setInterval(() => setActiveImg(i => (i + 1) % p.screenshots.length), 3000)
    return () => clearInterval(t)
  }, [p.screenshots.length, showVideo])

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      background: '#ffffff',
      border: '1px solid var(--border)',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)'
      }}
      className="project-card-mobile" // Usaremos media queries para móviles
    >
      
      {/* Columna Izquierda: Información */}
      <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        {/* Cabecera: Logo y Título */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
          <img src={p.logo} alt={p.name} style={{ width: '64px', height: '64px', borderRadius: '16px', border: '1px solid var(--border)', objectFit: 'cover' }} />
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary)' }}>{p.name}</h3>
            <div style={{
              display: 'inline-block',
              marginTop: '4px',
              padding: '4px 10px',
              background: '#eff6ff',
              color: 'var(--accent)',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '1px'
            }}>
              ● {p.status}
            </div>
          </div>
        </div>

        {/* Descripción */}
        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-dark)', marginBottom: '32px' }}>
          {p.desc}
        </p>

        {/* Badges/Tags */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {p.tags.map(t => (
            <span key={t} style={{
              fontSize: '12px',
              fontWeight: 500,
              color: 'var(--text-muted)',
              background: '#f1f5f9',
              padding: '6px 14px',
              borderRadius: '99px',
            }}>{t}</span>
          ))}
        </div>

        {/* Botones */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-blue">
            {p.youtube ? 'Abrir Aplicación' : 'Descargar Gratis'}
          </a>
          {p.youtube && (
            <button
              onClick={() => setShowVideo(!showVideo)}
              style={{
                background: '#f1f5f9', color: 'var(--primary)', border: 'none',
                padding: '12px 24px', borderRadius: '4px', fontWeight: 600, fontSize: '15px',
                cursor: 'pointer', transition: 'background 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#e2e8f0'}
              onMouseLeave={e => e.currentTarget.style.background = '#f1f5f9'}
            >
              {showVideo ? 'Ver Galería' : 'Ver Demo'}
            </button>
          )}
        </div>
      </div>

      {/* Columna Derecha: Imagen/Video */}
      <div style={{
        background: '#f8fafc',
        borderLeft: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        position: 'relative'
      }}>
        {showVideo && p.youtube ? (
          <iframe
            width="100%"
            height="300"
            src={`https://www.youtube.com/embed/${p.youtube}?autoplay=1`}
            title="Demo video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
          />
        ) : (
          <>
            <img
              src={p.screenshots[activeImg]}
              alt={`${p.name} screenshot`}
              style={{
                maxHeight: '400px',
                maxWidth: '100%',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                transition: 'opacity 0.3s ease',
              }}
            />
            {/* Puntos indicadores del slider */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '24px' }}>
              {p.screenshots.map((_, i) => (
                <div key={i} onClick={() => setActiveImg(i)} style={{
                  width: i === activeImg ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  background: i === activeImg ? 'var(--accent)' : '#cbd5e1',
                  transition: 'all .3s',
                }} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
