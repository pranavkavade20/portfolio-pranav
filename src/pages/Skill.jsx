import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../config/animations';
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

const skillCategories = [
  {
    fileName: 'Frontend',
    title: 'Frontend Engineering',
    description: 'Building interactive interfaces and responsive UI',
    accent: 'bg-blue-500',
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
    fileName: 'Backend',
    title: 'Backend Engineering',
    description: 'Designing APIs, data models and business logic',
    accent: 'bg-emerald-500',
    skills: [
      { name: 'Python', icon: pythonIcon },
      { name: 'SQL', icon: sqlIcon },
      { name: 'Django', icon: djangoIcon },
      { name: 'DRF', icon: drfIcon },
      { name: 'FastAPI', icon: fastapiIcon },
    ],
  },
  {
    fileName: 'Databases & Tools',
    title: 'Databases & Tooling',
    description: 'Version control, data storage and dev workflow',
    accent: 'bg-amber-500',
    skills: [
      { name: 'Git', icon: gitIcon },
      { name: 'GitHub', icon: githubIcon },
      { name: 'MongoDB', icon: mongoIcon },
      { name: 'PostgreSQL', icon: postgresIcon },
      { name: 'Postman', icon: postmanIcon },
    ],
  },
];

function Skill() {
  return (
    <section className="section-padding relative overflow-hidden bg-brand-bg-light dark:bg-brand-bg-dark transition-colors duration-300">
      <div className="content-container relative z-10">
        <div className="mb-12 md:mb-16">
          <SectionHeading title="Technical Arsenal" subtitle="Engineering Workspace" />
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {skillCategories.map((category) => (
            <motion.article
              key={category.fileName}
              variants={fadeUp}
              className="group relative glass-panel rounded-card overflow-hidden flex flex-col"
            >
              {/* Tab chrome */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02]">
                <span className={`w-2 h-2 rounded-full ${category.accent}`} aria-hidden="true" />
                <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-zinc-700" aria-hidden="true" />
                <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-zinc-700" aria-hidden="true" />
                <span className="ml-2 font-mono text-xs text-slate-500 dark:text-zinc-400 truncate">
                  {category.fileName}
                </span>
                <span className="ml-auto font-mono text-[11px] text-slate-400 dark:text-zinc-600">
                  {String(category.skills.length).padStart(2, '0')}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <h3 className="font-semibold text-card-title text-slate-900 dark:text-zinc-100 mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-zinc-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <ul className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, index) => (
                    <motion.li
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.2, type: 'spring', stiffness: 300, damping: 20 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group/skill flex items-center gap-1.5 rounded-lg border border-black/[0.05] dark:border-white/[0.05] bg-white/50 dark:bg-black/20 pl-2 pr-3 py-1.5 shadow-sm transition-colors hover:bg-white dark:hover:bg-zinc-800 hover:shadow-md hover:border-black/10 dark:hover:border-white/10"
                    >
                      <motion.div
                         whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                         transition={{ duration: 0.5 }}
                      >
                        <img
                          src={skill.icon}
                          alt=""
                          className="w-4 h-4 object-contain opacity-80 group-hover/skill:opacity-100 transition-opacity"
                          draggable="false"
                        />
                      </motion.div>
                      <span className="text-[13px] font-medium text-slate-700 dark:text-zinc-300 transition-colors group-hover/skill:text-slate-900 dark:group-hover/skill:text-white">
                        {skill.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skill;