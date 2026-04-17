import { memo, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Youtube } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

/* ─── Image Imports ────────────────────────────────────────────────── */

import imgNexus from '../assets/nexus.png'
import imgSafarsathi from '../assets/safarsathi.png'
import imgGolem from '../assets/golem.png'
import imgNzxt from '../assets/nzxt.png'
import imgAcer from '../assets/acer.png'
import imgBose from '../assets/bose.png'
import imgRog from '../assets/rog.png'
import imgSure from '../assets/sure.png'
import imgClickCounter from '../assets/click-counter.png'
import imgMemoryFlipCard from '../assets/memory-flip-card.png'
import imgColourPicker from '../assets/colour-picker.png'
import imgTypingSpeedTest from '../assets/typing speed test.png'
import imgWhackAMole from '../assets/whack-a-mole.png'

/* ─── Data ─────────────────────────────────────────────────────────── */

const projects = [
  // ── Full Stack ──
  {
    name: 'Nexus AI',
    category: 'Full Stack',
    image: imgNexus,
    description:
      'AI-powered resume analysis SaaS. ATS scoring, full AI resume rewrite, mock interview with live speech intelligence, recruiter bulk-ranking & resume battle mode.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Groq AI', 'Redux', 'Tailwind CSS'],
    live: 'https://nexuss-ai.netlify.app',
    github: 'https://github.com/mananjani2102',
    youtube: null,
  },
  {
    name: 'SafarSathi',
    category: 'Full Stack',
    image: imgSafarsathi,
    description:
      'Full stack travel itinerary builder. Day-wise planner with budget donut chart, public share links, smart search with debounce, filter, sort & pagination.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Recharts', 'Tailwind CSS'],
    live: 'https://safar-sathii.netlify.app',
    github: 'https://github.com/mananjani2102',
    youtube: null,
  },

  // ── Clones ──
  {
    name: 'Golem',
    category: 'Clones',
    image: imgGolem,
    description:
      "Recreated Golem's striking visual identity with advanced scroll-driven animations and fluid transitions.",
    stack: ['React', 'Tailwind', 'Framer Motion'],
    live: null,
    github: 'https://github.com/mananjani2102/web-site/tree/main/GOLEM',
    youtube: 'https://youtu.be/6_Zq02xtRXg',
  },
  {
    name: 'NZXT',
    category: 'Clones',
    image: imgNzxt,
    description:
      'Gaming hardware showcase with smooth product carousels and dynamic component reveals.',
    stack: ['React', 'CSS Modules', 'GSAP'],
    live: 'https://nzxtclone.netlify.app',
    github: 'https://github.com/mananjani2102',
    youtube: 'https://youtu.be/JTkwU_mTDrs',
  },
  {
    name: 'Acer',
    category: 'Clones',
    image: imgAcer,
    description:
      'Full-fidelity Acer clone with pixel-perfect UI components and fully responsive design.',
    stack: ['React', 'Tailwind CSS'],
    live: 'https://acer-clonee.netlify.app',
    github: 'https://github.com/mananjani2102',
    youtube: 'https://youtu.be/xaml7EheKoQ',
  },
  {
    name: 'Bose',
    category: 'Clones',
    image: imgBose,
    description:
      'Premium audio brand aesthetic with rich media integration and immersive scroll experiences.',
    stack: ['React', 'Styled Components', 'Three.js'],
    live: 'https://boseeclone.netlify.app',
    github: 'https://github.com/mananjani2102',
    youtube: 'https://youtu.be/MOF0aAiWues',
  },
  {
    name: 'ROG',
    category: 'Clones',
    image: imgRog,
    description:
      'Bold gaming brand with aggressive animations, particle effects, and high-contrast design.',
    stack: ['React', 'Tailwind', 'Canvas'],
    live: 'https://rogclone.netlify.app',
    github: 'https://github.com/mananjani2102',
    youtube: 'https://youtu.be/l8yUduMpnWk',
  },
  {
    name: 'Sure',
    category: 'Clones',
    image: imgSure,
    description:
      'Modern minimalist brand website with elegant typography and refined spacing.',
    stack: ['React', 'CSS', 'Framer Motion'],
    live: 'https://sureclone.netlify.app',
    github: 'https://github.com/mananjani2102',
    youtube: 'https://youtu.be/mZo7qu5FZog',
  },

  // ── Games ──
  {
    name: 'Click Counter',
    category: 'Games',
    image: imgClickCounter,
    description: 'Simple interactive click counter with clean UI and smooth animations.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://click-counteer.netlify.app',
    github: 'https://github.com/mananjani2102',
    youtube: null,
  },
  {
    name: 'Memory Flip Card',
    category: 'Games',
    image: imgMemoryFlipCard,
    description: 'Classic memory card matching game with flip animations and score tracking.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://memory-fliip-card.netlify.app',
    github: 'https://github.com/mananjani2102',
    youtube: null,
  },
  {
    name: 'Colour Picker',
    category: 'Games',
    image: imgColourPicker,
    description: 'Interactive color picker tool with real-time preview and hex/RGB values.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://colour-piickerr.netlify.app',
    github: 'https://github.com/mananjani2102',
    youtube: null,
  },
  {
    name: 'Typing Speed Test',
    category: 'Games',
    image: imgTypingSpeedTest,
    description: 'Real-time typing speed test measuring WPM and accuracy with live feedback.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://typiing-speed-testt.netlify.app',
    github: 'https://github.com/mananjani2102',
    youtube: null,
  },
  {
    name: 'Whack-a-Mole',
    category: 'Games',
    image: imgWhackAMole,
    description: 'Fast-paced Whack-a-Mole game with increasing difficulty and high score tracking.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://whaack-a-molee.netlify.app',
    github: 'https://github.com/mananjani2102',
    youtube: null,
  },
]

const categories = ['Full Stack', 'Clones', 'Games']

/* ─── Animations ───────────────────────────────────────────────────── */

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, y: -20, scale: 0.97, transition: { duration: 0.3 } },
}

/* ─── Project Card ─────────────────────────────────────────────────── */

const ProjectCard = memo(function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="glow-card group relative overflow-hidden rounded-2xl bg-brown-900/20 backdrop-blur-sm h-full"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
    >
      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(201, 169, 110, 0.08) 0%, rgba(184, 115, 51, 0.04) 40%, transparent 70%)',
        }}
      />

      <div className="relative z-[1] p-6 sm:p-8 flex flex-col h-full">
        {/* Preview image */}
        <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 bg-brown-800/60 border border-brown-700/30">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-5xl text-accent-gold/20 select-none">
                {project.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
              </span>
            </div>
          )}
        </div>

        {/* Card header */}
        <div className="flex items-start justify-between mb-3">
          <span className="text-brown-500 group-hover:text-accent-gold/70 font-mono text-xs tracking-widest transition-colors duration-300">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-accent-gold/60 border border-accent-gold/20 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Card body */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-serif text-xl sm:text-2xl text-cream-100 mb-2 sm:mb-3 group-hover:text-accent-gold transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-brown-300 text-sm leading-relaxed mb-4 sm:mb-5 group-hover:text-brown-200 transition-colors duration-300">
            {project.description}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono text-brown-400 border border-brown-700/50 rounded-full group-hover:border-accent-gold/40 group-hover:text-accent-gold/80 group-hover:bg-accent-gold/5 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Icon buttons row */}
          <div className="flex items-center gap-2 mt-auto pt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-brown-900/60 border border-brown-700/50 flex items-center justify-center text-brown-400 hover:text-accent-gold hover:border-accent-gold/40 transition-all duration-300"
                data-cursor="GitHub"
              >
                <Github size={15} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-brown-900/60 border border-brown-700/50 flex items-center justify-center text-brown-400 hover:text-accent-gold hover:border-accent-gold/40 transition-all duration-300"
                data-cursor="Live Demo"
              >
                <ExternalLink size={15} />
              </a>
            )}
            {project.youtube && (
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-brown-900/60 border border-brown-700/50 flex items-center justify-center text-brown-400 hover:text-accent-gold hover:border-accent-gold/40 transition-all duration-300"
                data-cursor="YouTube"
              >
                <Youtube size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
})

/* ─── Filter Pill ──────────────────────────────────────────────────── */

function FilterPill({ label, active, onClick, count }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-5 py-2 text-sm font-mono tracking-wide rounded-full border transition-all duration-300 cursor-pointer ${
        active
          ? 'bg-brown-800/50 border-accent-gold/30 text-accent-gold shadow-[0_0_12px_rgba(201,169,110,0.08)]'
          : 'border-brown-700 text-brown-300 hover:border-accent-gold hover:text-cream-100'
      }`}
    >
      {label}
      <span
        className={`ml-2 text-xs ${
          active ? 'text-accent-gold/60' : 'text-brown-500'
        }`}
      >
        {count}
      </span>
    </button>
  )
}

/* ─── Main Section ─────────────────────────────────────────────────── */

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Full Stack')

  const filteredProjects = useMemo(
    () => projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  )

  const categoryCounts = useMemo(() => {
    const counts = {}
    categories.forEach((cat) => {
      counts[cat] = projects.filter((p) => p.category === cat).length
    })
    return counts
  }, [])

  return (
    <SectionWrapper id="projects">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-12 sm:mb-16 md:mb-20 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent-gold font-mono text-sm tracking-widest uppercase mb-4">
            03 / Work
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 mb-6">
            Showcased Work
          </h2>
          <p className="text-brown-200 text-lg sm:text-xl leading-relaxed">
            A curated collection of projects spanning full-stack applications, brand clones & interactive games.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((cat) => (
            <FilterPill
              key={cat}
              label={cat}
              active={activeCategory === cat}
              count={categoryCounts[cat]}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All on GitHub */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/mananjani2102"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 border border-brown-700 text-cream-200 font-medium rounded-full transition-all duration-300 hover:border-accent-gold hover:text-accent-gold"
            data-cursor="GitHub"
          >
            <Github size={18} />
            View All on GitHub
            <span className="inline-block arrow-slide">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}