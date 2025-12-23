import pythonImg from '../../assets/python.png';
import djangoImg from '../../assets/django.png';
import reactImg from '../../assets/react.png';
import jsImg from '../../assets/javascript.png';
import profileImg from '../../assets/profile.jpg';
function Home() {
  return (
    <header className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black relative pt-32 pb-20 overflow-hidden">
      
      {/* Background Mesh/Noise (Optional depth) */}
      <div className="absolute inset-0 bg-slate-950/50 z-0"></div>

      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.2fr_0.8fr] items-center gap-12 lg:gap-20 text-center lg:text-left relative z-10">
        
        {/* --- Left Side: Text Content --- */}
        <div className="space-y-8">
          <h1 className="font-['Anton'] uppercase tracking-wide leading-none text-6xl md:text-8xl lg:text-9xl text-slate-200">
            TURNING <br/>
            <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">LOGIC INTO</span> <br/>
            SYSTEMS
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
            Full Stack Engineer creating secure, scalable <strong className="text-emerald-400 font-medium">Python</strong> & <strong className="text-cyan-400 font-medium">React</strong> Web Applications.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="https://github.com/pranavkavade20" 
               className="px-8 py-4 rounded-full border border-slate-700 text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300">
               View Work
            </a>
            <a href="mailto:pranavkavade9@gmail.com" 
               className="px-8 py-4 rounded-full bg-emerald-500 text-slate-900 font-bold text-sm tracking-widest uppercase hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all duration-300">
               Hire Me
            </a>
          </div>
        </div>
        
        {/* --- Right Side: Visual Center --- */}
        <div className="relative h-100 lg:h-150 flex justify-center items-center mt-10 lg:mt-0">
          
          {/* 1. Animated Blob Background */}
          <div className="absolute w-4/5 h-4/5 bg-linear-to-b from-rose-500/30 to-indigo-500/30 rounded-full blur-[80px] animate-pulse-glow"></div>
          
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* 2. Central Profile Image */}
            <div className="relative z-10 group">
                {/* Glowing Ring */}
                <div className="absolute -inset-1 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                
                {/* Image Container */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-slate-900/50 bg-slate-900 shadow-2xl overflow-hidden">
                    <img 
                      src={profileImg} 
                      alt="Pranav Kavade" 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    
                    {/* Glass Overlay on Image */}
                    <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10"></div>
                </div>
            </div>

            {/* 3. Orbiting Tech Icons */}
            {/* Python (Top Left) */}
            <div className="absolute top-[10%] left-[5%] md:left-[10%] z-20 animate-float" style={{ animationDelay: '0s', '--rot': '-10deg' }}>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-xl flex items-center justify-center">
                    <img src={pythonImg} alt="Python" className="w-full h-full object-contain" />
                </div>
            </div>

            {/* Django (Top Right) */}
            <div className="absolute top-[15%] right-[5%] z-20 animate-float" style={{ animationDelay: '1s', '--rot': '6deg' }}>
                <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-xl flex items-center justify-center">
                    <img src={djangoImg} alt="Django" className="w-full h-full object-contain" />
                </div>
            </div>

            {/* React (Bottom Left) */}
            <div className="absolute bottom-[15%] left-[5%] z-20 animate-float" style={{ animationDelay: '2s', '--rot': '12deg' }}>
                <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-xl flex items-center justify-center">
                    <img src={reactImg} alt="React" className="w-full h-full object-contain" />
                </div>
            </div>

            {/* JS (Bottom Right) */}
            <div className="absolute bottom-[10%] right-[10%] md:right-[15%] z-20 animate-float" style={{ animationDelay: '0.5s', '--rot': '-5deg' }}>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-xl flex items-center justify-center">
                    <img src={jsImg} alt="JS" className="w-full h-full object-contain" />
                </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;