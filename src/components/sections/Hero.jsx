import { motion } from 'framer-motion'
import { ArrowRight, Github, Mail } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <motion.div
        className="max-w-4xl px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Circular DP with Gradient */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-primary via-secondary to-primary p-1">
            <div className="w-full h-full rounded-full bg-dark overflow-hidden">
              <img
                src="/dist/assets/dp.png"
                alt="Profile Picture"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="gradient-text">I build AI-powered</span>
            <br />
            <span>products that solve</span>
            <br />
            <span className="gradient-text">real problems</span> — <span className="text-primary">fast</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/70 mb-4 max-w-2xl mx-auto"
        >
          Full-Stack Developer · AI Builder · Hackathon Winner · IPS Academy
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I ship production-ready web apps and AI integrations in days, not months. Combining modern tech with smart automation to deliver real impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-dark font-semibold flex items-center gap-2 group hover:shadow-glow"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.a
            href="mailto:meenayogendra398@gmail.com"
            className="px-8 py-4 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/10 flex items-center gap-2 transition-colors"
            whileHover={{ scale: 1.05, borderColor: '#00d4ff' }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            Hire Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center gap-6"
        >
          {[
            { icon: Github, href: 'https://github.com/yogendra121y', label: 'GitHub' },
            { icon: Mail, href: 'mailto:meenayogendra398@gmail.com', label: 'Email' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-dark hover:border-primary/50 group"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="w-6 h-6 text-white/70 group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center text-white/30 text-sm">
          <div className="border-l-2 border-primary h-8 mb-2" />
          <span>Scroll</span>
        </div>
      </motion.div>
    </section>
  )
}
