import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, RotateCcw, Sparkles, Layers, Database, Code2 } from 'lucide-react';
import { fadeUp, staggerContainer } from '../config/animations';
import SectionHeading from '../components/ui/SectionHeading';
import PageNav from '../components/layout/PageNav';
import Card from '../components/ui/Card';
import Chip from '../components/ui/Chip';
import Button from '../components/ui/Button';

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

const skillCategories = [
  {
    id: 'frontend',
    categoryName: 'Frontend',
    title: 'Frontend Engineering',
    description: 'Building interactive web interfaces and responsive layouts',
    icon: Code2,
    skills: [
      { name: 'HTML5', icon: htmlIcon },
      { name: 'CSS3', icon: cssIcon },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'React', icon: reactIcon },
      { name: 'TypeScript', icon: tsIcon },
      { name: 'Tailwind CSS', icon: tailwindIcon },
    ],
  },
  {
    id: 'backend',
    categoryName: 'Backend',
    title: 'Backend Engineering',
    description: 'Designing RESTful APIs, data models and business workflows',
    icon: Layers,
    skills: [
      { name: 'Python', icon: pythonIcon },
      { name: 'SQL', icon: sqlIcon },
      { name: 'Django', icon: djangoIcon },
      { name: 'DRF', icon: drfIcon },
      { name: 'FastAPI', icon: fastapiIcon },
    ],
  },
  {
    id: 'database',
    categoryName: 'Databases & Tools',
    title: 'Databases & Tooling',
    description: 'Relational & NoSQL storage, version control and dev tooling',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', icon: postgresIcon },
      { name: 'MongoDB', icon: mongoIcon },
      { name: 'Git', icon: gitIcon },
      { name: 'GitHub', icon: githubIcon },
      { name: 'Postman', icon: postmanIcon },
    ],
  },
];

function Skill() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    return skillCategories
      .map((cat) => {
        if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
          return null;
        }

        const filteredSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
        );

        if (searchQuery.trim() && filteredSkills.length === 0) {
          return null;
        }

        return {
          ...cat,
          skills: filteredSkills,
        };
      })
      .filter(Boolean);
  }, [selectedCategory, searchQuery]);

  const totalSkillsCount = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

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
          title="Technical Arsenal" 
          subtitle="Engineering Workspace" 
        />

        {/* Search & Category Filter Bar (Meta x Google Filter Rail) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 w-full">
          {/* Category Filter Chips */}
          <div 
            className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none"
            role="tablist"
            aria-label="Filter skills by category"
          >
            <Chip
              variant={selectedCategory === 'all' ? 'primary' : 'outlined'}
              onClick={() => setSelectedCategory('all')}
              aria-selected={selectedCategory === 'all'}
              role="tab"
            >
              All ({totalSkillsCount})
            </Chip>

            {skillCategories.map((cat) => (
              <Chip
                key={cat.id}
                variant={selectedCategory === cat.id ? 'primary' : 'outlined'}
                onClick={() => setSelectedCategory(cat.id)}
                aria-selected={selectedCategory === cat.id}
                role="tab"
              >
                {cat.categoryName} ({cat.skills.length})
              </Chip>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-64">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
            <input
              type="text"
              placeholder="Filter tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Filter skills"
              className="w-full h-10 pl-9 pr-3 text-xs sm:text-sm rounded-full bg-surface text-on-surface border border-outline hover:border-on-surface-variant focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
            />
          </div>
        </div>

        {/* Categories Grid or Empty State */}
        {filteredCategories.length > 0 ? (
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {filteredCategories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <motion.article
                  key={category.id}
                  variants={fadeUp}
                  className="flex flex-col h-full"
                >
                  <Card 
                    hoverEffect
                    className="flex-1 flex flex-col p-6 border-outline-variant bg-surface"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-outline-variant/60">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-primary-container text-on-primary-container">
                          <CategoryIcon size={16} />
                        </span>
                        <h3 className="font-bold text-base sm:text-lg text-on-surface">
                          {category.categoryName}
                        </h3>
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-surface-variant text-on-surface-variant">
                        {category.skills.length}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skill Badges / Chips */}
                    <ul className="flex flex-wrap gap-2.5 mt-auto">
                      {category.skills.map((skill, index) => (
                        <motion.li
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.04, duration: 0.2 }}
                          whileHover={{ scale: 1.04 }}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-variant/70 border border-outline-variant hover:border-primary/40 hover:bg-surface-variant text-on-surface transition-all select-none shadow-xs"
                        >
                          <img
                            src={skill.icon}
                            alt=""
                            className="w-4 h-4 object-contain shrink-0"
                            loading="lazy"
                            aria-hidden="true"
                          />
                          <span className="text-xs font-medium">
                            {skill.name}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </motion.article>
              );
            })}
          </motion.div>
        ) : (
          /* Empty State (Meta x Google requirement) */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-16 px-6 text-center max-w-md mx-auto flex flex-col items-center justify-center bg-surface border border-outline-variant rounded-2xl shadow-elevation-1"
          >
            <div className="w-12 h-12 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center mb-4">
              <Search size={22} />
            </div>
            <h4 className="font-bold text-lg text-on-surface mb-1">
              No skills found
            </h4>
            <p className="text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
              No technologies matched "{searchQuery}". Try searching for another skill or reset your filters.
            </p>
            <Button
              variant="tonal"
              size="sm"
              icon={RotateCcw}
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Reset Filters
            </Button>
          </motion.div>
        )}

        <PageNav
          prev={{ name: 'Experience', path: '/experience' }}
          next={{ name: 'Projects', path: '/projects' }}
        />
      </div>
    </motion.section>
  );
}

export default Skill;
