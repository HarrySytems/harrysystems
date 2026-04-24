import { useState } from 'react';
import QuoteModal from './QuoteModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="hero" style={{ paddingTop: '80px' }}>
        
        {/* BANNER PRINCIPAL CON IMAGEN DE FONDO Y OVERLAY OSCURO */}
        <div style={{
          position: 'relative',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
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
                <button onClick={() => setIsModalOpen(true)} className="btn btn-outline">
                  Solicita una cotización
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BARRA INFERIOR DE 4 COLUMNAS CON ICONOS SVG (SIN EMOJIS) */}
        <div style={{ background: '#ffffff', borderBottom: '1px solid var(--border)', padding: '40px 0' }}>
          <div className="container grid-4">
            
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div>
                <h3 style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '4px', fontSize: '16px' }}>Software Seguro</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Arquitectura sólida y protección de datos.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </div>
              <div>
                <h3 style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '4px', fontSize: '16px' }}>Tecnología Moderna</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Desarrollos escalables y de baja latencia.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div>
                <h3 style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '4px', fontSize: '16px' }}>Soluciones a Medida</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Aplicaciones creadas para tu necesidad.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
              </div>
              <div>
                <h3 style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '4px', fontSize: '16px' }}>Soporte Continuo</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Acompañamiento post-lanzamiento.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RENDERIZADO DEL MODAL */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
