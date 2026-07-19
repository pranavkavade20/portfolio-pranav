import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { fadeUp, staggerContainer } from '../config/animations';
import SectionHeading from '../components/ui/SectionHeading';
import Badge from '../components/ui/Badge';

const ExperienceCard = ({ job }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      variants={fadeUp} 
      className="group relative grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-8 p-6 -mx-6 rounded-[2rem] border border-transparent hover:border-black/5 dark:hover:border-white/5 transition-colors duration-300"
      onMouseMove={onMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0,0,0,0.03),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Dark mode gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 hidden dark:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.03),
              transparent 80%
            )
          `,
        }}
      />

      {/* Left Column: Date */}
      <div className="md:col-span-2 mt-1 relative z-10">
        <span className="text-xs md:text-sm font-semibold tracking-widest text-slate-500 dark:text-zinc-500 uppercase">
          {job.period}
        </span>
      </div>

      {/* Right Column: Content */}
      <div className="md:col-span-6 flex flex-col relative z-10">
        <h3 className="text-card-title font-semibold text-slate-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors inline-flex items-center gap-2">
          {job.role} · {job.company}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
        </h3>
        
        <p className="mt-4 text-body">
          {job.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {job.techStack.map((tech, i) => (
            <li key={i}>
              <Badge variant="default">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

function Experience() {

  const jobs = [
    {
      company: 'ScaleFull Technologies',
      role: 'Full Stack Developer Intern',
      period: 'Jan 2025 - Apr 2025',
      description: 'Focused on building dynamic, responsive user interfaces and managing the flow of application data. On the backend, designed database schemas, handled API integrations, and organized the project codebase to follow industry best practices.',
      techStack: ['Javascript','MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Redux', 'Cloudinary']
    }
  ];

  return (
    <section className="section-padding relative bg-brand-bg-light dark:bg-brand-bg-dark overflow-hidden transition-colors duration-300">
      <div className="content-container relative z-10">
        <SectionHeading 
          title="Where I've Built" 
          subtitle="Professional Experience" 
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 flex flex-col gap-6"
        >
          {jobs.map((job, index) => (
            <ExperienceCard key={index} job={job} />
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-lg hover:text-slate-600 dark:hover:text-zinc-300 transition-colors group relative overflow-hidden"
          >
            <span>View Full R&eacute;sum&eacute;</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-slate-900 dark:bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;