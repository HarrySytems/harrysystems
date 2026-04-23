export default function Hero() {
  return (
    <section id="hero" style={{ paddingTop: '80px' }}>
      
      {/* BANNER PRINCIPAL CON IMAGEN DE FONDO Y OVERLAY OSCURO */}
      <div style={{
        position: 'relative',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        /* Imagen de fondo profesional simulando tecnología/desarrollo */
        background: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.9)), url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070") center/cover',
      }}>
        <div className="container hero-text-box" style={{ width: '100%', position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '700px' }}>
            <div style={{ color: '#60a5fa', fontWeight: 700, fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              TECNOLOGÍA · DESARROLLO · CONFIANZA
            </div>
            
            <h1 style={{ color: '#ffffff', fontSize: '56px', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
              Soluciones de software para escalar <span style={{ color: '#60a5fa' }}>tu negocio</span>
            </h1>
            
            <p style={{ color: '#cbd5e1', fontSize: '18px', lineHeight: 1.6, marginBottom: '40px', maxWidth: '600px' }}>
              En Harry Systems ofrecemos desarrollo de aplicaciones y sistemas a medida. Tecnología avanzada, código limpio y soporte confiable para empresas y estudiantes.
            </p>
            
            <div className="hero-buttons" style={{ display: 'flex', gap: '16px' }}>
              <a href="#proyectos" className="btn btn-blue">
                <span style={{ marginRight: '8px' }}>✓</span> Conoce nuestros proyectos
              </a>
              <button onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })} className="btn btn-outline">
                Solicita una cotización
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BARRA INFERIOR DE 4 COLUMNAS (CARACTERÍSTICAS) */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid var(--border)', padding: '40px 0' }}>
        <div className="container grid-4">
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontSize: '24px', flexShrink: 0 }}>🛡️</div>
            <div>
              <h3 style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '4px', fontSize: '16px' }}>Software Seguro</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Arquitectura sólida y protección de datos.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontSize: '24px', flexShrink: 0 }}>⚙️</div>
            <div>
              <h3 style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '4px', fontSize: '16px' }}>Tecnología Moderna</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Desarrollos escalables y de baja latencia.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontSize: '24px', flexShrink: 0 }}>👥</div>
            <div>
              <h3 style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '4px', fontSize: '16px' }}>Soluciones a Medida</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Aplicaciones creadas para tu necesidad.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontSize: '24px', flexShrink: 0 }}>🎧</div>
            <div>
              <h3 style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '4px', fontSize: '16px' }}>Soporte Continuo</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Acompañamiento post-lanzamiento.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
