import Header from './components/layout/Header'
import SocialSidebar from './components/layout/SocialSidebar'
import About from './pages/About'
import Skill from './pages/Skill'
import Project from './pages/Project'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import CustomCursor from './components/ui/CustomCursor'
import './index.css'

function App() {
  return (
    <div className="relative">
      <CustomCursor />
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
