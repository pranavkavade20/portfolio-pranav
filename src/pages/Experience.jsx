import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink, ArrowRight, FileText } from "lucide-react";
import { fadeUp, staggerContainer } from "../config/animations";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Chip from "../components/ui/Chip";
import Button from "../components/ui/Button";
import PageNav from "../components/layout/PageNav";
import { portfolioConfig } from "../config/portfolio";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.2, 0, 0, 1] }
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.2, ease: [0.3, 0, 1, 1] }
  }
};

const ExperienceCard = ({ job }) => {
  return (
    <Card 
      hoverEffect 
      className="p-6 sm:p-8 flex flex-col gap-4 text-left border-outline-variant bg-surface"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/60 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-primary-container text-on-primary-container">
              <Briefcase size={16} />
            </span>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-on-surface">
              {job.role}
            </h3>
          </div>
          <p className="text-sm font-semibold text-primary">
            {job.company}
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-medium text-on-surface-variant self-start sm:self-center px-3 py-1 rounded-full bg-surface-variant">
          <Calendar size={13} className="text-primary" />
          <span>{job.period}</span>
        </div>
      </div>

      <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
        {job.description}
      </p>

      <div className="pt-2">
        <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2.5">
          Technologies & Tools
        </p>
        <ul className="flex flex-wrap gap-2">
          {job.techStack.map((tech, i) => (
            <li key={i}>
              <Chip variant="default" className="text-xs">
                {tech}
              </Chip>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

function Experience() {
  const jobs = [
    {
      company: "DASP Digital Pvt. Ltd.",
      role: "Software Engineer",
      period: "Apr 2026 - Present",
      description:
        "Maintaining and enhancing existing product systems by implementing new requirements, improving application functionality, and resolving bugs. Working across user management, payment, and other business modules, developing RESTful APIs, managing PostgreSQL database operations, and implementing role-based access control (RBAC) to support secure and reliable application workflows.",
      techStack: [
        "Python",
        "JavaScript",
        "TypeScript",
        "React.js",
        "React Native",
        "Expo",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "Git",
        "GitHub",
        "Postman",
      ],
    },
    {
      company: "ScaleFull Technologies",
      role: "Full Stack Developer Intern",
      period: "Jan 2025 - Apr 2025",
      description:
        "Focused on building dynamic, responsive user interfaces and managing the flow of application data. On the backend, designed database schemas, handled API integrations, and organized the project codebase to follow industry best practices.",
      techStack: [
        "Javascript",
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "Redux",
        "Cloudinary",
      ],
    },
  ];

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-[calc(100vh-4rem)] relative overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20 transition-colors"
    >
      <div className="content-container relative z-10 w-full">
        <SectionHeading
          title="Where I've Built"
          subtitle="Professional Experience"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6"
        >
          {jobs.map((job, index) => (
            <motion.div key={index} variants={fadeUp}>
              <ExperienceCard job={job} />
            </motion.div>
          ))}
        </motion.div>

        {/* Primary Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center sm:justify-start"
        >
          <Button
            as="a"
            href={portfolioConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="tonal"
            size="lg"
            icon={FileText}
            aria-label="View Full R&eacute;sum&eacute;"
          >
            <span>View Full R&eacute;sum&eacute; (PDF)</span>
          </Button>
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
