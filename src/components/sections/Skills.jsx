import { motion } from 'framer-motion'
import { Code2, Server, Brain } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: ['React', 'HTML', 'CSS', 'Tailwind', 'JavaScript'],
      color: 'from-primary',
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Node.js', 'Firebase', 'REST APIs', 'Database Design'],
      color: 'from-secondary',
    },
    {
      icon: Brain,
      title: 'AI & Tools',
      skills: ['AI Integration', 'Perceptual Hashing', 'Git', 'Figma'],
      color: 'from-primary',
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
    <section id="skills" className="py-20 md:py-32 relative">
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
              <span className="gradient-text">Skills & Technologies</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A curated toolkit for building modern, scalable, and fast applications
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group relative"
                >
                  {/* Gradient Border Animation */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                  {/* Card Content */}
                  <div className="relative p-8 glass-dark hover:border-primary/50 rounded-2xl transition-all duration-300 group-hover:shadow-glow">
                    {/* Icon */}
                    <motion.div
                      className={`mb-6 p-3 rounded-lg bg-gradient-to-br ${category.color} to-secondary/50 w-fit`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-8 h-8 text-dark" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-6 text-white">
                      {category.title}
                    </h3>

                    {/* Skills List */}
                    <div className="space-y-3">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center text-white/80"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="w-2 h-2 rounded-full bg-primary mr-3 inline-block" />
                          {skill}
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-2xl pointer-events-none" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
