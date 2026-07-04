import React from 'react';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

function Contact() {
  return (
    <section className="py-24 md:py-32 relative bg-brand-bg-light dark:bg-brand-bg-dark overflow-hidden min-h-[80vh] flex items-center transition-colors duration-300">
      
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-secondary/40 dark:bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>

      <div className="container mx-auto max-w-4xl px-6 relative z-10">
        
        <SectionHeading 
          title="Let's Connect" 
          subtitle="Get In Touch" 
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-10 md:p-20 text-center relative overflow-hidden bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
            
            <div className="w-16 h-16 bg-brand-primary/10 dark:bg-brand-secondary/10 text-brand-primary dark:text-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
              <MessageSquare size={32} />
            </div>

            <p className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              I'm currently looking for new opportunities as a Full Stack Python Developer.
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              
              <Button 
                as="a" 
                href="mailto:pranavkavade9@gmail.com" 
                variant="primary" 
                size="lg"
                icon={Mail}
                className="w-full sm:w-auto"
              >
                Say Hello
              </Button>

              <div className="flex gap-4">
                <Button 
                  as="a" 
                  href="https://github.com/pranavkavade20" 
                  variant="secondary" 
                  className="!px-4 !py-4 rounded-full"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </Button>
                <Button 
                  as="a" 
                  href="https://www.linkedin.com/in/pranavkavade20" 
                  variant="secondary" 
                  className="!px-4 !py-4 rounded-full text-slate-600 dark:text-zinc-400 hover:text-brand-primary dark:hover:text-brand-secondary hover:border-brand-primary/20 dark:hover:border-brand-secondary/30 hover:bg-brand-primary/10 dark:hover:bg-brand-secondary/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </Button>
              </div>

            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;