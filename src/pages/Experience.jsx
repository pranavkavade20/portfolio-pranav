import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, FileText } from 'lucide-react';
import { fadeUp, pageVariants, staggerContainer } from '../config/animations';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Chip from '../components/ui/Chip';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import PageNav from '../components/layout/PageNav';
import { portfolioConfig } from '../config/portfolio';

const jobs = [
  {
    company: 'DASP Digital Pvt. Ltd.',
    role: 'Software Engineer',
    period: 'Apr 2026 - Present',
    current: true,
    description:
      'Maintaining and enhancing existing product systems by implementing new requirements, improving application functionality, and resolving bugs. Working across user management, payment, and other business modules, developing RESTful APIs, managing PostgreSQL database operations, and implementing role-based access control (RBAC) to support secure and reliable application workflows.',
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
    period: 'Jan 2025 - Apr 2025',
    current: false,
    description:
      'Focused on building dynamic, responsive user interfaces and managing the flow of application data. On the backend, designed database schemas, handled API integrations, and organized the project codebase to follow industry best practices.',
    techStack: [
      'Javascript',
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

const ExperienceCard = ({ job }) => {
  return (
    <Card hoverEffect>
      <Card.Header className="border-b border-outline-variant">
        <div className="flex flex-col tablet:flex-row tablet:items-start justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0">
            <span className="p-2.5 rounded-md bg-secondary-container text-on-secondary-container shrink-0" aria-hidden="true">
              <Briefcase size={18} />
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <Card.Title>{job.role}</Card.Title>
                {job.current && <Badge variant="success">Current</Badge>}
              </div>
              <p className="text-sm font-semibold text-secondary mt-0.5">
                {job.company}
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-on-surface-variant self-start px-3 py-1.5 rounded-full bg-surface-variant shrink-0">
            <Calendar size={13} className="text-on-surface-variant shrink-0" aria-hidden="true" />
            <span>{job.period}</span>
          </div>
        </div>
      </Card.Header>

      <Card.Content className="pt-4 space-y-4">
        <p className="text-base text-on-surface-variant leading-relaxed w-full">
          {job.description}
        </p>

        <div>
          <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2.5">
            Technologies & Tools
          </p>
          <ul className="flex flex-wrap gap-2">
            {job.techStack.map((tech) => (
              <li key={tech}>
                <Chip variant="default">{tech}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </Card.Content>
    </Card>
  );
};

function Experience() {
  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="py-6"
      aria-label="Professional Experience"
    >
      <div className="feed-container">
        <SectionHeading
          title="Where I've Built"
          subtitle="Professional Experience"
          description="Production engineering across backend APIs, databases, and cross-platform product interfaces."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col gap-5"
        >
          {jobs.map((job) => (
            <motion.div key={job.company} variants={fadeUp}>
              <ExperienceCard job={job} />
            </motion.div>
          ))}
        </motion.div>

        {/* Single Primary Action */}
        <div className="mt-8 flex justify-start">
          <Button
            as="a"
            href={portfolioConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            icon={FileText}
            className="w-full tablet:w-auto"
            aria-label="View Full Résumé PDF"
          >
            View Full Résumé (PDF)
          </Button>
        </div>

        <PageNav
          prev={{ name: 'Home', path: '/' }}
          next={{ name: 'Skills', path: '/skills' }}
        />
      </div>
    </motion.section>
  );
}

export default Experience;
