import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Download, X, GraduationCap, MapPin, Mail, Code2 } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

const RESUME_PDF = '/manan_jani_resume_v2.pdf'

/* ─── Quick Info Data ──────────────────────────────────────────────── */

const quickInfo = [
  { icon: GraduationCap, text: 'CodingGita × Swaminarayan University' },
  { icon: MapPin, text: 'Ahmedabad, Gujarat' },
  { icon: Mail, text: 'manan.jani.cg@gmail.com' },
  { icon: Code2, text: 'React · Node.js · MongoDB' },
]

/* ─── Modal ────────────────────────────────────────────────────────── */

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.25 },
  },
}

function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-brown-950/95 backdrop-blur-md"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-brown-700/60 shadow-2xl"
            style={{ width: '90vw', height: '88vh' }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close resume viewer"
              className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-brown-900 border border-brown-700 text-cream-100 hover:text-accent-gold hover:border-accent-gold transition-all duration-300 cursor-pointer"
              data-cursor="Close"
            >
              <X size={20} />
            </button>

            <iframe
              src={RESUME_PDF}
              title="Manan Jani Resume"
              width="100%"
              height="100%"
              className="bg-brown-900"
              style={{ border: 'none' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ─── Main Section ─────────────────────────────────────────────────── */

export default function Resume() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <SectionWrapper id="resume">
        <div className="w-full max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            className="mb-12 sm:mb-16 md:mb-20 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent-gold font-mono text-sm tracking-widest uppercase mb-4">
              06 / Resume
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 mb-6">
              My Resume
            </h2>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left column — Info panel */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-accent-gold/60 text-xs tracking-widest uppercase mb-4">
                Curriculum Vitae
              </p>
              <h3 className="font-serif text-3xl text-cream-50 mb-1">
                Manan Jani
              </h3>
              <p className="font-mono text-brown-300 text-sm tracking-wider mb-6">
                Fullstack Developer
              </p>

              <div className="border-t border-brown-700 mb-6" />

              {/* Quick info rows */}
              <div className="space-y-4 mb-8">
                {quickInfo.map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brown-900/60 border border-brown-800/50 flex items-center justify-center shrink-0">
                      <item.icon size={14} className="text-accent-gold/70" />
                    </div>
                    <span className="text-brown-200 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="group inline-flex items-center gap-2.5 bg-accent-gold text-brown-950 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,110,0.3)] cursor-pointer"
                  data-cursor="View"
                >
                  <Eye size={16} className="transition-transform duration-300 group-hover:scale-110" />
                  View Resume
                </button>
                <a
                  href={RESUME_PDF}
                  download
                  className="group inline-flex items-center gap-2.5 border border-brown-700 text-cream-200 px-6 py-3 rounded-full transition-all duration-300 hover:border-accent-gold hover:text-accent-gold"
                  data-cursor="Download"
                >
                  <Download size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download
                </a>
              </div>
            </motion.div>

            {/* Right column — PDF preview */}
            <motion.div
              className="relative rounded-2xl overflow-hidden border border-brown-700/50 bg-brown-900/40"
              style={{ height: '420px' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Gold top bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-brown-700/50 bg-brown-900/60">
                <div className="w-3 h-3 rounded-full bg-brown-700" />
                <div className="w-3 h-3 rounded-full bg-brown-700" />
                <div className="w-3 h-3 rounded-full bg-accent-gold/40" />
                <span className="ml-2 font-mono text-xs text-brown-500 tracking-wider">
                  manan_jani_resume_v2.pdf
                </span>
              </div>
              {/* PDF iframe */}
              <iframe
                src="/manan_jani_resume_v2.pdf"
                title="Manan Jani Resume"
                className="w-full"
                style={{ height: 'calc(420px - 44px)', border: 'none' }}
              />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <ResumeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
