import React, { useState, useEffect, useCallback } from 'react'
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/layout/Header'
import SocialSidebar from './components/layout/SocialSidebar'
import Home from './pages/Home.jsx'
import Skill from './pages/Skill'
import Project from './pages/Project'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import PortfolioLoader from './components/ui/PortfolioLoader'
import SmoothScroll from './components/ui/SmoothScroll'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { SnackbarProvider } from './components/ui/Snackbar.jsx'

function App() {
  // First visit check: run the 7-second intro on first visit or if requested via URL (?replay=true)
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === 'undefined') return false
    const params = new URLSearchParams(window.location.search)
    if (params.get('replay') === 'true' || params.get('intro') === 'true') {
      return true
    }
    return !localStorage.getItem('portfolio_intro_seen')
  })

  const location = useLocation()
  const navigate = useNavigate()

  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  // Backward compatibility for hash links e.g. #experience -> /experience
  useEffect(() => {
    if (window.location.hash) {
      const target = window.location.hash.replace('#', '').toLowerCase()
      const valid = ['home', 'experience', 'skills', 'projects', 'contact']
      if (valid.includes(target)) {
        navigate(target === 'home' ? '/' : `/${target}`, { replace: true })
      }
    }
  }, [navigate])

  // Dynamic Document Title based on current SPA view
  useEffect(() => {
    const titles = {
      '/': 'Pranav Kavade | Full Stack Engineer',
      '/experience': 'Experience | Pranav Kavade',
      '/skills': 'Skills | Pranav Kavade',
      '/projects': 'Projects | Pranav Kavade',
      '/contact': 'Contact | Pranav Kavade',
    }
    document.title = titles[location.pathname] || 'Pranav Kavade | Portfolio'
  }, [location.pathname])

  // Keyboard navigation for fast view switching (ArrowLeft / ArrowRight)
  useEffect(() => {
    const routes = ['/', '/experience', '/skills', '/projects', '/contact']
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return
      const current = location.pathname === '/home' ? '/' : location.pathname
      const currentIndex = routes.indexOf(current)
      if (currentIndex === -1) return

      if (e.key === 'ArrowRight' && currentIndex < routes.length - 1) {
        navigate(routes[currentIndex + 1])
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        navigate(routes[currentIndex - 1])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [location.pathname, navigate])

  return (
    <ThemeProvider>
      <SnackbarProvider>
        <SmoothScroll>
          <div className="relative min-h-screen flex flex-col bg-background text-on-surface transition-colors duration-200">
            <AnimatePresence mode="wait">
              {isLoading && (
                <PortfolioLoader
                  key="portfolio-loader"
                  onComplete={handleLoaderComplete}
                />
              )}
            </AnimatePresence>
            
            {/* Header */}
            <Header />
            
            {/* Left Social Sidebar (Desktop) */}
            <SocialSidebar />
            
            {/* Main Content Area */}
            <main className="flex-1 flex flex-col w-full">
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Navigate to="/" replace />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/skills" element={<Skill />} />
                  <Route path="/projects" element={<Project />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </AnimatePresence>
            </main>
          </div>
        </SmoothScroll>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
