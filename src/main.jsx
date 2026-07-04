import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Skill from './pages/Skill.jsx'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'
import Experience from './pages/Experience.jsx'
import About from './pages/About.jsx'

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
