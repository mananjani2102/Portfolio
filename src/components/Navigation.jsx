import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]
const menuVariants = {
  closed: { opacity: 0, transition: { duration: 0.25 } },
  open: { opacity: 1, transition: { duration: 0.35, staggerChildren: 0.08, delayChildren: 0.15 } },
}
const itemVariants = {
  closed: { opacity: 0, y: 40, x: -20 },
  open: { opacity: 1, y: 0, x: 0, transition: { type: 'spring', damping: 22, stiffness: 150 } },
}
const lineVariants = {
  closed: { scaleX: 0 },
  open: { scaleX: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 2400)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])
  const handleClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }
  return (
    <>
      <AnimatePresence>
        {showNav && (
          <>
            <motion.nav 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-[8000] px-8 py-3 items-center justify-center gap-10 bg-brown-950/50 backdrop-blur-xl border border-accent-gold/20 rounded-full" 
              style={{ boxShadow: '0 10px 35px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(201, 169, 110, 0.15)' }}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-brown-200 hover:text-accent-gold font-mono text-xs uppercase transition-colors duration-300 relative px-3 py-1"
                  style={{ letterSpacing: '0.15em' }}
                  data-cursor={item.label}
                >
                  {item.label}
                </a>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showNav && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed top-6 right-6 sm:top-8 sm:right-8 z-[9999] w-14 h-14 flex flex-col items-center justify-center gap-1.5 border border-brown-600/40 bg-brown-900/80 backdrop-blur-md hover:border-accent-gold/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,169,110,0.15)]"
            style={{
              borderRadius: '30%',
            }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            data-cursor="Menu"
          >
            <motion.span
              className="block w-6 h-[2px] bg-cream-100 origin-center"
              animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-[2px] bg-cream-100"
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-[2px] bg-cream-100 origin-center"
              animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-brown-950/98 backdrop-blur-xl"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="w-fit mx-auto h-full flex flex-col justify-center">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  variants={itemVariants}
                  className="w-full"
                >
                  {i === 0 && (
                    <motion.div
                      variants={lineVariants}
                      className="h-px origin-left"
                      style={{
                        backgroundColor: 'rgba(92, 58, 32, 0.4)',
                        width: '100vw',
                        marginLeft: 'calc(50% - 50vw)',
                      }}
                    />
                  )}
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="group flex items-center w-full py-6 sm:py-8 md:py-10 lg:py-12 px-8 sm:px-12 transition-all duration-300 hover:bg-brown-900/30"
                  >
                    <div className="flex items-center justify-center shrink-0" style={{ width: '80px', minWidth: '80px' }}>
                      <div
                        className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: 'radial-gradient(circle at 30% 30%, rgba(201, 169, 110, 0.15), rgba(26, 15, 8, 0.9) 60%, rgba(15, 10, 5, 1) 100%)',
                          boxShadow: `
                            inset 4px 4px 8px rgba(0, 0, 0, 0.6),
                            inset -2px -2px 6px rgba(201, 169, 110, 0.1),
                            0 2px 8px rgba(0, 0, 0, 0.4),
                            0 0 20px rgba(201, 169, 110, 0.05)
                          `,
                          border: '1px solid rgba(201, 169, 110, 0.2)',
                        }}
                      >
                        <span className="text-accent-gold/90 font-mono text-sm sm:text-base font-medium group-hover:text-accent-gold transition-colors duration-300">
                          0{i + 1}
                        </span>
                      </div>
                    </div>
                    <span
                      className="flex-1 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cream-100 group-hover:text-accent-gold transition-colors duration-300 uppercase whitespace-nowrap pl-6 sm:pl-10"
                      style={{ letterSpacing: '0.1em' }}
                    >
                      {item.label}
                    </span>

                    <span className="text-brown-500 group-hover:text-accent-gold group-hover:translate-x-3 transition-all duration-300 text-2xl sm:text-3xl md:text-4xl opacity-0 group-hover:opacity-100 ml-4 lg:ml-8">
                      →
                    </span>
                  </a>
                  <motion.div
                    variants={lineVariants}
                    className="h-px origin-left"
                    style={{
                      backgroundColor: 'rgba(92, 58, 32, 0.4)',
                      width: '100vw',
                      marginLeft: 'calc(50% - 50vw)',
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}