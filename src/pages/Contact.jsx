import React, { useState } from 'react';
import { Mail, MessageSquare, Copy, Check, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '../config/animations';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Chip from '../components/ui/Chip';
import PageNav from '../components/layout/PageNav';
import { useSnackbar } from '../components/ui/Snackbar';

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

function Contact() {
  const [copied, setCopied] = useState(false);
  const { showSnackbar } = useSnackbar();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pranavkavade9@gmail.com');
    setCopied(true);
    showSnackbar({
      message: 'Email copied to clipboard: pranavkavade9@gmail.com',
      type: 'success',
      duration: 3500
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-[calc(100vh-4rem)] relative overflow-hidden flex flex-col justify-center pt-24 md:pt-28 pb-16 md:pb-20 transition-colors"
    >
      <div className="content-container relative z-10 w-full max-w-2xl mx-auto">
        <SectionHeading 
          title="Let's Connect" 
          subtitle="Get In Touch" 
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          {/* Main Contact Card */}
          <Card className="p-8 sm:p-12 text-center border-outline-variant bg-surface shadow-elevation-1">
            <div className="w-14 h-14 bg-primary-container text-on-primary-container rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xs">
              <MessageSquare size={28} className="text-primary" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-on-surface mb-3">
              Start a Conversation
            </h3>

            <p className="text-sm sm:text-base text-on-surface-variant max-w-lg mx-auto mb-8 leading-relaxed">
              I am open to full-stack engineering roles, freelance collaborations, and technical discussions. Drop me a note!
            </p>

            {/* Quick Actions Bar */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5 mb-8">
              <Button 
                as="a" 
                href="mailto:pranavkavade9@gmail.com" 
                variant="primary" 
                size="lg"
                icon={Mail}
                className="w-full sm:w-auto"
                aria-label="Send direct email to pranavkavade9@gmail.com"
              >
                Say Hello (Email)
              </Button>
              
              <Button 
                variant="tonal" 
                size="lg"
                icon={copied ? Check : Copy}
                onClick={handleCopyEmail}
                className="w-full sm:w-auto min-w-[160px]"
                aria-label="Copy email address to clipboard"
              >
                {copied ? 'Copied!' : 'Copy Email'}
              </Button>
            </div>

            {/* Social Network Chips */}
            <div className="pt-6 border-t border-outline-variant/60 flex flex-wrap items-center justify-center gap-3">
              <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mr-1">
                Find me online:
              </span>
              <Chip
                as="a"
                href="https://github.com/pranavkavade20"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                icon={Github}
              >
                GitHub
              </Chip>
              <Chip
                as="a"
                href="https://www.linkedin.com/in/pranavkavade20"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                icon={Linkedin}
              >
                LinkedIn
              </Chip>
            </div>
          </Card>
        </motion.div>

        <PageNav
          prev={{ name: 'Projects', path: '/projects' }}
          next={{ name: 'Back to Home', path: '/' }}
        />
      </div>
    </motion.section>
  );
}

export default Contact;
