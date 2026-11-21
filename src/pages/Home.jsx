import React, { useRef } from 'react';
import { MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp, scaleIn, staggerContainer } from '../config/animations';
import TextReveal from '../components/ui/TextReveal';
import PageNav from '../components/layout/PageNav';
import profileImg from '../assets/profile.jpg';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.2, 0, 0, 1] }
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.2, ease: [0.3, 0, 1, 1] }
  }
};

function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yPos = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.main
      ref={containerRef}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-[calc(100vh-4rem)] relative overflow-hidden flex flex-col justify-center pt-24 md:pt-28 pb-16 md:pb-20 transition-colors"
    >
      <div className="content-container relative z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          {/* Profile Card Column */}
          <motion.div
            variants={scaleIn}
            className="lg:col-span-5 relative flex justify-center order-1 mt-4 lg:mt-0"
          >
            <motion.div
              style={{ y: yPos }}
              className="relative w-full max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden bg-surface border border-outline-variant shadow-elevation-2 group"
            >
              <img
                src={profileImg}
                alt="Pranav Kavade - Full Stack Engineer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                <h3 className="font-bold text-xl sm:text-2xl tracking-tight mb-1 drop-shadow-md">
                  Pranav Kavade
                </h3>
                <p className="text-white/90 text-xs sm:text-sm font-medium flex items-center gap-1.5 drop-shadow-sm">
                  <MapPin size={14} className="text-primary" />
                  Maharashtra, IN
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Bio & Value Proposition Column */}
          <div className="lg:col-span-7 order-2 flex flex-col gap-6 justify-center text-left">
            <div>
              <div className="mb-6 text-hero text-on-surface font-extrabold tracking-tight">
                <TextReveal text="Engineer." delay={0.05} /> <br />
                <span className="text-primary">
                  <TextReveal text="Designer." delay={0.15} />
                </span> <br />
                <TextReveal text="Problem Solver." delay={0.25} />
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="space-y-4 text-on-surface-variant text-base sm:text-lg leading-relaxed"
              >
                <motion.p variants={fadeUp}>
                  My engineering journey began with C and Java, cultivating a disciplined foundation in algorithms, systems thinking, and object-oriented architecture.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Transitioning to <strong className="text-on-surface font-semibold">Python, and JavaScript </strong> ecosystem enabled me to engineer production web applications. I bridge robust backend APIs with polished, responsive interfaces.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Today, I focus on building resilient, scalable, and delightful software products that solve real-world problems for users and businesses.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <PageNav next={{ name: 'Experience', path: '/experience' }} />
      </div>
    </motion.main>
  );
}

export default Home;
