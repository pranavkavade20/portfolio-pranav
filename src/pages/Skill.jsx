import React, { useState, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Search, RotateCcw, Layers, Database, Code2 } from 'lucide-react';
import { fadeUp, pageVariants, staggerContainer } from '../config/animations';
import { handleTabListKeyDown, getSkillLogoClass } from '../lib/utils';
import SectionHeading from '../components/ui/SectionHeading';
import PageNav from '../components/layout/PageNav';
import Input from '../components/ui/Input';
import EmptyState from '../components/ui/EmptyState';

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
    id: 'frontend',
    categoryName: 'Frontend',
    title: 'Frontend Engineering',
    description: 'Building interactive web interfaces and responsive layouts.',
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
    description: 'Designing RESTful APIs, data models, and business workflows.',
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
    categoryName: 'DB & Tools',
    title: 'Databases & Tooling',
    description: 'Relational & NoSQL storage, version control, and developer tooling.',
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
  const shouldReduceMotion = useReducedMotion();

  const totalSkillsCount = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  const filterTabs = useMemo(
    () => [
      { id: 'all', label: `All (${totalSkillsCount})` },
      ...skillCategories.map((cat) => ({
        id: cat.id,
        label: `${cat.categoryName} (${cat.skills.length})`,
      })),
    ],
    [totalSkillsCount]
  );

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

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="py-6 tablet:py-8"
      aria-label="Technical Skills"
    >
      <div className="feed-container">
        <SectionHeading
          title="Technical Arsenal"
          subtitle="Engineering workspace"
          description="Core languages, frameworks, databases, and developer tools I ship production code with."
        />

        {/* Segmented Category Tabs & Search Filter */}
        <div className="flex flex-col expanded:flex-row expanded:items-center expanded:justify-between gap-4 mb-8">
          <div
            className="inline-flex flex-wrap tablet:flex-nowrap items-center gap-1 p-1 rounded-2xl tablet:rounded-full bg-surface-variant border border-outline-variant/80 max-w-full order-2 expanded:order-1 self-start"
            role="tablist"
            aria-label="Filter skills by category"
          >
            {filterTabs.map((tab, idx) => {
              const selected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setSelectedCategory(tab.id)}
                  onKeyDown={(e) =>
                    handleTabListKeyDown(e, idx, filterTabs.length, (nextIdx) =>
                      setSelectedCategory(filterTabs[nextIdx].id)
                    )
                  }
                  className={`relative px-3.5 min-h-[38px] rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                    selected
                      ? 'text-on-surface font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId={shouldReduceMotion ? undefined : 'skills-filter-pill'}
                      className="absolute inset-0 rounded-full bg-surface shadow-elevation-1 border border-outline-variant/60"
                      transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="w-full expanded:w-64 shrink-0 order-1 expanded:order-2">
            <Input
              shape="pill"
              icon={Search}
              placeholder="Filter technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClear={() => setSearchQuery('')}
              aria-label="Filter technologies"
            />
          </div>
        </div>

        {/* Categorized Bento/Matrix Feed */}
        <div role="tabpanel" aria-live="polite">
          {filteredCategories.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-8"
            >
              {filteredCategories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <motion.section
                    key={category.id}
                    variants={fadeUp}
                    aria-labelledby={`skill-cat-${category.id}`}
                    className="pt-6 first:pt-0 border-t first:border-t-0 border-outline-variant/80"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-start gap-3 min-w-0">
                        <span
                          className="w-9 h-9 rounded-md bg-surface border border-outline-variant text-on-surface flex items-center justify-center shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          <CategoryIcon size={17} />
                        </span>
                        <div className="min-w-0">
                          <h2
                            id={`skill-cat-${category.id}`}
                            className="text-lg font-semibold tracking-tight text-on-surface"
                          >
                            {category.title}
                          </h2>
                          <p className="text-sm text-on-surface-variant mt-0.5">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-on-surface-variant tabular-nums pt-1 shrink-0">
                        {String(category.skills.length).padStart(2, '0')}
                      </span>
                    </div>

                    <ul className="grid grid-cols-2 tablet:grid-cols-3 gap-2.5">
                      {category.skills.map((skill) => (
                        <li
                          key={skill.name}
                          className="flex items-center gap-3 p-3 rounded-md bg-surface border border-outline-variant hover:border-outline transition-colors min-h-[56px]"
                        >
                          <span
                            className="w-8 h-8 rounded-sm bg-surface-variant/70 border border-outline-variant/60 flex items-center justify-center shrink-0"
                            aria-hidden="true"
                          >
                            <img
                              src={skill.icon}
                              alt=""
                              width={20}
                              height={20}
                              className={`w-5 h-5 object-contain ${getSkillLogoClass(skill.name)}`}
                              loading="eager"
                            />
                          </span>
                          <span className="text-sm font-medium text-on-surface truncate">
                            {skill.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.section>
                );
              })}
            </motion.div>
          ) : (
            <EmptyState
              icon={Search}
              title="No skills matched"
              description={`Nothing matched "${searchQuery}". Try another keyword or reset your filters.`}
              actionLabel="Reset Filters"
              actionIcon={RotateCcw}
              onAction={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            />
          )}
        </div>

        <PageNav
          prev={{ name: 'Experience', path: '/experience' }}
          next={{ name: 'Projects', path: '/projects' }}
        />
      </div>
    </motion.section>
  );
}

export default Skill;
