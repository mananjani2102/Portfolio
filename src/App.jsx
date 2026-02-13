import { lazy, Suspense } from 'react'
import CustomCursor from './components/CustomCursor'
import Navigation from './components/Navigation'
import ScrollProgress from './components/ScrollProgress'
import useSmoothScroll from './hooks/useSmoothScroll'
import Home from './pages/Home'
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Skills = lazy(() => import('./pages/Skills'))
const Contact = lazy(() => import('./pages/Contact'))
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-brown-700 border-t-accent-gold rounded-full animate-spin" />
    </div>
  )
}
export default function App() {
  useSmoothScroll()
  return (
    <div className="relative">
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <main>
        <Home />
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>
    </div>
  )
}