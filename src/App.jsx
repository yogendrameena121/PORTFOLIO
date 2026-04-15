import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/common/ScrollProgress'
import CursorGlow from './components/common/CursorGlow'

function App() {
  return (
    <div className="bg-dark">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
