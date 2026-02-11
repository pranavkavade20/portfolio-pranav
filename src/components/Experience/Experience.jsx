import { useState } from 'react';

function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      company: 'Perpex',
      role: 'Backend Intern',
      period: 'Jul 2025 - Oct 2025',
      points: [
        'Optimized Python/Django APIs reducing response times by 20%.',
        'Implemented Role-Based Access Control (RBAC) securing 100+ users.',
        'Engineered modular Restaurant Management System with scalable architecture.',
        'Achieved zero downtime deployment using Celery & Redis task queues.'
      ]
    },
    {
      company: 'ScaleFull',
      role: 'Full Stack Intern',
      period: 'Jan 2025 - Apr 2025',
      points: [
        'Built Recipe Manager UI with React and SCSS achieving 98% Lighthouse score.',
        'Boosted rendering speed by 40% via React.memo and state optimization.',
        'Integrated Cloudinary for automated image optimization.',
        'Streamlined CI/CD deployment cycles via GitHub Actions.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 relative border-t-2 border-slate-200">

      {/* Background Blueprint Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}
      ></div>

      <div className="container mx-auto max-w-4xl px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-['Anton'] text-center mb-12 text-slate-900 uppercase tracking-widest">
          Experience Log
        </h2>

        {/* Tabs - Physical Folder Look */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-2xl inline-flex border-[3px] border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] gap-2 overflow-x-auto">
            {jobs.map((job, index) => (
              <button
                key={job.company}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 whitespace-nowrap ${activeTab === index
                    ? 'bg-emerald-400 text-slate-900 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]'
                    : 'bg-transparent text-slate-600 border-transparent hover:bg-slate-100 hover:text-slate-900'
                  }`}
              >
                {job.company}
              </button>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white border-[3px] border-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 min-h-[400px] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] animate-fade-up">

          <div className="flex flex-col md:flex-row md:items-start justify-between mb-10 gap-6 border-b-[3px] border-slate-100 pb-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-['Anton'] text-slate-900 tracking-wide uppercase mb-2">
                {jobs[activeTab].role}
              </h3>
              <p className="text-blue-600 font-bold text-lg uppercase tracking-wider">
                @ {jobs[activeTab].company}
              </p>
            </div>

            {/* Period Badge */}
            <span className="px-5 py-2.5 bg-yellow-300 border-[3px] border-slate-900 rounded-xl text-slate-900 text-sm font-bold tracking-wider shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] whitespace-nowrap">
              {jobs[activeTab].period}
            </span>
          </div>

          <ul className="space-y-6">
            {jobs[activeTab].points.map((point, i) => (
              <li key={i} className="flex items-start gap-4 text-slate-700 text-lg md:text-xl font-medium leading-relaxed group">
                {/* Physical Bullet Point */}
                <span className="mt-2.5 shrink-0 w-3 h-3 rounded-sm bg-slate-900 border-[2px] border-slate-900 group-hover:rotate-45 group-hover:bg-emerald-400 transition-all duration-300"></span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;