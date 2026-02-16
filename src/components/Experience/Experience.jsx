import { useState } from 'react';

function Experience() {
  const [activeJob, setActiveJob] = useState(0);

  const jobs = [
    {
      company: 'Perpex',
      role: 'Python Developer Intern',
      period: 'Jul 2025 - Oct 2025',
      description: 'As a Python Developer Intern, I engineered robust web solutions using Python, Django, and MySQL. My work focused on designing secure backend architectures, optimizing database performance with advanced Django ORM queries, and utilizing tools like Celery to create fast, scalable, and efficient applications.',
      techStack: ['Python', 'Django', 'MySQL', 'Celery', 'Tailwind CSS', 'JavaScript'],
      themeColor: 'bg-amber-500'
    }, 
    {
      company: 'ScaleFull Technologies',
      role: 'Full Stack Developer Intern',
      period: 'Jan 2025 - Apr 2025',
      description: 'As a Full Stack Developer Intern, I built dynamic, responsive web applications using the MERN stack. I specialized in crafting intuitive user interfaces with Tailwind CSS and Redux, while also managing database connections and media integration to deliver seamless, optimized user experiences.',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind', 'Redux', 'Cloudinary'],
      themeColor: 'bg-amber-500' 
    }
  ];

  return (
    <section id="experience" className="pF-24 bg-slate-50 relative border-t-2 border-slate-200 overflow-hidden">
      {/* Blueprint Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#0f172a 2px, transparent 2px)', backgroundSize: '32px 32px' }}
      ></div>

      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-slate-900 uppercase tracking-tight">
          Where I've Built
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Interactive Job Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {jobs.map((job, index) => (
              <button
                key={job.company}
                onClick={() => setActiveJob(index)}
                className={`group relative text-left p-6 rounded-2xl border-[3px] border-slate-900 transition-all duration-300 ${activeJob === index
                    ? `${job.themeColor} shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] translate-y-[-4px] translate-x-[-4px]`
                    : 'bg-white hover:bg-slate-100 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]'
                  }`}
              >
                <h3 className={`text-xl font-bold uppercase tracking-wide ${activeJob === index ? 'text-slate-900' : 'text-slate-800'}`}>
                  {job.company}
                </h3>
                <p className={`text-sm font-semibold mt-1 ${activeJob === index ? 'text-slate-900/80' : 'text-slate-500'}`}>
                  {job.period}
                </p>
              </button>
            ))}
          </div>

          {/* Right Column: Terminal/Window Content Display */}
          <div className="lg:col-span-8 bg-white border-[3px] border-slate-900 rounded-2xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col overflow-hidden animate-fade-in">

            {/* Window Header (Mac Style) */}
            <div className="bg-slate-900 px-6 py-4 flex items-center justify-between border-b-[3px] border-slate-900">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-slate-900"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 border-2 border-slate-900"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-slate-900"></div>
              </div>
              <span className="text-slate-300 text-xs font-mono tracking-widest uppercase">
                ~/experience/{jobs[activeJob].company.toLowerCase().replace(' ', '-')}
              </span>
            </div>

            {/* Window Body */}
            <div className="p-8 md:p-12">
              <div className="mb-6 inline-block px-4 py-1.5 bg-yellow-300 border-2 border-slate-900 rounded-full text-slate-900 text-sm font-bold tracking-wider shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                {jobs[activeJob].role}
              </div>

              <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed mb-10">
                {jobs[activeJob].description}
              </p>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {jobs[activeJob].techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-50 border-2 border-slate-900 rounded-lg text-slate-800 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 hover:bg-slate-900 hover:text-white transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;