import { useState, useEffect } from 'react'

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Main cursor glow */}
      <div
        className={`fixed pointer-events-none transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          zIndex: 9998,
        }}
      >
        <div className="w-6 h-6 rounded-full border border-primary/30 blur-sm" />
        <div className="absolute inset-0 w-6 h-6 rounded-full bg-primary/10 blur-md animate-pulse" />
      </div>

      {/* Glow trail background */}
      <div
        className="fixed pointer-events-none rounded-full blur-3xl"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
          background: `radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)`,
          opacity: isVisible ? 0.5 : 0,
          zIndex: 1,
          transition: 'opacity 0.3s ease',
        }}
      />
    </>
  )
}
