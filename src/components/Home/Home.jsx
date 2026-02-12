import pythonImg from '../../assets/python.png';
import djangoImg from '../../assets/django.png';
import reactImg from '../../assets/react.png';
import jsImg from '../../assets/javascript.png';
import bun from '../../assets/bun.png'

function Home() {
  return (
    <header className="min-h-screen bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center pt-32 pb-20">

      {/* 1. Background: Technical Blueprint Grid & Soft Pastel Blobs */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}
      ></div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-200/60 rounded-full blur-[100px] z-0 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-200/60 rounded-full blur-[120px] z-0 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10 flex flex-col items-center w-full">

        {/* 2. Hero Section: Unblocked Staggered Typography */}
        <div className="w-full flex flex-col justify-center mt-8">

          <h1 className="font-['Anton'] uppercase tracking-wide leading-[0.9] text-[5.5rem] md:text-[8rem] lg:text-[7rem] flex flex-col w-full relative z-10 select-none">
            {/* Top Word */}
            <span className="text-slate-900 self-start md:ml-[10%] drop-shadow-sm">
              TURNING
            </span>

            {/* Middle Phrase - Highlighted inside a brutalist box */}
            <span className="self-center bg-white border-[4px] border-slate-900 px-6 py-2 md:py-4 md:px-12 transform -rotate-2 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] my-2 md:my-4 z-20">
              <span className="bg-linear-to-r from-blue-600 via-indigo-500 to-emerald-500 bg-clip-text text-transparent">
                LOGIC INTO
              </span>
            </span>

            {/* Bottom Word - Outline Effect */}
            <span className="self-end md:mr-[10%] text-transparent" style={{ WebkitTextStroke: '3px #0f172a' }}>
              SYSTEMS
            </span>
          </h1>

        </div>

        {/* 3. Tech Stack "Sticker Row" - Flex container ensures no text overlap */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-16 mb-8 z-30 relative px-4">

          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl border-[3px] border-slate-900 p-3 md:p-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] -rotate-6 hover:rotate-0 hover:-translate-y-2 transition-all duration-300">
            <img src={pythonImg} alt="Python" className="w-full h-full object-contain" />
          </div>

          <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl border-[3px] border-slate-900 p-4 md:p-5 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 transform translate-y-2">
            <img src={djangoImg} alt="Django" className="w-full h-full object-contain" />
          </div>

          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl border-[3px] border-slate-900 p-3 md:p-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rotate-12 hover:rotate-0 hover:-translate-y-2 transition-all duration-300">
            <img src={reactImg} alt="React" className="w-full h-full object-contain" />
          </div>

          <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl border-[3px] border-slate-900 p-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] -rotate-12 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 transform -translate-y-2">
            <img src={jsImg} alt="JS" className="w-full h-full object-contain" />
          </div>

        </div>

        {/* 4. Bottom Brutalist Card: Content & CTAs */}
        <div className="relative z-40 mt-8 w-full max-w-3xl mx-auto">

          {/* Profile Image Badge Pinned to the Card */}
          <div className="absolute -top-10 md:-top-14 -right-4 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-slate-200 rounded-full border-[4px] border-slate-900 overflow-hidden shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] z-50 transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <img src={bun} alt="Pranav Kavade" className="w-full h-full object-cover" />
          </div>

          <div className="bg-white border-[3px] border-slate-900 rounded-[2rem] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] text-center space-y-8 transition-transform hover:-translate-y-1">

            <p className="text-lg md:text-2xl text-slate-700 font-medium leading-relaxed pr-8 md:pr-12">
              Full Stack Engineer creating secure, scalable <strong className="text-blue-600 font-black">Python</strong> & <strong className="text-emerald-500 font-black">React</strong> Web Applications.
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <a href="https://github.com/pranavkavade20"
                className="px-8 py-4 rounded-full border-[3px] border-slate-900 bg-white text-slate-900 font-bold text-sm tracking-widest uppercase hover:bg-slate-100 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)] hover:translate-x-1 hover:translate-y-1">
                View Work
              </a>
              <a href="mailto:pranavkavade9@gmail.com"
                className="px-8 py-4 rounded-full border-[3px] border-slate-900 bg-emerald-400 text-slate-900 font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)] hover:translate-x-1 hover:translate-y-1 hover:bg-emerald-300">
                Hire Me
              </a>
            </div>

          </div>
        </div>

      </div>
    </header>
  );
}

export default Home;