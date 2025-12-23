import React, { useState } from 'react';
import productifyImg from '../../assets/productify.png';
import farmketImg from '../../assets/farmket.png';
function Project() {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      id: 0,
      title: "AI Recipe Assistant",
      tag: "AI / Machine Learning",
      desc: "A smart culinary engine leveraging Scikit-Learn and FAISS to deliver sub-second recipe recommendations based on user inventory and preferences.",
      tech: ['Python', 'Django', 'DRF', 'JavaScript', 'Tailwind', 'AI & ML'],
      links: { code: "https://github.com/pranavkavade20/Recipy", demo: "https://drive.google.com/file/d/1V2SJyqkgycLODRvdd4tYYzgDNGcB7tHx/preview" },
      image: "https://drive.google.com/file/d/1V2SJyqkgycLODRvdd4tYYzgDNGcB7tHx/preview",
      isVideo: true
    },
    {
      id: 1,
      title: "Product Manager",
      tag: "Full Stack Web App",
      desc: "Responsive dashboard for inventory management. Focuses on React Hooks, complex state management, and seamless FastAPI integration for local data persistence.",
      tech: ['React', 'FastAPI', 'PostgreSQL', 'HTML', 'CSS', 'Javascript'],
      links: { code: "https://github.com/pranavkavade20/productify", demo: "#" },
      image: productifyImg,
      isVideo: false
    },
    {
      id: 2,
      title: "Farmket",
      tag: "Real-Time Systems",
      desc: "B2B agricultural marketplace featuring real-time chat and optimized SQL queries for handling high-concurrency transactions between farmers and buyers.",
      tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
      links: { code: "#", demo: "#" },
      image: farmketImg,
      isVideo: false
    }
  ];

  const activeProject = projects[activeTab];

  return (
    <section id="projects" className="py-20 md:py-24 bg-slate-950 relative">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">

        {/* Layout: Stacks on mobile, Side-by-Side on Desktop (lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">

          {/* --- Navigation Bar --- */}
          {/* Mobile: Horizontal Scroll | Desktop: Vertical Sticky Sidebar */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-32 w-full z-10">
            <h2 className="text-2xl md:text-3xl font-['Anton'] text-slate-200 uppercase tracking-widest px-2 lg:px-4">
              Selected Works
            </h2>

            {/* Scroll Container */}
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-3 pb-4 lg:pb-0 scrollbar-hide snap-x">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActiveTab(index)}
                  className={`
                    relative shrink-0 text-left px-6 py-4 rounded-xl transition-all duration-300 border-l-0 lg:border-l-4 whitespace-nowrap group snap-start
                    ${activeTab === index
                      ? 'bg-slate-900 border-emerald-500 shadow-lg shadow-emerald-900/10 scale-[1.02] lg:scale-100' // Active State
                      : 'border-transparent hover:bg-slate-900/50 hover:border-slate-700 opacity-70 hover:opacity-100' // Inactive State
                    }
                  `}
                >
                  <span className={`block text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 transition-colors ${activeTab === index ? 'text-emerald-400' : 'text-slate-500 group-hover:text-slate-400'
                    }`}>
                    {project.tag}
                  </span>
                  <span className={`text-base md:text-lg font-bold transition-colors ${activeTab === index ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                    }`}>
                    {project.title}
                  </span>

                  {/* Mobile Active Indicator (Bottom Line) */}
                  {activeTab === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500 rounded-b-xl lg:hidden"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* --- Content Area (Right Side) --- */}
          <div key={activeTab} className="bg-slate-900/50 border border-slate-800 rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 animate-fade-up">

            {/* Header: Title + Links */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-8">
              <div>
                <h3 className="text-3xl md:text-5xl font-['Anton'] text-white uppercase leading-none mb-3">
                  {activeProject.title}
                </h3>
                {/* Mac Window Dots Decoration */}
                <div className="flex gap-2 opacity-60">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 w-full xl:w-auto">
                <a href={activeProject.links.code} target="_blank" rel="noreferrer"
                  className="flex-1 xl:flex-none text-center px-6 py-2.5 rounded-full border border-slate-700 text-slate-300 hover:bg-white hover:text-black hover:border-white transition-all text-sm font-bold tracking-wide">
                  <i className="fab fa-github mr-2"></i> Code
                </a>
                <a href={activeProject.links.demo} className="flex-1 xl:flex-none text-center px-6 py-2.5 rounded-full bg-emerald-500 text-slate-900 hover:bg-emerald-400 transition-all text-sm font-bold tracking-wide">
                  Live Demo
                </a>
              </div>
            </div>

            {/* Media Area */}
            <div className="aspect-video w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group mb-8 md:mb-10">
              {activeProject.isVideo ? (
                <iframe src={activeProject.image} className="w-full h-full object-cover" allow="autoplay"></iframe>
              ) : (
                <>
                  <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                  <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </>
              )}
            </div>

            {/* Details Grid */}
            {/* Stacks on mobile, 2/3 + 1/3 split on desktop */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h4 className="text-emerald-400 font-bold tracking-widest text-xs md:text-sm uppercase mb-3 md:mb-4">Project Overview</h4>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                  {activeProject.desc}
                </p>
              </div>

              <div>
                <h4 className="text-emerald-400 font-bold tracking-widest text-xs md:text-sm uppercase mb-3 md:mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 text-xs font-mono whitespace-nowrap">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
export default Project;