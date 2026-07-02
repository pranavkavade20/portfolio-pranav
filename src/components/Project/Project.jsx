import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github, ArrowRight,
  CheckCircle2, ChevronDown, X, MonitorPlay, Maximize2,
  Tractor, ShoppingBag
} from 'lucide-react';

// --- IMAGE IMPORTS ---
import farmketImg1 from '../../assets/project_images/farmket/HomePage.jpg';
import farmketImg2 from '../../assets/project_images/farmket/BuyerMarketPlace.jpg';
import farmketImg3 from '../../assets/project_images/farmket/FarmerProduct.jpg';
import farmketImg4 from '../../assets/project_images/farmket/FarmerCropTracking.jpg';
import farmketImg5 from '../../assets/project_images/farmket/BuyerDashboard.jpg';
import farmketImg6 from '../../assets/project_images/farmket/BuyerFarmerChat.jpg';
import farmketImg7 from '../../assets/project_images/farmket/BuyerAddtoCart.jpg';
import farmketImg8 from '../../assets/project_images/farmket/BuyerOrder.jpg';
import farmketImg9 from '../../assets/project_images/farmket/Community.jpg';
import farmketImg10 from '../../assets/project_images/farmket/FarmerAddProduct .jpg';
import farmketImg11 from '../../assets/project_images/farmket/FarmerOrderSystem.jpg';

import recipyImg1 from '../../assets/project_images/recipy/Home.jpg';
import recipyImg2 from '../../assets/project_images/recipy/Recipe.png';
import recipyImg3 from '../../assets/project_images/recipy/Recommendation.png';
import recipyImg4 from '../../assets/project_images/recipy/Search.png';

import productifyImg from '../../assets/project_images/productify/productify.png';

// --- DATA ---
const projects = [
  {
    id: 0,
    title: "Farmket",
    tag: "Farmer and Buyer Marketplace",
    desc: "Farmket connects farmers and consumers through a Python-based platform for buying, selling, chatting, and tracking fresh farm products.",
    tech: ['React', "TypeScript", 'Tailwind CSS', 'Django', 'Django REST Framework','PostgreSQL', 'Redis','Websockets'],
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
        { title: "Secure Authentication", desc: "Robust data protection and private account access." },
        { title: "Digital Storefront", desc: "Easily add products and sell online directly to buyers." },
        { title: "Crop Tracking", desc: "Update crop stages to allow buyers to pre-book upcoming harvests." },
        { title: "Order System", desc: "Seamlessly receive and manage incoming orders." },
        { title: "Real-time Chat", desc: "Communicate directly with buyers to negotiate and build trust." },
        { title: "Community Posting", desc: "Post updates and crop stages to the community feed to attract buyers early." },
        { title: "Business Analytics", desc: "Track sales performance and monitor store growth." }
      ],
      buyer: [
        { title: "Secure Authentication", desc: "Safe, private login for personal shopping." },
        { title: "Multi-vendor Cart", desc: "Add products from different farmers into a single, unified shopping cart." },
        { title: "Order Tracking", desc: "Monitor order status from placement to delivery." },
        { title: "Real-time Chat", desc: "Ask farmers questions directly before making a purchase." },
        { title: "Community Feed", desc: "Stay updated on the latest products and farm news." },
        { title: "Early Pre-booking", desc: "Secure high-demand produce early based on live crop stage updates." }
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
    ],
    impact: [
      { label: "User Roles", value: "2+" },
      { label: "Architecture", value: "Full Stack" },
      { label: "Communication", value: "Real-time" }
    ]
  },
  {
    id: 1,
    title: "Recipy",
    tag: "AI powered Recipe Assistant",
    desc: "A smart culinary engine leveraging Scikit-Learn and FAISS to deliver sub-second recipe recommendations based on user inventory and preferences.",
    tech: ['Python', 'Django', 'JavaScript', 'Tailwind', 'AI & ML'],
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
      { title: "Lightning Fast", desc: "Sub-second search with FAISS vector DB." },
      { title: "AI Recommendations", desc: "Scikit-Learn powered recipe matching." },
      { title: "Inventory Tracking", desc: "Manage what's in your fridge." }
    ],
    timeline: [
      { phase: "Data Pipeline", desc: "Cleaning and vectorizing recipe datasets." },
      { phase: "Model Training", desc: "Implementing Scikit-Learn algorithms." },
      { phase: "Integration", desc: "Connecting the AI engine to the Django backend." }
    ],
    challenges: [
      { title: "Search Latency", desc: "Optimizing the vector search to return results in under a second." },
      { title: "Data Quality", desc: "Normalizing thousands of diverse recipes for the model." }
    ],
    impact: [
      { label: "Query Speed", value: "<1s" },
      { label: "Engine", value: "AI Powered" },
      { label: "Dataset Scale", value: "High" }
    ]
  },
  {
    id: 2,
    title: "Product Manager",
    tag: "Full Stack Web App",
    desc: "Responsive dashboard for inventory management. Focuses on React Hooks, complex state management, and seamless FastAPI integration.",
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
      { title: "Responsive Dashboard", desc: "Manage inventory from any device." },
      { title: "FastAPI Backend", desc: "High-performance Python backend." },
      { title: "State Management", desc: "Complex React Hooks implementation." }
    ],
    timeline: [
      { phase: "UI Design", desc: "Wireframing the responsive dashboard." },
      { phase: "API Design", desc: "Creating robust FastAPI endpoints." },
      { phase: "Integration", desc: "Connecting React state with the backend." }
    ],
    challenges: [
      { title: "State Synchronization", desc: "Ensuring the UI perfectly reflects the PostgreSQL database state." }
    ],
    impact: [
      { label: "Responsive", value: "100%" },
      { label: "Architecture", value: "Modern" },
      { label: "Data Storage", value: "Persistent" }
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
      <div className="bg-gradient-to-br from-white via-slate-50 to-amber-50 border-[3px] border-slate-900 rounded-[2rem] p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full bg-slate-100 border-2 border-slate-900 text-slate-800 text-xs font-bold tracking-wide shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4 uppercase">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              {project.desc}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {project.links.code && project.links.code !== "#" && (
              <a href={project.links.code} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-white to-amber-50 text-slate-900 border-[3px] border-slate-900 rounded-full font-bold uppercase tracking-wide transition-all hover:-translate-y-1 hover:from-amber-50 hover:to-white shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
                <Github size={18} />
                <span>Source</span>
              </a>
            )}
            {project.links.demo && project.links.demo !== "#" && (
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-300 to-blue-400 text-slate-900 border-[3px] border-slate-900 rounded-full font-bold uppercase tracking-wide transition-all hover:-translate-y-1 hover:from-blue-400 hover:to-blue-300 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
                <MonitorPlay size={18} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[400px] md:h-[500px] group">
          <div
            onClick={() => onImageClick(project.bentoImages[0])}
            className="relative col-span-1 md:col-span-3 row-span-2 rounded-[1.5rem] overflow-hidden bg-slate-100 border-[3px] border-slate-900 cursor-zoom-in transition-all duration-500 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10 pointer-events-none" />
            <img src={project.bentoImages[0]} alt={`${project.title} hero`} className="w-full h-full object-cover object-top" />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 shadow-sm flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-20 border border-slate-900">
              <Maximize2 size={14} /> Enlarge
            </div>
          </div>
          <div
            onClick={() => onImageClick(project.bentoImages[1])}
            className="hidden md:block relative col-span-1 row-span-1 rounded-[1.5rem] overflow-hidden bg-slate-100 border-[3px] border-slate-900 cursor-zoom-in transition-all duration-500 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 hover:z-10"
          >
            <img src={project.bentoImages[1]} alt="Detail 1" className="w-full h-full object-cover object-left" />
          </div>
          <div
            onClick={() => onImageClick(project.bentoImages[2])}
            className="hidden md:block relative col-span-1 row-span-1 rounded-[1.5rem] overflow-hidden bg-slate-100 border-[3px] border-slate-900 cursor-zoom-in transition-all duration-500 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 hover:z-10"
          >
            <img src={project.bentoImages[2]} alt="Detail 2" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ImpactMetrics = ({ project }) => {
  if (!project.impact || project.impact.length === 0) return null;
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24 max-w-6xl mx-auto">
      {project.impact.map((stat, idx) => (
        <motion.div key={idx} variants={fadeUp} className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border-[3px] border-slate-900 p-6 rounded-[1.5rem] flex flex-col justify-center shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
          <div className="text-3xl font-black text-slate-900 tracking-tight mb-1">{stat.value}</div>
          <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const ProblemSolution = ({ project }) => {
  if (!project.problem || !project.solution) return null;
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-16 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <motion.div variants={fadeUp} className="p-8 rounded-[2rem] bg-gradient-to-br from-white to-amber-50 border-[3px] border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
        <h3 className="text-xs font-black tracking-[0.25em] uppercase text-slate-500 mb-4">The Challenge</h3>
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed">{project.problem}</p>
      </motion.div>
      <motion.div variants={fadeUp} className="p-8 rounded-[2rem] bg-gradient-to-br from-blue-300 to-blue-400 border-[3px] border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
        <h3 className="text-xs font-black tracking-[0.25em] uppercase text-slate-800 mb-4">The Solution</h3>
        <p className="text-lg md:text-xl font-semibold leading-relaxed text-slate-900">{project.solution}</p>
      </motion.div>
    </motion.div>
  );
};

const TabbedGallery = ({ project, onImageClick }) => {
  if (!project.gallery || project.gallery.length === 0) return null;

  const categories = ["All", ...new Set(project.gallery.map(img => img.category).filter(Boolean))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? project.gallery
    : project.gallery.filter(img => img.category === activeCategory);

  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-24 max-w-6xl mx-auto">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase">Application Screens</h3>
          <p className="text-slate-500 mt-2">Explore the user interface and platform capabilities.</p>
        </div>
        {categories.length > 2 && (
          <div className="flex flex-wrap gap-2 p-1 bg-gradient-to-r from-slate-100 to-amber-50 rounded-full border-[3px] border-slate-900 self-start shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === cat ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {activeCategory === cat && (
                  <motion.div layoutId="activeGalleryTab" className="absolute inset-0 bg-white rounded-full border border-slate-900" style={{ zIndex: -1 }} transition={{ type: "spring", duration: 0.5 }} />
                )}
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((item, idx) => (
            <motion.div
              layout
              key={item.label + idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group cursor-zoom-in flex flex-col gap-3"
              onClick={() => onImageClick(item.url)}
            >
              <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50 border-[3px] border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                <img src={item.url} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{item.label}</h4>
                {item.category && <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">{item.category}</p>}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

// UPDATED: Features Section to handle generic features OR role-based features
const FeaturesSection = ({ project }) => {
  const [activeRole, setActiveRole] = useState('farmer');

  if (project.roleFeatures) {
    const currentFeatures = project.roleFeatures[activeRole];

    return (
      <div className="py-20 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase">Platform Features</h3>
            <p className="text-slate-500 mt-2">Tailored experiences for both sides of the marketplace.</p>
          </div>

          <div className="flex gap-2 p-1 bg-slate-100 rounded-full border-[3px] border-slate-900 self-start shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
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
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${activeRole === 'buyer' ? 'text-blue-900' : 'text-slate-500 hover:text-slate-700'}`}
            >
              {activeRole === 'buyer' && (
                <motion.div layoutId="activeRoleTab" className="absolute inset-0 bg-white rounded-full border border-blue-200" style={{ zIndex: -1 }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
              )}
              <ShoppingBag size={16} className={activeRole === 'buyer' ? 'text-blue-600' : ''}/>
              Buyer
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeRole}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="group bg-gradient-to-br from-white via-slate-50 to-amber-50 border-[3px] border-slate-900 p-6 rounded-[1.5rem] shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-1 flex flex-col"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${activeRole === 'farmer' ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'}`}>
                  <CheckCircle2 size={20} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  if (!project.features || project.features.length === 0) return null;
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-20 max-w-6xl mx-auto">
      <h3 className="text-3xl font-black tracking-tight text-slate-900 mb-10 uppercase">Key Features</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {project.features.map((feat, idx) => (
          <motion.div
            key={idx} variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className={`group bg-gradient-to-br from-white via-slate-50 to-blue-50 border-[3px] border-slate-900 p-8 rounded-[2rem] shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-1 ${idx === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}
          >
            <div className="w-12 h-12 bg-slate-50 border-2 border-slate-900 rounded-xl flex items-center justify-center mb-6 text-slate-700">
              <CheckCircle2 size={24} className="group-hover:text-slate-900 transition-colors" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">{feat.title}</h4>
            <p className="text-slate-500 leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Challenges = ({ project }) => {
  const [openIdx, setOpenIdx] = useState(0);
  if (!project.challenges || project.challenges.length === 0) return null;
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-20 max-w-3xl mx-auto">
      <h3 className="text-3xl font-black tracking-tight text-slate-900 mb-10 text-center uppercase">Technical Hurdles</h3>
      <div className="space-y-4">
        {project.challenges.map((challenge, idx) => (
          <motion.div key={idx} variants={fadeUp} className="border-[3px] border-slate-900 rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-white to-amber-50 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-colors">
            <button onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)} className="w-full flex items-center justify-between p-6 text-left">
              <span className="text-lg font-semibold text-slate-900">{challenge.title}</span>
              <span className={`w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 border-2 border-slate-900 text-slate-500 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 bg-slate-200' : ''}`}>
                <ChevronDown size={18} />
              </span>
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="p-6 pt-0 text-slate-600 border-t-2 border-slate-900 mt-2">{challenge.desc}</div>
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
    <section id="projects" className="py-24 relative overflow-hidden border-t-2 border-slate-200 min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.2),transparent_40%)]">
      <div className="absolute top-[-8%] left-[-8%] w-64 h-64 bg-amber-200/50 rounded-full blur-[90px] z-0"></div>
      <div className="absolute bottom-[10%] right-[-6%] w-72 h-72 bg-blue-200/50 rounded-full blur-[90px] z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm md:text-base font-black tracking-[0.35em] uppercase text-slate-500 mb-4">Selected Work</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 mb-4">
            Projects I Built
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A mix of full-stack platforms, AI-driven experiences, and practical product tools.
          </p>
        </div>

        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 p-1.5 bg-white rounded-full border-[3px] border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] overflow-x-auto max-w-full">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => handleProjectChange(index)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeTab === index ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {activeTab === index && (
                  <motion.div layoutId="activeMainTab" className="absolute inset-0 bg-slate-100 rounded-full border border-slate-900" style={{ zIndex: -1 }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
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
            <ImpactMetrics project={activeProject} />
            <ProblemSolution project={activeProject} />
            <FeaturesSection project={activeProject} />
            <TabbedGallery project={activeProject} onImageClick={openLightbox} />
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