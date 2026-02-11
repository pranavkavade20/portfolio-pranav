import React, { useState } from 'react';
import productifyImg from '../../assets/productify.png';

function Project() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeDemoIndex, setActiveDemoIndex] = useState(0); 

  const projects = [
    {
      id: 0,
      title: "Farmket",
      tag: "Farmer and Buyer Marketplace",
      desc: "Farmket connects farmers and consumers through a Django-based platform for buying, selling, chatting, and tracking fresh farm products.",
      tech: ['HTML', 'CSS', 'Tailwind CSS', 'Javascript', 'Django', 'SQL', 'PostgreSQL'],
      links: { code: "https://github.com/pranavkavade20/Farmket", demo: "https://drive.google.com/file/d/1ZhMAcBu2UXOkAbW_r-0gKWyNWtCKDgNh/preview" },
      image: "#",
      isVideo: true,
      demos: [
        { label: "Login as Buyer", url: "https://drive.google.com/file/d/1ZhMAcBu2UXOkAbW_r-0gKWyNWtCKDgNh/preview" },
        { label: "Login as Farmer", url: "https://drive.google.com/file/d/1-KoSFK6bPw7gCFEi1vPwHly59D-k6X5I/preview" }
      ]
    },
    {
      id: 1,
      title: "Recipy",
      tag: "AI powered Recipe Assistant",
      desc: "A smart culinary engine leveraging Scikit-Learn and FAISS to deliver sub-second recipe recommendations based on user inventory and preferences.",
      tech: ['Python', 'Django', 'DRF', 'JavaScript', 'Tailwind', 'AI & ML'],
      links: { code: "https://github.com/pranavkavade20/Recipy", demo: "https://drive.google.com/file/d/11ir8zZiosqaJmlcg60Uft2iT2djzGUlA/preview" },
      image: "#",
      isVideo: true,
      demos: [
        { label: "Main Demo", url: "https://drive.google.com/file/d/11ir8zZiosqaJmlcg60Uft2iT2djzGUlA/preview" }
      ]
    },
    {
      id: 2,
      title: "Product Manager",
      tag: "Full Stack Web App",
      desc: "Responsive dashboard for inventory management. Focuses on React Hooks, complex state management, and seamless FastAPI integration for local data persistence.",
      tech: ['React', 'FastAPI', 'PostgreSQL', 'HTML', 'CSS', 'Javascript'],
      links: { code: "https://github.com/pranavkavade20/productify", demo: "#" },
      image: productifyImg,
      isVideo: false,
      demos: [] 
    },
  ];

  const activeProject = projects[activeTab];

  const handleProjectChange = (index) => {
    setActiveTab(index);
    setActiveDemoIndex(0);
  };

  const currentVideoUrl = (activeProject.demos && activeProject.demos.length > 0)
    ? activeProject.demos[activeDemoIndex].url
    : activeProject.links.demo;

  return (
    <section id="projects" className="py-20 md:py-24 bg-slate-50 relative border-t-2 border-slate-200">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">

        {/* Layout: Stacks on mobile, Side-by-Side on Desktop (lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">

          {/* --- Navigation Bar --- */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-32 w-full z-10">
            <h2 className="text-3xl md:text-5xl font-['Anton'] text-slate-900 uppercase tracking-widest px-2 lg:px-4 mb-2">
              Selected <br className="hidden lg:block" />Works
            </h2>

            {/* Scroll Container */}
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-4 pb-4 lg:pb-0 scrollbar-hide snap-x px-2 lg:px-0">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => handleProjectChange(index)}
                  className={`
                    relative shrink-0 text-left px-6 py-5 rounded-2xl transition-all duration-300 border-2 whitespace-nowrap group snap-start
                    ${activeTab === index
                      ? 'bg-white border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] scale-[1.02] lg:scale-100 z-10' 
                      : 'bg-white/50 border-slate-200 hover:bg-white hover:border-slate-900 hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,0.2)]' 
                    }
                  `}
                >
                  <span className={`block text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 transition-colors ${activeTab === index ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-500'}`}>
                    {project.tag}
                  </span>
                  <span className={`text-base md:text-xl font-['Anton'] tracking-wide transition-colors ${activeTab === index ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
                    {project.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* --- Content Area (Right Side) --- */}
          <div key={activeTab} className="bg-white border-[3px] border-slate-900 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] animate-fade-up">

            {/* Header: Title + Links */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-8">
              <div>
                <div className="flex gap-2 opacity-100 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-400 border border-slate-900"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400 border border-slate-900"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400 border border-slate-900"></span>
                </div>
                <h3 className="text-4xl md:text-6xl font-['Anton'] text-slate-900 uppercase leading-none mb-3 tracking-wide">
                  {activeProject.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-4 w-full xl:w-auto">
                <a href={activeProject.links.code} target="_blank" rel="noreferrer"
                  className="flex-1 xl:flex-none text-center px-6 py-3 rounded-full border-2 border-slate-900 bg-white text-slate-900 font-bold tracking-wider uppercase text-xs hover:bg-slate-50 transition-all shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[3px] hover:translate-y-[3px]">
                  <i className="fab fa-github mr-2 text-lg"></i> Code
                </a>
                <a href={activeProject.links.demo} className="flex-1 xl:flex-none text-center px-6 py-3 rounded-full border-2 border-slate-900 bg-emerald-400 text-slate-900 font-bold tracking-wider uppercase text-xs hover:bg-emerald-300 transition-all shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[3px] hover:translate-y-[3px]">
                  Live Demo
                </a>
              </div>
            </div>

            {/* Media Area */}
            <div className="w-full bg-slate-100 rounded-2xl overflow-hidden border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] relative group mb-8 md:mb-10">

              {/* Main Player */}
              <div className="aspect-video w-full bg-slate-200">
                {activeProject.isVideo ? (
                  <iframe
                    key={currentVideoUrl}
                    src={currentVideoUrl}
                    className="w-full h-full object-cover"
                    allow="autoplay"
                    title="Project Demo"
                  ></iframe>
                ) : (
                  <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                )}
              </div>

              {/* Playlist / Video Switcher */}
              {activeProject.demos && activeProject.demos.length > 1 && (
                <div className="bg-white border-t-2 border-slate-900 p-3 flex gap-3 overflow-x-auto scrollbar-hide">
                  {activeProject.demos.map((demo, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveDemoIndex(idx)}
                      className={`
                        px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border-2
                        ${activeDemoIndex === idx
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-900 hover:text-slate-900'
                        }
                      `}
                    >
                      <span className="mr-2 opacity-50 font-mono">0{idx + 1}</span>
                      {demo.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h4 className="text-slate-900 font-bold tracking-widest text-sm uppercase mb-3 border-b-2 border-slate-100 pb-2 inline-block">Project Overview</h4>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                  {activeProject.desc}
                </p>
              </div>

              <div>
                <h4 className="text-slate-900 font-bold tracking-widest text-sm uppercase mb-3 border-b-2 border-slate-100 pb-2 inline-block">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-lg bg-slate-50 border-2 border-slate-200 text-slate-700 text-xs font-mono font-bold whitespace-nowrap shadow-sm">
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