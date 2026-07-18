import React from 'react';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

function Contact() {
  return (
    <section className="section-padding relative bg-brand-bg-light dark:bg-brand-bg-dark overflow-hidden min-h-[80vh] flex items-center transition-colors duration-300">
      


      <div className="content-container relative z-10">
        
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

            <p className="text-body text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12 font-medium">
              I'm currently looking for new opportunities as a Full Stack Python Engineer.
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