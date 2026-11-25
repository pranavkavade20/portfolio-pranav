import React, { useState, useEffect, useCallback } from 'react'
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { FileText, Github, Linkedin } from 'lucide-react'
import Header from './components/layout/Header'
import BottomNav from './components/layout/BottomNav'
import SocialSidebar from './components/layout/SocialSidebar'
import NavBar from './components/ui/NavBar'
import Home from './pages/Home.jsx'
import Skill from './pages/Skill'
import Project from './pages/Project'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import PortfolioLoader from './components/ui/PortfolioLoader'
import SmoothScroll from './components/ui/SmoothScroll'
import ErrorBoundary from './components/ui/ErrorBoundary'
import OfflineBanner from './components/ui/OfflineBanner'
import { isNavPathActive, navItems } from './config/navigation'
import { portfolioConfig } from './config/portfolio'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { SnackbarProvider } from './components/ui/Snackbar.jsx'

function SidebarFooter() {
  return (
    <div className="flex flex-col gap-1">
      <a
        href="https://github.com/pranavkavade20"
        target="_blank"
        rel="noopener noreferrer"
        className="state-layer flex items-center gap-3 px-4 min-h-[48px] rounded-full text-sm font-medium text-on-surface-variant hover:text-on-surface"
        aria-label="GitHub Profile"
      >
        <Github size={18} aria-hidden="true" />
        <span>GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/in/pranavkavade20"
        target="_blank"
        rel="noopener noreferrer"
        className="state-layer flex items-center gap-3 px-4 min-h-[48px] rounded-full text-sm font-medium text-on-surface-variant hover:text-on-surface"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={18} aria-hidden="true" />
        <span>LinkedIn</span>
      </a>
      <a
        href={portfolioConfig.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="state-layer flex items-center gap-3 px-4 min-h-[48px] rounded-full text-sm font-medium text-primary hover:bg-primary-container/50"
        aria-label="View Résumé PDF"
      >
        <FileText size={18} aria-hidden="true" />
        <span>Résumé</span>
      </a>
    </div>
  )
}

function RailFooter() {
  return (
    <a
      href={portfolioConfig.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="touch-target rounded-full text-primary hover:bg-primary-container state-layer"
      aria-label="View Résumé PDF"
      title="View Résumé"
    >
      <FileText size={20} aria-hidden="true" />
    </a>
  )
}

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

  // Keyboard navigation for fast view switching (ArrowLeft / ArrowRight when not inside interactive widgets)
  useEffect(() => {
    const routes = ['/', '/experience', '/skills', '/projects', '/contact']
    const handleKeyDown = (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return
      const activeEl = document.activeElement
      if (
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(activeEl?.tagName) ||
        activeEl?.closest('[role="tablist"], [role="dialog"]')
      ) {
        return
      }
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

  const checkActive = useCallback(
    (path) => isNavPathActive(location.pathname, path),
    [location.pathname]
  )

  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <SnackbarProvider>
          <SmoothScroll>
            <div className="relative min-h-dvh flex flex-col bg-background text-on-surface transition-colors duration-base">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:min-h-[48px] focus:inline-flex focus:items-center focus:rounded-full focus:bg-primary focus:text-on-primary focus:font-semibold"
            >
              Skip to main content
            </a>

            <AnimatePresence mode="wait">
              {isLoading && (
                <PortfolioLoader
                  key="portfolio-loader"
                  onComplete={handleLoaderComplete}
                />
              )}
            </AnimatePresence>

            {/* Top AppBar */}
            <Header />
            <OfflineBanner />

            {/* Adaptive Shell: Flush-left Rail (600-839) & Sidebar (840+), Centered Content, Wide Context Column (1200+) */}
            <div className="flex-1 flex w-full">
              <NavBar
                variant="rail"
                items={navItems}
                isActive={checkActive}
                footer={<RailFooter />}
                ariaLabel="Tablet Navigation Rail"
              />

              <NavBar
                variant="sidebar"
                items={navItems}
                isActive={checkActive}
                footer={<SidebarFooter />}
                ariaLabel="Desktop Navigation Sidebar"
              />

              <main
                id="main-content"
                tabIndex={-1}
                className="flex-1 min-w-0 flex flex-col pb-[calc(var(--bottom-nav-height)+env(safe-area-inset-bottom)+var(--space-6))] tablet:pb-10 focus:outline-none"
              >
                <ErrorBoundary onReset={() => navigate('/')}>
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
                </ErrorBoundary>
              </main>

              {/* Right Contextual Column (1200px+) */}
              <SocialSidebar />
            </div>

            {/* Mobile Bottom Navigation (<600px) */}
            <BottomNav />
          </div>
        </SmoothScroll>
      </SnackbarProvider>
    </ThemeProvider>
    </MotionConfig>
  )
}

export default App
