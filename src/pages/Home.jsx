import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, MapPin, Layers, Server, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, pageVariants, scaleIn, staggerContainer } from '../config/animations';
import { portfolioConfig } from '../config/portfolio';
import TextReveal from '../components/ui/TextReveal';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import MediaImage from '../components/ui/MediaImage';
import PageNav from '../components/layout/PageNav';
import profileImg from '../assets/profile.jpg';

const highlights = [
  { label: 'Systems & OOP', icon: Layers },
  { label: 'Python & JS APIs', icon: Server },
  { label: 'Responsive UI', icon: Sparkles },
];

function Home() {
  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="py-6"
      aria-label="Home Overview"
    >
      <div className="feed-container flex flex-col gap-6">
        {/* Profile Feed Hero Card */}
        <motion.div variants={scaleIn} initial="hidden" animate="visible">
          <Card className="p-4 tablet:p-6">
            <div className="flex flex-col tablet:flex-row items-center tablet:items-start gap-6">
              {/* Portrait Frame */}
              <div className="relative w-full max-w-[220px] tablet:w-44 expanded:w-48 aspect-[4/5] rounded-lg overflow-hidden bg-surface-variant border border-outline-variant shrink-0">
                <MediaImage
                  src={profileImg}
                  alt="Portrait of Pranav Kavade, Full Stack Engineer"
                  width={440}
                  height={550}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-scrim-strong via-scrim/40 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute bottom-3 left-3 right-3 text-on-media pointer-events-none">
                  <p className="text-xs font-medium text-on-media-muted flex items-center gap-1">
                    <MapPin size={13} className="text-on-media-muted shrink-0" aria-hidden="true" />
                    <span>Maharashtra, IN</span>
                  </p>
                </div>
              </div>

              {/* Identity, Headline & Single Primary Action */}
              <div className="flex-1 min-w-0 flex flex-col items-center tablet:items-start text-center tablet:text-left">
                <Badge variant="secondary" className="mb-3">
                  Full Stack Engineer
                </Badge>

                <h1 className="text-2xl tablet:text-3xl font-semibold tracking-tight text-on-surface leading-tight mb-2">
                  Pranav Kavade
                </h1>

                <p className="text-base text-on-surface-variant leading-relaxed w-full mb-5">
                  Building resilient backend APIs and clear, fast, accessible interfaces from concept to production.
                </p>

                <div className="flex flex-wrap items-center justify-center tablet:justify-start gap-3 w-full">
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
                    variant="tonal"
                    size="md"
                    icon={FileText}
                    className="w-full tablet:w-auto"
                    aria-label="View Résumé PDF in new tab"
                  >
                    View Résumé
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Engineering Narrative Card */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <Card>
            <Card.Header>
              <p className="text-xs font-semibold tracking-wider uppercase text-secondary">
                Engineering Philosophy
              </p>
              <h2 className="text-2xl tablet:text-3xl font-semibold tracking-tight text-on-surface leading-tight">
                <TextReveal text="Engineer." delay={0.04} />{' '}
                <span className="text-accent">
                  <TextReveal text="Designer." delay={0.12} />
                </span>{' '}
                <TextReveal text="Problem Solver." delay={0.2} />
              </h2>
            </Card.Header>

            <Card.Content className="space-y-4 text-on-surface-variant text-base leading-relaxed w-full">
              <motion.p variants={fadeUp}>
                My engineering journey began with C and Java, cultivating a disciplined foundation in algorithms, systems thinking, and object-oriented architecture.
              </motion.p>
              <motion.p variants={fadeUp}>
                Transitioning to the <strong className="text-on-surface font-semibold">Python and JavaScript</strong> ecosystem enabled me to engineer production web applications, bridging robust backend APIs with polished, responsive interfaces.
              </motion.p>
              <motion.p variants={fadeUp}>
                Today, I focus on building resilient, scalable, and thoughtful software products that solve real-world problems for users and businesses.
              </motion.p>
            </Card.Content>

            <Card.Footer className="border-t border-outline-variant pt-4">
              <div className="grid grid-cols-1 tablet:grid-cols-3 gap-2.5 w-full">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-md bg-surface-variant/70 border border-outline-variant text-sm font-medium text-on-surface"
                    >
                      <Icon size={16} className="text-secondary shrink-0" aria-hidden="true" />
                      <span className="truncate">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </Card.Footer>
          </Card>
        </motion.div>

        <PageNav next={{ name: 'Experience', path: '/experience' }} />
      </div>
    </motion.section>
  );
}

export default Home;
