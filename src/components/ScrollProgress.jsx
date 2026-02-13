import { motion, useScroll } from 'framer-motion'
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, #7a4f2b, #c9a96e, #d4a574)',
      }}
    />
  )
}