export default function Contact() {
  return (
    <section id="contacto" style={{ padding: '100px 40px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>// CONTACTO</div>
        <h2 style={{
          fontFamily: "'Orbitron',monospace",
          fontSize: 'clamp(24px,3vw,42px)',
          fontWeight: 900, color: '#fff',
          letterSpacing: '-0.5px', marginBottom: '16px',
        }}>
          ¿Tienes un proyecto?<br />
          <span style={{ color: 'var(--accent)' }}>Hablemos.</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', marginBottom: '56px', lineHeight: 1.7 }}>
          Ya sea una app, un sistema o una plataforma web — estoy disponible para nuevos proyectos y colaboraciones.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>

          {/* Email */}
          <a href="mailto:contacto@harrysystems.website"
            className="hs-card"
            style={{
              display: 'flex', alignItems: 'center', gap: '20px',
              padding: '24px 36px', textDecoration: 'none',
              width: '100%', maxWidth: '480px',
              transition: 'all .25s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,212,255,.4)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{
              width: '44px', height: '44px', borderRadius: '10px',
              background: 'rgba(0,212,255,.1)', border: '1px solid rgba(0,212,255,.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px', flexShrink: 0,
            }}>✉</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', color: 'var(--accent)', letterSpacing: '2px', marginBottom: '4px' }}>EMAIL</div>
              <div style={{ fontSize: '14px', color: '#ddd' }}>contacto@harrysystems.website</div>
            </div>
            <div style={{ marginLeft: 'auto', color: 'var(--accent)', fontSize: '18px' }}>→</div>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/51938133028?text=Hola%20HarrySystems,%20quiero%20hablar%20sobre%20un%20proyecto"
            target="_blank" rel="noreferrer"
            className="hs-card"
            style={{
              display: 'flex', alignItems: 'center', gap: '20px',
              padding: '24px 36px', textDecoration: 'none',
              width: '100%', maxWidth: '480px',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,255,136,.4)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{
              width: '44px', height: '44px', borderRadius: '10px',
              background: 'rgba(0,255,136,.1)', border: '1px solid rgba(0,255,136,.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px', flexShrink: 0,
            }}>💬</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', color: 'var(--accent3)', letterSpacing: '2px', marginBottom: '4px' }}>WHATSAPP</div>
              <div style={{ fontSize: '14px', color: '#ddd' }}>Escríbeme directo</div>
            </div>
            <div style={{ marginLeft: 'auto', color: 'var(--accent3)', fontSize: '18px' }}>→</div>
          </a>

          {/* Download app */}
          <a href="https://apkpure.com/p/com.harrysystems.promediuspro"
            target="_blank" rel="noreferrer"
            className="hs-btn hs-btn-primary"
            style={{ marginTop: '16px', fontSize: '11px' }}>
            ↓ DESCARGAR PROMEDIUS GRATIS
          </a>
        </div>
      </div>
    </section>
  )
}
