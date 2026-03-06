import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
  const [ringPos, setRingPos]     = useState({ x: -100, y: -100 })

  useEffect(() => {
    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY })
    const ring = (e) => setTimeout(() => setRingPos({ x: e.clientX, y: e.clientY }), 80)
    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', ring)
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mousemove', ring) }
  }, [])

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor" style={{ left: cursorPos.x, top: cursorPos.y }} />
      <div className="cursor-ring" style={{ left: ringPos.x, top: ringPos.y }} />

      {/* Ambient background */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(0,212,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,.025) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        animation: 'gridMove 8s linear infinite',
      }} />
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 20% 50%, rgba(124,58,237,.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,212,255,.06) 0%, transparent 60%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
