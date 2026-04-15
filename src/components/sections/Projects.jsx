import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Assetshield AI',
      subtitle: 'AI-Powered Digital Asset Protection',
      badge: 'Hackathon Project · H2S Solution Challenge 2026',
      description: 'AI-based media protection system detecting unauthorized usage using perceptual hashing and fingerprinting technology. Prevents digital piracy and unlicensed content distribution.',
      tech: ['React', 'Node.js', 'Firebase', 'AI', 'Perceptual Hashing'],
      accentColor: 'from-primary to-primary/50',
      accentGlow: 'glow',
      links: [
        { label: 'Live Demo', icon: ExternalLink, href: '#' },
        { label: 'GitHub', icon: Github, href: 'https://github.com/yogendrameena121/Assetshield.git' },
      ],
    },
    {
      title: 'FocusFlow',
      subtitle: 'Personal Productivity Dashboard',
      badge: 'SaaS · Portfolio Project',
      description: 'Comprehensive productivity dashboard with task management, Pomodoro timer, time tracking, and visual analytics. Helps developers stay focused and track work efficiently.',
      tech: ['React', 'Firebase', 'Node.js', 'Data Visualization'],
      accentColor: 'from-secondary to-secondary/50',
      accentGlow: 'glow-purple',
      links: [
        { label: 'Live Demo', icon: ExternalLink, href: 'https://focusflow-olive-two.vercel.app/dashboard' },
        { label: 'GitHub', icon: Github, href: 'https://github.com/yogendra121y/focusflow' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-white/60 max-w-2xl">
              Production-ready applications that demonstrate technical expertise, user-focused design, and rapid execution
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-6" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative h-full"
              >
                {/* Animated Gradient Border Background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`} />

                {/* Main Card */}
                <div className={`relative h-full p-8 glass-dark border border-white/10 group-hover:border-white/30 rounded-2xl transition-all duration-500 group-hover:shadow-${project.accentGlow} overflow-hidden`}>
                  {/* Header Badge */}
                  <motion.div
                    className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/20 text-white/70"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.badge}
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent`}>
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-lg text-white/80 mb-4 font-medium">
                    {project.subtitle}
                  </p>

                  {/* Divider */}
                  <div className={`w-12 h-1 bg-gradient-to-r ${project.accentColor} rounded-full mb-6 opacity-50 group-hover:opacity-100 transition-opacity`} />

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed mb-8 text-base">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <p className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-3">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          className={`px-3 py-1 rounded-lg text-xs font-medium bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent border border-white/10`}
                          whileHover={{ y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-6 border-t border-white/10">
                    {project.links.map((link) => {
                      const Icon = link.icon
                      return (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-sm font-medium transition-all group/link"
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {link.label}
                          <Icon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </motion.a>
                      )
                    })}
                  </div>

                  {/* Background Glow Effect */}
                  <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-l ${project.accentColor} opacity-0 blur-3xl group-hover:opacity-5 transition-opacity duration-500 -z-10 rounded-full`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
