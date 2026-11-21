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
  ChevronDown,
  Maximize2,
  X,
  Layers
} from 'lucide-react';
import PageNav from '../components/layout/PageNav';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Chip from '../components/ui/Chip';

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
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 8.5L12 4L21 8.5L12 13L3 8.5Z" fill="#DC382D" />
    <path d="M3 13L12 17.5L21 13" stroke="#DC382D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 17.5L12 22L21 17.5" stroke="#DC382D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TechBadge = ({ tech }) => {
  const normalizedKey = tech.toLowerCase().trim();
  const realLogo = skillLogos[normalizedKey];

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-surface text-on-surface border border-outline-variant hover:border-primary/40 hover:shadow-elevation-1 transition-colors select-none cursor-default group"
    >
      {realLogo ? (
        <motion.img
          whileHover={{ rotate: [-8, 8, -4, 0] }}
          transition={{ duration: 0.4 }}
          src={realLogo}
          alt=""
          className="w-3.5 h-3.5 object-contain shrink-0"
          loading="lazy"
          aria-hidden="true"
        />
      ) : normalizedKey === 'redis' ? (
        <RedisIcon />
      ) : normalizedKey === 'ai & ml' ? (
        <Sparkles size={12} className="text-primary shrink-0 transition-transform group-hover:scale-110" />
      ) : normalizedKey === 'websockets' ? (
        <Zap size={12} className="text-primary shrink-0 transition-transform group-hover:scale-110" />
      ) : null}
      <span>{tech}</span>
    </motion.div>
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
      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image Preview"
      >
        {/* Top Controls */}
        <div className="absolute top-5 left-4 right-4 sm:left-8 sm:right-8 flex items-center justify-between text-white z-20 pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-medium">
            <span className="text-white">{currentItem.label}</span>
            {currentItem.category && (
              <>
                <span className="text-white/40">•</span>
                <span className="text-white/80">{currentItem.category}</span>
              </>
            )}
            {gallery.length > 1 && (
              <span className="text-white/50 ml-1">
                ({currentIndex + 1}/{gallery.length})
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="pointer-events-auto touch-target p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close image preview"
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
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 touch-target p-3 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 text-white transition-all z-20 shadow-elevation-2 cursor-pointer"
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
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 touch-target p-3 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 text-white transition-all z-20 shadow-elevation-2 cursor-pointer"
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
          className="relative max-w-5xl max-h-[82vh] w-auto h-auto flex items-center justify-center p-2"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentItem.url}
            alt={currentItem.label || "Screenshot"}
            className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-xl shadow-elevation-3 border border-white/10"
          />
        </motion.div>
      </div>
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

  // Expanded tech stack state
  const [isExpandedTech, setIsExpandedTech] = useState(false);

  // Reset feature and preview when project changes (official React pattern)
  const [prevTab, setPrevTab] = useState(activeTab);
  if (prevTab !== activeTab) {
    setPrevTab(activeTab);
    setActiveRole('farmer');
    setActiveFeatureIdx(0);
    setCustomPreviewImg(null);
    setIsExpandedTech(false);
  }

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

  // Thumbnail strip items
  const thumbnailItems = useMemo(() => {
    if (activeProject.featuredGallery && activeProject.featuredGallery.length > 0) {
      return activeProject.featuredGallery;
    }
    return activeProject.gallery.slice(0, 5);
  }, [activeProject]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
      className="min-h-[calc(100vh-4rem)] relative overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20 transition-colors"
    >
      <div className="content-container relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-6 text-left">
          <p className="text-xs font-semibold tracking-wider uppercase text-primary mb-2">
            Work / Selected Projects
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface">
            Featured Projects
          </h1>
          <p className="text-sm sm:text-base text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
            Scalable, user-centric web applications built with modern engineering workflows and clean UI architectures.
          </p>
        </div>

        {/* Project Navigation Tabs (Pill rail with active spring animation) */}
        <div className="flex items-center mb-10 overflow-x-auto scrollbar-none py-1">
          <div 
            role="tablist"
            aria-label="Projects list"
            className="inline-flex items-center p-1 rounded-full bg-surface-variant border border-outline-variant shadow-xs"
          >
            {projects.map((project, index) => {
              const isActive = activeTab === index;
              const TabIcon = project.navIcon || Sprout;
              return (
                <button
                  key={project.id}
                  onClick={() => handleProjectChange(index)}
                  role="tab"
                  aria-selected={isActive}
                  className={`relative flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-on-primary-container font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectPill"
                      className="absolute inset-0 bg-primary-container rounded-full shadow-elevation-1"
                      style={{ zIndex: 0 }}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <TabIcon
                      size={16}
                      className={isActive ? 'text-primary' : 'text-on-surface-variant'}
                    />
                    <span>{project.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Hero: Split 2-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          {/* Left Column: Info, Tech Stack, Actions */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Category / Role Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary-container text-on-primary-container mb-4 select-none">
              <Sprout size={13} className="text-primary" />
              <span>{activeProject.badgeText}</span>
            </div>

            {/* Project Title */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mb-3">
              {activeProject.title}
            </h2>

            {/* Concise Description */}
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6 max-w-lg">
              {activeProject.desc}
            </p>

            {/* Interactive Animated Tech Stack Pills */}
            <motion.div layout className="flex flex-wrap items-center gap-2 mb-8">
              <AnimatePresence mode="popLayout">
                {(isExpandedTech
                  ? activeProject.tech
                  : activeProject.tech.slice(0, activeProject.featuredTechCount || 5)
                ).map((tech, i) => (
                  <motion.div
                    layout
                    key={tech}
                    initial={{ opacity: 0, scale: 0.85, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: -6 }}
                    transition={{
                      duration: 0.2,
                      delay: i >= (activeProject.featuredTechCount || 5) ? (i - (activeProject.featuredTechCount || 5)) * 0.04 : 0,
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    }}
                  >
                    <TechBadge tech={tech} />
                  </motion.div>
                ))}
              </AnimatePresence>

              {activeProject.tech.length > (activeProject.featuredTechCount || 5) && (
                <motion.button
                  layout
                  type="button"
                  onClick={() => setIsExpandedTech((prev) => !prev)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-surface-variant hover:bg-primary-container text-on-surface-variant hover:text-on-primary-container border border-outline-variant hover:border-primary/40 shadow-xs transition-colors cursor-pointer select-none"
                  aria-expanded={isExpandedTech}
                  aria-label={
                    isExpandedTech
                      ? "Collapse extra technologies"
                      : `Show ${activeProject.tech.length - (activeProject.featuredTechCount || 5)} more technologies`
                  }
                >
                  <span>
                    {isExpandedTech
                      ? "Show less"
                      : `+${activeProject.tech.length - (activeProject.featuredTechCount || 5)} more`}
                  </span>
                  <motion.span
                    animate={{ rotate: isExpandedTech ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="inline-flex items-center text-primary"
                  >
                    <ChevronDown size={13} />
                  </motion.span>
                </motion.button>
              )}
            </motion.div>

            {/* Action Buttons (Filled primary action + Tonal secondary action) */}
            <div className="flex flex-wrap items-center gap-3">
              {activeProject.links.code && activeProject.links.code !== "#" && (
                <Button
                  as="a"
                  href={activeProject.links.code}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  size="md"
                  icon={Github}
                  aria-label={`View ${activeProject.title} source code on GitHub`}
                >
                  View Source
                </Button>
              )}
              <Button
                as="a"
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
                variant="tonal"
                size="md"
                icon={ExternalLink}
                onClick={(e) => {
                  if (!activeProject.links.demo || activeProject.links.demo === "#") {
                    e.preventDefault();
                    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                aria-label={`Explore ${activeProject.title} capabilities`}
              >
                Explore Details
              </Button>
            </div>
          </div>

          {/* Right Column: macOS Browser Mockup */}
          <div className="lg:col-span-7">
            <div
              onClick={() => openLightbox(activeProject.image)}
              className="w-full rounded-2xl border border-outline-variant bg-surface shadow-elevation-2 overflow-hidden cursor-zoom-in group transition-all duration-300 hover:shadow-elevation-3 hover:border-primary/40"
            >
              {/* Window Title Bar */}
              <div className="h-8 md:h-9 px-4 bg-surface-variant/80 border-b border-outline-variant flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-[11px] font-mono text-on-surface-variant truncate max-w-[200px]">
                  {activeProject.title.toLowerCase()}.dev
                </span>
                <div className="w-10" />
              </div>

              {/* Screenshot Content */}
              <div className="relative bg-surface-variant/30 overflow-hidden flex items-center justify-center">
                <img
                  src={activeProject.image}
                  alt={`${activeProject.title} application preview`}
                  className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute bottom-3 right-3 bg-surface/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-on-surface shadow-elevation-1 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity border border-outline-variant">
                  <Maximize2 size={13} className="text-primary" />
                  <span>Enlarge Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge & Approach Section */}
        {activeProject.problem && activeProject.solution && (
          <div className="border-t border-b border-outline-variant py-8 my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
              {/* The Challenge */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Target size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-on-surface mb-1.5 tracking-tight">
                    The Problem
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {activeProject.problem}
                  </p>
                </div>
              </div>

              {/* The Approach */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Lightbulb size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-on-surface mb-1.5 tracking-tight">
                    The Solution
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {activeProject.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Key Capabilities & Live Feature Previews */}
        <div id="capabilities" className="pt-2 mb-16 text-left">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">
              Key Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
              {hasRoleFeatures
                ? "Interactive feature breakdown for both farmer and buyer journeys."
                : "Feature architecture engineered for performance and intuitive navigation."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Role switcher & Features List */}
            <div className="lg:col-span-4 flex flex-col">
              {/* Role Switcher (Farmer / Buyer) */}
              {hasRoleFeatures && (
                <div 
                  role="tablist"
                  aria-label="User role switcher"
                  className="inline-flex p-1 bg-surface-variant rounded-full mb-4 self-start border border-outline-variant"
                >
                  <button
                    onClick={() => handleRoleChange('farmer')}
                    role="tab"
                    aria-selected={activeRole === 'farmer'}
                    className={`px-4 py-1.5 min-h-[36px] rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      activeRole === 'farmer'
                        ? 'bg-primary text-on-primary shadow-xs'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    Farmer Flow
                  </button>
                  <button
                    onClick={() => handleRoleChange('buyer')}
                    role="tab"
                    aria-selected={activeRole === 'buyer'}
                    className={`px-4 py-1.5 min-h-[36px] rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      activeRole === 'buyer'
                        ? 'bg-primary text-on-primary shadow-xs'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    Buyer Flow
                  </button>
                </div>
              )}

              {/* Feature Item Rows */}
              <div className="flex flex-col gap-1 w-full" role="tablist">
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
                      role="tab"
                      aria-selected={isActive}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-left text-xs sm:text-sm transition-all w-full min-h-[48px] group cursor-pointer ${
                        isActive
                          ? 'bg-primary-container text-on-primary-container font-semibold'
                          : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-variant font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <FeatIcon
                          size={18}
                          className={`shrink-0 ${
                            isActive
                              ? 'text-primary'
                              : 'text-on-surface-variant group-hover:text-on-surface'
                          }`}
                        />
                        <span className="truncate">{feat.title}</span>
                      </div>
                      <ChevronRight
                        size={16}
                        className={`shrink-0 transition-transform ${
                          isActive
                            ? 'text-primary translate-x-0.5'
                            : 'text-on-surface-variant group-hover:text-on-surface'
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
                className="w-full rounded-2xl border border-outline-variant bg-surface shadow-elevation-1 overflow-hidden cursor-zoom-in group relative transition-all"
              >
                {/* Header */}
                <div className="h-8 px-4 bg-surface-variant/80 border-b border-outline-variant flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="text-[11px] font-medium text-on-surface-variant truncate">
                    {activeFeature?.title || "Feature Preview"}
                  </span>
                  <div className="w-8" />
                </div>

                {/* Screenshot Display */}
                <div className="relative bg-surface-variant/30 flex items-center justify-center overflow-hidden">
                  <img
                    src={activeDisplayImage}
                    alt={activeFeature?.title || "Feature preview"}
                    className="w-full h-auto max-h-[460px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 right-3 bg-surface/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-on-surface shadow-elevation-1 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity border border-outline-variant">
                    <Maximize2 size={13} className="text-primary" />
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
                        const featIdx = currentFeatures.findIndex((f) => f.image === item.url);
                        if (featIdx !== -1) setActiveFeatureIdx(featIdx);
                      }}
                      className={`relative rounded-xl overflow-hidden aspect-[16/10] bg-surface-variant border transition-all cursor-pointer group min-h-[44px] ${
                        isSelected
                          ? 'border-primary ring-2 ring-primary ring-offset-2 ring-offset-background shadow-xs'
                          : 'border-outline-variant hover:border-outline opacity-80 hover:opacity-100'
                      }`}
                      title={item.label}
                      aria-label={`Preview ${item.label}`}
                    >
                      <img
                        src={item.url}
                        alt={item.label}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
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
                    className="text-xs font-medium text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-1 cursor-pointer py-1"
                  >
                    <span>View all {activeProject.gallery.length} screenshots</span>
                    <ExternalLink size={12} />
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
