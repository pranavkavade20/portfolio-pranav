import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Badge from '../components/ui/Badge';

function Experience() {

  const jobs = [
    {
      company: 'ScaleFull Technologies',
      role: 'Full Stack Developer Intern',
      period: 'Jan 2025 - Apr 2025',
      description: 'I mostly focused on building dynamic, responsive user interfaces and managing the flow of application data. On the backend, I gained hands-on experience designing database schemas, handling API integrations, and organizing the project codebase to follow industry best practices.',
      techStack: ['Javascript','MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Redux', 'Cloudinary'],
      themeColor: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20 dark:bg-brand-secondary/10 dark:text-brand-secondary dark:border-brand-secondary/30' 
    }
  ];

  return (
    <section className="py-24 md:py-32 relative bg-brand-bg-light dark:bg-brand-bg-dark overflow-hidden transition-colors duration-300">
      {/* Consistent Animated Background Blobs */}
      <div className="absolute top-[-8%] left-[-8%] w-64 h-64 bg-amber-200/50 dark:bg-amber-900/20 rounded-full blur-[90px] z-0 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-[10%] right-[-6%] w-72 h-72 bg-brand-secondary/50 dark:bg-brand-primary/20 rounded-full blur-[90px] z-0 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <SectionHeading 
          title="Where I've Built" 
          subtitle="Professional Experience" 
        />

        <div className="mt-16 flex flex-col gap-12">
          {jobs.map((job, index) => (
            <div key={index} className="group relative grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-8 transition-all sm:hover:bg-slate-50/50 dark:sm:hover:bg-zinc-800/20 sm:p-6 sm:-m-6 rounded-2xl">
              {/* Left Column: Date */}
              <div className="md:col-span-2 mt-1">
                <span className="text-xs md:text-sm font-semibold tracking-widest text-slate-500 dark:text-zinc-500 uppercase">
                  {job.period}
                </span>
              </div>

              {/* Right Column: Content */}
              <div className="md:col-span-6 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 group-hover:text-brand-primary dark:group-hover:text-brand-secondary transition-colors inline-flex items-center gap-2">
                  {job.role} · {job.company}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                </h3>
                
                <p className="mt-4 text-slate-600 dark:text-zinc-400 leading-relaxed text-base">
                  {job.description}
                </p>

                {job.links && (
                  <ul className="mt-4 flex flex-wrap gap-4 text-sm font-medium text-slate-700 dark:text-zinc-300">
                    {job.links.map((link, i) => (
                      <li key={i} className="flex items-center gap-1.5 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                        {link.name}
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="mt-6 flex flex-wrap gap-2">
                  {job.techStack.map((tech, i) => (
                    <li key={i}>
                      <Badge variant="primary" className="!bg-brand-primary/10 !text-brand-primary dark:!bg-brand-secondary/10 dark:!text-brand-secondary hover:!bg-brand-primary/20 dark:hover:!bg-brand-secondary/20">
                        {tech}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;