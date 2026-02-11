import React from 'react';
import profileImg from '../../assets/profile.jpg';

function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden border-t-2 border-slate-200">

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}
      ></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">

        {/* Main Editorial Grid */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">

          {/* --- Left Column: Visual / Polaroid --- */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1 mt-10 lg:mt-0">

            {/* Decorative Tape Element */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 backdrop-blur-sm border-2 border-slate-900 -rotate-3 z-30 shadow-sm"></div>

            {/* Floating "Status" Badge - MOVED TO TOP LEFT */}
            <div className="absolute -left-2 md:-left-12 top-8 md:top-12 bg-emerald-400 border-[3px] border-slate-900 px-6 py-3 rounded-full shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] z-30 -rotate-12 animate-float">
              <span className="font-bold text-slate-900 text-sm tracking-widest uppercase flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></span>
                Ready to Build
              </span>
            </div>

            {/* Polaroid Photo Card */}
            <div className="bg-white p-4 pb-16 md:p-6 md:pb-20 border-[3px] border-slate-900 rounded-xl shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] transform rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-[350px] relative z-20">
              <div className="w-full aspect-[4/5] bg-slate-200 border-2 border-slate-900 rounded-lg overflow-hidden">
                <img
                  src={profileImg}
                  alt="Pranav Kavade"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Handwritten-style caption */}
              <div className="absolute bottom-4 left-0 w-full text-center">
                <span className="font-['Anton'] text-2xl text-slate-900 tracking-wider">
                  PRANAV KAVADE
                </span>
                <p className="text-slate-500 text-xs font-bold font-mono mt-1">EST. PUNE / MH</p>
              </div>
            </div>

          </div>

          {/* --- Right Column: Text & Content --- */}
          <div className="order-1 lg:order-2 space-y-10">

            <div>
              <h2 className="text-5xl md:text-7xl font-['Anton'] text-slate-900 uppercase leading-[1.1] mb-6">
                The Dev Behind <br />
                <span className="bg-blue-500 text-white px-4 py-1 border-[3px] border-slate-900 inline-block -rotate-2 mt-2 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                  The Code.
                </span>
              </h2>
            </div>

            {/* Content Cards / Dossier style */}
            <div className="space-y-6">

              {/* Who Am I Block */}
              <div className="bg-white border-[3px] border-slate-900 p-6 md:p-8 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 transition-transform">
                <h3 className="text-slate-900 font-bold tracking-widest text-sm uppercase mb-4 border-b-2 border-slate-100 pb-2 inline-flex items-center gap-2">
                  <i className="fas fa-fingerprint text-emerald-500"></i> Identity
                </h3>
                <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed">
                  I am a high-energy, detail-oriented <strong className="text-slate-900 font-black border-b-2 border-blue-400">Full Stack Engineer</strong>. As a fresher, I don't just write code; I obsess over architecture, scalability, and user experience. I thrive in the space where robust backend logic meets seamless frontend design.
                </p>
              </div>

              {/* What I've Done Block */}
              <div className="bg-white border-[3px] border-slate-900 p-6 md:p-8 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 transition-transform">
                <h3 className="text-slate-900 font-bold tracking-widest text-sm uppercase mb-4 border-b-2 border-slate-100 pb-2 inline-flex items-center gap-2">
                  <i className="fas fa-history text-blue-500"></i> The Journey
                </h3>
                <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed">
                  My path has been heavily focused on hands-on building. From designing complex RESTful APIs and optimizing databases to currently pouring my energy into robust platforms like Farmket, I've spent my time solving real-world data flow problems. I have built AI-powered tools, e-commerce engines, and secure authentication systems using <strong className="text-slate-900">Python, Django, and React</strong>.
                </p>
              </div>

            </div>

            {/* Quick Stats / Tech highlights */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-slate-100 border-2 border-slate-900 px-5 py-2.5 rounded-xl font-bold text-slate-900 text-sm shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
                🚀 Clean Architecture
              </div>
              <div className="bg-slate-100 border-2 border-slate-900 px-5 py-2.5 rounded-xl font-bold text-slate-900 text-sm shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
                ⚡ Rapid Prototyping
              </div>
              <div className="bg-slate-100 border-2 border-slate-900 px-5 py-2.5 rounded-xl font-bold text-slate-900 text-sm shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
                🧠 Continuous Learner
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;