import pythonImg from '../../assets/python.png';
import djangoImg from '../../assets/django.png';
import reactImg from '../../assets/react.png';
import jsImg from '../../assets/javascript.png';
import profileImg from '../../assets/profile.jpg';
function Home() {
  return (
    <header className="min-h-screen flex items-center bg-[radial-gradient(circle_at_50%_50%,#053b3b_0%,#021a1a_70%)] relative pt-25 pb-15">
      <div className="max-w-300 mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-10 lg:gap-10 text-center lg:text-left">
        
        {/* Left Side: Text */}
        <div className="hero-text">
          <h1 className="font-['Anton'] uppercase tracking-wider leading-[0.9] text-[clamp(3.5rem,10vw,5rem)] text-white mb-5">
            TURNING <br/><br/><span className="text-[#00dc82] block">LOGIC INTO</span><br/>SYSTEMS
          </h1>
          <p className="text-[clamp(1rem,2vw,1.2rem)] max-w-125 opacity-80 mb-10 leading-[1.6] mx-auto lg:mx-0">
            Full Stack Engineer creating secure, scalable Python & React Web Applications.
          </p>
          <div className="flex gap-3.75 flex-wrap justify-center lg:justify-start">
            <a href="#projects" className="inline-flex items-center gap-2.5 px-7.5 py-3 rounded-full font-bold uppercase text-[0.9rem] cursor-pointer whitespace-nowrap border border-white/20 text-white bg-white/5 hover:bg-white hover:text-black transition-colors duration-300">VIEW WORK</a>
            <a href="mailto:pranavkavade9@gmail.com" className="inline-flex items-center gap-2.5 px-7.5 py-3 rounded-full font-bold uppercase text-[0.9rem] cursor-pointer whitespace-nowrap bg-[#00dc82] text-[#021a1a] hover:scale-105 hover:shadow-[0_0_20px_rgba(0,220,130,0.4)] transition-transform duration-200">HIRE ME</a>
          </div>
        </div>
        
        {/* Right Side: Visuals */}
        <div className="relative h-75 md:h-100 lg:h-125 flex justify-center items-center mt-5 lg:mt-0">
          
          {/* Blob Background */}
          <div className="absolute w-4/5 h-4/5 bg-linear-to-b from-[#ff5d5d] to-[#9d8afe] rounded-25 blur-[50px] opacity-60 animate-pulse-custom"></div>
          
          {/* Container for Profile + Icons */}
          <div className="relative w-full h-full">
            
            {/* --- NEW: Profile Image Center --- */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
               <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white/10 shadow-[0_0_50px_rgba(0,220,130,0.3)] overflow-hidden">
                 <img 
                   src={profileImg} 
                   alt="Pranav Kavade" 
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                 />
               </div>
            </div>
            {/* -------------------------------- */}

            {/* Floating Icons */}
            <img src={pythonImg} className="absolute w-15 md:w-20 bg-white/10 backdrop-blur-[5px] p-2.5 rounded-[20px] border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] animate-float top-[10%] left-[10%] z-20" style={{ '--rot': '-10deg', animationDelay: '0s' }} alt="Python" />
            <img src={djangoImg} className="absolute w-17.5 md:w-22.5 bg-white/10 backdrop-blur-[5px] p-2.5 rounded-[20px] border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] animate-float top-[20%] right-[5%] z-20" style={{ '--rot': '5deg', animationDelay: '1s' }} alt="Django" />
            <img src={reactImg} className="absolute w-17.5 md:w-22.5 bg-white/10 backdrop-blur-[5px] p-2.5 rounded-[20px] border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] animate-float bottom-[15%] left-[5%] z-20" style={{ '--rot': '15deg', animationDelay: '2s' }} alt="React" />
            <img src={jsImg} className="absolute w-15 md:w-20 bg-white/10 backdrop-blur-[5px] p-2.5 rounded-[20px] border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] animate-float bottom-[10%] right-[15%] z-20" style={{ '--rot': '-5deg', animationDelay: '0.5s' }} alt="JS" />
          
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;