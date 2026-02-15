import { useState, useEffect } from 'react'
export default function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    let ticking = false
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return progress
}