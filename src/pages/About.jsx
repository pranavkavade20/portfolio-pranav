import React from 'react';
import { Rocket, MapPin, Code2, Server, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Folder from '../components/ui/Folder';

// tech icons 
import profileImg from '../assets/profile.jpg';
import pythonImg from '../assets/tech/python.png';
import djangoImg from '../assets/tech/django.png';
import reactImg from '../assets/tech/react.png';
import jsImg from '../assets/tech/javascript.png';
import fastapiImg from '../assets/tech/fastapi.png';
import postgresqlImg from '../assets/tech/postgresql.png';

// logo
import boy from '../assets/boy.png';

function About() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center pt-24 pb-20 md:pt-32 md:pb-32">
      {/* Soft Animated Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-secondary/40 dark:bg-brand-secondary/20 rounded-full blur-[100px] z-0 animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/10 dark:bg-brand-primary/20 rounded-full blur-[120px] z-0 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10 flex flex-col w-full">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 md:mb-28 mt-8"
        >
          <Badge variant="primary" className="mb-6">About Me</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Who<span className="text-brand-primary dark:text-brand-secondary"> AM I</span>
          </h1>
          <p className="text-slate-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A passionate full-stack developer obsessed with building scalable platforms and solving real-world problems through clean architecture.
          </p>
        </motion.div>

        {/* The Journey Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24 md:mb-32">

          {/* Left Column: Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative flex justify-center order-1 mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-brand-primary/10 border border-slate-100/50 dark:border-zinc-800">
              <img src={profileImg} alt="Pranav Kavade" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-bold text-2xl tracking-wide mb-1">Pranav Kavade</h3>
                <p className="text-white/80 text-sm font-medium flex items-center gap-2">
                  <MapPin size={14} />
                  Maharashtra, IN
                </p>
              </div>
            </div>

            {/* Floating Tag */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white dark:bg-zinc-900 px-5 py-3 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-zinc-800 "
            >
              <span className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                <Rocket size={16} className="text-brand-primary dark:text-brand-secondary" />
                Ready to Build
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 order-2 space-y-8"
          >
            <Card className="p-8 md:p-10">
              <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-4 flex items-center gap-3">
                <Code2 className="text-brand-primary dark:text-brand-secondary" size={24} />
                The Identity
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed">
                I am a high-energy, detail-oriented <strong className="text-slate-900 dark:text-white">Full Stack Python Developer</strong>. As a fresher, I don't just write code; I obsess over architecture, scalability, and user experience. I thrive in the space where robust backend logic meets seamless frontend design.
              </p>
            </Card>

            <Card className="p-8 md:p-10">
              <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-4 flex items-center gap-3">
                <Server className="text-brand-primary dark:text-brand-secondary" size={24} />
                The Journey
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed">
                My path has been heavily focused on hands-on building. From designing complex RESTful APIs and optimizing databases to currently pouring my energy into robust platforms like Farmket, I've spent my time solving real-world data flow problems using <strong className="text-slate-900 dark:text-white">Python, Django, and React</strong>.
              </p>
            </Card>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative w-full max-w-4xl mx-auto group"
        >
          {/* Subtle decorative glow behind the card */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-brand-primary/20 blur-xl group-hover:opacity-60 transition duration-500 rounded-3xl z-0" />

          {/* Profile Picture (Top Right Breakout) */}
          <div className="absolute -top-12 right-6 md:-top-16 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-brand-primary/5 dark:bg-zinc-800 rounded-full border-4 border-white dark:border-zinc-900 shadow-2xl overflow-hidden z-30 transition-transform duration-300 hover:scale-105 hover:rotate-2">
            <img src={boy} alt="Pranav" className="w-full h-full object-cover" />
          </div>

          <Card className="relative p-8 md:p-14 border border-zinc-200 dark:border-zinc-800 shadow-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md !overflow-visible rounded-2xl md:rounded-3xl z-20">
            {/* Top Gradient Accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-secondary via-blue-500 to-brand-primary rounded-t-2xl md:rounded-t-3xl"></div>

            {/* Content Layout: Folder Left, Text Right */}
            <div className="flex flex-col md:flex-row items-start gap-10 md:gap-14 mt-6 relative z-20">

              {/* Folder Container - Top Left */}
              <div className="shrink-0 flex flex-col items-center">
                <Folder
                  color="#E67E22"
                  items={[
                    <img key="react" src={reactImg} alt="React" className="w-8 h-8 object-contain hover:scale-125 transition-transform cursor-pointer" title="React" />,
                    <img key="js" src={jsImg} alt="JavaScript" className="w-8 h-8 object-contain hover:scale-125 transition-transform cursor-pointer" title="JavaScript" />,
                    <img key="python" src={pythonImg} alt="Python" className="w-8 h-8 object-contain hover:scale-125 transition-transform cursor-pointer" title="Python" />,
                    <img key="django" src={djangoImg} alt="Django" className="w-8 h-8 object-contain hover:scale-125 transition-transform cursor-pointer" title="Django" />,
                    <img key="fastapi" src={fastapiImg} alt="FastAPI" className="w-8 h-8 object-contain hover:scale-125 transition-transform cursor-pointer" title="FastAPI" />,
                    <img key="postgres" src={postgresqlImg} alt="PostgreSQL" className="w-8 h-8 object-contain hover:scale-125 transition-transform cursor-pointer" title="PostgreSQL" />
                  ]}
                />
              </div>

              {/* Text Content - Right */}
              <div className="flex flex-col justify-center space-y-6 flex-grow">

                {/* Engaging Status Badge */}
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold w-fit border border-blue-100 dark:border-blue-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span>Available for new projects</span>
                </div>

                <p className="text-xl md:text-3xl text-slate-700 dark:text-zinc-200 font-medium leading-relaxed max-w-2xl">
                  Creating secure, scalable <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">Python</strong> & <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">React</strong> Web Applications.
                  <br className="hidden md:block" /> Let's build something <span className="italic text-brand-primary">great</span>.
                </p>

              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}

export default About;