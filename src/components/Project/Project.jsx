import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github, ExternalLink, ArrowRight,
  CheckCircle2, ChevronDown, X
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
    desc: "Farmket connects farmers and consumers through a Django-based platform for buying, selling, chatting, and tracking fresh farm products.",
    tech: ['React', "TypeScript", 'Javascript', 'Tailwind CSS', 'Django', 'Django REST Framework', 'SQL', 'PostgreSQL', 'Redis'],
    links: { code: "https://github.com/pranavkavade20/Farmket", demo: "" },
    image: farmketImg1,
    gallery: [
      { label: "Home Page", url: farmketImg1 },
      { label: "Buyer Marketplace", url: farmketImg2 },
      { label: "Buyer Add to Cart", url: farmketImg7 },
      { label: "Buyer Dashboard", url: farmketImg5 },
      { label: "Buyer Order", url: farmketImg8 },
      { label: "Buyer & Farmer Chat", url: farmketImg6 },
      { label: "Community", url: farmketImg9 },
      { label: "Farmer Products", url: farmketImg3 },
      { label: "Farmer Add Product", url: farmketImg10 },
      { label: "Farmer Order System", url: farmketImg11 },
      { label: "Crop Tracking", url: farmketImg4 }
    ],
    problem: "Farmers struggle to reach consumers directly, often relying on middlemen which reduces their profits. Consumers lack a reliable way to source fresh, local produce.",
    solution: "A unified marketplace that eliminates middlemen. Farmket enables direct communication, transparent pricing, and seamless transactions between farmers and buyers.",
    features: [
      { title: "Direct Marketplace", desc: "Buy and sell fresh products with transparent pricing." },
      { title: "Real-time Chat", desc: "Communicate directly to negotiate or ask questions." },
      { title: "Order Tracking", desc: "Keep track of purchases and sales easily." }
    ],
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
      { label: "Roles", value: "2+" },
      { label: "Tech Stack", value: "Full Stack" },
      { label: "Real-time", value: "Yes" }
    ]
  },
  {
    id: 1,
    title: "Recipy",
    tag: "AI powered Recipe Assistant",
    desc: "A smart culinary engine leveraging Scikit-Learn and FAISS to deliver sub-second recipe recommendations based on user inventory and preferences.",
    tech: ['Python', 'Django', 'DRF', 'JavaScript', 'Tailwind', 'AI & ML'],
    links: { code: "https://github.com/pranavkavade20/Recipy", demo: "https://recipy-demo.example.com" }, // User mentioned demo link for this, using example if unknown, wait I'll keep "#" if unknown but they had a google drive link, I will use "#" since it was a video demo.
    image: recipyImg1,
    gallery: [
      { label: "Home", url: recipyImg1 },
      { label: "Search Interface", url: recipyImg4 },
      { label: "AI Recommendations", url: recipyImg3 },
      { label: "Recipe View", url: recipyImg2 }
    ],
    problem: "People often have ingredients in their fridge but struggle to find creative, personalized recipes quickly.",
    solution: "An AI-powered assistant that matches your current inventory to thousands of recipes in sub-second speeds using FAISS.",
    features: [
      { title: "AI Recommendations", desc: "Scikit-Learn powered recipe matching." },
      { title: "Inventory Tracking", desc: "Manage what's in your fridge." },
      { title: "Lightning Fast", desc: "Sub-second search with FAISS vector DB." }
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
      { label: "Speed", value: "<1s" },
      { label: "AI Powered", value: "Yes" },
      { label: "Scale", value: "High" }
    ]
  },
  {
    id: 2,
    title: "Product Manager",
    tag: "Full Stack Web App",
    desc: "Responsive dashboard for inventory management. Focuses on React Hooks, complex state management, and seamless FastAPI integration for local data persistence.",
    tech: ['React', 'FastAPI', 'PostgreSQL', 'HTML', 'CSS', 'Javascript'],
    links: { code: "https://github.com/pranavkavade20/productify", demo: "#" },
    image: productifyImg,
    gallery: [
      { label: "Dashboard", url: productifyImg }
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
      { label: "Data", value: "Persistent" }
    ]
  }
];

// Re-add the previous demo link if it existed, but since the user asked to remove video demo, I'll set Recipy's demo back to # since the Google Drive link was a video.
projects[1].links.demo = "#";


// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
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
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 md:p-10"
        onClick={onClose}
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full z-10">
          <X size={24} />
        </button>
        <motion.div 
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-6xl aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center bg-black/40"
          onClick={e => e.stopPropagation()}
        >
          <img src={image} alt="Gallery item" className="max-w-full max-h-full object-contain" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const HeroSection = ({ project }) => {
  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col items-center text-center w-full max-w-4xl mx-auto pt-10 md:pt-20 pb-16">
      <motion.div variants={fadeUp} className="mb-6 flex flex-wrap justify-center gap-2">
        {project.tech.map((t, i) => (
          <motion.span 
            whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
            key={i} 
            className="px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200 text-slate-600 text-xs font-medium tracking-wide transition-colors hover:bg-slate-200 hover:text-slate-900 cursor-default"
          >
            {t}
          </motion.span>
        ))}
      </motion.div>
      
      <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 mb-6 text-balance">
        {project.title}
      </motion.h1>
      
      <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl text-balance">
        {project.desc}
      </motion.p>
      
      <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 mb-16">
        {project.links.demo && project.links.demo !== "#" && (
          <a href={project.links.demo} target="_blank" rel="noreferrer" className="group relative flex items-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-full font-medium transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20 overflow-hidden">
            <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
            <span className="relative z-10">Live Demo</span>
            <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
          </a>
        )}
        {project.links.code && project.links.code !== "#" && (
          <a href={project.links.code} target="_blank" rel="noreferrer" className="group flex items-center gap-2 px-6 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-full font-medium transition-all hover:border-slate-300 hover:bg-slate-50 hover:scale-105 active:scale-95 relative overflow-hidden">
            <span className="absolute inset-0 bg-slate-100/50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
            <Github size={18} className="relative z-10" />
            <span className="relative z-10">View Source</span>
          </a>
        )}
      </motion.div>
      
      <motion.div 
        variants={fadeUp}
        className="w-full aspect-video rounded-[2rem] overflow-hidden border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group relative bg-slate-50 transition-shadow hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]"
      >
        <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
      </motion.div>
    </motion.div>
  );
};

const ProblemSolution = ({ project }) => {
  if (!project.problem || !project.solution) return null;
  
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-20 grid md:grid-cols-2 gap-6 md:gap-10">
      <motion.div variants={fadeUp} className="bg-slate-50/80 border border-slate-100 rounded-[2rem] p-8 md:p-12 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-4">The Problem</h3>
        <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed text-balance">
          {project.problem}
        </p>
      </motion.div>
      <motion.div variants={fadeUp} className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-110"></div>
        <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-4 relative z-10">The Solution</h3>
        <p className="text-xl md:text-2xl font-medium leading-relaxed text-balance relative z-10">
          {project.solution}
        </p>
      </motion.div>
    </motion.div>
  );
};

const ProductWalkthrough = ({ project }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!project.gallery || project.gallery.length === 0) return null;

  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-24">
      <motion.div variants={fadeUp} className="mb-16 text-center md:text-left">
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Product Walkthrough</h3>
        <p className="text-slate-500 mt-4 text-lg max-w-2xl text-balance">Explore the features and interface in detail as you scroll.</p>
      </motion.div>

      {/* Desktop & Tablet Layout (Sticky Image) */}
      <div className="hidden md:flex flex-col lg:flex-row items-start gap-12 xl:gap-20 relative">
        
        {/* Left/Top Sticky Image */}
        <div className="w-full lg:w-1/2 sticky top-24 lg:top-32 flex-shrink-0 z-10">
          <div className="relative rounded-[2rem] bg-slate-50 border border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-300 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] group">
            {/* Browser Controls */}
            <div className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-5 py-4 flex items-center gap-2 relative z-20">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] shadow-sm"></div>
              <div className="absolute left-1/2 -translate-x-1/2 text-[11px] font-semibold tracking-wider text-slate-400 uppercase bg-slate-100 px-3 py-1 rounded-full">
                {project.gallery[activeIndex].label}
              </div>
            </div>
            
            <div className="relative aspect-[4/3] lg:aspect-video bg-white overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={project.gallery[activeIndex].url}
                  alt={project.gallery[activeIndex].label}
                  initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right/Bottom Content Blocks */}
        <div className="w-full lg:w-1/2 py-10 lg:py-32 relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200" />
          
          <div className="space-y-48 lg:space-y-64">
            {project.gallery.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <motion.div
                  key={idx}
                  onViewportEnter={() => setActiveIndex(idx)}
                  viewport={{ amount: 0.5, margin: "-40% 0px -40% 0px" }}
                  className={`relative pl-8 md:pl-12 transition-all duration-500 cursor-default group/card ${isActive ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
                >
                  {/* Active Indicator on the Line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full transition-all duration-500 origin-top ${isActive ? 'bg-slate-900 scale-y-100' : 'bg-transparent scale-y-0'}`} />
                  
                  <div className={`transition-all duration-500 transform ${isActive ? 'translate-x-0' : '-translate-x-2'}`}>
                    <h4 className={`font-bold text-slate-900 transition-all duration-500 ${isActive ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                      {item.label}
                    </h4>
                    <p className="mt-4 text-slate-500 text-lg leading-relaxed max-w-md">
                      Seamlessly interact with the {item.label.toLowerCase()} interface, designed for clarity, responsiveness, and an optimal user experience.
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Layout (Interleaved) */}
      <div className="md:hidden space-y-20 mt-10">
        {project.gallery.map((item, idx) => (
          <motion.div 
            key={idx}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-[2rem] bg-slate-50 border border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden group">
              <div className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 py-3 flex items-center gap-2 relative">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                <div className="absolute left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  {item.label}
                </div>
              </div>
              <div className="relative aspect-[4/3] bg-white overflow-hidden">
                <img
                  src={item.url}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
            
            <div className="pl-5 border-l-[3px] border-slate-900">
              <h4 className="text-2xl font-bold text-slate-900">
                {item.label}
              </h4>
              <p className="mt-2 text-slate-500 text-base leading-relaxed">
                Seamlessly interact with the {item.label.toLowerCase()} interface, designed for clarity, responsiveness, and an optimal user experience.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const FeaturesSection = ({ project }) => {
  if (!project.features || project.features.length === 0) return null;

  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-20">
      <motion.div variants={fadeUp} className="mb-12">
        <h3 className="text-3xl font-bold tracking-tight text-slate-900">Key Features</h3>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {project.features.map((feat, idx) => (
          <motion.div 
            key={idx}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-slate-600 group-hover:text-slate-900 group-hover:bg-slate-200 transition-colors">
              <CheckCircle2 size={24} className="group-hover:rotate-6 transition-transform" />
            </div>
            <h4 className="text-xl font-semibold text-slate-900 mb-3">{feat.title}</h4>
            <p className="text-slate-500 leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Timeline = ({ project }) => {
  if (!project.timeline || project.timeline.length === 0) return null;

  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-20">
      <motion.div variants={fadeUp} className="mb-12">
        <h3 className="text-3xl font-bold tracking-tight text-slate-900">Development Journey</h3>
      </motion.div>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
        {project.timeline.map((item, idx) => (
          <motion.div key={idx} variants={fadeUp} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-900 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-transform group-hover:scale-110">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group-hover:border-slate-300 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">{item.phase}</h4>
              <p className="text-slate-500">{item.desc}</p>
            </div>
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
      <motion.div variants={fadeUp} className="mb-10 text-center">
        <h3 className="text-3xl font-bold tracking-tight text-slate-900">Challenges Overcome</h3>
      </motion.div>
      <div className="space-y-4">
        {project.challenges.map((challenge, idx) => (
          <motion.div key={idx} variants={fadeUp} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:border-slate-300 transition-colors">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 transition-colors"
            >
              <span className="text-lg font-semibold text-slate-900">{challenge.title}</span>
              <span className={`w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 bg-slate-200 text-slate-900' : ''}`}>
                <ChevronDown size={18} />
              </span>
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: "auto", opacity: 1 }} 
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-slate-500 border-t border-slate-100 mt-2">
                    {challenge.desc}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectImpact = ({ project }) => {
  if (!project.impact || project.impact.length === 0) return null;

  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-20">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {project.impact.map((stat, idx) => (
          <motion.div key={idx} variants={fadeUp} className="bg-slate-900 text-center p-8 rounded-[2rem] border border-slate-800 shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:bg-white/10 transition-colors"></div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter relative z-10">{stat.value}</div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-widest relative z-10">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const BottomCTA = ({ project }) => {
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-32 text-center flex flex-col items-center border-t border-slate-200/60 mt-10">
      <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
        Interested in this project?
      </motion.h2>
      <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
        {project.links.demo && project.links.demo !== "#" && (
          <a href={project.links.demo} target="_blank" rel="noreferrer" className="group flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-medium transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20 text-lg overflow-hidden relative">
            <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
            <span className="relative z-10">View Live Demo</span>
            <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
          </a>
        )}
        {project.links.code && project.links.code !== "#" && (
          <a href={project.links.code} target="_blank" rel="noreferrer" className="group flex items-center gap-2 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium transition-all hover:border-slate-300 hover:bg-slate-50 hover:scale-105 active:scale-95 text-lg relative overflow-hidden">
            <span className="absolute inset-0 bg-slate-100/50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
            <Github size={20} className="relative z-10" />
            <span className="relative z-10">View Source Code</span>
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};


// --- MAIN COMPONENT ---
function Project() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightbox, setLightbox] = useState({ isOpen: false, url: null });
  
  const activeProject = projects[activeTab];

  const handleProjectChange = (index) => {
    setActiveTab(index);
    // Optionally scroll to top of projects section
    const section = document.getElementById('projects');
    if(section) {
      const topOffset = section.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-white selection:bg-slate-200 selection:text-slate-900 border-t border-slate-100">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        
        {/* Navigation / Tabs */}
        <div className="flex flex-col items-center mb-16 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 p-1.5 bg-slate-100/80 backdrop-blur-md rounded-full border border-slate-200/80 overflow-x-auto max-w-full scrollbar-hide shadow-inner"
          >
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => handleProjectChange(index)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === index ? 'text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {activeTab === index && (
                  <motion.div layoutId="activeTab" className="absolute inset-0 bg-white rounded-full border border-slate-200/60 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]" style={{ zIndex: -1 }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                )}
                {project.title}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Project Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <HeroSection project={activeProject} />
            <ProblemSolution project={activeProject} />
            <ProductWalkthrough project={activeProject} />
            <FeaturesSection project={activeProject} />
            <Timeline project={activeProject} />
            <Challenges project={activeProject} />
            <ProjectImpact project={activeProject} />
            <BottomCTA project={activeProject} />
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