import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedCounter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    const timer = requestAnimationFrame((time) => {
      startTime = time
      const animate = (time) => {
        const progress = Math.min((time - startTime) / (duration * 1000), 1)
        setCount(Math.floor(end * progress))
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
      requestAnimationFrame(animate)
    })
    return () => cancelAnimationFrame(timer)
  }, [end, duration])

  return <span>{count}</span>
}

export default function About() {
  const stats = [
    { num: 2, label: 'Production\nProjects Shipped', suffix: '+' },
    { num: 15, label: 'Average MVP\nBuild Time', suffix: ' Days' },
    { num: 4, label: 'Technologies\nMastered', suffix: '+' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={itemVariants}
            className="mb-16 max-w-3xl"
          >
            <p className="text-lg leading-relaxed text-white/80 mb-4">
              I'm a CS student at <span className="text-primary font-semibold">IPS Academy, Indore</span>, passionate about building production-ready web applications and AI solutions. I specialize in shipping MVPs fast — combining modern tech stacks with intelligent automation to deliver results in days, not months.
            </p>
            <p className="text-lg leading-relaxed text-white/70">
              My approach: Pick the right tools, write clean code, deploy quickly. Whether it's building from scratch or optimizing existing systems, I focus on solving real problems with real impact.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-8 glass-dark hover:border-primary/50 transition-all group"
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl md:text-6xl font-black mb-2">
                  <span className="gradient-text">
                    <AnimatedCounter end={stat.num} />
                    <span className="text-primary">{stat.suffix}</span>
                  </span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Preview */}
          <motion.div variants={itemVariants} className="p-8 glass-dark">
            <h3 className="font-bold text-xl mb-6 text-white">Core Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'React', 'Node.js', 'Firebase',
                'AI Integration', 'UI/UX Design', 'API Development'
              ].map((skill) => (
                <div key={skill} className="px-4 py-2 bg-white/5 border border-primary/30 rounded-lg text-center text-sm text-white/80 hover:border-primary/70 hover:text-primary transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
