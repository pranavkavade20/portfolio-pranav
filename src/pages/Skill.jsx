import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, RotateCcw, Layers, Database, Code2 } from 'lucide-react';
import { fadeUp, pageVariants, staggerContainer } from '../config/animations';
import { handleTabListKeyDown, getSkillLogoClass } from '../lib/utils';
import SectionHeading from '../components/ui/SectionHeading';
import PageNav from '../components/layout/PageNav';
import Card from '../components/ui/Card';
import Chip from '../components/ui/Chip';
import Badge from '../components/ui/Badge';
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
    categoryName: 'Databases & Tools',
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
          subtitle="Engineering Workspace"
          description="Core languages, frameworks, databases, and developer tools I ship production code with."
        />

        {/* Filter Chips & Search Bar */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="w-full tablet:max-w-xs">
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

          <div
            className="flex items-center gap-2 overflow-x-auto py-2 -my-2 scrollbar-none"
            role="tablist"
            aria-label="Filter skills by category"
          >
            {filterTabs.map((tab, idx) => {
              const selected = selectedCategory === tab.id;
              return (
                <Chip
                  key={tab.id}
                  variant={selected ? 'primary' : 'outlined'}
                  selected={selected}
                  onClick={() => setSelectedCategory(tab.id)}
                  onKeyDown={(e) =>
                    handleTabListKeyDown(e, idx, filterTabs.length, (nextIdx) =>
                      setSelectedCategory(filterTabs[nextIdx].id)
                    )
                  }
                  aria-selected={selected}
                  role="tab"
                  tabIndex={selected ? 0 : -1}
                >
                  {tab.label}
                </Chip>
              );
            })}
          </div>
        </div>

        {/* Categories Feed or Empty State */}
        <div role="tabpanel" aria-live="polite">
          {filteredCategories.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-4"
            >
              {filteredCategories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <motion.article key={category.id} variants={fadeUp}>
                    <Card hoverEffect>
                      <Card.Header className="border-b border-outline-variant">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="p-2 rounded-md bg-primary-container text-on-primary-container shrink-0" aria-hidden="true">
                              <CategoryIcon size={18} />
                            </span>
                            <Card.Title className="truncate">{category.title}</Card.Title>
                          </div>
                          <Badge variant="default">{category.skills.length}</Badge>
                        </div>
                        <Card.Description>{category.description}</Card.Description>
                      </Card.Header>

                      <Card.Content className="pt-4">
                        <ul className="flex flex-wrap gap-2.5">
                          {category.skills.map((skill) => (
                            <li
                              key={skill.name}
                              className="inline-flex items-center gap-2 px-3 py-1.5 min-h-[36px] rounded-full bg-surface-variant border border-outline-variant text-on-surface text-sm font-medium select-none"
                            >
                              <img
                                src={skill.icon}
                                alt=""
                                width={16}
                                height={16}
                                className={`w-4 h-4 object-contain shrink-0 ${getSkillLogoClass(skill.name)}`}
                                loading="lazy"
                                aria-hidden="true"
                              />
                              <span>{skill.name}</span>
                            </li>
                          ))}
                        </ul>
                      </Card.Content>
                    </Card>
                  </motion.article>
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
