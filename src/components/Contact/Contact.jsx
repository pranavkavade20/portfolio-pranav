function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden border-t-2 border-slate-200">

      {/* Decorative Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl px-6 relative z-10">

        {/* Outer offset container for a massive drop-shadow effect */}
        <div className="bg-emerald-200 border-[3px] border-slate-900 p-2 md:p-4 rounded-[2.5rem] md:rounded-[4rem] shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] transform transition-transform duration-500 hover:-translate-y-2">

          <div className="bg-white border-[3px] border-slate-900 rounded-[2rem] md:rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden">

            <h2 className="text-5xl md:text-7xl font-['Anton'] text-slate-900 uppercase leading-[1.1] mb-8 z-10 relative">
              Let's Build Something <br />
              {/* Highlight Tag Effect */}
              <span className="inline-block bg-blue-500 text-white px-6 py-2 border-[3px] border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] -rotate-2 mt-4 md:mt-6">
                Extraordinary.
              </span>
            </h2>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium leading-relaxed z-10 relative">
              I'm currently looking for new opportunities as a Python Engineer.
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center z-10 relative">

              <a href="mailto:pranavkavade9@gmail.com"
                className="px-8 py-5 bg-emerald-400 border-[3px] border-slate-900 rounded-full text-slate-900 font-bold tracking-widest uppercase transition-all shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)] hover:translate-y-[6px] hover:translate-x-[6px] hover:bg-emerald-300 flex items-center gap-3 text-sm md:text-base">
                <i className="fa-regular fa-envelope text-xl"></i> Say Hello
              </a>

              <div className="flex gap-4">
                <a href="https://github.com/pranavkavade20" className="w-16 h-16 flex items-center justify-center rounded-full bg-white border-[3px] border-slate-900 text-slate-900 transition-all shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)] hover:translate-y-[4px] hover:translate-x-[4px] hover:bg-slate-100">
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/pranavkavade20" className="w-16 h-16 flex items-center justify-center rounded-full bg-white border-[3px] border-slate-900 text-slate-900 transition-all shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)] hover:translate-y-[4px] hover:translate-x-[4px] hover:bg-[#0077b5] hover:text-white">
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;