import { useState } from 'react';

function Experience() {
 const [activeTab, setActiveTab] = useState('perpex');

  const btnClass = "border px-10 py-4 rounded-full font-['Anton'] text-xl cursor-pointer transition-all duration-300";
  const activeClass = "bg-indigo-400 text-black border-indigo-400 scale-105";
  const inactiveClass = "bg-transparent text-white border-white/20 hover:bg-white/5";

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto max-w-6xl px-5">
        <h2 className="text-center text-4xl md:text-5xl mb-12 text-white font-['Anton'] uppercase tracking-wider leading-none">EXPERIENCE LOG</h2>

        <div className="flex justify-center gap-5 mb-12 flex-wrap">
          <button 
            className={`${btnClass} ${activeTab === 'perpex' ? activeClass : inactiveClass}`}
            onClick={() => setActiveTab('perpex')}
          >
            Perpex
          </button>
          <button 
            className={`${btnClass} ${activeTab === 'scalefull' ? activeClass : inactiveClass}`}
            onClick={() => setActiveTab('scalefull')}
          >
            ScaleFull
          </button>
        </div>

        {/* Content Card: Perpex */}
        {activeTab === 'perpex' && (
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-16 max-w-3xl mx-auto text-center animate-fade-up">
            <h3 className="text-3xl md:text-4xl text-green-400 mb-3 font-['Anton'] uppercase tracking-wider leading-none">BACKEND INTERN</h3>
            <p className="text-xl text-white mb-8 font-['Outfit']">Perpex (Remote) | Jul 2025 - Oct 2025</p>
            <ul className="text-left list-none mx-auto max-w-xl">
              {['Optimized Python/Django APIs reducing response times by 20%.', 
                'Secured data for 100+ users via JWT & RBAC.',
                'Engineered modular Restaurant Management System.',
                'Achieved zero downtime via Celery & Redis task queues.'].map((item, idx) => (
                <li key={idx} className="mb-4 pl-5 relative text-lg text-gray-300 before:content-['►'] before:text-indigo-400 before:absolute before:left-0 before:text-xs before:top-1.5">{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Content Card: ScaleFull */}
        {activeTab === 'scalefull' && (
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-16 max-w-3xl mx-auto text-center animate-fade-up">
            <h3 className="text-3xl md:text-4xl text-green-400 mb-3 font-['Anton'] uppercase tracking-wider leading-none">FULL STACK INTERN</h3>
            <p className="text-xl text-white mb-8 font-['Outfit']">ScaleFull (Pune) | Jan 2025 - Apr 2025</p>
            <ul className="text-left list-none mx-auto max-w-xl">
              {['Built Recipe Manager UI with React and SCSS (98% Lighthouse).',
                'Boosted rendering speed by 40% via state optimization.',
                'Integrated Cloudinary for sub-second image loading.',
                'Streamlined deployment cycles via Agile & Git flows.'].map((item, idx) => (
                <li key={idx} className="mb-4 pl-5 relative text-lg text-gray-300 before:content-['►'] before:text-indigo-400 before:absolute before:left-0 before:text-xs before:top-1.5">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience