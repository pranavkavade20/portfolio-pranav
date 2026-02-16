import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Skill from './components/Skill/Skill.jsx'
import Project from './components/Project/Project.jsx'
import Contact from './components/Contact/Contact.jsx'
import Experience from './components/Experience/Experience.jsx'
import About from './components/About/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<About />} />
      <Route path='skills' element={<Skill />} />
      <Route path='projects' element={<Project />} />
      <Route path='contact' element={<Contact />} />
      <Route path='experience' element={<Experience />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
