import { memo } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
const projects = [
  {
    name: 'Golem',
    url: 'https://golem-web-clone.netlify.app/',
    description: "Recreated Golem's striking visual identity with advanced scroll-driven animations and fluid transitions.",
    stack: ['React', 'Tailwind', 'Framer Motion'],
    featured: true,
  },
  {
    name: 'NZXT',
    url: 'https://nzxt-web-clone.netlify.app/',
    description: 'Gaming hardware showcase with smooth product carousels and dynamic component reveals.',
    stack: ['React', 'CSS Modules', 'GSAP'],
  },
  {
    name: 'Acer',
    url: 'https://acerclone.netlify.app/',
    description: 'Clean corporate design with emphasis on product photography and responsive grid layouts.',
    stack: ['React', 'Tailwind CSS'],
  },
  {
    name: 'Bose',
    url: 'https://bose-web-clone.netlify.app/',
    description: 'Premium audio brand aesthetic with rich media integration and immersive scroll experiences.',
    stack: ['React', 'Styled Components', 'Three.js'],
  },
  {
    name: 'ROG',
    url: 'https://rogclone.netlify.app/',
    description: 'Bold gaming brand with aggressive animations, particle effects, and high-contrast design.',
    stack: ['React', 'Tailwind', 'Canvas'],
  },
  {
    name: 'Sure',
    url: 'https://sureclone.netlify.app/',
    description: 'Modern minimalist approach to brand website design with elegant typography and spacing.',
    stack: ['React', 'CSS', 'Framer Motion'],
  },
]
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}
const ProjectCard = memo(function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glow-card group relative block overflow-hidden rounded-2xl bg-brown-900/20 backdrop-blur-sm h-full"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      data-cursor="View"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(201, 169, 110, 0.08) 0%, rgba(184, 115, 51, 0.04) 40%, transparent 70%)',
        }}
      />
      <div className="relative z-[1] p-6 sm:p-8 flex flex-col h-full min-h-[200px] sm:min-h-[260px]">
        <div className="flex items-start justify-between mb-6">
          <span className="text-brown-500 group-hover:text-accent-gold/70 font-mono text-xs tracking-widest transition-colors duration-300">
            0{index + 1}
          </span>
          <ExternalLink
            size={16}
            className="text-brown-600 group-hover:text-accent-gold transition-colors duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 will-change-transform"
            style={{ transition: 'color 0.3s, transform 0.3s' }}
          />
        </div>
        <div className="mt-auto">
          <h3 className="font-serif text-xl sm:text-2xl text-cream-100 mb-2 sm:mb-3 group-hover:text-accent-gold transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-brown-300 text-sm leading-relaxed mb-4 sm:mb-5 group-hover:text-brown-200 transition-colors duration-300">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono text-brown-400 border border-brown-700/50 rounded-full group-hover:border-accent-gold/40 group-hover:text-accent-gold/80 group-hover:bg-accent-gold/5 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  )
})
export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          className="mb-16 sm:mb-20 md:mb-24 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent-gold font-mono text-sm tracking-widest uppercase mb-4">03 / Work</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 mb-6">
            Featured Work
          </h2>
          <p className="text-brown-200 text-lg sm:text-xl leading-relaxed">
            High-fidelity website clones showcasing frontend mastery and attention to detail.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
        <motion.div
          className="mt-10 sm:mt-16 text-center"
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
            View All Projects
            <span className="inline-block arrow-slide">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}