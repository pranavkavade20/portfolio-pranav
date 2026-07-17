import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';

// Frontend
import htmlIcon from '../assets/skills/frontend/HTML5.svg';
import cssIcon from '../assets/skills/frontend/CSS3.svg';
import jsIcon from '../assets/skills/frontend/JavaScript.svg';
import reactIcon from '../assets/skills/frontend/React.svg';
import tsIcon from '../assets/skills/frontend/TypeScript.svg';
import tailwindIcon from '../assets/skills/frontend/Tailwind CSS.svg';

// Backend
import pythonIcon from '../assets/skills/backend/Python.svg';
import sqlIcon from '../assets/skills/backend/SQL.svg';
import djangoIcon from '../assets/skills/backend/Django.svg';
import drfIcon from '../assets/skills/backend/Django REST.svg';
import fastapiIcon from '../assets/skills/backend/FastAPI.svg';

// Database & Tools
import gitIcon from '../assets/skills/database_tools/Git.svg';
import githubIcon from '../assets/skills/database_tools/GitHub.svg';
import mongoIcon from '../assets/skills/database_tools/MongoDB.svg';
import postgresIcon from '../assets/skills/database_tools/PostgresSQL.svg';
import postmanIcon from '../assets/skills/database_tools/Postman.svg';

// Each category is modeled as a file in an editor: a real, scannable
// artifact from an engineer's world rather than a decorative shape.
const skillCategories = [
  {
    fileName: 'frontend.tsx',
    title: 'Frontend Engineering',
    description: 'Building interactive interfaces and responsive UI',
    accent: '#2563EB',
    skills: [
      { name: 'HTML5', icon: htmlIcon },
      { name: 'CSS3', icon: cssIcon },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'React', icon: reactIcon },
      { name: 'TypeScript', icon: tsIcon },
      { name: 'Tailwind', icon: tailwindIcon },
    ],
  },
  {
    fileName: 'backend.py',
    title: 'Backend Engineering',
    description: 'Designing APIs, data models and business logic',
    accent: '#16A34A',
    skills: [
      { name: 'Python', icon: pythonIcon },
      { name: 'SQL', icon: sqlIcon },
      { name: 'Django', icon: djangoIcon },
      { name: 'DRF', icon: drfIcon },
      { name: 'FastAPI', icon: fastapiIcon },
    ],
  },
  {
    fileName: 'toolbox.yml',
    title: 'Databases & Tooling',
    description: 'Version control, data storage and dev workflow',
    accent: '#EA580C',
    skills: [
      { name: 'Git', icon: gitIcon },
      { name: 'GitHub', icon: githubIcon },
      { name: 'MongoDB', icon: mongoIcon },
      { name: 'PostgreSQL', icon: postgresIcon },
      { name: 'Postman', icon: postmanIcon },
    ],
  },
];

const totalSkills = skillCategories.reduce((sum, c) => sum + c.skills.length, 0);

function Skill() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-brand-bg-light dark:bg-brand-bg-dark transition-colors duration-300">
      {/* Consistent Animated Background Blobs */}
      <div className="absolute top-[-8%] left-[-8%] w-64 h-64 bg-amber-200/50 dark:bg-amber-900/20 rounded-full blur-[90px] z-0 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-[10%] right-[-6%] w-72 h-72 bg-brand-secondary/50 dark:bg-brand-primary/20 rounded-full blur-[90px] z-0 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>

      <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10">
        <div className="mb-12 md:mb-16">
          <SectionHeading title="Technical Arsenal" subtitle="Engineering Workspace" />
        </div>

        {/* Terminal-style summary line — quantifiable, scannable in 2 seconds */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-slate-200 dark:border-brand-primary/20 bg-brand-primary/5 dark:bg-brand-primary/10 backdrop-blur-sm px-4 py-2.5 font-mono text-[13px] leading-none"
        >
          <span className="text-emerald-600 dark:text-emerald-400">$</span>
          <span className="text-slate-500 dark:text-slate-400">cat skills.summary</span>
          <span
            aria-hidden="true"
            className="inline-block w-[7px] h-[14px] bg-slate-400 dark:bg-slate-500 animate-pulse"
          />
          <span className="text-slate-300 dark:text-slate-700">→</span>
          <span className="text-slate-700 dark:text-slate-300">
            {totalSkills} technologies · {skillCategories.length} domains · full-stack
          </span>
        </motion.div>

        {/* Editor-window cards, one per domain — everything visible at a glance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.fileName}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
              className="group relative rounded-2xl border border-slate-200 dark:border-brand-primary/20 bg-brand-primary/5 dark:bg-brand-primary/5 backdrop-blur-md shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Git-gutter accent, ties each card to its category color */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: category.accent }}
              />

              {/* Tab chrome */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-200 dark:border-brand-primary/20 bg-brand-primary/5 dark:bg-brand-primary/10">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: category.accent }}
                  aria-hidden="true"
                />
                <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" aria-hidden="true" />
                <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" aria-hidden="true" />
                <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400 truncate">
                  {category.fileName}
                </span>
                <span className="ml-auto font-mono text-[11px] text-slate-400 dark:text-slate-600">
                  {String(category.skills.length).padStart(2, '0')}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 md:p-6 pl-6 md:pl-7">
                <h3 className="font-bold text-[17px] text-slate-900 dark:text-white mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill.name}
                      whileHover={{
                        y: -3,
                        borderColor: category.accent,
                        backgroundColor: `${category.accent}0D`,
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-brand-primary/20 bg-brand-primary/5 dark:bg-brand-primary/10 pl-2 pr-3 py-1.5"
                    >
                      <img
                        src={skill.icon}
                        alt=""
                        className="w-4 h-4 object-contain dark:drop-shadow-[0_0_3px_rgba(255,255,255,0.15)]"
                        draggable="false"
                      />
                      <span className="text-[13px] font-medium text-slate-700 dark:text-slate-200">
                        {skill.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;