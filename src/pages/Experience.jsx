import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Calendar, Code2 } from 'lucide-react';

import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

function Experience() {
  const [activeJob, setActiveJob] = useState(0);

  const jobs = [
    {
      company: 'ScaleFull Technologies',
      role: 'Full Stack Developer Intern',
      period: 'Jan 2025 - Apr 2025',
      description: 'I mostly focused on building dynamic, responsive user interfaces and managing the flow of application data. On the backend, I gained hands-on experience designing database schemas, handling API integrations, and organizing the project codebase to follow industry best practices.',
      techStack: ['Javascript','MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Redux', 'Cloudinary'],
      themeColor: 'bg-blue-50 text-blue-700 border-blue-200' 
    }
  ];

  return (
    <section className="py-24 md:py-32 relative bg-white overflow-hidden">
 
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-slate-50 to-transparent rounded-bl-full pointer-events-none opacity-60"></div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <SectionHeading 
          title="Where I've Built" 
          subtitle="Professional Experience" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Interactive Job Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {jobs.map((job, index) => (
              <button
                key={job.company}
                onClick={() => setActiveJob(index)}
                className={`group relative text-left p-5 rounded-2xl border transition-all duration-300 ${activeJob === index
                    ? `bg-blue-50/50 border-blue-200 shadow-sm`
                    : 'bg-white border-transparent hover:border-slate-200 hover:bg-slate-50'
                  }`}
              >
                {activeJob === index && (
                  <motion.div layoutId="activeJobIndicator" className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-blue-500 rounded-r-full" />
                )}
                <h3 className={`text-lg font-bold tracking-wide transition-colors ${activeJob === index ? 'text-blue-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                  {job.company}
                </h3>
                <p className={`text-sm font-medium mt-1 flex items-center gap-1.5 transition-colors ${activeJob === index ? 'text-blue-600' : 'text-slate-500'}`}>
                  <Calendar size={14} /> {job.period}
                </p>
              </button>
            ))}
          </div>

          {/* Right Column: Content Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJob}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="flex flex-col overflow-hidden border-slate-200">
                  
                  {/* Window Header */}
                  <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-b border-slate-200">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                    </div>
                    <span className="text-slate-500 text-xs font-mono tracking-wider flex items-center gap-2">
                      <Terminal size={14} /> ~/experience/{jobs[activeJob].company.toLowerCase().replace(' ', '-')}
                    </span>
                  </div>

                  {/* Window Body */}
                  <div className="p-8 md:p-12 bg-white">
                    <Badge variant="primary" className="mb-6">
                      {jobs[activeJob].role}
                    </Badge>

                    <p className="text-slate-600 text-lg leading-relaxed mb-10">
                      {jobs[activeJob].description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Code2 size={16} className="text-blue-500" /> Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {jobs[activeJob].techStack.map((tech, i) => (
                          <Badge key={i} variant="default">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;