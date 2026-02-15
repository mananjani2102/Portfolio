import { useState, useEffect, useRef, useCallback } from 'react'
export default function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const latestPos = useRef({ x: 0, y: 0 })
  const handler = useCallback((e) => {
    latestPos.current.x = e.clientX
    latestPos.current.y = e.clientY
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(() => {
        setPosition({ x: latestPos.current.x, y: latestPos.current.y })
        rafRef.current = null
      })
    }
  }, [])
  useEffect(() => {
    window.addEventListener('mousemove', handler, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handler)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [handler])

  return position
}