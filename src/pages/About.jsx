import { useRef, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Code2, Server, Rocket } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import useInView from '../hooks/useInView'
const DotShaderBackground = lazy(() => import('../components/DotShaderBackground'))
const milestones = [
  { year: 'Early Days', description: 'Started with HTML and CSS, fascinated by creating visual experiences on the web', icon: Sparkles },
  { year: 'Frontend Focus', description: 'Mastered JavaScript, React, and modern frontend frameworks to build dynamic interfaces', icon: Code2 },
  { year: 'Full-Stack Evolution', description: 'Expanded to backend development with Node.js, Express, and MongoDB', icon: Server },
  { year: 'Present', description: 'Building performant, beautiful web applications end-to-end with modern tooling', icon: Rocket },
]
const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '1000+', label: 'Commits This Year' },
  { number: '24/7', label: 'Learning Mode' },
]
function AnimatedCounter({ value, inView }) {
  const isNumeric = /^\d+/.test(value)
  if (!isNumeric || !inView) {
    return <span>{inView ? value : '0'}</span>
  }
  const numericPart = parseInt(value)
  const suffix = value.replace(/^\d+/, '')
  return (
    <span>
      <CountUp target={numericPart} />
      {suffix}
    </span>
  )
}
function CountUp({ target }) {
  const nodeRef = useRef(null)
  return (
    <motion.span
      ref={nodeRef}
      initial="hidden"
      animate="visible"
      onAnimationStart={() => {
        const el = nodeRef.current
        if (!el) return
        const duration = 2000
        const startTime = performance.now()
        const step = (time) => {
          const progress = Math.min((time - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          el.textContent = Math.floor(eased * target)
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }}
    >
      0
    </motion.span>
  )
}
function Timeline() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  return (
    <div ref={ref} className="relative">
      <div className="space-y-8 sm:space-y-10">
        {milestones.map((milestone, i) => (
          <motion.div
            key={i}
            className="flex gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brown-900 border-2 border-brown-600 flex items-center justify-center">
              <milestone.icon size={16} className="text-accent-gold" />
            </div>
            <div className="flex-1 pt-1">
              <p className="text-accent-gold font-mono text-xs tracking-widest uppercase mb-2">{milestone.year}</p>
              <p className="text-brown-200 text-sm sm:text-base leading-relaxed">{milestone.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
export default function About() {
  const [statsRef, statsInView] = useInView({ threshold: 0.2 })
  return (
    <SectionWrapper id="about">
      <Suspense fallback={null}>
        <DotShaderBackground />
      </Suspense>
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <motion.div
          className="mb-16 sm:mb-20 md:mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent-gold font-mono text-sm tracking-widest uppercase mb-4">02 / About</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50">
            About Me & My Journey
          </h2>
        </motion.div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-24">
          <div className="w-full overflow-hidden">
            <motion.h3
              className="font-serif text-xl sm:text-2xl text-cream-100 mb-6 sm:mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              My Journey
            </motion.h3>
            <Timeline />
          </div>
          <div>
            <motion.h3
              className="font-serif text-xl sm:text-2xl text-cream-100 mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Beyond Code
            </motion.h3>
            <motion.div
              className="space-y-4 sm:space-y-5 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-brown-200 text-sm sm:text-base leading-relaxed">
                I believe great software sits at the intersection of engineering and empathy.
                Every line of code is an opportunity to create something that genuinely
                improves how people interact with technology.
              </p>
              <p className="text-brown-200 text-sm sm:text-base leading-relaxed">
                My approach combines meticulous attention to detail with a drive for
                continuous learning. I stay current with emerging technologies and design
                patterns to deliver modern, performant solutions.
              </p>
              <p className="text-brown-200 text-sm sm:text-base leading-relaxed">
                Outside of development, I draw inspiration from architecture, typography,
                and product design. These creative disciplines shape how I think about
                user interfaces and digital experiences.
              </p>
            </motion.div>
            <div ref={statsRef} className="grid grid-cols-3 gap-4 sm:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center p-4 sm:p-6 md:p-8 rounded-2xl bg-brown-900/40 border border-brown-700/60 hover:border-accent-gold/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.15, duration: 0.5 }}
                >
                  <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-accent-gold mb-2">
                    <AnimatedCounter value={stat.number} inView={statsInView} />
                  </p>
                  <p className="text-brown-300 text-[10px] sm:text-xs md:text-sm font-mono tracking-wide uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}