import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  FileText,
  MapPin,
  Layers,
  Server,
  MonitorSmartphone,
  Mail,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, pageVariants, staggerContainer } from '../config/animations';
import { portfolioConfig } from '../config/portfolio';
import Button from '../components/ui/Button';
import MediaImage from '../components/ui/MediaImage';
import PageNav from '../components/layout/PageNav';
import profileImg from '../assets/profile.jpg';

const pillars = [
  {
    label: 'Systems & OOP',
    detail: 'Structured foundations from C and Java applied to maintainable architectures.',
    icon: Layers,
  },
  {
    label: 'Python & JS APIs',
    detail: 'Resilient REST services, RBAC workflows, and relational data modeling.',
    icon: Server,
  },
  {
    label: 'Responsive UI',
    detail: 'Fast, accessible interfaces calibrated across desktop, tablet, and mobile.',
    icon: MonitorSmartphone,
  },
];

function Home() {
  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="py-6 tablet:py-8"
      aria-label="Home Overview"
    >
      <div className="feed-container flex flex-col gap-8 tablet:gap-10">
        {/* Open Architectural Hero — directly on page ground without card-box clutter */}
        <header className="flex flex-col-reverse tablet:flex-row tablet:items-center justify-between gap-8 pb-8 border-b border-outline-variant">
          <div className="flex-1 min-w-0 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-on-surface-variant mb-4">
              <span className="w-2 h-2 rounded-full bg-success shrink-0" aria-hidden="true" />
              <span>Full Stack Engineer</span>
              <span className="text-outline" aria-hidden="true">·</span>
              <span className="font-mono">DASP Digital</span>
            </div>

            <h1 className="text-[clamp(2rem,1.5rem+1.6vw,2.75rem)] font-semibold tracking-[-0.03em] leading-[1.08] text-on-surface mb-3">
              Pranav Kavade
            </h1>

            <p className="text-base tablet:text-lg text-on-surface-variant leading-relaxed max-w-[54ch] mb-4">
              Building resilient backend APIs and clear, fast, accessible interfaces from concept to production.
            </p>

            <p className="text-xs font-mono text-on-surface-variant flex items-center gap-1.5 mb-6">
              <MapPin size={13} className="text-on-surface-variant shrink-0" aria-hidden="true" />
              <span>Maharashtra, India</span>
            </p>

            <div className="flex flex-wrap items-center gap-3 w-full tablet:w-auto">
              <Button
                as={Link}
                to="/projects"
                variant="primary"
                size="md"
                icon={ArrowRight}
                className="w-full tablet:w-auto"
              >
                Explore Projects
              </Button>

              <Button
                as="a"
                href={portfolioConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="md"
                icon={FileText}
                className="w-full tablet:w-auto"
                aria-label="View Résumé PDF in new tab"
              >
                View Résumé
              </Button>

              <Button
                as={Link}
                to="/contact"
                variant="ghost"
                size="md"
                icon={Mail}
                className="w-full tablet:w-auto"
              >
                Get in touch
              </Button>
            </div>
          </div>

          {/* Crisp Framed Portrait (clean surface, no overlaid scrim text) */}
          <div className="w-40 tablet:w-44 expanded:w-48 aspect-[4/5] rounded-lg overflow-hidden bg-surface-variant border border-outline-variant shadow-elevation-2 shrink-0 self-start tablet:self-auto">
            <MediaImage
              src={profileImg}
              alt="Portrait of Pranav Kavade, Full Stack Engineer"
              width={440}
              height={550}
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </header>

        {/* Engineering Philosophy — Open Editorial Split on the Ground */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          aria-label="Engineering Philosophy"
        >
          <div className="grid grid-cols-1 expanded:grid-cols-12 gap-6 expanded:gap-8 items-start">
            <div className="expanded:col-span-5">
              <p className="text-xs font-mono text-on-surface-variant mb-2">
                Engineering philosophy
              </p>
              <h2 className="text-xl tablet:text-2xl font-semibold tracking-tight text-on-surface leading-snug">
                Engineer.{' '}
                <span className="text-accent">Designer.</span>{' '}
                Problem Solver.
              </h2>
            </div>

            <div className="expanded:col-span-7 space-y-4 text-on-surface-variant text-base leading-relaxed max-w-[64ch]">
              <motion.p variants={fadeUp}>
                My engineering journey began with C and Java, cultivating a disciplined foundation in algorithms, systems thinking, and object-oriented architecture.
              </motion.p>
              <motion.p variants={fadeUp}>
                Transitioning to the <strong className="text-on-surface font-semibold">Python and JavaScript</strong> ecosystem enabled me to engineer production web applications, bridging robust backend APIs with polished, responsive interfaces.
              </motion.p>
              <motion.p variants={fadeUp}>
                Today, I focus on building resilient, scalable, and thoughtful software products that solve real-world problems for users and businesses.
              </motion.p>
            </div>
          </div>

          {/* 3-Column Hairline Pillars (no repetitive bordered boxes) */}
          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6 mt-8 pt-6 border-t border-outline-variant/70">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-surface-variant border border-outline-variant flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                    <Icon size={16} className="text-on-surface" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-on-surface">
                      {item.label}
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed mt-1">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        <PageNav next={{ name: 'Experience', path: '/experience' }} />
      </div>
    </motion.section>
  );
}

export default Home;
