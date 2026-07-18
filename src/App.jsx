import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './components/layout/Header'
import SocialSidebar from './components/layout/SocialSidebar'
import About from './pages/About'
import Skill from './pages/Skill'
import Project from './pages/Project'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Preloader from './components/ui/Preloader'
import './index.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      <Header />
      <SocialSidebar />
      <main className="flex flex-col w-full">
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skill />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
