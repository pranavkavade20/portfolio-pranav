import { Link, NavLink } from 'react-router-dom'
function Header() {
  return (
    <nav className="fixed top-5 left-0 right-0 flex justify-center z-1000 px-5">
        <div className="bg-white/10 backdrop-blur-[15px] px-5 py-2.5 rounded-full border border-white/10 flex items-center gap-5 w-full max-w-fit justify-between">
                <Link to="/" className="font-['Anton'] text-2xl text-[#00dc82] no-underline transition-opacity duration-300 hover:opacity-100">PK.py</Link>
            <div className="hidden md:flex gap-6">
              <NavLink to="/skills" className="text-[0.9rem] font-medium opacity-80 hover:opacity-100 hover:text-[#00dc82] transition-all">SKILLS</NavLink>
              <NavLink to="/projects" className="text-[0.9rem] font-medium opacity-80 hover:opacity-100 hover:text-[#00dc82] transition-all">PROJECTS</NavLink>
              <NavLink to="/experience" className="text-[0.9rem] font-medium opacity-80 hover:opacity-100 hover:text-[#00dc82] transition-all">EXPERIENCE</NavLink>
              <NavLink to="/contact" className="text-[0.9rem] font-medium opacity-80 hover:opacity-100 hover:text-[#00dc82] transition-all">CONTACT</NavLink>
            </div>
            <a href="https://drive.google.com/file/d/1JrfkpwbUz0Tlx4LqvbxS1zOXuNDf-Ges/preview" target="_blank"
                className="inline-flex items-center gap-2.5 px-7.5 py-3 rounded-full font-bold uppercase text-[0.9rem] cursor-pointer whitespace-nowrap bg-[#00dc82] text-[#021a1a] hover:scale-105 hover:shadow-[0_0_20px_rgba(0,220,130,0.4)] transition-transform duration-200">
                RESUME <i className="fas fa-arrow-right"></i>
            </a>
        </div>
    </nav>
  )
}

export default Header