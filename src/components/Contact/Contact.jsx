function Contact() {
 return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        
        <div className="bg-linear-to-br from-slate-900 to-slate-800 p-1 rounded-[3rem]">
          <div className="bg-slate-950 rounded-[3rem] p-12 md:p-24 text-center">
            
            <h2 className="text-4xl md:text-6xl font-['Anton'] text-white uppercase leading-tight mb-8">
              Let's Build Something <br/>
              <span className="text-emerald-400">Extraordinary.</span>
            </h2>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light">
              I'm currently looking for new opportunities as a Python Engineer. 
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a href="mailto:pranavkavade9@gmail.com" 
                 className="group relative px-8 py-4 bg-emerald-500 rounded-full text-slate-900 font-bold tracking-widest uppercase overflow-hidden transition-all hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <i className="fa-regular fa-envelope"></i> Say Hello
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>

              <div className="flex gap-4">
                <a href="https://github.com/pranavkavade20" className="w-14 h-14 flex items-center justify-center rounded-full border border-slate-700 text-white hover:bg-white hover:text-black transition-all hover:-translate-y-1">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/pranavkavade20" className="w-14 h-14 flex items-center justify-center rounded-full border border-slate-700 text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all hover:-translate-y-1">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact