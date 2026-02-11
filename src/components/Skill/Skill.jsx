import React from 'react'

function Skill() {
  return (
    <section id="skills" className="bg-slate-50 py-20 md:py-32 relative overflow-hidden">

      {/* Background Blueprint Grid to match Home */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}
      ></div>

      <div className="max-w-[1200px] mx-auto px-5 relative z-10">

        <h2 className="text-4xl md:text-6xl font-['Anton'] text-slate-900 uppercase tracking-widest mb-12 text-center">
          Technical Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="p-10 rounded-3xl relative overflow-hidden transition-all duration-300 min-h-[22rem] flex flex-col justify-between bg-[#ff5d5d] border-[3px] border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)] hover:translate-x-2 hover:translate-y-2 text-slate-900 group">
            <span className="font-['Anton'] text-[5rem] opacity-20 absolute -top-4 right-4 group-hover:scale-110 transition-transform duration-500">01</span>
            <h3 className="font-['Anton'] text-4xl uppercase tracking-wider leading-[1.1] mb-5 z-10 relative">BACKEND <br /> ENGINEERING</h3>
            <ul className="text-lg leading-relaxed z-10 font-bold space-y-2">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-slate-900 rounded-full"></span> Python</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-slate-900 rounded-full"></span> Django & DRF</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-slate-900 rounded-full"></span> FastAPI (Basics)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-slate-900 rounded-full"></span> MySQL</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-slate-900 rounded-full"></span> MongoDB</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="p-10 rounded-3xl relative overflow-hidden transition-all duration-300 min-h-[22rem] flex flex-col justify-between bg-[#9d8afe] border-[3px] border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)] hover:translate-x-2 hover:translate-y-2 text-slate-900 group">
            <span className="font-['Anton'] text-[5rem] opacity-20 absolute -top-4 right-4 group-hover:scale-110 transition-transform duration-500">02</span>
            <h3 className="font-['Anton'] text-4xl uppercase tracking-wider leading-[1.1] mb-5 z-10 relative">FRONTEND <br /> DEVELOPMENT</h3>
            <ul className="text-lg leading-relaxed z-10 font-bold space-y-2">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-slate-900 rounded-full"></span> HTML</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-slate-900 rounded-full"></span> CSS</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-slate-900 rounded-full"></span> JavaScript (ES6+)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-slate-900 rounded-full"></span> React.js</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-slate-900 rounded-full"></span> Responsive UI/UX</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="p-10 rounded-3xl relative overflow-hidden transition-all duration-300 min-h-[22rem] flex flex-col justify-between bg-[#00dc82] border-[3px] border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)] hover:translate-x-2 hover:translate-y-2 text-slate-900 group">
            <span className="font-['Anton'] text-[5rem] opacity-20 absolute -top-4 right-4 group-hover:scale-110 transition-transform duration-500">03</span>
            <h3 className="font-['Anton'] text-4xl uppercase tracking-wider leading-[1.1] mb-5 z-10 relative">DEVOPS &<br /> TOOLING</h3>
            <ul className="text-lg leading-relaxed z-10 font-bold space-y-2">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-slate-900 rounded-full"></span> Cloud Basics</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-slate-900 rounded-full"></span> Git & GitHub</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-slate-900 rounded-full"></span> API handling</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-slate-900 rounded-full"></span> API Testing (Postman)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-slate-900 rounded-full"></span> Agile Methodologies</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skill