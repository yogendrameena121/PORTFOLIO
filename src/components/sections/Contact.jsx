import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would send the data to your backend or email service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const socials = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:meenayogendra398@gmail.com',
      color: 'from-primary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yogendra-meena',
      color: 'from-primary',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/yogendra121y',
      color: 'from-primary',
    },
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
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Let's Build Something Together</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              I'm always excited about new projects, collaborations, and opportunities to create impact
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="p-8 glass-dark rounded-2xl border border-white/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                    placeholder="Your name"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                    placeholder="your@email.com"
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all resize-none"
                    placeholder="Let me know what you're thinking..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-dark font-semibold flex items-center justify-center gap-2 hover:shadow-glow transition-all disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitted}
                >
                  {submitted ? (
                    <>
                      <span>✓ Message sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Socials */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-between"
            >
              {/* Info Cards */}
              <div className="space-y-4 mb-8">
                {[
                  { label: 'Location', value: 'Indore, India', icon: '📍' },
                  { label: 'Availability', value: 'Open to projects & collaborations', icon: '✨' },
                  { label: 'Response Time', value: 'Usually within 24 hours', icon: '⚡' },
                ].map((info, index) => (
                  <motion.div
                    key={index}
                    className="p-6 glass-dark rounded-2xl border border-white/10 hover:border-primary/50 transition-all"
                    whileHover={{ y: -4 }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm text-white/60 mb-1">{info.icon} {info.label}</p>
                    <p className="text-lg font-semibold text-white">{info.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-medium text-white/60 mb-4">Or connect with me on</p>
                <div className="flex gap-4">
                  {socials.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-lg glass-dark border border-white/10 hover:border-primary/50 group transition-all"
                        whileHover={{ y: -4, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Icon className="w-6 h-6 text-white/70 group-hover:text-primary transition-colors" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
