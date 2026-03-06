const services = [
  { icon: '⬡', title: 'Desarrollo Web', desc: 'Sitios y plataformas web modernas, rapidas y escalables.' },
  { icon: '◈', title: 'Apps Moviles', desc: 'Aplicaciones Android nativas pensadas para el usuario final.' },
  { icon: '▣', title: 'Sistemas', desc: 'Software a medida para procesos internos y gestion empresarial.' },
  { icon: '◎', title: 'UI/UX Design', desc: 'Interfaces elegantes que combinan estetica y funcionalidad.' },
]

const socials = [
  { label: 'YouTube', url: 'https://www.youtube.com/@HarrySystems', color: '#ff4444' },
  { label: 'GitHub', url: 'https://github.com/HarrySytems', color: '#00d4ff' },
  { label: 'WhatsApp', url: 'https://wa.me/51938133028', color: '#00ff88' },
]

export default function About() {
  return (
    <section id="nosotros" style={{ padding: '80px 24px', background: '#08080f' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="grid-2col">

          {/* Left */}
          <div>
            <div className="section-label">// NOSOTROS</div>
            <h2 style={{
              fontFamily: "'Orbitron',monospace", fontSize: 'clamp(22px,3vw,38px)',
              fontWeight: 900, color: '#ffffff', marginBottom: '20px', lineHeight: 1.2,
            }}>
              HarrySystems<br />
              <span style={{ color: '#00d4ff', fontSize: '60%' }}>PROGRAMACION INFORMATICA - PERU</span>
            </h2>

            <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#ddddee', marginBottom: '16px' }}>
              Nuestra mision es simple: crear tecnologia que realmente le sirva a la gente. No apps de relleno — soluciones concretas para problemas reales.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#ddddee', marginBottom: '28px' }}>
              Desarrollamos para estudiantes, emprendedores y empresas en Latinoamerica. Cada proyecto lleva el mismo compromiso: codigo limpio, diseno profesional y un proposito claro.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {[
                { label: 'UBICACION', value: 'Peru' },
                { label: 'RUC', value: '10770540734' },
                { label: 'ENFOQUE', value: 'Empresas & Estudiantes' },
                { label: 'EMAIL', value: 'contacto@harrysystems.website' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', color: '#00d4ff', letterSpacing: '2px', minWidth: '90px' }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '13px', color: '#ffffff' }}>{item.value}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {socials.map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '9px 16px', borderRadius: '8px',
                  border: `1px solid ${s.color}50`,
                  background: `${s.color}15`,
                  color: s.color, textDecoration: 'none',
                  fontFamily: "'Space Mono',monospace", fontSize: '10px',
                  fontWeight: 700, letterSpacing: '1px', transition: 'all .2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${s.color}30`; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = `${s.color}15`; e.currentTarget.style.transform = 'none' }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {services.map((s, i) => (
              <div key={i} className="hs-card" style={{ padding: '24px', background: '#0d0d1a', border: '1px solid rgba(0,212,255,0.15)' }}>
                <div style={{ fontSize: '26px', marginBottom: '12px', color: '#00d4ff' }}>{s.icon}</div>
                <div style={{ fontFamily: "'Orbitron',monospace", fontSize: '11px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  {s.title}
                </div>
                <p style={{ fontSize: '12px', lineHeight: 1.7, color: '#ccccdd' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
