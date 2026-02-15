import { useEffect } from 'react'
export default function useSmoothScroll() {
  useEffect(() => {
    const isTouchPrimary = window.matchMedia('(pointer: coarse)').matches
    if (isTouchPrimary) return
    let currentY = window.pageYOffset
    let targetY = currentY
    const easeSlowScroll = 0.065
    const easeFastScroll = 0.055
    let ease = easeSlowScroll
    let isScrolling = false
    let rafId = null
    let velocity = 0
    let lastTime = performance.now()
    const scrollSpeedThreshold = 15
    let engineScrolling = false
    function getMaxScroll() {
      return document.documentElement.scrollHeight - window.innerHeight
    }
    const htmlEl = document.documentElement
    htmlEl.style.scrollBehavior = 'auto'
    const onNativeScroll = () => {
      if (!engineScrolling) {
        currentY = window.pageYOffset
        targetY = currentY
        velocity = 0
      }
    }
    window.addEventListener('scroll', onNativeScroll, { passive: true })
    function onWheel(e) {
      e.preventDefault()
      if (!isScrolling) {
        currentY = window.pageYOffset
        targetY = currentY
      }
      let delta = e.deltaY
      if (e.deltaMode === 1) delta *= 40
      if (e.deltaMode === 2) delta *= window.innerHeight
      delta *= 0.35
      velocity += delta * 0.10
      const scrollSpeed = Math.abs(velocity)
      ease = scrollSpeed < scrollSpeedThreshold ? easeSlowScroll : easeFastScroll
      const maxScroll = getMaxScroll()
      targetY += delta
      targetY = Math.max(0, Math.min(targetY, maxScroll))
      if (!isScrolling) {
        isScrolling = true
        engineScrolling = true
        lastTime = performance.now()
        animate()
      }
    }
    function animate() {
      const now = performance.now()
      const deltaTime = Math.min((now - lastTime) / 16.67, 2)
      lastTime = now
      velocity *= 0.94
      const maxScroll = getMaxScroll()
      targetY += velocity * deltaTime
      targetY = Math.max(0, Math.min(targetY, maxScroll))
      const diff = targetY - currentY
      if (Math.abs(diff) > 0.1 || Math.abs(velocity) > 0.1) {
        currentY += diff * ease * Math.min(deltaTime, 2)
        window.scrollTo(0, currentY)
        rafId = requestAnimationFrame(animate)
      } else {
        currentY = targetY
        window.scrollTo(0, currentY)
        isScrolling = false
        engineScrolling = false
        velocity = 0
      }
    }
    function onKeydown(e) {
      let handled = false
      const maxScroll = getMaxScroll()
      if (!isScrolling) {
        currentY = window.pageYOffset
        targetY = currentY
      }
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        targetY += e.key === 'PageDown' ? window.innerHeight * 0.8 : 80
        handled = true
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        targetY -= e.key === 'PageUp' ? window.innerHeight * 0.8 : 80
        handled = true
      } else if (e.key === 'Home') {
        e.preventDefault()
        targetY = 0
        handled = true
      } else if (e.key === 'End') {
        e.preventDefault()
        targetY = maxScroll
        handled = true
      }
      if (handled) {
        targetY = Math.max(0, Math.min(targetY, maxScroll))
        if (!isScrolling) {
          isScrolling = true
          engineScrolling = true
          lastTime = performance.now()
          animate()
        }
      }
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKeydown)
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeydown)
      window.removeEventListener('scroll', onNativeScroll)
      if (rafId) cancelAnimationFrame(rafId)
      htmlEl.style.scrollBehavior = ''
    }
  }, [])
}