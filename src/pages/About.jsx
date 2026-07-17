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

function About() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center pt-24 pb-20 md:pt-32 md:pb-32 bg-brand-bg-light dark:bg-brand-bg-dark transition-colors duration-300">
      {/* Consistent Animated Background Blobs */}
      <div className="absolute top-[-8%] left-[-8%] w-64 h-64 bg-amber-200/50 dark:bg-amber-900/20 rounded-full blur-[90px] z-0 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-[10%] right-[-6%] w-72 h-72 bg-brand-secondary/50 dark:bg-brand-primary/20 rounded-full blur-[90px] z-0 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10 flex flex-col w-full">

        {/* The Journey Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24 md:mb-32 relative">

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
                <span className="relative">Full Stack Engineer</span>
                <p className="text-white/80 text-sm font-medium flex items-center gap-2">
                  <MapPin size={14} />
                  Maharashtra, IN
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 order-2 flex flex-col gap-8"
          >
            <Card className="p-8 md:p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-500">

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-slate-900 dark:text-white font-bold text-2xl tracking-tight">
                    The Journey
                  </h3>
                </div>
                <div className="space-y-6 text-slate-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed md:leading-loose">
                  <p>
                    My software engineering journey began during my graduation with C where I learned the fundamentals of programming. Later, Java strengthened my understanding of object-oriented programming (OOP) and problem-solving. Although programming was challenging at first, consistent practice, guidance from my professors, and self-learning helped me build a strong foundation.
                  </p>
                  <p>
                    Discovering <strong className="text-slate-900 dark:text-white font-semibold">JavaScript and Python</strong> inspired me to build real-world applications instead of just writing code. Through personal projects and my internship, I gained hands-on experience developing production-ready software. Today, I'm focused on building scalable, AI-powered web applications while continuously growing as a software engineer.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>


    </main>
  );
}

export default About;