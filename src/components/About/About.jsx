import React from 'react';
import profileImg from '../../assets/profile.jpg';

import pythonImg from '../../assets/python.png';
import djangoImg from '../../assets/django.png';
import reactImg from '../../assets/react.png';
import jsImg from '../../assets/javascript.png';
import bun from '../../assets/bun.png';
import postgresqlImg from '../../assets/postgresql.png'

function About() {
  return (
    <main className="min-h-screen bg-slate-50 relative overflow-hidden flex flex-col items-center pt-24 pb-20 md:pt-32 md:pb-32">

      {/* --- Global Background: Blueprint Grid & Pastel Blobs --- */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}
      ></div>
      <div className="absolute top-[-5%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-200/60 rounded-full blur-[80px] md:blur-[100px] z-0 animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-blue-200/60 rounded-full blur-[80px] md:blur-[120px] z-0 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10 flex flex-col w-full">

        {/* --- SECTION 1: Hero Typography --- */}
        <div className="w-full flex flex-col justify-center mt-4 md:mt-8 mb-12">
          <h1 className="font-['Anton'] uppercase tracking-wide leading-[0.9] text-5xl sm:text-7xl md:text-[8rem] lg:text-[7rem] flex flex-col w-full relative z-10 select-none items-center md:items-start">
            <span className="text-slate-900 md:ml-[10%] drop-shadow-sm transition-all duration-300">
              TURNING
            </span>

            <span className="self-center bg-white border-[3px] md:border-[4px] border-slate-900 px-4 py-2 md:py-4 md:px-12 transform -rotate-2 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] my-3 md:my-4 z-20 text-center whitespace-nowrap max-w-full overflow-hidden">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 bg-clip-text text-transparent">
                LOGIC INTO
              </span>
            </span>

            <span className="self-center md:self-end md:mr-[10%] text-transparent transition-all duration-300" style={{ WebkitTextStroke: '2px #0f172a' }}>
              SYSTEMS
            </span>
          </h1>
        </div>

        {/* --- SECTION 2: Tech Stack "Stickers" --- */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-20 md:mb-32 z-30 relative px-2">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl border-[3px] border-slate-900 p-2 md:p-3 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] md:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rotate-12 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 transform -translate-y-1 md:-translate-y-2">
            <img src={postgresqlImg} alt="JS" className="w-full h-full object-contain" />
          </div>
          <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-xl md:rounded-2xl border-[3px] border-slate-900 p-3 md:p-4 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] md:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] -rotate-6 hover:rotate-0 hover:-translate-y-2 transition-all duration-300">
            <img src={djangoImg} alt="Python" className="w-full h-full object-contain" />
          </div>
          <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-xl md:rounded-2xl border-[3px] border-slate-900 p-3 md:p-5 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] md:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 transform translate-y-1 md:translate-y-2">
            <img src={pythonImg} alt="Django" className="w-full h-full object-contain" />
          </div>
          <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-xl md:rounded-2xl border-[3px] border-slate-900 p-3 md:p-4 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] md:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rotate-12 hover:rotate-0 hover:-translate-y-2 transition-all duration-300">
            <img src={reactImg} alt="React" className="w-full h-full object-contain" />
          </div>
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl border-[3px] border-slate-900 p-2 md:p-3 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] md:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] -rotate-12 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 transform -translate-y-1 md:-translate-y-2">
            <img src={jsImg} alt="JS" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* --- SECTION 3: The Editorial Grid (Identity & Journey) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          
          {/* Left Column: Polaroid */}
          <div className="relative flex justify-center lg:justify-end order-1 mt-8 lg:mt-0">
            <div className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 w-24 md:w-32 h-6 md:h-8 bg-yellow-200/80 backdrop-blur-sm border-2 border-slate-900 -rotate-3 z-30 shadow-sm"></div>
            
            <div className="absolute -left-0 sm:-left-8 md:-left-12 top-0 md:top-12 bg-emerald-400 border-[3px] border-slate-900 px-3 py-2 md:px-6 md:py-3 rounded-full shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] md:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] z-30 -rotate-6 md:-rotate-12 animate-float">
              <span className="font-bold text-slate-900 text-[10px] md:text-sm tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full animate-pulse"></span>
                Ready to Build
              </span>
            </div>

            <div className="bg-white p-3 pb-10 md:p-6 md:pb-20 border-[3px] border-slate-900 rounded-xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] md:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] transform rotate-2 md:rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-[260px] sm:max-w-[300px] md:max-w-[350px] relative z-20">
              <div className="w-full aspect-[4/5] bg-slate-200 border-2 border-slate-900 rounded-lg overflow-hidden">
                <img src={profileImg} alt="Pranav Kavade" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="absolute bottom-2 md:bottom-4 left-0 w-full text-center">
                <span className="font-['Anton'] text-xl md:text-2xl text-slate-900 tracking-wider block">PRANAV KAVADE</span>
                <p className="text-slate-500 text-[10px] md:text-xs font-bold font-mono mt-0 md:mt-1">Ichalkaranji, Maharashtra</p>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="order-2 space-y-8 md:space-y-10 text-center lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-['Anton'] text-slate-900 uppercase leading-[1.1] mb-2 md:mb-6">
                The Dev Behind <br />
                <span className="bg-blue-500 text-white px-2 py-1 md:px-4 md:py-1 border-[3px] border-slate-900 inline-block -rotate-2 mt-1 md:mt-2 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] md:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] text-2xl sm:text-4xl md:text-6xl">
                  The Code.
                </span>
              </h2>
            </div>

            <div className="space-y-6 md:space-y-8 text-left">
              <div className="bg-white border-[3px] border-slate-900 p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] md:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 transition-transform">
                <h3 className="text-slate-900 font-bold tracking-widest text-xs md:text-sm uppercase mb-3 md:mb-4 border-b-2 border-slate-100 pb-2 inline-flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full inline-block"></span> Identity
                </h3>
                <p className="text-slate-700 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                  I am a high-energy, detail-oriented <strong className="text-slate-900 font-black border-b-2 border-blue-400">Full Stack Engineer</strong>. As a fresher, I don't just write code; I obsess over architecture, scalability, and user experience. I thrive in the space where robust backend logic meets seamless frontend design.
                </p>
              </div>

              <div className="bg-white border-[3px] border-slate-900 p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] md:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 transition-transform">
                <h3 className="text-slate-900 font-bold tracking-widest text-xs md:text-sm uppercase mb-3 md:mb-4 border-b-2 border-slate-100 pb-2 inline-flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span> The Journey
                </h3>
                <p className="text-slate-700 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                  My path has been heavily focused on hands-on building. From designing complex RESTful APIs and optimizing databases to currently pouring my energy into robust platforms like Farmket, I've spent my time solving real-world data flow problems. I have built AI-powered tools, e-commerce engines, and secure authentication systems using <strong className="text-slate-900">Python, Django, and React</strong>.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 pt-4">
              <div className="bg-slate-100 border-2 border-slate-900 px-4 py-2 md:px-5 md:py-2.5 rounded-xl font-bold text-slate-900 text-[10px] sm:text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] md:shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] whitespace-nowrap">
                🚀 Clean Architecture
              </div>
              <div className="bg-slate-100 border-2 border-slate-900 px-4 py-2 md:px-5 md:py-2.5 rounded-xl font-bold text-slate-900 text-[10px] sm:text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] md:shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] whitespace-nowrap">
                ⚡ Software Development
              </div>
              <div className="bg-slate-100 border-2 border-slate-900 px-4 py-2 md:px-5 md:py-2.5 rounded-xl font-bold text-slate-900 text-[10px] sm:text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] md:shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] whitespace-nowrap">
                🧠 Continuous Learner
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 4: Bottom Brutalist CTA Card --- */}
        <div className="relative z-40 w-full max-w-[90%] md:max-w-4xl mx-auto mt-8">
          <div className="absolute -top-10 right-0 md:-top-16 md:-right-10 w-24 h-24 md:w-36 md:h-36 bg-slate-200 rounded-full border-[3px] md:border-[4px] border-slate-900 overflow-hidden shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] md:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] z-50 transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <img src={bun} alt="Pranav" className="w-full h-full object-cover" />
          </div>

          <div className="bg-white border-[3px] border-slate-900 rounded-3xl md:rounded-[2rem] p-8 md:p-14 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] md:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] text-center space-y-8 md:space-y-10 transition-transform hover:-translate-y-1">
            <p className="text-lg md:text-3xl text-slate-700 font-medium leading-relaxed md:pr-16 md:pl-8">
              Creating secure, scalable <strong className="text-blue-600 font-black">Python</strong> & <strong className="text-emerald-500 font-black">React</strong> Web Applications. Let's build something great.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full">
              <a href="https://github.com/pranavkavade20"
                className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 rounded-full border-[3px] border-slate-900 bg-white text-slate-900 font-bold text-sm md:text-base tracking-widest uppercase hover:bg-slate-100 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                View Work
              </a>
              <a href="mailto:pranavkavade9@gmail.com"
                className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 rounded-full border-[3px] border-slate-900 bg-emerald-400 text-slate-900 font-bold text-sm md:text-base tracking-widest uppercase transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-emerald-300">
                Hire Me
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default About;