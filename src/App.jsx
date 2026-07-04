import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import './index.css'

function App() {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
