import { useState } from 'react';

// Diccionario de países de LATAM, España y USA con sus longitudes de número celular
const countryData = [
  { code: '+51', country: 'Perú', digits: 9 },
  { code: '+52', country: 'México', digits: 10 },
  { code: '+57', country: 'Colombia', digits: 10 },
  { code: '+56', country: 'Chile', digits: 9 },
  { code: '+54', country: 'Argentina', digits: 10 },
  { code: '+593', country: 'Ecuador', digits: 9 },
  { code: '+591', country: 'Bolivia', digits: 8 },
  { code: '+34', country: 'España', digits: 9 },
  { code: '+1', country: 'USA/Canadá', digits: 10 },
];

export default function QuoteModal({ isOpen, onClose }) {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  
  // Estado para manejar el código de país y el límite de dígitos dinámicamente
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]); 

  if (!isOpen) return null;

  const handleCountryChange = (e) => {
    const code = e.target.value;
    const countryInfo = countryData.find(c => c.code === code);
    if (countryInfo) setSelectedCountry(countryInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Concatenamos el código de país con el número ingresado
    const fullPhoneNumber = `${selectedCountry.code} ${data.phone}`;

    try {
      // API gratuita y sin backend
      const response = await fetch("https://formsubmit.co/ajax/contacto@harrysystems.website", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Asunto: `Nueva Cotización de: ${data.name}`,
          Nombre: data.name,
          WhatsApp_o_Telefono: fullPhoneNumber,
          Email: data.email,
          Tipo_de_Proyecto: data.projectType,
          Detalles: data.details
        })
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          onClose();
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.7)',
      backdropFilter: 'blur(4px)',
      zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="animate-fade" style={{
        background: '#ffffff',
        width: '100%', maxWidth: '540px', // Un poco más ancho para que respiren los campos
        borderRadius: '12px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden'
      }}>
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--primary)' }}>Cotiza tu proyecto</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: 'var(--text-muted)' }}>&times;</button>
        </div>

        {status === 'success' ? (
          <div style={{ padding: '40px 24px', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', background: '#dcfce3', color: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '32px' }}>✓</div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--primary)', marginBottom: '8px' }}>¡Solicitud enviada!</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>HarrySystems revisará tu solicitud y te contactará en breve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input type="hidden" name="_captcha" value="false" />
            
            {/* Ajuste de grid: Le damos un poco más de espacio a la columna del celular (1.2fr) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-dark)' }}>Nombre completo</label>
                <input required name="name" type="text" style={inputStyle} placeholder="Ej. Juan Pérez" />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-dark)' }}>WhatsApp / Celular</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {/* Ancho dinámico ajustado a 120px para que entren nombres largos */}
                  <select 
                    value={selectedCountry.code} 
                    onChange={handleCountryChange} 
                    style={{ ...inputStyle, width: '120px', padding: '10px 4px', cursor: 'pointer' }}
                  >
                    {countryData.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code} ({c.country})
                      </option>
                    ))}
                  </select>
                  <input 
                    required 
                    name="phone" 
                    type="tel" 
                    maxLength={selectedCountry.digits} 
                    minLength={selectedCountry.digits}
                    onKeyPress={(e) => {
                      if (!/[0-9]/.test(e.key)) e.preventDefault();
                    }}
                    style={{ ...inputStyle, flex: 1 }} 
                    placeholder={`${selectedCountry.digits} dígitos`} 
                  />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-dark)' }}>Correo electrónico</label>
              <input required name="email" type="email" style={inputStyle} placeholder="ejemplo@gmail.com" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-dark)' }}>Tipo de solución</label>
              <select required name="projectType" style={inputStyle}>
                <option value="">Selecciona una opción...</option>
                <option value="App Movil">App Móvil (Android/iOS)</option>
                <option value="Plataforma Web">Plataforma Web / Landing Page</option>
                <option value="Sistema SaaS">Sistema / SaaS / ERP</option>
                <option value="Automatizacion">Automatización / Bot</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-dark)' }}>Detalles del proyecto</label>
              <textarea required name="details" rows="4" style={{ ...inputStyle, resize: 'none' }} placeholder="Describe brevemente qué necesitas construir..."></textarea>
            </div>

            {status === 'error' && <div style={{ color: '#dc2626', fontSize: '13px', textAlign: 'center' }}>Hubo un error al enviar. Por favor intenta de nuevo.</div>}

            <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button type="button" onClick={onClose} className="btn btn-outline" style={{ color: 'var(--text-dark)', borderColor: 'var(--border)' }}>Cancelar</button>
              <button type="submit" disabled={status === 'loading'} className="btn btn-blue">
                {status === 'loading' ? 'Enviando...' : 'Enviar solicitud'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '6px',
  border: '1px solid var(--border)',
  background: '#f8fafc',
  fontSize: '14px',
  color: 'var(--primary)',
  outline: 'none',
  fontFamily: 'inherit'
};
