import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 relative overflow-hidden my-10">

      {/* Decorative Background Blob - Resized for mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[800px] md:h-[800px] bg-blue-100/50 rounded-full blur-[50px] md:blur-[100px] z-0 pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl px-4 md:px-6 relative z-10">

        {/* Outer offset container for a massive drop-shadow effect */}
        {/* Further Reduced padding/margin on mobile to maximize content area */}
        <div className="bg-amber-200 border-[3px] border-slate-900 p-2 md:p-4 rounded-[1.5rem] md:rounded-[4rem] shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] md:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] transform transition-transform duration-500 hover:-translate-y-1 md:hover:-translate-y-2">

          {/* Inner Card */}
          <div className="bg-white border-[3px] border-slate-900 rounded-[1.2rem] md:rounded-[3.5rem] px-4 py-10 md:p-24 text-center relative overflow-hidden">

            <h2 className="text-3xl sm:text-5xl md:text-7xl font-['Anton'] text-slate-900 uppercase leading-[1.0] md:leading-[1.1] mb-6 md:mb-8 z-10 relative">
              Let's Build Something <br />
              {/* Highlight Tag Effect */}
              <span className="inline-block bg-blue-500 text-white px-3 py-1 md:px-6 md:py-2 border-[3px] border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] md:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] -rotate-2 mt-2 md:mt-6 text-xl sm:text-3xl md:text-5xl">
                Extraordinary.
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 md:mb-12 font-medium leading-relaxed z-10 relative px-2">
              I'm currently looking for new opportunities as a Full Stack Python Developer.
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center z-10 relative w-full sm:w-auto">

              {/* Main CTA - Full width on mobile for better touch target */}
              <a href="mailto:pranavkavade9@gmail.com"
                className="w-full sm:w-auto px-8 py-4 md:py-5 bg-amber-400 border-[3px] border-slate-900 rounded-full text-slate-900 font-bold tracking-widest uppercase transition-all shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] md:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] hover:bg-amber-300 flex items-center justify-center gap-3 text-sm md:text-base">
                <Mail className="w-5 h-5 md:w-6 md:h-6" /> Say Hello
              </a>

              {/* Socials - Row on all screens */}
              <div className="flex gap-4 w-full sm:w-auto justify-center">
                <a href="https://github.com/pranavkavade20" className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white border-[3px] border-slate-900 text-slate-900 transition-all shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] md:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] hover:bg-slate-100">
                  <Github className="w-6 h-6 md:w-7 md:h-7" />
                </a>
                <a href="https://www.linkedin.com/in/pranavkavade20" className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white border-[3px] border-slate-900 text-slate-900 transition-all shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] md:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] hover:bg-[#0077b5] hover:text-white">
                  <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
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