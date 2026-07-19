import React, { useRef } from 'react';
import { MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp, scaleIn, staggerContainer } from '../config/animations';
import TextReveal from '../components/ui/TextReveal';

import profileImg from '../assets/profile.jpg';

function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yPos = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <main ref={containerRef} className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center section-padding bg-brand-bg-light dark:bg-brand-bg-dark transition-colors duration-300">
      <div className="content-container relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column: Profile */}
          <motion.div variants={scaleIn} className="lg:col-span-5 relative flex justify-center order-1 lg:order-1 mt-8 lg:mt-0">
            <motion.div 
              style={{ y: yPos }}
              className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-premium-light)] dark:shadow-[var(--shadow-premium-dark)] border border-black/5 dark:border-white/10 group"
            >
              <img src={profileImg} alt="Pranav Kavade" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-80" />
              
              <div className="absolute bottom-6 left-6 text-white pointer-events-none transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="font-semibold text-2xl tracking-tight mb-1 drop-shadow-md">Pranav Kavade</h3>
                <p className="text-white/90 text-sm font-medium flex items-center gap-1.5 drop-shadow-sm">
                  <MapPin size={14} />
                  Maharashtra, IN
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 order-2 flex flex-col gap-8 justify-center">
            <div className="relative z-10">
              <div className="mb-8 text-section-title text-slate-900 dark:text-zinc-100 font-bold tracking-tight">
                <TextReveal text="Engineer." delay={0.1} /> <br />
                <TextReveal text="Designer." delay={0.2} /> <br />
                <TextReveal text="Problem Solver." delay={0.3} />
              </div>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-6 text-body"
              >
                <motion.p variants={fadeUp}>
                  My software engineering journey began with C, establishing the fundamentals. I later adopted Java to strengthen my understanding of object-oriented architecture and robust problem-solving.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Transitioning to <strong className="text-slate-900 dark:text-zinc-100 font-medium">JavaScript and Python</strong> unlocked the ability to build real-world applications. Through personal projects and internships, I developed a product-centric mindset, focusing on both engineering quality and user experience. 
                </motion.p>
                <motion.p variants={fadeUp}>
                  Today, I'm focused on building scalable, AI-powered web applications that feel fast, look exceptional, and solve real problems.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default About;