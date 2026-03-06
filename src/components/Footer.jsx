export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '32px 40px',
      background: 'var(--bg2)',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="https://res.cloudinary.com/dwjy3y6va/image/upload/v1772825437/image_e6kyib.jpg"
            alt="logo" style={{ width: '28px', height: '28px', borderRadius: '6px' }}
          />
          <span style={{ fontFamily: "'Orbitron',monospace", fontSize: '12px', color: '#fff', fontWeight: 700 }}>
            HARRY<span style={{ color: 'var(--accent)' }}>SYSTEMS</span>
          </span>
        </div>

        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', color: 'var(--muted)', letterSpacing: '1px', textAlign: 'center' }}>
          RUC 10770540734 · PERÚ 🇵🇪 · PROGRAMACIÓN INFORMÁTICA
        </div>

        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', color: 'var(--muted)', letterSpacing: '1px' }}>
          © 2026 HARRYSYSTEMS
        </div>
      </div>
    </footer>
  )
}
