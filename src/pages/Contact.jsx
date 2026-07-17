import React from 'react';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

function Contact() {
  return (
    <section className="py-24 md:py-32 relative bg-brand-bg-light dark:bg-brand-bg-dark overflow-hidden min-h-[80vh] flex items-center transition-colors duration-300">
      
      {/* Consistent Animated Background Blobs */}
      <div className="absolute top-[-8%] left-[-8%] w-64 h-64 bg-amber-200/50 dark:bg-amber-900/20 rounded-full blur-[90px] z-0 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-[10%] right-[-6%] w-72 h-72 bg-brand-secondary/50 dark:bg-brand-primary/20 rounded-full blur-[90px] z-0 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>

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
          <Card className="p-10 md:p-20 text-center relative overflow-hidden bg-brand-primary/5 dark:bg-brand-primary/10 backdrop-blur-md">
            
            <div className="w-16 h-16 bg-brand-primary/10 dark:bg-brand-secondary/10 text-brand-primary dark:text-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
              <MessageSquare size={32} />
            </div>

            <p className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              I'm currently looking for new opportunities as a Full Stack Python Developer.
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center">
              
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

            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;