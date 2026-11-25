import React, { useState } from 'react';
import { Mail, MessageSquare, Copy, Check, Github, Linkedin, Send, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, pageVariants } from '../config/animations';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Chip from '../components/ui/Chip';
import Input from '../components/ui/Input';
import PageNav from '../components/layout/PageNav';
import { useSnackbar } from '../components/ui/Snackbar';

const EMAIL = 'pranavkavade9@gmail.com';

function Contact() {
  const [copied, setCopied] = useState(false);
  const [composerOpen, setComposerOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState('');
  const { showSnackbar } = useSnackbar();

  const handleCopyEmail = async () => {
    setCopied(true);
    try {
      await navigator.clipboard.writeText(EMAIL);
      showSnackbar({
        message: `Email copied: ${EMAIL}`,
        type: 'success',
        duration: 4000,
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
      showSnackbar({
        message: 'Could not copy automatically. Try again or use Email.',
        type: 'error',
        actionLabel: 'Retry',
        onAction: handleCopyEmail,
        duration: 5000,
      });
    }
  };

  const handleDraftSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setMessageError('Please enter a short message before opening your email draft.');
      return;
    }
    setMessageError('');

    const previousSubject = subject;
    const previousMessage = message;
    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject.trim() || 'Hello from your Portfolio'
    )}&body=${encodeURIComponent(message.trim())}`;

    window.location.href = mailtoUrl;

    setSubject('');
    setMessage('');
    showSnackbar({
      message: 'Opened email draft with your message.',
      type: 'success',
      actionLabel: 'Undo',
      onAction: () => {
        setComposerOpen(true);
        setSubject(previousSubject);
        setMessage(previousMessage);
      },
    });
  };

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="py-6"
      aria-label="Contact Information"
    >
      <div className="feed-container flex flex-col gap-5">
        <SectionHeading
          title="Let's Connect"
          subtitle="Get In Touch"
          description="Open to full-stack engineering roles, freelance collaborations, and technical discussions."
        />

        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <Card className="p-6 tablet:p-8 text-center">
            <div className="w-14 h-14 bg-primary-container text-primary rounded-lg flex items-center justify-center mx-auto mb-5" aria-hidden="true">
              <MessageSquare size={26} />
            </div>

            <h2 className="text-xl tablet:text-2xl font-semibold tracking-tight text-on-surface mb-2">
              Start a Conversation
            </h2>

            <p className="text-base text-on-surface-variant max-w-2xl mx-auto mb-6 leading-relaxed">
              Reach out directly via email at{' '}
              <span className="font-semibold text-on-surface">{EMAIL}</span> or connect on social platforms.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col tablet:flex-row justify-center items-center gap-3 mb-6">
              <Button
                as="a"
                href={`mailto:${EMAIL}`}
                variant="primary"
                size="lg"
                icon={Mail}
                className="w-full tablet:w-auto"
                aria-label={`Send email to ${EMAIL}`}
              >
                Say Hello (Email)
              </Button>

              <Button
                variant="tonal"
                size="lg"
                icon={copied ? Check : Copy}
                onClick={handleCopyEmail}
                className="w-full tablet:w-auto min-w-[160px]"
                aria-label="Copy email address to clipboard"
              >
                {copied ? 'Copied!' : 'Copy Email'}
              </Button>
            </div>

            {/* Social Network Chips */}
            <div className="pt-5 border-t border-outline-variant flex flex-wrap items-center justify-center gap-3">
              <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
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

        {/* Meta-style Quick Note Composer */}
        <Card className="p-4 tablet:p-6">
          <button
            type="button"
            onClick={() => setComposerOpen((prev) => !prev)}
            aria-expanded={composerOpen}
            className="w-full min-h-[48px] flex items-center justify-between gap-3 text-left rounded-md px-2 state-layer cursor-pointer"
          >
            <span className="text-sm font-medium text-on-surface-variant">
              {composerOpen ? 'Hide quick note composer' : 'Want to prepare a quick note before emailing?'}
            </span>
            <ChevronDown
              size={18}
              className={`text-on-surface-variant shrink-0 transition-transform duration-fast ${
                composerOpen ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>

          {composerOpen && (
            <form onSubmit={handleDraftSubmit} className="mt-4 pt-4 border-t border-outline-variant flex flex-col gap-4" noValidate>
              <Input
                label="Subject"
                placeholder="Project collaboration or role inquiry"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                onClear={() => setSubject('')}
                helperText="Optional subject line for your email client"
              />
              <Input
                label="Message"
                multiline
                rows={3}
                placeholder="Write a brief note..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (messageError && e.target.value.trim()) setMessageError('');
                }}
                error={messageError}
                required
              />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={Send}
                  disabled={!message.trim()}
                >
                  Open Email Draft
                </Button>
              </div>
            </form>
          )}
        </Card>

        <PageNav
          prev={{ name: 'Projects', path: '/projects' }}
          next={{ name: 'Back to Home', path: '/' }}
        />
      </div>
    </motion.section>
  );
}

export default Contact;
