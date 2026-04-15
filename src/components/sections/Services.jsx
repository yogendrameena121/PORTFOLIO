import { motion } from 'framer-motion'
import { Zap, Brain, Sparkles } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: 'MVP Development',
      description: 'From idea to deployed product in 1–2 weeks. Fast, clean, production-ready code that scales.',
      features: ['Rapid prototyping', 'Firebase backend', 'Responsive design', 'Deployment ready'],
    },
    {
      icon: Brain,
      title: 'AI-Powered Web Apps',
      description: 'Smart integrations using modern AI tools. Automate workflows, enhance UX, unlock insights.',
      features: ['AI integration', 'ML pipelines', 'Chatbots', 'Automation'],
    },
    {
      icon: Sparkles,
      title: 'Landing Pages & Dashboards',
      description: 'High-converting, fast, and visually polished. Custom designs that drive results.',
      features: ['Analytics dashboards', 'Custom design', 'SEO optimized', 'Performance-tuned'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">What I Can Build For You</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Tailored solutions that accelerate your goals and drive business impact
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6" />
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group relative"
                  whileHover={{ y: -8 }}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl" />

                  {/* Card */}
                  <div className="relative p-8 glass-dark border border-white/10 group-hover:border-primary/50 rounded-2xl transition-all duration-300">
                    {/* Icon */}
                    <motion.div
                      className="mb-6 p-4 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 w-fit group-hover:from-primary/40 group-hover:to-secondary/40 transition-all"
                      whileHover={{ rotate: 8, scale: 1.1 }}
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:gradient-text transition-all">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center text-white/60 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* Arrow Animation */}
                    <motion.div
                      className="mt-6 pt-6 border-t border-white/10 flex items-center text-primary font-semibold text-sm"
                      whileHover={{ x: 4 }}
                    >
                      Learn more →
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div
            variants={cardVariants}
            className="mt-16 p-8 glass-dark border border-primary/30 rounded-2xl text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
            <p className="text-white/70 mb-6">Let's discuss how I can help bring your vision to life</p>
            <motion.a
              href="mailto:yogendra@example.com"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-dark font-semibold hover:shadow-glow transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
