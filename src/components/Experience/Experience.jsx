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
    <section id="experience" className="py-24 bg-slate-900">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="text-4xl md:text-5xl font-['Anton'] text-center mb-16 text-slate-200 uppercase tracking-widest">
          Experience Log
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-950 p-1.5 rounded-full inline-flex border border-slate-800">
            {jobs.map((job, index) => (
              <button
                key={job.company}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-emerald-500 text-slate-900 shadow-lg' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {job.company}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-slate-950 border border-slate-800 rounded-4xl p-8 md:p-12 min-h-100 animate-fade-up">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-3xl font-['Anton'] text-white tracking-wide">{jobs[activeTab].role}</h3>
              <p className="text-emerald-400 font-medium text-lg">{jobs[activeTab].company}</p>
            </div>
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 text-sm font-mono">
              {jobs[activeTab].period}
            </span>
          </div>

          <ul className="space-y-6">
            {jobs[activeTab].points.map((point, i) => (
              <li key={i} className="flex items-start gap-4 text-slate-300 text-lg leading-relaxed group">
                <span className="mt-2.5 w-2 h-2 rounded-full bg-emerald-500 group-hover:shadow-[0_0_10px_#10b981] transition-shadow"></span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience