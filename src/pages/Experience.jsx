import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, FileText } from 'lucide-react';
import { fadeUp, pageVariants, staggerContainer } from '../config/animations';
import SectionHeading from '../components/ui/SectionHeading';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import PageNav from '../components/layout/PageNav';
import { portfolioConfig } from '../config/portfolio';

const jobs = [
  {
    company: 'DASP Digital Pvt. Ltd.',
    role: 'Software Engineer',
    period: 'Apr 2026 – Present',
    current: true,
    summary:
      'Maintaining and enhancing existing product systems by implementing new requirements, improving application functionality, and resolving bugs.',
    highlights: [
      'Working across user management, payment, and core business modules',
      'Developing RESTful APIs and managing PostgreSQL database operations',
      'Implementing role-based access control (RBAC) for secure application workflows',
    ],
    techStack: [
      'Python',
      'JavaScript',
      'TypeScript',
      'React.js',
      'React Native',
      'Expo',
      'FastAPI',
      'PostgreSQL',
      'Docker',
      'Git',
      'GitHub',
      'Postman',
    ],
  },
  {
    company: 'ScaleFull Technologies',
    role: 'Full Stack Developer Intern',
    period: 'Jan 2025 – Apr 2025',
    current: false,
    summary:
      'Focused on building dynamic, responsive user interfaces and managing the flow of application data across full-stack features.',
    highlights: [
      'Designed database schemas and handled end-to-end API integrations',
      'Organized the project codebase to follow consistent engineering practices',
    ],
    techStack: [
      'JavaScript',
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Tailwind CSS',
      'Redux',
      'Cloudinary',
    ],
  },
];

const ExperienceItem = ({ job }) => {
  return (
    <article className="relative pl-6 tablet:pl-8 pb-8 last:pb-0">
      {/* Timeline Spine & Node */}
      <span
        className="absolute left-[5px] top-2 bottom-0 w-px bg-outline-variant last:hidden"
        aria-hidden="true"
      />
      <span
        className={`absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 ${
          job.current
            ? 'bg-success border-background ring-2 ring-success/25'
            : 'bg-surface border-outline'
        }`}
        aria-hidden="true"
      />

      <div className="bg-surface border border-outline-variant rounded-lg p-5 tablet:p-6 shadow-elevation-1">
        {/* Header Row */}
        <div className="flex flex-col tablet:flex-row tablet:items-start justify-between gap-2 pb-4 border-b border-outline-variant/80">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2.5">
              <h2 className="text-lg tablet:text-xl font-semibold tracking-tight text-on-surface">
                {job.role}
              </h2>
              {job.current && <Badge variant="success">Current</Badge>}
            </div>
            <p className="text-sm font-medium text-primary mt-0.5 flex items-center gap-1.5">
              <Briefcase size={14} className="shrink-0 opacity-80" aria-hidden="true" />
              <span>{job.company}</span>
            </p>
          </div>

          <time className="text-xs font-mono font-medium text-on-surface-variant tabular-nums self-start pt-0.5 shrink-0">
            {job.period}
          </time>
        </div>

        {/* Summary & Scannable Responsibilities */}
        <div className="pt-4 space-y-3">
          <p className="text-base text-on-surface-variant leading-relaxed max-w-[68ch]">
            {job.summary}
          </p>

          <ul className="space-y-1.5 text-sm text-on-surface-variant">
            {job.highlights.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-outline mt-2 shrink-0" aria-hidden="true" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Clean Tech Stack Tags */}
        <div className="pt-4 mt-4 border-t border-outline-variant/70">
          <ul className="flex flex-wrap gap-1.5" aria-label={`Technologies used at ${job.company}`}>
            {job.techStack.map((tech) => (
              <li
                key={tech}
                className="px-2.5 py-1 rounded-sm bg-surface-variant/80 border border-outline-variant/70 text-xs font-mono text-on-surface"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

function Experience() {
  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="py-6 tablet:py-8"
      aria-label="Professional Experience"
    >
      <div className="feed-container">
        <SectionHeading
          title="Where I've Built"
          subtitle="Professional experience"
          description="Production engineering across backend APIs, databases, and cross-platform product interfaces."
          action={
            <Button
              as="a"
              href={portfolioConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="md"
              icon={FileText}
              className="w-full tablet:w-auto"
              aria-label="View Full Résumé PDF"
            >
              View Résumé (PDF)
            </Button>
          }
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {jobs.map((job) => (
            <motion.div
              key={job.company}
              variants={fadeUp}
              className="group [&:last-child>article>span:first-child]:hidden"
            >
              <ExperienceItem job={job} />
            </motion.div>
          ))}
        </motion.div>

        <PageNav
          prev={{ name: 'Home', path: '/' }}
          next={{ name: 'Skills', path: '/skills' }}
        />
      </div>
    </motion.section>
  );
}

export default Experience;
