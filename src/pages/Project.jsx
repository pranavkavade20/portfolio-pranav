import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Target,
  Lightbulb,
  Sprout,
  ChefHat,
  LayoutDashboard,
  ShieldCheck,
  Store,
  ClipboardList,
  MessageSquare,
  Users,
  TrendingUp,
  ShoppingCart,
  MapPin,
  CalendarCheck,
  Zap,
  Sparkles,
  Refrigerator,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Maximize2,
  Layers,
  Bookmark,
  Share2,
  FolderSearch,
} from 'lucide-react';
import { pageVariants } from '../config/animations';
import { handleTabListKeyDown, getSkillLogoClass } from '../lib/utils';
import SectionHeading from '../components/ui/SectionHeading';
import PageNav from '../components/layout/PageNav';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Chip from '../components/ui/Chip';
import Dialog from '../components/ui/Dialog';
import MediaImage from '../components/ui/MediaImage';
import EmptyState from '../components/ui/EmptyState';
import { useSnackbar } from '../components/ui/Snackbar';

// --- IMAGE IMPORTS ---
import farmketImg1 from '../assets/project_images/farmket/HomePage.jpg';
import farmketImg2 from '../assets/project_images/farmket/BuyerMarketPlace.jpg';
import farmketImg3 from '../assets/project_images/farmket/FarmerProduct.jpg';
import farmketImg4 from '../assets/project_images/farmket/FarmerCropTracking.jpg';
import farmketImg5 from '../assets/project_images/farmket/BuyerDashboard.jpg';
import farmketImg6 from '../assets/project_images/farmket/BuyerFarmerChat.jpg';
import farmketImg7 from '../assets/project_images/farmket/BuyerAddtoCart.jpg';
import farmketImg8 from '../assets/project_images/farmket/BuyerOrder.jpg';
import farmketImg9 from '../assets/project_images/farmket/Community.jpg';
import farmketImg10 from '../assets/project_images/farmket/FarmerAddProduct .jpg';
import farmketImg11 from '../assets/project_images/farmket/FarmerOrderSystem.jpg';

import recipyImg1 from '../assets/project_images/recipy/Home.jpg';
import recipyImg2 from '../assets/project_images/recipy/Recipe.png';
import recipyImg3 from '../assets/project_images/recipy/Recommendation.png';
import recipyImg4 from '../assets/project_images/recipy/Search.png';

import productifyImg from '../assets/project_images/productify/productify.png';

// --- SKILL LOGO IMPORTS ---
import reactLogo from '../assets/skills/frontend/React.svg';
import tsLogo from '../assets/skills/frontend/TypeScript.svg';
import jsLogo from '../assets/skills/frontend/JavaScript.svg';
import tailwindLogo from '../assets/skills/frontend/Tailwind CSS.svg';
import htmlLogo from '../assets/skills/frontend/HTML5.svg';
import cssLogo from '../assets/skills/frontend/CSS3.svg';

import pythonLogo from '../assets/skills/backend/Python.svg';
import djangoLogo from '../assets/skills/backend/Django.svg';
import drfLogo from '../assets/skills/backend/Django REST.svg';
import fastapiLogo from '../assets/skills/backend/FastAPI.svg';
import sqlLogo from '../assets/skills/backend/SQL.svg';

import postgresLogo from '../assets/skills/database_tools/PostgresSQL.svg';
import mongoLogo from '../assets/skills/database_tools/MongoDB.svg';
import gitLogo from '../assets/skills/database_tools/Git.svg';
import githubLogo from '../assets/skills/database_tools/GitHub.svg';
import postmanLogo from '../assets/skills/database_tools/Postman.svg';

const skillLogos = {
  react: reactLogo,
  typescript: tsLogo,
  javascript: jsLogo,
  'tailwind css': tailwindLogo,
  html: htmlLogo,
  html5: htmlLogo,
  css: cssLogo,
  css3: cssLogo,
  python: pythonLogo,
  django: djangoLogo,
  'django rest framework': drfLogo,
  drf: drfLogo,
  fastapi: fastapiLogo,
  sql: sqlLogo,
  postgresql: postgresLogo,
  postgres: postgresLogo,
  mongodb: mongoLogo,
  git: gitLogo,
  github: githubLogo,
  postman: postmanLogo,
};

const RedisIcon = () => (
  <svg className="w-3.5 h-3.5 text-accent shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 8.5L12 4L21 8.5L12 13L3 8.5Z" fill="currentColor" />
    <path d="M3 13L12 17.5L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 17.5L12 22L21 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TechBadge = ({ tech }) => {
  const normalizedKey = tech.toLowerCase().trim();
  const realLogo = skillLogos[normalizedKey];

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-surface-variant text-on-surface border border-outline-variant select-none">
      {realLogo ? (
        <img
          src={realLogo}
          alt=""
          width={14}
          height={14}
          className={`w-3.5 h-3.5 object-contain shrink-0 ${getSkillLogoClass(normalizedKey)}`}
          loading="lazy"
          aria-hidden="true"
        />
      ) : normalizedKey === 'redis' ? (
        <RedisIcon />
      ) : normalizedKey === 'ai & ml' ? (
        <Sparkles size={12} className="text-tertiary shrink-0" aria-hidden="true" />
      ) : normalizedKey === 'websockets' ? (
        <Zap size={12} className="text-info shrink-0" aria-hidden="true" />
      ) : null}
      <span>{tech}</span>
    </span>
  );
};

// --- PROJECTS DATA ---
const projects = [
  {
    id: 0,
    title: 'Farmket',
    navIcon: Sprout,
    badgeText: 'MARKETPLACE PLATFORM',
    badgeIcon: Sprout,
    desc: 'A farmer and buyer marketplace connecting local farmers with consumers for fresh, healthy produce.',
    tech: ['React', 'TypeScript', 'Django', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'Django REST Framework', 'Websockets', 'JavaScript'],
    featuredTechCount: 5,
    links: { code: 'https://github.com/pranavkavade20/Farmket', demo: '' },
    image: farmketImg1,
    featuredGallery: [
      { label: 'Home Page', url: farmketImg1, category: 'Overview' },
      { label: 'Buyer Marketplace', url: farmketImg2, category: 'Buyer Flow' },
      { label: 'Buyer Dashboard', url: farmketImg5, category: 'Buyer Flow' },
      { label: 'Buyer & Farmer Chat', url: farmketImg6, category: 'Global Features' },
      { label: 'Community', url: farmketImg9, category: 'Global Features' },
    ],
    gallery: [
      { label: 'Home Page', url: farmketImg1, category: 'Overview' },
      { label: 'Buyer Marketplace', url: farmketImg2, category: 'Buyer Flow' },
      { label: 'Buyer Add to Cart', url: farmketImg7, category: 'Buyer Flow' },
      { label: 'Buyer Dashboard', url: farmketImg5, category: 'Buyer Flow' },
      { label: 'Buyer Order', url: farmketImg8, category: 'Buyer Flow' },
      { label: 'Farmer Dashboard', url: farmketImg3, category: 'Farmer Flow' },
      { label: 'Farmer Add Product', url: farmketImg10, category: 'Farmer Flow' },
      { label: 'Farmer Order System', url: farmketImg11, category: 'Farmer Flow' },
      { label: 'Crop Tracking', url: farmketImg4, category: 'Farmer Flow' },
      { label: 'Buyer & Farmer Chat', url: farmketImg6, category: 'Global Features' },
      { label: 'Community', url: farmketImg9, category: 'Global Features' },
    ],
    problem: 'Farmers struggle to reach consumers directly, relying on middlemen which reduces profits. Consumers lack a reliable way to source fresh, local produce.',
    solution: 'A unified marketplace with direct farmer-buyer communication, transparent pricing, and seamless transactions.',
    roleFeatures: {
      farmer: [
        { title: 'Secure Authentication', desc: 'Robust data protection and private account access.', image: farmketImg3, icon: ShieldCheck },
        { title: 'Digital Storefront', desc: 'Easily add products and sell online directly to buyers.', image: farmketImg10, icon: Store },
        { title: 'Crop Tracking', desc: 'Update crop stages to allow buyers to pre-book upcoming harvests.', image: farmketImg4, icon: Sprout },
        { title: 'Order System', desc: 'Seamlessly receive and manage incoming orders.', image: farmketImg11, icon: ClipboardList },
        { title: 'Real-time Chat', desc: 'Communicate directly with buyers to negotiate and build trust.', image: farmketImg6, icon: MessageSquare },
        { title: 'Community Posting', desc: 'Post updates and crop stages to the community feed to attract buyers early.', image: farmketImg9, icon: Users },
        { title: 'Business Analytics', desc: 'Track sales performance and monitor store growth.', image: farmketImg5, icon: TrendingUp },
      ],
      buyer: [
        { title: 'Secure Authentication', desc: 'Safe, private login for personal shopping.', image: farmketImg1, icon: ShieldCheck },
        { title: 'Multi-vendor Cart', desc: 'Add products from different farmers into a single, unified shopping cart.', image: farmketImg7, icon: ShoppingCart },
        { title: 'Order Tracking', desc: 'Monitor order status from placement to delivery.', image: farmketImg8, icon: MapPin },
        { title: 'Real-time Chat', desc: 'Ask farmers questions directly before making a purchase.', image: farmketImg6, icon: MessageSquare },
        { title: 'Community Feed', desc: 'Stay updated on the latest products and farm news.', image: farmketImg9, icon: Users },
        { title: 'Early Pre-booking', desc: 'Secure high-demand produce early based on live crop stage updates.', image: farmketImg2, icon: CalendarCheck },
      ],
    },
  },
  {
    id: 1,
    title: 'Recipy',
    navIcon: ChefHat,
    badgeText: 'AI CULINARY ENGINE',
    badgeIcon: Sparkles,
    desc: 'A smart culinary engine leveraging Scikit-Learn and FAISS to deliver sub-second recipe recommendations based on user inventory and preferences.',
    tech: ['Python', 'Django', 'JavaScript', 'Tailwind CSS', 'AI & ML'],
    featuredTechCount: 5,
    links: { code: 'https://github.com/pranavkavade20/Recipy', demo: '#' },
    image: recipyImg1,
    featuredGallery: [
      { label: 'Home', url: recipyImg1, category: 'Overview' },
      { label: 'Search Interface', url: recipyImg4, category: 'Search' },
      { label: 'AI Recommendations', url: recipyImg3, category: 'AI Features' },
      { label: 'Recipe View', url: recipyImg2, category: 'Overview' },
    ],
    gallery: [
      { label: 'Home', url: recipyImg1, category: 'Overview' },
      { label: 'Search Interface', url: recipyImg4, category: 'Search' },
      { label: 'AI Recommendations', url: recipyImg3, category: 'AI Features' },
      { label: 'Recipe View', url: recipyImg2, category: 'Overview' },
    ],
    problem: 'People often have ingredients in their fridge but struggle to find creative, personalized recipes quickly.',
    solution: 'An AI-powered assistant that matches your current inventory to thousands of recipes in sub-second speeds using FAISS.',
    features: [
      { title: 'Lightning Fast Search', desc: 'Sub-second search with FAISS vector DB.', image: recipyImg4, icon: Zap },
      { title: 'AI Recommendations', desc: 'Scikit-Learn powered recipe matching.', image: recipyImg3, icon: Sparkles },
      { title: 'Detailed Recipes', desc: 'Step-by-step visual guides for cooking.', image: recipyImg2, icon: ChefHat },
      { title: 'Inventory Tracking', desc: "Manage what's in your fridge effortlessly.", image: recipyImg1, icon: Refrigerator },
    ],
  },
  {
    id: 2,
    title: 'Productify',
    navIcon: LayoutDashboard,
    badgeText: 'INVENTORY & DASHBOARD',
    badgeIcon: Layers,
    desc: 'Responsive dashboard for inventory management. Focuses on React Hooks, state management, and seamless FastAPI integration.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    featuredTechCount: 4,
    links: { code: 'https://github.com/pranavkavade20/productify', demo: '#' },
    image: productifyImg,
    featuredGallery: [{ label: 'Dashboard', url: productifyImg, category: 'Overview' }],
    gallery: [{ label: 'Dashboard', url: productifyImg, category: 'Overview' }],
    problem: 'Small businesses need a lightweight, responsive dashboard to manage their product inventory without complex enterprise software.',
    solution: 'A streamlined React and FastAPI application that offers fast local data persistence and an intuitive user interface.',
    features: [
      { title: 'Responsive Dashboard', desc: 'Manage inventory from any device with high responsiveness.', image: productifyImg, icon: LayoutDashboard },
    ],
  },
];

const SAVED_STORAGE_KEY = 'portfolio_saved_projects';

function Project() {
  const [searchParams, setSearchParams] = useSearchParams();
  const projectParam = searchParams.get('project')?.toLowerCase();
  const { showSnackbar } = useSnackbar();

  const matchedIndex = useMemo(() => {
    if (!projectParam) return 0;
    return projects.findIndex((p) => p.title.toLowerCase() === projectParam);
  }, [projectParam]);

  const isUnknownProject = Boolean(projectParam && matchedIndex === -1);
  const activeTab = matchedIndex >= 0 ? matchedIndex : 0;
  const activeProject = projects[activeTab];
  const BadgeIcon = activeProject.badgeIcon || Sprout;

  const [activeRole, setActiveRole] = useState('farmer');
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);
  const [customPreviewImg, setCustomPreviewImg] = useState(null);
  const [lightbox, setLightbox] = useState({ isOpen: false, url: null });
  const [isExpandedTech, setIsExpandedTech] = useState(false);

  const [savedIds, setSavedIds] = useState(() => {
    try {
      const raw = localStorage.getItem(SAVED_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // Reset feature and preview when project changes
  const [prevTab, setPrevTab] = useState(activeTab);
  if (prevTab !== activeTab) {
    setPrevTab(activeTab);
    setActiveRole('farmer');
    setActiveFeatureIdx(0);
    setCustomPreviewImg(null);
    setIsExpandedTech(false);
  }

  const persistSavedIds = (nextIds) => {
    setSavedIds(nextIds);
    try {
      localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(nextIds));
    } catch {
      // Roll back optimistic state if storage fails
      setSavedIds(savedIds);
      showSnackbar({
        message: 'Could not save bookmark preference.',
        type: 'error',
        actionLabel: 'Retry',
        onAction: () => persistSavedIds(nextIds),
      });
    }
  };

  const isSaved = savedIds.includes(activeProject.id);

  const handleToggleSave = () => {
    const previous = savedIds;
    const next = isSaved
      ? previous.filter((id) => id !== activeProject.id)
      : [...previous, activeProject.id];

    persistSavedIds(next);
    showSnackbar({
      message: isSaved
        ? `Removed ${activeProject.title} from bookmarks`
        : `Saved ${activeProject.title} to bookmarks`,
      type: 'info',
      actionLabel: 'Undo',
      onAction: () => persistSavedIds(previous),
    });
  };

  const handleShareProject = async () => {
    const url = `${window.location.origin}/projects?project=${encodeURIComponent(activeProject.title.toLowerCase())}`;
    try {
      await navigator.clipboard.writeText(url);
      showSnackbar({
        message: `Link copied for ${activeProject.title}`,
        type: 'success',
      });
    } catch {
      showSnackbar({
        message: 'Could not copy project link.',
        type: 'error',
        actionLabel: 'Retry',
        onAction: handleShareProject,
      });
    }
  };

  const handleProjectChange = (index) => {
    setActiveRole('farmer');
    setActiveFeatureIdx(0);
    setCustomPreviewImg(null);
    setIsExpandedTech(false);
    setSearchParams({ project: projects[index].title.toLowerCase() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRoleChange = (role) => {
    setActiveRole(role);
    setActiveFeatureIdx(0);
    setCustomPreviewImg(null);
  };

  const hasRoleFeatures = Boolean(activeProject.roleFeatures);
  const currentFeatures = hasRoleFeatures
    ? activeProject.roleFeatures[activeRole]
    : activeProject.features || [];

  const activeFeature = currentFeatures[activeFeatureIdx] || currentFeatures[0];
  const activeDisplayImage = customPreviewImg || activeFeature?.image || activeProject.image;

  const openLightbox = (url) => {
    setLightbox({ isOpen: true, url: url || activeDisplayImage });
  };

  const thumbnailItems = useMemo(() => {
    if (activeProject.featuredGallery?.length) {
      return activeProject.featuredGallery;
    }
    return activeProject.gallery.slice(0, 5);
  }, [activeProject]);

  const lightboxIndex = useMemo(
    () => activeProject.gallery.findIndex((item) => item.url === lightbox.url),
    [activeProject.gallery, lightbox.url]
  );

  const lightboxItem =
    lightboxIndex >= 0
      ? activeProject.gallery[lightboxIndex]
      : { url: lightbox.url, label: activeProject.title };

  const stepLightbox = (delta) => {
    const total = activeProject.gallery.length;
    if (total <= 1) return;
    const nextIdx = ((lightboxIndex >= 0 ? lightboxIndex : 0) + delta + total) % total;
    setLightbox({ isOpen: true, url: activeProject.gallery[nextIdx].url });
  };

  const roles = ['farmer', 'buyer'];

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="py-6 tablet:py-8"
      aria-label="Selected Projects"
    >
      <div className="feed-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="Work / Selected Projects"
          description="Scalable, user-centric web applications built with modern engineering workflows and clean UI architectures."
        />

        {isUnknownProject ? (
          <EmptyState
            icon={FolderSearch}
            title="Project not found"
            description={`No project matched "${projectParam}". Return to featured work to browse all builds.`}
            actionLabel="View Featured Projects"
            onAction={() => setSearchParams({})}
          />
        ) : (
          <>
            {/* Project Switcher Chips */}
            <div
              className="flex items-center gap-2 overflow-x-auto py-2 -my-2 mb-6 scrollbar-none"
              role="tablist"
              aria-label="Select project"
            >
              {projects.map((project, index) => {
                const isActive = activeTab === index;
                const TabIcon = project.navIcon || Sprout;
                return (
                  <Chip
                    key={project.id}
                    variant={isActive ? 'tonal' : 'outlined'}
                    selected={isActive}
                    icon={TabIcon}
                    onClick={() => handleProjectChange(index)}
                    onKeyDown={(e) => handleTabListKeyDown(e, index, projects.length, handleProjectChange)}
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                  >
                    {project.title}
                  </Chip>
                );
              })}
            </div>

            {/* Project Overview Feed Card */}
            <Card className="mb-6 overflow-hidden">
              <Card.Header className="gap-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <Badge variant="secondary" icon={BadgeIcon}>
                    {activeProject.badgeText}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={handleToggleSave}
                      aria-pressed={isSaved}
                      aria-label={isSaved ? `Remove ${activeProject.title} bookmark` : `Bookmark ${activeProject.title}`}
                      className={`touch-target px-3 gap-1.5 rounded-full text-xs font-medium state-layer cursor-pointer ${
                        isSaved ? 'text-on-primary-container bg-primary-container' : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      <Bookmark size={16} fill={isSaved ? 'currentColor' : 'none'} aria-hidden="true" />
                      <span>{isSaved ? 'Saved' : 'Save'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleShareProject}
                      aria-label={`Copy link to ${activeProject.title}`}
                      className="touch-target px-3 gap-1.5 rounded-full text-xs font-medium text-on-surface-variant hover:text-on-surface state-layer cursor-pointer"
                    >
                      <Share2 size={16} aria-hidden="true" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>

                <h2 className="text-2xl tablet:text-3xl font-semibold tracking-tight text-on-surface">
                  {activeProject.title}
                </h2>

                <p className="text-base text-on-surface-variant leading-relaxed prose-measure">
                  {activeProject.desc}
                </p>

                {/* Tech Stack */}
                <motion.div layout className="flex flex-wrap items-center gap-2 pt-1">
                  <AnimatePresence mode="popLayout">
                    {(isExpandedTech
                      ? activeProject.tech
                      : activeProject.tech.slice(0, activeProject.featuredTechCount || 5)
                    ).map((tech) => (
                      <motion.div
                        layout
                        key={tech}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        transition={{ duration: 0.18 }}
                      >
                        <TechBadge tech={tech} />
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {activeProject.tech.length > (activeProject.featuredTechCount || 5) && (
                    <button
                      type="button"
                      onClick={() => setIsExpandedTech((prev) => !prev)}
                      className="relative inline-flex items-center gap-1.5 px-3 h-8 rounded-full text-xs font-semibold bg-surface-variant text-on-surface-variant hover:text-on-surface border border-outline state-layer cursor-pointer after:content-[''] after:absolute after:-inset-y-2 after:inset-x-0 tablet:after:inset-0"
                      aria-expanded={isExpandedTech}
                    >
                      <span>
                        {isExpandedTech
                          ? 'Show less'
                          : `+${activeProject.tech.length - (activeProject.featuredTechCount || 5)} more`}
                      </span>
                      <ChevronDown
                        size={13}
                        className={`text-on-surface-variant transition-transform duration-fast ${
                          isExpandedTech ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  )}
                </motion.div>

                {/* Primary & Secondary Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {activeProject.links.code && activeProject.links.code !== '#' && (
                    <Button
                      as="a"
                      href={activeProject.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="md"
                      icon={Github}
                      className="w-full tablet:w-auto"
                      aria-label={`View ${activeProject.title} source code on GitHub`}
                    >
                      View Source
                    </Button>
                  )}
                  <Button
                    as="a"
                    href={
                      activeProject.links.demo && activeProject.links.demo !== '#'
                        ? activeProject.links.demo
                        : '#capabilities'
                    }
                    target={
                      activeProject.links.demo && activeProject.links.demo !== '#'
                        ? '_blank'
                        : '_self'
                    }
                    rel={
                      activeProject.links.demo && activeProject.links.demo !== '#'
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    variant="tonal"
                    size="md"
                    icon={ExternalLink}
                    className="w-full tablet:w-auto"
                    onClick={(e) => {
                      if (!activeProject.links.demo || activeProject.links.demo === '#') {
                        e.preventDefault();
                        document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Explore Details
                  </Button>
                </div>
              </Card.Header>

              <Card.Content className="space-y-6">
                {/* Accessible Browser Preview Trigger */}
                <button
                  type="button"
                  onClick={() => openLightbox(activeProject.image)}
                  className="block w-full text-left rounded-md border border-outline-variant bg-surface overflow-hidden cursor-zoom-in group transition-[border-color,box-shadow] hover:border-primary hover:shadow-elevation-2"
                  aria-label={`Enlarge ${activeProject.title} overview screenshot`}
                >
                  <div className="h-9 px-4 bg-surface-variant border-b border-outline-variant flex items-center justify-between">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="w-2.5 h-2.5 rounded-full bg-outline" />
                      <span className="w-2.5 h-2.5 rounded-full bg-outline/75" />
                      <span className="w-2.5 h-2.5 rounded-full bg-outline/50" />
                    </div>
                    <span className="text-xs font-mono text-on-surface-variant truncate max-w-[200px]">
                      {activeProject.title.toLowerCase()}.dev
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-on-surface-variant group-hover:text-primary transition-colors">
                      <Maximize2 size={13} aria-hidden="true" />
                      <span className="hidden tablet:inline">Enlarge</span>
                    </span>
                  </div>

                  <div className="aspect-[16/10] overflow-hidden">
                    <MediaImage
                      src={activeProject.image}
                      alt={`${activeProject.title} application overview screenshot`}
                      width={1280}
                      height={800}
                      className="w-full h-full object-cover object-top transition-transform duration-base group-hover:scale-[1.01]"
                    />
                  </div>
                </button>

                {/* Problem & Solution */}
                {activeProject.problem && activeProject.solution && (
                  <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 pt-4 border-t border-outline-variant">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent-container text-accent flex items-center justify-center shrink-0" aria-hidden="true">
                        <Target size={18} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-on-surface mb-1">
                          The Problem
                        </h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed">
                          {activeProject.problem}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-tertiary-container text-tertiary flex items-center justify-center shrink-0" aria-hidden="true">
                        <Lightbulb size={18} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-on-surface mb-1">
                          The Solution
                        </h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed">
                          {activeProject.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </Card.Content>
            </Card>

            {/* Key Capabilities Interactive Card */}
            <Card id="capabilities">
              <Card.Header className="border-b border-outline-variant">
                <Card.Title>Key Capabilities</Card.Title>
                <Card.Description>
                  {hasRoleFeatures
                    ? 'Interactive feature breakdown for both farmer and buyer journeys.'
                    : 'Feature architecture engineered for performance and intuitive navigation.'}
                </Card.Description>

                {hasRoleFeatures && (
                  <div
                    role="tablist"
                    aria-label="User role switcher"
                    className="flex flex-wrap items-center gap-2 pt-2"
                  >
                    {roles.map((role, idx) => {
                      const selected = activeRole === role;
                      return (
                        <Chip
                          key={role}
                          variant={selected ? 'tonal' : 'outlined'}
                          selected={selected}
                          onClick={() => handleRoleChange(role)}
                          onKeyDown={(e) =>
                            handleTabListKeyDown(e, idx, roles.length, (nextIdx) =>
                              handleRoleChange(roles[nextIdx])
                            )
                          }
                          role="tab"
                          aria-selected={selected}
                          tabIndex={selected ? 0 : -1}
                        >
                          {role === 'farmer' ? 'Farmer Flow' : 'Buyer Flow'}
                        </Chip>
                      );
                    })}
                  </div>
                )}
              </Card.Header>

              <Card.Content className="pt-4">
                <div className="grid grid-cols-1 tablet:grid-cols-12 gap-5 items-start">
                  {/* Feature List */}
                  <div
                    className="tablet:col-span-5 flex flex-col gap-1.5"
                    role="tablist"
                    aria-label="Project capabilities"
                  >
                    {currentFeatures.map((feat, idx) => {
                      const isActive = activeFeatureIdx === idx;
                      const FeatIcon = feat.icon || ShieldCheck;
                      return (
                        <button
                          key={feat.title}
                          type="button"
                          onClick={() => {
                            setActiveFeatureIdx(idx);
                            setCustomPreviewImg(feat.image || activeProject.image);
                          }}
                          onKeyDown={(e) =>
                            handleTabListKeyDown(e, idx, currentFeatures.length, (nextIdx) => {
                              setActiveFeatureIdx(nextIdx);
                              setCustomPreviewImg(currentFeatures[nextIdx]?.image || activeProject.image);
                            })
                          }
                          role="tab"
                          aria-selected={isActive}
                          tabIndex={isActive ? 0 : -1}
                          className={`state-layer flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-md text-left text-sm transition-colors w-full min-h-[48px] cursor-pointer ${
                            isActive
                              ? 'bg-primary-container text-on-primary-container font-semibold'
                              : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-variant font-medium'
                          }`}
                        >
                          <span className="flex items-center gap-2.5 min-w-0">
                            <FeatIcon
                              size={17}
                              className={`shrink-0 ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}
                              aria-hidden="true"
                            />
                            <span className="truncate">{feat.title}</span>
                          </span>
                          <ChevronRight
                            size={16}
                            className={`shrink-0 ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}
                            aria-hidden="true"
                          />
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Feature Preview */}
                  <div className="tablet:col-span-7 flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={() => openLightbox(activeDisplayImage)}
                      className="block w-full text-left rounded-md border border-outline-variant bg-surface overflow-hidden cursor-zoom-in group transition-[border-color,box-shadow] hover:border-primary hover:shadow-elevation-2"
                      aria-label={`Enlarge ${activeFeature?.title || 'feature preview'} screenshot`}
                    >
                      <div className="h-9 px-3.5 bg-surface-variant border-b border-outline-variant flex items-center justify-between gap-2">
                        <span className="text-xs font-medium text-on-surface truncate">
                          {activeFeature?.title || 'Feature Preview'}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-on-surface-variant group-hover:text-primary transition-colors shrink-0">
                          <Maximize2 size={13} aria-hidden="true" />
                          <span>Enlarge</span>
                        </span>
                      </div>
                      <div className="aspect-[16/10] overflow-hidden">
                        <MediaImage
                          src={activeDisplayImage}
                          alt={activeFeature?.title || `${activeProject.title} feature preview`}
                          width={1280}
                          height={800}
                          className="w-full h-full object-cover object-top transition-transform duration-base group-hover:scale-[1.01]"
                        />
                      </div>
                    </button>

                    {activeFeature?.desc && (
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {activeFeature.desc}
                      </p>
                    )}

                    {/* Thumbnail Strip */}
                    <div
                      className={`grid gap-2 ${
                        thumbnailItems.length >= 5
                          ? 'grid-cols-5'
                          : thumbnailItems.length === 4
                          ? 'grid-cols-4'
                          : 'grid-cols-2 tablet:grid-cols-3'
                      }`}
                    >
                      {thumbnailItems.map((item) => {
                        const isSelected = activeDisplayImage === item.url;
                        return (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => {
                              setCustomPreviewImg(item.url);
                              const featIdx = currentFeatures.findIndex((f) => f.image === item.url);
                              if (featIdx !== -1) setActiveFeatureIdx(featIdx);
                            }}
                            className={`relative rounded-sm overflow-hidden aspect-[16/10] bg-surface-variant border transition-all cursor-pointer min-h-[48px] ${
                              isSelected
                                ? 'border-primary ring-2 ring-primary ring-offset-2 ring-offset-surface'
                                : 'border-outline hover:border-on-surface opacity-85 hover:opacity-100'
                            }`}
                            aria-label={`Preview ${item.label}`}
                            aria-pressed={isSelected}
                          >
                            <MediaImage
                              src={item.url}
                              alt={item.label}
                              width={320}
                              height={200}
                              compactFallback
                              className="w-full h-full object-cover object-top"
                            />
                          </button>
                        );
                      })}
                    </div>

                    {activeProject.gallery.length > thumbnailItems.length && (
                      <div className="flex justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          icon={ExternalLink}
                          onClick={() => openLightbox(activeDisplayImage)}
                        >
                          View all {activeProject.gallery.length} screenshots
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Card.Content>
            </Card>
          </>
        )}

        <PageNav
          prev={{ name: 'Skills', path: '/skills' }}
          next={{ name: 'Contact', path: '/contact' }}
        />
      </div>

      {/* Shared Accessible Dialog Lightbox */}
      <Dialog
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox({ isOpen: false, url: null })}
        title={lightboxItem?.label || activeProject.title}
        description={
          activeProject.gallery.length > 1
            ? `${lightboxItem?.category || 'Gallery'} • ${lightboxIndex + 1} of ${activeProject.gallery.length}`
            : lightboxItem?.category
        }
        size="xl"
      >
        <div className="flex flex-col gap-4">
          <div className="relative rounded-md overflow-hidden bg-surface-variant border border-outline-variant">
            <MediaImage
              src={lightboxItem?.url}
              alt={lightboxItem?.label || `${activeProject.title} screenshot`}
              width={1280}
              height={800}
              loading="eager"
              className="w-full h-auto max-h-[65dvh] object-contain mx-auto"
            />
          </div>

          {activeProject.gallery.length > 1 && (
            <div className="flex items-center justify-between gap-3">
              <Button
                variant="outlined"
                size="md"
                onClick={() => stepLightbox(-1)}
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={16} aria-hidden="true" />
                <span>Previous</span>
              </Button>
              <span className="text-xs font-medium text-on-surface-variant">
                {lightboxIndex + 1} / {activeProject.gallery.length}
              </span>
              <Button
                variant="tonal"
                size="md"
                icon={ChevronRight}
                onClick={() => stepLightbox(1)}
                aria-label="Next screenshot"
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </Dialog>
    </motion.section>
  );
}

export default Project;
