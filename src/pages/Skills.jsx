import { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe, Code2, Server, Wrench, Users, Sparkles,
  FileCode, Palette, Box, Layers, Database, Shield,
  GitBranch, Github, Monitor, Send, Chrome, Cloud, Rocket, MessageSquare, Brain, BookOpen, Zap
} from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
const categories = [
  {
    name: 'Frontend Development',
    icon: Globe,
    skills: [
      { name: 'HTML5', level: 95, icon: FileCode },
      { name: 'CSS3', level: 92, icon: Palette },
      { name: 'JavaScript (ES6+)', level: 90, icon: Code2 },
      { name: 'React.js', level: 90, icon: Box },
      { name: 'Tailwind CSS', level: 85, icon: Layers },
      { name: 'UI/UX Design', level: 80, icon: Palette },
      { name: 'Framer Motion', level: 75, icon: Sparkles },
      { name: 'Three.js', level: 65, icon: Box },
    ],
  },
  {
    name: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 82, icon: Server },
      { name: 'Express.js', level: 80, icon: Zap },
      { name: 'MongoDB', level: 80, icon: Database },
      { name: 'REST API Design', level: 75, icon: Globe },
      { name: 'Auth & Security', level: 70, icon: Shield },
    ],
  },
  {
    name: 'Developer Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 90, icon: GitBranch },
      { name: 'GitHub', level: 90, icon: Github },
      { name: 'VS Code', level: 88, icon: Monitor },
      { name: 'Postman', level: 82, icon: Send },
      { name: 'Chrome DevTools', level: 85, icon: Chrome },
    ],
  },
  {
    name: 'Deployment',
    icon: Cloud,
    skills: [
      { name: 'Netlify', level: 90, icon: Rocket },
      { name: 'Vercel', level: 82, icon: Zap },
      { name: 'Cloud Services', level: 65, icon: Cloud },
    ],
  },
  {
    name: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Communication', level: 90, icon: MessageSquare },
      { name: 'Problem Solving', level: 92, icon: Brain },
      { name: 'Team Collaboration', level: 85, icon: Users },
      { name: 'Fast Learning', level: 88, icon: BookOpen },
    ],
  },
]
const learningItems = ['TypeScript', 'Next.js', 'GraphQL', 'Docker']
const proficiencyLabels = {
  expert: { label: 'Expert', color: 'text-accent-gold', bg: 'bg-accent-gold/15 border-accent-gold/30' },
  advanced: { label: 'Advanced', color: 'text-accent-warm', bg: 'bg-accent-warm/10 border-accent-warm/25' },
  proficient: { label: 'Proficient', color: 'text-brown-300', bg: 'bg-brown-700/20 border-brown-600/25' },
  familiar: { label: 'Familiar', color: 'text-brown-400', bg: 'bg-brown-800/20 border-brown-700/20' },
}
function getProficiency(level) {
  if (level >= 90) return proficiencyLabels.expert
  if (level >= 80) return proficiencyLabels.advanced
  if (level >= 70) return proficiencyLabels.proficient
  return proficiencyLabels.familiar
}

function SkillBar({ skill, delay }) {
  const proficiency = getProficiency(skill.level)
  return (
    <motion.div
      className="group flex items-center justify-between p-3 rounded-xl bg-brown-900/40 border border-brown-800/30 hover:border-accent-gold/30 hover:bg-brown-800/40 transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <div className="flex items-center gap-3">
        <skill.icon size={18} className="text-brown-400 group-hover:text-accent-gold transition-colors duration-300 shrink-0" />
        <span className="text-cream-200 text-sm font-medium">{skill.name}</span>
      </div>
      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase border ${proficiency.color} ${proficiency.bg} transition-colors duration-300`}>
        {proficiency.label}
      </span>
    </motion.div>
  )
}
const contentVariants = {
  enter: { opacity: 0, y: 8 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}
function CategoryTab({ category, index, isActive, onActivate }) {
  const hoverTimerRef = useRef(null)

  const handleMouseEnter = useCallback(() => {
    hoverTimerRef.current = setTimeout(() => {
      onActivate(index)
    }, 200)
  }, [index, onActivate])

  const handleMouseLeave = useCallback(() => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current)
      hoverTimerRef.current = null
    }
  }, [])
  return (
    <motion.button
      className={`w-full text-left p-3 sm:p-4 lg:p-5 rounded-xl border transition-all duration-300 relative overflow-hidden ${isActive
          ? 'bg-brown-800/50 border-accent-gold/30'
          : 'bg-brown-900/20 border-brown-800/30 hover:border-brown-700/50 hover:bg-brown-900/30'
        }`}
      onClick={() => onActivate(index)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-xl"
          layoutId="activeTab"
          style={{
            background: 'linear-gradient(135deg, rgba(201, 169, 110, 0.06) 0%, transparent 60%)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        />
      )}
      <div className="relative flex items-center gap-2 sm:gap-3">
        <category.icon
          size={16}
          className={`shrink-0 transition-colors duration-300 ${isActive ? 'text-accent-gold' : 'text-brown-500'}`}
        />
        <span className={`font-medium text-xs sm:text-sm transition-colors duration-300 ${isActive ? 'text-cream-100' : 'text-brown-300'}`}>
          {category.name}
        </span>
        <span className={`ml-auto text-xs font-mono transition-colors duration-300 ${isActive ? 'text-accent-gold' : 'text-brown-600'}`}>
          {category.skills.length}
        </span>
      </div>
    </motion.button>
  )
}
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const active = categories[activeCategory]
  const handleActivate = useCallback((index) => {
    setActiveCategory(index)
  }, [])
  return (
    <SectionWrapper id="skills">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          className="mb-16 sm:mb-20 md:mb-24 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent-gold font-mono text-sm tracking-widest uppercase mb-4">04 / Skills</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 mb-6">
            Technical Arsenal
          </h2>
          <p className="text-brown-200 text-lg sm:text-xl leading-relaxed">
            Tools and technologies I work with daily to build exceptional digital experiences.
          </p>
        </motion.div>
        <div className="flex flex-col lg:grid lg:grid-cols-[280px_1fr] gap-6 sm:gap-8">
          <div className="flex lg:flex-col gap-2 sm:gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 snap-x snap-mandatory">
            {categories.map((cat, i) => (
              <div key={cat.name} className="shrink-0 lg:shrink lg:w-full min-w-[160px] sm:min-w-[180px] lg:min-w-0 snap-start">
                <CategoryTab
                  category={cat}
                  index={i}
                  isActive={i === activeCategory}
                  onActivate={handleActivate}
                />
              </div>
            ))}
          </div>
          <div className="bg-brown-900/20 border border-brown-800/30 rounded-2xl p-5 sm:p-8 md:p-10 min-h-[300px] sm:min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <active.icon size={20} className="text-accent-gold" />
                  <h3 className="font-serif text-lg sm:text-xl text-cream-100">{active.name}</h3>
                </div>
                <div className="space-y-4 sm:space-y-5">
                  {active.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={i * 0.08}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <motion.div
          className="mt-12 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-serif text-xl sm:text-2xl text-cream-100 mb-6 sm:mb-8 text-center">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {learningItems.map((item, i) => (
              <motion.div
                key={item}
                className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-brown-700/50 bg-brown-900/20 text-brown-200 font-medium text-xs sm:text-sm hover:border-accent-gold/50 hover:text-accent-gold hover:-translate-y-0.5 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}