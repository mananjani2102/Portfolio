import { useRef, useEffect, useState } from 'react'
export default function SectionWrapper({ id, children, className = '', center = false }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <section
      ref={ref}
      id={id}
      className={`relative py-20 md:py-28 lg:py-32 overflow-hidden ${visible ? 'section-animate' : 'opacity-0'} ${className}`}
      style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 800px' }}
    >
      <div className={`mx-auto w-full max-w-7xl px-8 sm:px-12 md:px-20 lg:px-24 xl:px-32 ${center ? 'text-center flex flex-col items-center' : ''}`}>
        {children}
      </div>
    </section>
  )
}