import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Folder from '../components/ui/Folder';

// Import Backend SVGs
import pythonIcon from '../assets/skills/backend/Python.svg';
import sqlIcon from '../assets/skills/backend/SQL.svg';
import djangoIcon from '../assets/skills/backend/Django.svg';
import drfIcon from '../assets/skills/backend/Django REST.svg';
import fastapiIcon from '../assets/skills/backend/FastAPI.svg';

// Import Frontend SVGs
import htmlIcon from '../assets/skills/frontend/HTML5.svg';
import cssIcon from '../assets/skills/frontend/CSS3.svg';
import jsIcon from '../assets/skills/frontend/JavaScript.svg';
import reactIcon from '../assets/skills/frontend/React.svg';
import tsIcon from '../assets/skills/frontend/TypeScript.svg';
import tailwindIcon from '../assets/skills/frontend/Tailwind CSS.svg';

// Import Database Tools SVGs
import gitIcon from '../assets/skills/database_tools/Git.svg';
import githubIcon from '../assets/skills/database_tools/GitHub.svg';
import mongoIcon from '../assets/skills/database_tools/MongoDB.svg';
import postgresIcon from '../assets/skills/database_tools/PostgresSQL.svg';
import postmanIcon from '../assets/skills/database_tools/Postman.svg';

function Skill() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      folderColor: "#2563EB",
      skills: [
        { name: "HTML5", icon: htmlIcon },
        { name: "CSS3", icon: cssIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "React", icon: reactIcon },
        { name: "TypeScript", icon: tsIcon },
        { name: "Tailwind", icon: tailwindIcon },
      ]
    },
    {
      title: "Backend Engineering",
      folderColor: "#16A34A",
      skills: [
        { name: "Python", icon: pythonIcon },
        { name: "SQL", icon: sqlIcon },
        { name: "Django", icon: djangoIcon },
        { name: "DRF", icon: drfIcon },
        { name: "FastAPI", icon: fastapiIcon },
      ]
    },

    {
      title: "Databases & Tools",
      folderColor: "#EA580C",
      skills: [
        { name: "Git", icon: gitIcon },
        { name: "GitHub", icon: githubIcon },
        { name: "MongoDB", icon: mongoIcon },
        { name: "PostgreSQL", icon: postgresIcon },
        { name: "Postman", icon: postmanIcon },
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-brand-bg-light dark:bg-brand-bg-dark transition-colors duration-300">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 dark:from-black/40 to-transparent z-0"></div>

      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <SectionHeading
          title="Technical Skills"
          subtitle="SkillHub"
        />

        <div className="mt-32 md:mt-48 flex flex-col gap-16 md:gap-24 relative pb-32">
          {skillCategories.map((category, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`flex w-full relative ${isEven ? 'justify-start md:pl-20' : 'justify-end md:pr-20'} justify-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Arrow pointing to the next folder */}
                {index < skillCategories.length - 1 && (
                  <>
                    {/* Desktop Zig-Zag SVG Curve */}
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-[80%] left-0 w-full h-[120px] md:h-[160px] pointer-events-none z-0 hidden md:block">
                      <defs>
                        <linearGradient id="orangeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#E67E22" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
                        </linearGradient>
                      </defs>
                      {/* Base Line */}
                      <path
                        d={isEven ? "M 20 0 C 20 50, 80 50, 80 100" : "M 80 0 C 80 50, 20 50, 20 100"}
                        stroke="currentColor"
                        className="text-slate-300 dark:text-slate-700"
                        strokeWidth="2"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      />
                      {/* Flowing Orange Current Line */}
                      <motion.path
                        d={isEven ? "M 20 0 C 20 50, 80 50, 80 100" : "M 80 0 C 80 50, 20 50, 20 100"}
                        stroke="url(#orangeGlow)"
                        strokeWidth="2.5"
                        fill="none"
                        strokeDasharray="15 30"
                        vectorEffect="non-scaling-stroke"
                        initial={{ strokeDashoffset: 100 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                      {/* Base Arrowhead */}
                      <path
                        d={isEven ? "M 78 95 L 80 100 L 82 95" : "M 18 95 L 20 100 L 22 95"}
                        stroke="currentColor"
                        className="text-slate-300 dark:text-slate-700"
                        strokeWidth="2"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      />
                      {/* Glowing Arrowhead */}
                      <path
                        d={isEven ? "M 78 95 L 80 100 L 82 95" : "M 18 95 L 20 100 L 22 95"}
                        stroke="url(#orangeGlow)"
                        strokeWidth="2"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>

                    {/* Mobile Straight SVG Line */}
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-[80%] left-0 w-full h-[120px] pointer-events-none z-0 md:hidden">
                      <defs>
                        <linearGradient id="orangeGlowMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#E67E22" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
                        </linearGradient>
                      </defs>
                      {/* Base Line */}
                      <path
                        d="M 50 0 L 50 100"
                        stroke="currentColor"
                        className="text-slate-300 dark:text-slate-700"
                        strokeWidth="2"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      />
                      {/* Flowing Orange Current Line */}
                      <motion.path
                        d="M 50 0 L 50 100"
                        stroke="url(#orangeGlowMobile)"
                        strokeWidth="2.5"
                        fill="none"
                        strokeDasharray="15 30"
                        vectorEffect="non-scaling-stroke"
                        initial={{ strokeDashoffset: 100 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                      {/* Base Arrowhead */}
                      <path
                        d="M 46 95 L 50 100 L 54 95"
                        stroke="currentColor"
                        className="text-slate-300 dark:text-slate-700"
                        strokeWidth="2"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      />
                      {/* Glowing Arrowhead */}
                      <path
                        d="M 46 95 L 50 100 L 54 95"
                        stroke="url(#orangeGlowMobile)"
                        strokeWidth="2"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </>
                )}

                <div className="relative z-10 pt-[120px] -mt-[120px]">
                  <Folder
                    color={category.folderColor}
                    size={2.2}
                    title={category.title}
                    items={category.skills.map((skill, idx) => (
                      <div key={idx} className="flex flex-col items-center justify-center gap-1 w-full h-full select-none pointer-events-none">
                        <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain drop-shadow-sm" />
                        <span className="text-[5px] font-bold text-slate-700 dark:text-slate-200 text-center leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skill;