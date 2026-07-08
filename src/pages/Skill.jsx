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
      title: "Backend Engineering",
      folderColor: "#E67E22",
      skills: [
        { name: "Python", icon: pythonIcon },
        { name: "SQL", icon: sqlIcon },
        { name: "Django", icon: djangoIcon },
        { name: "DRF", icon: drfIcon },
        { name: "FastAPI", icon: fastapiIcon },
      ]
    },
    {
      title: "Frontend Development",
      folderColor: "#4f46e5",
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
      title: "Databases & Tools",
      folderColor: "#0d9488",
      skills: [
        { name: "Git", icon: gitIcon },
        { name: "GitHub", icon: githubIcon },
        { name: "MongoDB", icon: mongoIcon },
        { name: "PostgreSQL", icon: postgresIcon },
        { name: "Postman", icon: postmanIcon },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-brand-bg-light dark:bg-brand-bg-dark transition-colors duration-300">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 dark:from-black/40 to-transparent"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="Core Competencies" 
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-16 max-w-6xl mx-auto mt-28 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="flex justify-center items-end h-[280px] pb-6 relative">
              <Folder
                color={category.folderColor}
                size={1.7}
                title={category.title}
                items={category.skills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center gap-1 w-full h-full p-1 select-none pointer-events-none">
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain drop-shadow-sm" />
                    <span className="text-[7px] font-bold text-slate-700 dark:text-slate-200 text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skill;