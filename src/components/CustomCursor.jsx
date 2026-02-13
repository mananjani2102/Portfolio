import { useEffect, useState, useRef, useSyncExternalStore } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
const subscribe = () => () => { }
const getIsFinePointer = () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
export default function CustomCursor() {
  const isFinePointer = useSyncExternalStore(subscribe, getIsFinePointer, () => false)
  const [hovered, setHovered] = useState(false)
  const [hoverText, setHoverText] = useState('')
  const [visible, setVisible] = useState(false)
  const visibleRef = useRef(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300, mass: 0.5 })
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300, mass: 0.5 })
  useEffect(() => {
    if (!isFinePointer) return
    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!visibleRef.current) {
        visibleRef.current = true
        setVisible(true)
      }
    }
    const handleOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor]')
      if (target) {
        setHovered(true)
        setHoverText(target.getAttribute('data-cursor') || '')
      }
    }
    const handleOut = (e) => {
      const target = e.target.closest('a, button, [data-cursor]')
      if (target) {
        setHovered(false)
        setHoverText('')
      }
    }
    const handleLeave = () => {
      visibleRef.current = false
      setVisible(false)
    }
    const handleEnter = () => {
      visibleRef.current = true
      setVisible(true)
    }
    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)
    document.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseenter', handleEnter)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
      document.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseenter', handleEnter)
    }
  }, [cursorX, cursorY, isFinePointer])
  if (!isFinePointer) return null
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ x: springX, y: springY }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: hovered ? 2.5 : 1,
      }}
      transition={{
        opacity: { duration: 0.2 },
        scale: { type: 'spring', damping: 20, stiffness: 300 },
      }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <div
          className={`rounded-full transition-all duration-300 flex items-center justify-center ${hovered ? 'w-12 h-12' : 'w-3 h-3'}`}
          style={{
            background: hovered
              ? 'radial-gradient(circle, rgba(201, 169, 110, 0.95) 0%, rgba(201, 169, 110, 0.7) 100%)'
              : '#c9a96e',
            boxShadow: hovered
              ? '0 0 20px rgba(201, 169, 110, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.1)'
              : '0 0 8px rgba(201, 169, 110, 0.3)',
          }}
        >
          {hoverText && (
            <span
              className="font-sans font-bold uppercase whitespace-nowrap"
              style={{
                fontSize: '7px',
                color: '#1a0f08',
                letterSpacing: '0.02em',
                lineHeight: 1,
              }}
            >
              {hoverText}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}