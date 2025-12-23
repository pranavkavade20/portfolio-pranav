function Contact() {
  return (
    <section id="contact" className=" text-slate-900 py-16 md:py-24 text-center">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="bg-red-400 text-white max-w-3xl mx-auto p-10 md:p-20 rounded-3xl md:rounded-[2.5rem] md:-rotate-2 hover:rotate-0 transition-transform duration-300">
          <h2 className="text-4xl md:text-5xl mb-6 font-['Anton'] uppercase tracking-wider leading-none">Let's Build Something Great to <br/><br/> Solve Real World Problems.?</h2>
          <p className="text-xl mb-10 font-medium">Eager to begin my professional journey as a Python Software Engineer, bringing a strong problem-solving mindset and Python expertise.</p>
          
          <a href="mailto:pranavkavade9@gmail.com" className="inline-flex items-center justify-center gap-2.5 bg-white text-slate-800 px-6 py-3 rounded-full no-underline font-bold text-base shadow-md hover:-translate-y-1 hover:shadow-lg hover:bg-gray-100 transition-all duration-200">
            <i className="fa-regular fa-hand text-lg"></i> <span>SAY HELLO</span>
          </a>
          <br/><br/>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://github.com/pranavkavade20" className="inline-flex items-center justify-center gap-2.5 bg-white text-slate-800 px-6 py-3 rounded-full no-underline font-bold text-base shadow-md hover:-translate-y-1 hover:shadow-lg hover:bg-gray-100 transition-all duration-200">
              <i className="fab fa-github text-lg"></i> <span>CHECK GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/pranavkavade20" className="inline-flex items-center justify-center gap-2.5 bg-white text-slate-800 px-6 py-3 rounded-full no-underline font-bold text-base shadow-md hover:-translate-y-1 hover:shadow-lg hover:bg-gray-100 transition-all duration-200">
              <i className="fab fa-linkedin text-lg"></i> <span>CHECK Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact