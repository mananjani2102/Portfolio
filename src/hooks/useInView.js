import { useState, useEffect, useRef } from 'react'
export default function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (options.once !== false) observer.unobserve(element)
        }
      },
      { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px' }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin, options.once])
  return [ref, inView]
}