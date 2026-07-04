import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github, ArrowRight,
  CheckCircle2, ChevronDown, X, MonitorPlay, Maximize2,
  Tractor, ShoppingBag
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

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

// --- DATA ---
const projects = [
  {
    id: 0,
    title: "Farmket",
    tag: "Farmer and Buyer Marketplace",
    desc: "Farmket connects farmers and consumers through a Python-based platform for buying, selling, chatting, and tracking fresh farm products.",
    tech: ['React', "TypeScript", "JavaScript", 'Tailwind CSS', 'Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Websockets'],
    links: { code: "https://github.com/pranavkavade20/Farmket", demo: "" },
    image: farmketImg1,
    bentoImages: [farmketImg1, farmketImg5, farmketImg4],
    gallery: [
      { label: "Home Page", url: farmketImg1, category: "Overview" },
      { label: "Buyer Marketplace", url: farmketImg2, category: "Buyer Flow" },
      { label: "Buyer Add to Cart", url: farmketImg7, category: "Buyer Flow" },
      { label: "Buyer Dashboard", url: farmketImg5, category: "Buyer Flow" },
      { label: "Buyer Order", url: farmketImg8, category: "Buyer Flow" },
      { label: "Farmer Products", url: farmketImg3, category: "Farmer Flow" },
      { label: "Farmer Add Product", url: farmketImg10, category: "Farmer Flow" },
      { label: "Farmer Order System", url: farmketImg11, category: "Farmer Flow" },
      { label: "Crop Tracking", url: farmketImg4, category: "Farmer Flow" },
      { label: "Buyer & Farmer Chat", url: farmketImg6, category: "Global Features" },
      { label: "Community", url: farmketImg9, category: "Global Features" }
    ],
    problem: "Farmers struggle to reach consumers directly, relying on middlemen which reduces profits. Consumers lack a reliable way to source fresh, local produce.",
    solution: "A unified marketplace eliminating middlemen. Farmket enables direct communication, transparent pricing, and seamless transactions between farmers and buyers.",
    // NEW: Role-based features specifically for dual-sided marketplaces like Farmket
    roleFeatures: {
      farmer: [
        { title: "Secure Authentication", desc: "Robust data protection and private account access.", image: farmketImg1 },
        { title: "Digital Storefront", desc: "Easily add products and sell online directly to buyers.", image: farmketImg10 },
        { title: "Crop Tracking", desc: "Update crop stages to allow buyers to pre-book upcoming harvests.", image: farmketImg4 },
        { title: "Order System", desc: "Seamlessly receive and manage incoming orders.", image: farmketImg11 },
        { title: "Real-time Chat", desc: "Communicate directly with buyers to negotiate and build trust.", image: farmketImg6 },
        { title: "Community Posting", desc: "Post updates and crop stages to the community feed to attract buyers early.", image: farmketImg9 },
        { title: "Business Analytics", desc: "Track sales performance and monitor store growth.", image: farmketImg3 }
      ],
      buyer: [
        { title: "Secure Authentication", desc: "Safe, private login for personal shopping.", image: farmketImg1 },
        { title: "Multi-vendor Cart", desc: "Add products from different farmers into a single, unified shopping cart.", image: farmketImg7 },
        { title: "Order Tracking", desc: "Monitor order status from placement to delivery.", image: farmketImg8 },
        { title: "Real-time Chat", desc: "Ask farmers questions directly before making a purchase.", image: farmketImg6 },
        { title: "Community Feed", desc: "Stay updated on the latest products and farm news.", image: farmketImg9 },
        { title: "Early Pre-booking", desc: "Secure high-demand produce early based on live crop stage updates.", image: farmketImg2 }
      ]
    },
    timeline: [
      { phase: "Planning", desc: "Architecting the Django backend and PostgreSQL schema." },
      { phase: "Development", desc: "Building the REST API and React frontend." },
      { phase: "Deployment", desc: "Configuring Redis and launching the platform." }
    ],
    challenges: [
      { title: "Real-time Communication", desc: "Implementing robust chatting using Django Channels and Redis." },
      { title: "Complex State", desc: "Managing buyer and farmer roles securely within a single platform." }
    ]
  },
  {
    id: 1,
    title: "Recipy",
    tag: "AI powered Recipe Assistant",
    desc: "A smart culinary engine leveraging Scikit-Learn and FAISS to deliver sub-second recipe recommendations based on user inventory and preferences.",
    tech: ['Python', 'Django', 'JavaScript', 'Tailwind CSS', 'AI & ML'],
    links: { code: "https://github.com/pranavkavade20/Recipy", demo: "#" },
    image: recipyImg1,
    bentoImages: [recipyImg1, recipyImg3, recipyImg4],
    gallery: [
      { label: "Home", url: recipyImg1, category: "Overview" },
      { label: "Search Interface", url: recipyImg4, category: "Search" },
      { label: "AI Recommendations", url: recipyImg3, category: "AI Features" },
      { label: "Recipe View", url: recipyImg2, category: "Overview" }
    ],
    problem: "People often have ingredients in their fridge but struggle to find creative, personalized recipes quickly.",
    solution: "An AI-powered assistant that matches your current inventory to thousands of recipes in sub-second speeds using FAISS.",
    features: [
      { title: "Lightning Fast Search", desc: "Sub-second search with FAISS vector DB.", image: recipyImg4 },
      { title: "AI Recommendations", desc: "Scikit-Learn powered recipe matching.", image: recipyImg3 },
      { title: "Detailed Recipes", desc: "Step-by-step visual guides for cooking.", image: recipyImg2 },
      { title: "Inventory Tracking", desc: "Manage what's in your fridge effortlessly.", image: recipyImg1 }
    ],
    timeline: [
      { phase: "Data Pipeline", desc: "Cleaning and vectorizing recipe datasets." },
      { phase: "Model Training", desc: "Implementing Scikit-Learn algorithms." },
      { phase: "Integration", desc: "Connecting the AI engine to the Django backend." }
    ],
    challenges: [
      { title: "Search Latency", desc: "Optimizing the vector search to return results in under a second." },
      { title: "Data Quality", desc: "Normalizing thousands of diverse recipes for the model." }
    ]
  },
  {
    id: 2,
    title: "Product Manager",
    tag: "Full Stack Web App",
    desc: "Responsive dashboard for inventory management. Focuses on React Hooks,state management, and seamless FastAPI integration.",
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    links: { code: "https://github.com/pranavkavade20/productify", demo: "#" },
    image: productifyImg,
    bentoImages: [productifyImg, productifyImg, productifyImg],
    gallery: [
      { label: "Dashboard", url: productifyImg, category: "Overview" }
    ],
    problem: "Small businesses need a lightweight, responsive dashboard to manage their product inventory without complex enterprise software.",
    solution: "A streamlined React and FastAPI application that offers fast local data persistence and an intuitive user interface.",
    features: [
      { title: "Responsive Dashboard", desc: "Manage inventory from any device.", image: productifyImg }
    ],
    timeline: [
      { phase: "UI Design", desc: "Wireframing the responsive dashboard." },
      { phase: "API Design", desc: "Creating robust FastAPI endpoints." },
      { phase: "Integration", desc: "Connecting React state with the backend." }
    ],
    challenges: [
      { title: "State Synchronization", desc: "Ensuring the UI perfectly reflects the PostgreSQL database state." }
    ]
  }
];

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// --- COMPONENTS ---

const Lightbox = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4 md:p-10"
        onClick={onClose}
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full z-10">
          <X size={24} />
        </button>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-7xl aspect-video rounded-xl overflow-hidden shadow-2xl flex items-center justify-center"
          onClick={e => e.stopPropagation()}
        >
          <img src={image} alt="Enlarged gallery item" className="max-w-full max-h-full object-contain rounded-xl" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const BentoHero = ({ project, onImageClick }) => {
  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="w-full max-w-6xl mx-auto pb-16">
      <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-6 md:p-8 shadow-soft border border-slate-100 dark:border-zinc-800 transition-colors duration-300">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 transition-colors">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 leading-relaxed transition-colors">
              {project.desc}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {project.links.code && project.links.code !== "#" && (
              <Button as="a" href={project.links.code} target="_blank" rel="noreferrer" variant="secondary" icon={Github}>
                Source
              </Button>
            )}
            {project.links.demo && project.links.demo !== "#" && (
              <Button as="a" href={project.links.demo} target="_blank" rel="noreferrer" variant="primary" icon={MonitorPlay}>
                Live Demo
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[400px] md:h-[500px] group">
          <div
            onClick={() => onImageClick(project.bentoImages[0])}
            className="relative col-span-1 md:col-span-3 row-span-2 rounded-[1.5rem] overflow-hidden bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 cursor-zoom-in transition-all duration-500 shadow-sm hover:shadow-soft-hover hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 dark:group-hover:bg-white/5 transition-colors z-10 pointer-events-none" />
            <img src={project.bentoImages[0]} alt={`${project.title} hero`} className="w-full h-full object-cover object-top" />
            <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-zinc-300 shadow flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <Maximize2 size={14} /> Enlarge
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 my-6">
          {project.tech.map((t, i) => (
            <Badge key={i}>{t}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};



const ProblemSolution = ({ project }) => {
  if (!project.problem || !project.solution) return null;
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-16 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <motion.div variants={fadeUp} className="p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-soft transition-colors">
        <h3 className="text-xs font-bold tracking-wider uppercase text-brand-primary dark:text-brand-secondary mb-4">The Challenge</h3>
        <p className="text-lg md:text-xl text-slate-700 dark:text-zinc-300 leading-relaxed">{project.problem}</p>
      </motion.div>
      <motion.div variants={fadeUp} className="p-8 rounded-[2rem] bg-brand-primary/10 dark:bg-brand-secondary/10 border border-brand-primary/20 dark:border-brand-secondary/30 shadow-soft transition-colors">
        <h3 className="text-xs font-bold tracking-wider uppercase text-brand-primary dark:text-brand-secondary mb-4">The Solution</h3>
        <p className="text-lg md:text-xl text-slate-800 dark:text-zinc-200 leading-relaxed">{project.solution}</p>
      </motion.div>
    </motion.div>
  );
};

// UPDATED: Unified Feature Gallery Component
const FeaturesSection = ({ project, onImageClick }) => {
  const [activeRole, setActiveRole] = useState('farmer');
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);

  useEffect(() => {
    setActiveFeatureIdx(0);
  }, [activeRole, project]);

  const hasRoleFeatures = !!project.roleFeatures;
  const currentFeatures = hasRoleFeatures ? project.roleFeatures[activeRole] : project.features;

  if (!currentFeatures || currentFeatures.length === 0) return null;

  const activeFeature = currentFeatures[activeFeatureIdx] || currentFeatures[0];

  const getFeatureImage = () => {
    if (activeFeature?.image) return activeFeature.image;
    return project.image;
  };

  const getAccentColor = () => {
    if (!hasRoleFeatures) return 'from-white via-slate-50 to-amber-50';
    return activeRole === 'farmer' ? 'from-white via-slate-50 to-emerald-50' : 'from-white via-slate-50 to-brand-primary/10';
  };

  const getIconColor = () => {
    if (!hasRoleFeatures) return 'text-slate-900';
    return activeRole === 'farmer' ? 'text-emerald-600' : 'text-brand-primary';
  };

  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-24 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">Platform Features & Screens</h3>
          <p className="text-slate-500 dark:text-zinc-400 mt-2 transition-colors">
            {hasRoleFeatures ? "Explore tailored experiences for both sides of the marketplace." : "Explore the core capabilities and screens of the application."}
          </p>
        </div>

        {hasRoleFeatures && (
          <div className="flex gap-2 p-1 bg-slate-100 rounded-full self-start shadow-inner">
            <button
              onClick={() => setActiveRole('farmer')}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${activeRole === 'farmer' ? 'text-emerald-900' : 'text-slate-500 hover:text-slate-700'}`}
            >
              {activeRole === 'farmer' && (
                <motion.div layoutId="activeRoleTab" className="absolute inset-0 bg-white rounded-full border border-emerald-200" style={{ zIndex: -1 }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
              )}
              <Tractor size={16} className={activeRole === 'farmer' ? 'text-emerald-600' : ''} />
              Farmer
            </button>
            <button
              onClick={() => setActiveRole('buyer')}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${activeRole === 'buyer' ? 'text-brand-primary' : 'text-slate-500 hover:text-slate-700'}`}
            >
              {activeRole === 'buyer' && (
                <motion.div layoutId="activeRoleTab" className="absolute inset-0 bg-white rounded-full border border-brand-primary/30" style={{ zIndex: -1 }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
              )}
              <ShoppingBag size={16} className={activeRole === 'buyer' ? 'text-brand-primary' : ''} />
              Buyer
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Tabs Column */}
        <div className="w-full lg:w-1/3 flex flex-col gap-3">
          {currentFeatures.map((feat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFeatureIdx(idx)}
              className={`group flex items-start gap-4 text-left px-5 py-5 rounded-2xl font-medium transition-all ${activeFeatureIdx === idx
                ? 'bg-white dark:bg-zinc-900 shadow-soft border border-slate-100 dark:border-zinc-800 text-slate-900 dark:text-white translate-x-1 lg:translate-x-2'
                : 'bg-transparent text-slate-600 dark:text-zinc-400 hover:bg-white/50 dark:hover:bg-zinc-800/50 border border-transparent hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              <div className={`mt-0.5 transition-transform duration-300 ${activeFeatureIdx === idx ? 'scale-110 text-amber-300' : 'text-slate-400 group-hover:text-slate-900'}`}>
                <CheckCircle2 size={20} />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <span className="text-lg leading-tight">{feat.title}</span>
                {activeFeatureIdx === idx && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="overflow-hidden">
                    <p className="text-sm font-medium text-slate-300 mt-2 leading-relaxed">
                      {feat.desc}
                    </p>
                  </motion.div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Content Column (Image Gallery Viewer) */}
        <div className="w-full lg:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole + activeFeatureIdx}
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`relative group bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-[2rem] p-4 md:p-6 shadow-soft flex flex-col h-full cursor-zoom-in transition-colors`}
              onClick={() => onImageClick && onImageClick(getFeatureImage())}
            >
              {/* Enlarge Hint */}
              <div className="absolute top-8 right-8 bg-white/90 dark:bg-zinc-800/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-zinc-300 shadow flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                <Maximize2 size={14} /> Enlarge
              </div>

              <div className="w-full aspect-[4/3] md:aspect-[16/10] rounded-[1.5rem] overflow-hidden bg-slate-100 dark:bg-zinc-800 shadow-sm border border-slate-200 dark:border-zinc-700 transition-transform duration-500 group-hover:shadow-soft group-hover:scale-[1.01]">
                <img src={getFeatureImage()} alt={activeFeature.title} className="w-full h-full object-cover object-top" />
              </div>

              <div className="mt-6 px-2 pb-2">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 shrink-0 bg-brand-primary/10 border border-brand-primary/20 rounded-xl flex items-center justify-center ${getIconColor()}`}>
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">{activeFeature.title}</h4>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const Challenges = ({ project }) => {
  const [openIdx, setOpenIdx] = useState(0);
  if (!project.challenges || project.challenges.length === 0) return null;
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-20 max-w-3xl mx-auto">
      <h3 className="text-3xl font-bold tracking-tight text-slate-900 mb-10 text-center">Technical Hurdles</h3>
      <div className="space-y-4">
        {project.challenges.map((challenge, idx) => (
          <motion.div key={idx} variants={fadeUp} className="border border-slate-200 rounded-[1.5rem] overflow-hidden bg-white shadow-sm transition-colors">
            <button onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)} className="w-full flex items-center justify-between p-6 text-left">
              <span className="text-lg font-semibold text-slate-900">{challenge.title}</span>
              <span className={`w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 bg-slate-100' : ''}`}>
                <ChevronDown size={18} />
              </span>
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="p-6 pt-0 text-slate-600 border-t border-slate-100 mt-2">{challenge.desc}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// --- MAIN PROJECT COMPONENT ---
function Project() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightbox, setLightbox] = useState({ isOpen: false, url: null });

  const activeProject = projects[activeTab];

  const handleProjectChange = (index) => {
    setActiveTab(index);
    const section = document.getElementById('projects');
    if (section) {
      const topOffset = section.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const openLightbox = (url) => {
    setLightbox({ isOpen: true, url });
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden min-h-screen bg-brand-bg-light dark:bg-brand-bg-dark transition-colors duration-300">
      <div className="absolute top-[-8%] left-[-8%] w-64 h-64 bg-amber-200/50 dark:bg-amber-900/20 rounded-full blur-[90px] z-0 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-[10%] right-[-6%] w-72 h-72 bg-brand-secondary/50 dark:bg-brand-primary/20 rounded-full blur-[90px] z-0 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Projects I Built" 
          subtitle="Selected Work" 
          className="mb-12"
        />

        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 p-1.5 bg-white dark:bg-zinc-900 rounded-full border border-slate-200 dark:border-zinc-800 shadow-sm overflow-x-auto max-w-full transition-colors">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => handleProjectChange(index)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeTab === index ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'}`}
              >
                {activeTab === index && (
                  <motion.div layoutId="activeMainTab" className="absolute inset-0 bg-slate-100 dark:bg-zinc-800 rounded-full border border-slate-900 dark:border-white" style={{ zIndex: -1 }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                )}
                {project.title}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <BentoHero project={activeProject} onImageClick={openLightbox} />
            <FeaturesSection project={activeProject} onImageClick={openLightbox} />
            <ProblemSolution project={activeProject} />
            <Challenges project={activeProject} />
          </motion.div>
        </AnimatePresence>

      </div>

      {lightbox.isOpen && (
        <Lightbox image={lightbox.url} onClose={() => setLightbox({ isOpen: false, url: null })} />
      )}
    </section>
  );
}

export default Project;