import { useState, useEffect } from 'react'

const projects = [
  {
    name: 'Promedius Pro',
    desc: 'La calculadora de promedios definitiva para estudiantes de Latinoamérica. Calcula tu promedio universitario al instante con soporte para UNMSM, UNI, UTP, UNAM y más. Incluye modo oscuro, pizarra de apuntes integrada, modo redondeo y selección por país.',
    tags: ['Android', 'Kotlin', 'LATAM', 'Educación'],
    logo: 'https://res.cloudinary.com/dwjy3y6va/image/upload/v1776982582/LOGOO_o6ehak.png',
    screenshots: [
      'https://res.cloudinary.com/dwjy3y6va/image/upload/v1776982627/FOTO_5_knuyy1.png',
      'https://res.cloudinary.com/dwjy3y6va/image/upload/v1776982627/FOTO_4_wcg4al.png',
      'https://res.cloudinary.com/dwjy3y6va/image/upload/v1776982627/FOTO_3_l2lpnk.png',
    ],
    link: 'https://apkpure.com/p/com.harrysystems.promediuspro',
    accent: '#7c3aed',
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
    accent: '#00d4ff',
    status: 'DISPONIBLE',
    youtube: '4uv2ugnif0I',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" style={{ padding: '100px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="animate-fadeUp">
        <div className="section-label">// PROYECTOS</div>
        <h2 style={{
          fontFamily: "'Orbitron',monospace", fontSize: 'clamp(28px,4vw,44px)',
          fontWeight: 900, color: '#fff', letterSpacing: '-1px', marginBottom: '8px',
        }}>
          Lo que hemos <span style={{ color: 'var(--accent)' }}>construido</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', marginBottom: '56px', maxWidth: '500px' }}>
          Apps y sistemas diseñados para resolver problemas reales.
        </p>
      </div>

      {projects.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}

      {/* Coming soon */}
      <div className="hs-card animate-fadeUp-2" style={{ padding: '40px', textAlign: 'center', marginTop: '24px', borderStyle: 'dashed' }}>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', color: 'var(--muted)', letterSpacing: '3px', marginBottom: '12px' }}>
          // PRÓXIMAMENTE
        </div>
        <div style={{ fontFamily: "'Orbitron',monospace", fontSize: '20px', color: '#fff', fontWeight: 700 }}>
          Más proyectos en desarrollo
        </div>
        <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '14px' }}>
          Sistemas para empresas, plataformas web y más apps móviles.
        </p>
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
    <div className="hs-card animate-fadeUp-1" style={{ padding: '0', overflow: 'hidden', marginBottom: '24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '400px' }}>

        {/* Left: info */}
        <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <img src={p.logo} alt={p.name}
                style={{ width: '56px', height: '56px', borderRadius: '14px', border: `2px solid ${p.accent}40`, objectFit: 'cover' }} />
              <div>
                <div style={{ fontFamily: "'Orbitron',monospace", fontSize: '20px', fontWeight: 800, color: '#fff' }}>
                  {p.name}
                </div>
                <div style={{
                  fontFamily: "'Space Mono',monospace", fontSize: '8px',
                  color: p.accent, letterSpacing: '2px', marginTop: '2px',
                  background: `${p.accent}15`, padding: '2px 8px', borderRadius: '4px', display: 'inline-block',
                }}>
                  ● {p.status}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#888', marginBottom: '24px' }}>
              {p.desc}
            </p>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
              {p.tags.map(t => (
                <span key={t} style={{
                  fontFamily: "'Space Mono',monospace", fontSize: '9px',
                  color: 'var(--muted)', border: '1px solid var(--border)',
                  padding: '4px 12px', borderRadius: '999px', letterSpacing: '1px',
                }}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href={p.link} target="_blank" rel="noreferrer"
              className="hs-btn hs-btn-primary" style={{ alignSelf: 'flex-start' }}>
              {p.youtube ? '→ ABRIR APP' : '↓ DESCARGAR GRATIS'}
            </a>
            {p.youtube && (
              <button
                onClick={() => setShowVideo(v => !v)}
                className="hs-btn"
                style={{
                  alignSelf: 'flex-start', background: 'transparent',
                  border: `1px solid ${p.accent}60`, color: p.accent, cursor: 'pointer',
                }}>
                {showVideo ? '✕ CERRAR VIDEO' : '▶ VER VIDEO'}
              </button>
            )}
          </div>
        </div>

        {/* Right: screenshots o video */}
        <div style={{
          background: 'var(--bg3)', borderLeft: '1px solid var(--border)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: '32px', gap: '16px',
        }}>
          {showVideo && p.youtube ? (
            <iframe
              width="100%"
              height="280"
              src={`https://www.youtube.com/embed/${p.youtube}?autoplay=1`}
              title="Demo video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '12px', border: `1px solid ${p.accent}30` }}
            />
          ) : (
            <>
              <img
                src={p.screenshots[activeImg]}
                alt="screenshot"
                style={{
                  maxHeight: '320px', maxWidth: '100%', objectFit: 'contain',
                  borderRadius: '12px', border: `1px solid ${p.accent}20`,
                  boxShadow: `0 20px 60px ${p.accent}15`,
                  transition: 'all .3s',
                }}
              />
              <div style={{ display: 'flex', gap: '8px' }}>
                {p.screenshots.map((_, i) => (
                  <div key={i} onClick={() => setActiveImg(i)} style={{
                    width: i === activeImg ? '20px' : '8px', height: '8px',
                    borderRadius: '4px', cursor: 'pointer',
                    background: i === activeImg ? p.accent : 'var(--muted)',
                    transition: 'all .3s',
                  }} />
                ))}
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  )
}
