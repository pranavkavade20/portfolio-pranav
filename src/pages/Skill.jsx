import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Database, CheckCircle2 } from 'lucide-react';

import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';

function Skill() {
  const skillCategories = [
    {
      title: "Backend Engineering",
      icon: <Server size={32} className="text-blue-600 dark:text-blue-400" />,
      skills: ["Python", "SQL", "Django", "Django REST Framework", "FastAPI (Basics)"],
      color: "bg-blue-50 dark:bg-blue-500/10"
    },
    {
      title: "Frontend Development",
      icon: <Layout size={32} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "TypeScript", "Responsive UI/UX"],
      color: "bg-indigo-50 dark:bg-indigo-500/10"
    },
    {
      title: "Databases & Tools",
      icon: <Database size={32} className="text-teal-600 dark:text-teal-400" />,
      skills: ["Git & GitHub", "MySQL", "MongoDB", "PostgreSQL", "API Testing (Postman)"],
      color: "bg-teal-50 dark:bg-teal-500/10"
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
    <section className="py-24 md:py-32 relative overflow-hidden bg-white dark:bg-[#121212] transition-colors duration-300">
      
      {/* Soft Background Accent */}
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full p-8 md:p-10 flex flex-col group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${category.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {category.title}
                </h3>
                
                <ul className="space-y-4 flex-grow">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-zinc-400 font-medium">
                      <CheckCircle2 size={18} className="text-slate-400 dark:text-zinc-600" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skill;