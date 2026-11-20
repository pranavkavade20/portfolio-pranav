import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ExternalLink,
  ArrowRight,
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
  Maximize2,
  X,
  Layers
} from 'lucide-react';
import PageNav from '../components/layout/PageNav';

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

// Map of real SVG skill logos
const skillLogos = {
  'react': reactLogo,
  'typescript': tsLogo,
  'javascript': jsLogo,
  'tailwind css': tailwindLogo,
  'html': htmlLogo,
  'html5': htmlLogo,
  'css': cssLogo,
  'css3': cssLogo,
  'python': pythonLogo,
  'django': djangoLogo,
  'django rest framework': drfLogo,
  'drf': drfLogo,
  'fastapi': fastapiLogo,
  'sql': sqlLogo,
  'postgresql': postgresLogo,
  'postgres': postgresLogo,
  'mongodb': mongoLogo,
  'git': gitLogo,
  'github': githubLogo,
  'postman': postmanLogo,
};

const RedisIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 8.5L12 4L21 8.5L12 13L3 8.5Z"
      fill="#DC382D"
    />
    <path
      d="M3 13L12 17.5L21 13"
      stroke="#DC382D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 17.5L12 22L21 17.5"
      stroke="#DC382D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TechBadge = ({ tech }) => {
  const normalizedKey = tech.toLowerCase().trim();
  const realLogo = skillLogos[normalizedKey];

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 shadow-[0_1px_2px_rgba(0,0,0,0.03)] select-none">
      {realLogo ? (
        <img
          src={realLogo}
          alt={tech}
          className="w-3.5 h-3.5 object-contain shrink-0"
          loading="lazy"
        />
      ) : normalizedKey === 'redis' ? (
        <RedisIcon />
      ) : normalizedKey === 'ai & ml' ? (
        <Sparkles size={12} className="text-purple-500 shrink-0" />
      ) : normalizedKey === 'websockets' ? (
        <Zap size={12} className="text-amber-500 shrink-0" />
      ) : null}
      <span>{tech}</span>
    </span>
  );
};

// --- PROJECTS DATA ---
const projects = [
  {
    id: 0,
    title: "Farmket",
    navIcon: Sprout,
    badgeText: "MARKETPLACE PLATFORM",
    badgeIcon: Sprout,
    desc: "A farmer and buyer marketplace connecting local farmers with consumers for fresh, healthy produce.",
    tech: ['React', 'TypeScript', 'Django', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'Django REST Framework', 'Websockets', 'JavaScript'],
    featuredTechCount: 5,
    links: { code: "https://github.com/pranavkavade20/Farmket", demo: "" },
    image: farmketImg1,
    featuredGallery: [
      { label: "Home Page", url: farmketImg1, category: "Overview" },
      { label: "Buyer Marketplace", url: farmketImg2, category: "Buyer Flow" },
      { label: "Buyer Dashboard", url: farmketImg5, category: "Buyer Flow" },
      { label: "Buyer & Farmer Chat", url: farmketImg6, category: "Global Features" },
      { label: "Community", url: farmketImg9, category: "Global Features" }
    ],
    gallery: [
      { label: "Home Page", url: farmketImg1, category: "Overview" },
      { label: "Buyer Marketplace", url: farmketImg2, category: "Buyer Flow" },
      { label: "Buyer Add to Cart", url: farmketImg7, category: "Buyer Flow" },
      { label: "Buyer Dashboard", url: farmketImg5, category: "Buyer Flow" },
      { label: "Buyer Order", url: farmketImg8, category: "Buyer Flow" },
      { label: "Farmer Dashboard", url: farmketImg3, category: "Farmer Flow" },
      { label: "Farmer Add Product", url: farmketImg10, category: "Farmer Flow" },
      { label: "Farmer Order System", url: farmketImg11, category: "Farmer Flow" },
      { label: "Crop Tracking", url: farmketImg4, category: "Farmer Flow" },
      { label: "Buyer & Farmer Chat", url: farmketImg6, category: "Global Features" },
      { label: "Community", url: farmketImg9, category: "Global Features" }
    ],
    problem: "Farmers struggle to reach consumers directly, relying on middlemen which reduces profits. Consumers lack a reliable way to source fresh, local produce.",
    solution: "A unified marketplace with direct farmer-buyer communication, transparent pricing, and seamless transactions.",
    roleFeatures: {
      farmer: [
        { title: "Secure Authentication", desc: "Robust data protection and private account access.", image: farmketImg3, icon: ShieldCheck },
        { title: "Digital Storefront", desc: "Easily add products and sell online directly to buyers.", image: farmketImg10, icon: Store },
        { title: "Crop Tracking", desc: "Update crop stages to allow buyers to pre-book upcoming harvests.", image: farmketImg4, icon: Sprout },
        { title: "Order System", desc: "Seamlessly receive and manage incoming orders.", image: farmketImg11, icon: ClipboardList },
        { title: "Real-time Chat", desc: "Communicate directly with buyers to negotiate and build trust.", image: farmketImg6, icon: MessageSquare },
        { title: "Community Posting", desc: "Post updates and crop stages to the community feed to attract buyers early.", image: farmketImg9, icon: Users },
        { title: "Business Analytics", desc: "Track sales performance and monitor store growth.", image: farmketImg5, icon: TrendingUp }
      ],
      buyer: [
        { title: "Secure Authentication", desc: "Safe, private login for personal shopping.", image: farmketImg1, icon: ShieldCheck },
        { title: "Multi-vendor Cart", desc: "Add products from different farmers into a single, unified shopping cart.", image: farmketImg7, icon: ShoppingCart },
        { title: "Order Tracking", desc: "Monitor order status from placement to delivery.", image: farmketImg8, icon: MapPin },
        { title: "Real-time Chat", desc: "Ask farmers questions directly before making a purchase.", image: farmketImg6, icon: MessageSquare },
        { title: "Community Feed", desc: "Stay updated on the latest products and farm news.", image: farmketImg9, icon: Users },
        { title: "Early Pre-booking", desc: "Secure high-demand produce early based on live crop stage updates.", image: farmketImg2, icon: CalendarCheck }
      ]
    }
  },
  {
    id: 1,
    title: "Recipy",
    navIcon: ChefHat,
    badgeText: "AI CULINARY ENGINE",
    badgeIcon: Sparkles,
    desc: "A smart culinary engine leveraging Scikit-Learn and FAISS to deliver sub-second recipe recommendations based on user inventory and preferences.",
    tech: ['Python', 'Django', 'JavaScript', 'Tailwind CSS', 'AI & ML'],
    featuredTechCount: 5,
    links: { code: "https://github.com/pranavkavade20/Recipy", demo: "#" },
    image: recipyImg1,
    featuredGallery: [
      { label: "Home", url: recipyImg1, category: "Overview" },
      { label: "Search Interface", url: recipyImg4, category: "Search" },
      { label: "AI Recommendations", url: recipyImg3, category: "AI Features" },
      { label: "Recipe View", url: recipyImg2, category: "Overview" }
    ],
    gallery: [
      { label: "Home", url: recipyImg1, category: "Overview" },
      { label: "Search Interface", url: recipyImg4, category: "Search" },
      { label: "AI Recommendations", url: recipyImg3, category: "AI Features" },
      { label: "Recipe View", url: recipyImg2, category: "Overview" }
    ],
    problem: "People often have ingredients in their fridge but struggle to find creative, personalized recipes quickly.",
    solution: "An AI-powered assistant that matches your current inventory to thousands of recipes in sub-second speeds using FAISS.",
    features: [
      { title: "Lightning Fast Search", desc: "Sub-second search with FAISS vector DB.", image: recipyImg4, icon: Zap },
      { title: "AI Recommendations", desc: "Scikit-Learn powered recipe matching.", image: recipyImg3, icon: Sparkles },
      { title: "Detailed Recipes", desc: "Step-by-step visual guides for cooking.", image: recipyImg2, icon: ChefHat },
      { title: "Inventory Tracking", desc: "Manage what's in your fridge effortlessly.", image: recipyImg1, icon: Refrigerator }
    ]
  },
  {
    id: 2,
    title: "Productify",
    navIcon: LayoutDashboard,
    badgeText: "INVENTORY & DASHBOARD",
    badgeIcon: Layers,
    desc: "Responsive dashboard for inventory management. Focuses on React Hooks, state management, and seamless FastAPI integration.",
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    featuredTechCount: 4,
    links: { code: "https://github.com/pranavkavade20/productify", demo: "#" },
    image: productifyImg,
    featuredGallery: [
      { label: "Dashboard", url: productifyImg, category: "Overview" }
    ],
    gallery: [
      { label: "Dashboard", url: productifyImg, category: "Overview" }
    ],
    problem: "Small businesses need a lightweight, responsive dashboard to manage their product inventory without complex enterprise software.",
    solution: "A streamlined React and FastAPI application that offers fast local data persistence and an intuitive user interface.",
    features: [
      { title: "Responsive Dashboard", desc: "Manage inventory from any device with high responsiveness.", image: productifyImg, icon: LayoutDashboard }
    ]
  }
];

// --- LIGHTBOX COMPONENT ---
const Lightbox = ({ activeImage, gallery, onClose, onSelectImage }) => {
  const currentIndex = useMemo(() => {
    return gallery.findIndex((item) => (typeof item === 'string' ? item : item.url) === activeImage);
  }, [gallery, activeImage]);

  const currentItem = useMemo(() => {
    if (currentIndex >= 0 && currentIndex < gallery.length) {
      const item = gallery[currentIndex];
      return typeof item === 'string' ? { url: item, label: 'Preview' } : item;
    }
    return { url: activeImage, label: 'Preview' };
  }, [gallery, currentIndex, activeImage]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && gallery.length > 1) {
        const nextIdx = (currentIndex + 1) % gallery.length;
        const nextItem = gallery[nextIdx];
        onSelectImage(typeof nextItem === 'string' ? nextItem : nextItem.url);
      }
      if (e.key === 'ArrowLeft' && gallery.length > 1) {
        const prevIdx = (currentIndex - 1 + gallery.length) % gallery.length;
        const prevItem = gallery[prevIdx];
        onSelectImage(typeof prevItem === 'string' ? prevItem : prevItem.url);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onSelectImage, currentIndex, gallery]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
        onClick={onClose}
      >
        {/* Top Controls */}
        <div className="absolute top-5 left-6 right-6 flex items-center justify-between text-white z-20 pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-medium">
            <span className="text-zinc-200">{currentItem.label}</span>
            {currentItem.category && (
              <>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-400">{currentItem.category}</span>
              </>
            )}
            {gallery.length > 1 && (
              <span className="text-zinc-500 ml-1">
                ({currentIndex + 1}/{gallery.length})
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="pointer-events-auto p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>
        </div>

        {/* Prev / Next Controls */}
        {gallery.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const prevIdx = (currentIndex - 1 + gallery.length) % gallery.length;
                const prevItem = gallery[prevIdx];
                onSelectImage(typeof prevItem === 'string' ? prevItem : prevItem.url);
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/75 border border-white/10 text-white transition-all z-20 shadow-lg cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const nextIdx = (currentIndex + 1) % gallery.length;
                const nextItem = gallery[nextIdx];
                onSelectImage(typeof nextItem === 'string' ? nextItem : nextItem.url);
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/75 border border-white/10 text-white transition-all z-20 shadow-lg cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}

        {/* Image Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-6xl max-h-[85vh] w-auto h-auto flex items-center justify-center p-2"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentItem.url}
            alt={currentItem.label || "Screenshot"}
            className="w-auto h-auto max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// --- MAIN PROJECT COMPONENT ---
function Project() {
  const [searchParams, setSearchParams] = useSearchParams();
  const projectParam = searchParams.get('project')?.toLowerCase();

  const activeTab = useMemo(() => {
    if (projectParam) {
      const idx = projects.findIndex((p) => p.title.toLowerCase() === projectParam);
      if (idx !== -1) return idx;
    }
    return 0;
  }, [projectParam]);

  const activeProject = projects[activeTab];

  // Role switching (Farmket: farmer vs buyer)
  const [activeRole, setActiveRole] = useState('farmer');
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);

  // Selected image in preview mockup
  const [customPreviewImg, setCustomPreviewImg] = useState(null);

  // Lightbox modal state
  const [lightbox, setLightbox] = useState({ isOpen: false, url: null });

  // Reset feature and preview when project changes (official React pattern)
  const [prevTab, setPrevTab] = useState(activeTab);
  if (prevTab !== activeTab) {
    setPrevTab(activeTab);
    setActiveRole('farmer');
    setActiveFeatureIdx(0);
    setCustomPreviewImg(null);
  }

  const handleProjectChange = (index) => {
    setActiveRole('farmer');
    setActiveFeatureIdx(0);
    setCustomPreviewImg(null);
    setSearchParams({ project: projects[index].title.toLowerCase() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRoleChange = (role) => {
    setActiveRole(role);
    setActiveFeatureIdx(0);
    setCustomPreviewImg(null);
  };

  const hasRoleFeatures = !!activeProject.roleFeatures;
  const currentFeatures = hasRoleFeatures
    ? activeProject.roleFeatures[activeRole]
    : activeProject.features || [];

  const activeFeature = currentFeatures[activeFeatureIdx] || currentFeatures[0];

  // Resolve which image should show in the Key capabilities preview
  const activeDisplayImage = customPreviewImg || activeFeature?.image || activeProject.image;

  const openLightbox = (url) => {
    setLightbox({ isOpen: true, url: url || activeDisplayImage });
  };

  // Thumbnail strip items: 5 items for Farmket matching reference, or all project screenshots
  const thumbnailItems = useMemo(() => {
    if (activeProject.featuredGallery && activeProject.featuredGallery.length > 0) {
      return activeProject.featuredGallery;
    }
    return activeProject.gallery.slice(0, 5);
  }, [activeProject]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
      className="min-h-screen relative overflow-hidden bg-brand-bg-light dark:bg-brand-bg-dark pt-24 md:pt-28 pb-20 md:pb-24 transition-colors duration-300"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================= */}
        {/* 1. SECTION HEADER (Left-aligned Linear/Apple style)       */}
        {/* ========================================================= */}
        <div className="mb-7 text-left">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-slate-400 dark:text-zinc-500 mb-2">
            WORK / SELECTED PROJECTS
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Selected projects
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            A collection of projects that showcase my skills in building scalable, user-centric applications.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2. PROJECT NAVIGATION TABS                                */}
        {/* ========================================================= */}
        <div className="flex items-center mb-10 overflow-x-auto scrollbar-none py-1">
          <div className="inline-flex items-center p-1 rounded-full bg-slate-100/90 dark:bg-zinc-800/80 border border-slate-200/70 dark:border-zinc-700/60 shadow-xs">
            {projects.map((project, index) => {
              const isActive = activeTab === index;
              const TabIcon = project.navIcon || Sprout;
              return (
                <button
                  key={project.id}
                  onClick={() => handleProjectChange(index)}
                  className={`relative flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectPill"
                      className="absolute inset-0 bg-white dark:bg-zinc-900 rounded-full border border-slate-200/90 dark:border-zinc-700/90 shadow-sm"
                      style={{ zIndex: 0 }}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <TabIcon
                      size={15}
                      className={
                        isActive
                          ? index === 0
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-slate-900 dark:text-white'
                          : 'text-slate-400 dark:text-zinc-500'
                      }
                    />
                    <span>{project.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. PROJECT HERO SECTION (Split 2-Column Composition)      */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          {/* Left Column: Info, Tech Stack, Actions */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Category / Role Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/90 dark:border-emerald-800/60 mb-4 select-none">
              <Sprout size={13} className="text-emerald-600 dark:text-emerald-400" />
              <span>{activeProject.badgeText}</span>
            </div>

            {/* Project Title */}
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              {activeProject.title}
            </h2>

            {/* Concise Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 max-w-lg">
              {activeProject.desc}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {activeProject.tech.slice(0, activeProject.featuredTechCount || 5).map((tech, i) => (
                <TechBadge key={i} tech={tech} />
              ))}
              {activeProject.tech.length > (activeProject.featuredTechCount || 5) && (
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 border border-slate-200/80 dark:border-zinc-700/80 select-none">
                  +{activeProject.tech.length - (activeProject.featuredTechCount || 5)}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {activeProject.links.code && activeProject.links.code !== "#" && (
                <a
                  href={activeProject.links.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-zinc-200 transition-colors shadow-sm group"
                >
                  <Github size={16} />
                  <span>View source</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
              <a
                href={
                  activeProject.links.demo && activeProject.links.demo !== "#"
                    ? activeProject.links.demo
                    : "#capabilities"
                }
                target={
                  activeProject.links.demo && activeProject.links.demo !== "#"
                    ? "_blank"
                    : "_self"
                }
                rel="noreferrer"
                onClick={(e) => {
                  if (!activeProject.links.demo || activeProject.links.demo === "#") {
                    e.preventDefault();
                    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white dark:bg-zinc-900 text-slate-800 dark:text-zinc-200 border border-slate-200/90 dark:border-zinc-700/80 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors shadow-sm cursor-pointer"
              >
                <span>Explore project</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: macOS Browser Mockup */}
          <div className="lg:col-span-7">
            <div
              onClick={() => openLightbox(activeProject.image)}
              className="w-full rounded-2xl border border-slate-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl shadow-slate-200/40 dark:shadow-2xl dark:shadow-black/60 overflow-hidden cursor-zoom-in group transition-all duration-300 hover:shadow-2xl hover:border-slate-300 dark:hover:border-zinc-700"
            >
              {/* Window Title Bar */}
              <div className="h-8 md:h-9 px-4 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800/80 flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>

              {/* Screenshot Content */}
              <div className="relative bg-slate-100 dark:bg-zinc-950 overflow-hidden flex items-center justify-center">
                <img
                  src={activeProject.image}
                  alt={`${activeProject.title} application preview`}
                  className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute bottom-3 right-3 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-zinc-300 shadow-md flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity border border-slate-200/80 dark:border-zinc-700/80">
                  <Maximize2 size={13} />
                  <span>Enlarge</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. THE CHALLENGE & THE APPROACH SECTION                   */}
        {/* ========================================================= */}
        {activeProject.problem && activeProject.solution && (
          <div className="border-t border-b border-slate-200/80 dark:border-zinc-800/80 py-8 my-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* The Challenge */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-zinc-700/80 flex items-center justify-center shrink-0 bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 shadow-xs mt-0.5">
                  <Target size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight">
                    The challenge
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {activeProject.problem}
                  </p>
                </div>
              </div>

              {/* The Approach */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-zinc-700/80 flex items-center justify-center shrink-0 bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 shadow-xs mt-0.5">
                  <Lightbulb size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight">
                    The approach
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {activeProject.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 5. KEY CAPABILITIES & APPLICATION PREVIEW                 */}
        {/* ========================================================= */}
        <div id="capabilities" className="pt-2 mb-20">
          <div className="mb-6 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Key capabilities
            </h2>
            <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">
              {hasRoleFeatures
                ? "A feature-rich platform designed to empower both farmers and buyers."
                : "A feature-rich application designed for speed, intuitiveness, and scale."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Role switcher (Farmket) & Features List */}
            <div className="lg:col-span-4 flex flex-col">
              {/* Role Switcher (Farmer / Buyer) */}
              {hasRoleFeatures && (
                <div className="inline-flex p-1 bg-slate-100 dark:bg-zinc-800/80 rounded-full mb-5 self-start border border-slate-200/60 dark:border-zinc-700/60">
                  <button
                    onClick={() => handleRoleChange('farmer')}
                    className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      activeRole === 'farmer'
                        ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-sm'
                        : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Farmer
                  </button>
                  <button
                    onClick={() => handleRoleChange('buyer')}
                    className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      activeRole === 'buyer'
                        ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-sm'
                        : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Buyer
                  </button>
                </div>
              )}

              {/* Feature Item Rows */}
              <div className="flex flex-col gap-1 w-full">
                {currentFeatures.map((feat, idx) => {
                  const isActive = activeFeatureIdx === idx;
                  const FeatIcon = feat.icon || ShieldCheck;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveFeatureIdx(idx);
                        setCustomPreviewImg(feat.image || activeProject.image);
                      }}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-left text-sm transition-all w-full group cursor-pointer ${
                        isActive
                          ? 'bg-slate-100/90 dark:bg-zinc-800/90 text-slate-900 dark:text-white font-semibold'
                          : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-zinc-800/40 font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <FeatIcon
                          size={18}
                          className={`shrink-0 ${
                            isActive
                              ? 'text-slate-900 dark:text-white'
                              : 'text-slate-400 dark:text-zinc-500 group-hover:text-slate-700 dark:group-hover:text-zinc-300'
                          }`}
                        />
                        <span className="truncate">{feat.title}</span>
                      </div>
                      <ChevronRight
                        size={16}
                        className={`shrink-0 transition-transform ${
                          isActive
                            ? 'text-slate-900 dark:text-white translate-x-0.5'
                            : 'text-slate-400 dark:text-zinc-600 group-hover:text-slate-600'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Active Preview Mockup + Thumbnail Strip */}
            <div className="lg:col-span-8 flex flex-col gap-3">
              {/* Main Feature Preview Mockup Window */}
              <div
                onClick={() => openLightbox(activeDisplayImage)}
                className="w-full rounded-2xl border border-slate-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg overflow-hidden cursor-zoom-in group relative transition-all"
              >
                {/* Header */}
                <div className="h-8 px-4 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800/80 flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>

                {/* Screenshot Display */}
                <div className="relative bg-slate-100 dark:bg-zinc-950 flex items-center justify-center overflow-hidden">
                  <img
                    src={activeDisplayImage}
                    alt={activeFeature?.title || "Feature preview"}
                    className="w-full h-auto max-h-[460px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-zinc-300 shadow-md flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity border border-slate-200/80 dark:border-zinc-700/80">
                    <Maximize2 size={13} />
                    <span>Enlarge</span>
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery Strip */}
              <div
                className={`grid gap-2.5 sm:gap-3 pt-1 ${
                  thumbnailItems.length >= 5
                    ? 'grid-cols-5'
                    : thumbnailItems.length === 4
                    ? 'grid-cols-4'
                    : 'grid-cols-2 sm:grid-cols-3'
                }`}
              >
                {thumbnailItems.map((item, index) => {
                  const isSelected = activeDisplayImage === item.url;
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setCustomPreviewImg(item.url);
                        // If matching a feature, update feature index as well
                        const featIdx = currentFeatures.findIndex((f) => f.image === item.url);
                        if (featIdx !== -1) setActiveFeatureIdx(featIdx);
                      }}
                      className={`relative rounded-lg sm:rounded-xl overflow-hidden aspect-[16/10] bg-slate-100 dark:bg-zinc-800 border transition-all cursor-pointer group ${
                        isSelected
                          ? 'border-slate-950 dark:border-white ring-2 ring-slate-950 dark:ring-white ring-offset-2 ring-offset-brand-bg-light dark:ring-offset-brand-bg-dark shadow-sm'
                          : 'border-slate-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-zinc-600 opacity-75 hover:opacity-100'
                      }`}
                      title={item.label}
                    >
                      <img
                        src={item.url}
                        alt={item.label}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    </button>
                  );
                })}
              </div>

              {/* View all gallery screenshots trigger */}
              {activeProject.gallery && activeProject.gallery.length > thumbnailItems.length && (
                <div className="flex justify-end pt-1">
                  <button
                    onClick={() => openLightbox(activeDisplayImage)}
                    className="text-xs font-medium text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>View all {activeProject.gallery.length} screenshots</span>
                    <ExternalLink size={11} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Page Nav */}
        <PageNav
          prev={{ name: 'Skills', path: '/skills' }}
          next={{ name: 'Contact', path: '/contact' }}
        />
      </div>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <Lightbox
          activeImage={lightbox.url}
          gallery={activeProject.gallery}
          onClose={() => setLightbox({ isOpen: false, url: null })}
          onSelectImage={(newUrl) => setLightbox({ isOpen: true, url: newUrl })}
        />
      )}
    </motion.section>
  );
}

export default Project;
