import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '../config/animations';

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
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="p-10 md:p-20 text-center relative overflow-hidden bg-black/[0.02] dark:bg-white/[0.02]">
            
            <div className="w-16 h-16 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm border border-black/[0.05] dark:border-white/[0.05]">
              <MessageSquare size={32} />
            </div>

            <p className="text-body max-w-2xl mx-auto mb-12 font-medium">
              I'm currently looking for new opportunities as a Full Stack Python Engineer.
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            <div className="flex justify-center items-center">
              <Button 
                as="a" 
                href="mailto:pranavkavade9@gmail.com" 
                variant="primary" 
                size="lg"
                icon={Mail}
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