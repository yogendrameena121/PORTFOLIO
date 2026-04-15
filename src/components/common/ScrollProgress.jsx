import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollTop = window.scrollY
      const scrollPercent = totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="scroll-progress"
      style={{
        width: `${scrollProgress}%`,
        boxShadow: scrollProgress > 0 ? '0 0 20px rgba(0, 212, 255, 0.5)' : 'none'
      }}
    />
  )
}
