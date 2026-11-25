import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  Send,
  ArrowUpRight,
  MapPin,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, pageVariants } from '../config/animations';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import PageNav from '../components/layout/PageNav';
import { useSnackbar } from '../components/ui/Snackbar';

const EMAIL = 'pranavkavade9@gmail.com';

const QUICK_TOPICS = [
  'Full-time role inquiry',
  'Project collaboration',
  'Technical discussion',
];

function Contact() {
  const [copied, setCopied] = useState(false);
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
      className="py-6 tablet:py-8"
      aria-label="Contact Information"
    >
      <div className="feed-container">
        <SectionHeading
          title="Let's Connect"
          subtitle="Get in touch"
          description="Open to full-stack engineering roles, freelance collaborations, and technical discussions."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 expanded:grid-cols-12 gap-6 items-start"
        >
          {/* Left Column: Direct Reach & Profiles */}
          <div className="expanded:col-span-5 bg-surface border border-outline-variant rounded-lg p-5 tablet:p-6 shadow-elevation-1 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-on-success-container bg-success-container px-2.5 py-1 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-success shrink-0" aria-hidden="true" />
                <span>Available for opportunities</span>
              </div>

              <h2 className="text-lg font-semibold tracking-tight text-on-surface">
                Direct email
              </h2>
              <p className="text-sm font-mono text-on-surface mt-1 select-all break-all">
                {EMAIL}
              </p>

              <div className="flex flex-wrap items-center gap-2.5 mt-4">
                <Button
                  as="a"
                  href={`mailto:${EMAIL}`}
                  variant="primary"
                  size="md"
                  icon={Mail}
                  className="flex-1 tablet:flex-none"
                  aria-label={`Send email to ${EMAIL}`}
                >
                  Send Email
                </Button>

                <Button
                  variant="outlined"
                  size="md"
                  icon={copied ? Check : Copy}
                  onClick={handleCopyEmail}
                  className="min-w-[116px]"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? 'Copied' : 'Copy'}
                </Button>
              </div>
            </div>

            <div className="pt-5 border-t border-outline-variant flex flex-col gap-1">
              <p className="text-xs font-mono text-on-surface-variant pb-1">
                Online profiles
              </p>

              <a
                href="https://github.com/pranavkavade20"
                target="_blank"
                rel="noopener noreferrer"
                className="state-layer flex items-center justify-between gap-2 px-3 min-h-[48px] -mx-3 rounded-md text-on-surface hover:bg-surface-variant/70 transition-colors"
              >
                <span className="flex items-center gap-3 min-w-0">
                  <Github size={17} className="text-on-surface-variant shrink-0" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-sm font-medium leading-tight">GitHub</span>
                    <span className="block text-xs text-on-surface-variant font-mono truncate">@pranavkavade20</span>
                  </span>
                </span>
                <ArrowUpRight size={15} className="text-on-surface-variant shrink-0" aria-hidden="true" />
              </a>

              <a
                href="https://www.linkedin.com/in/pranavkavade20"
                target="_blank"
                rel="noopener noreferrer"
                className="state-layer flex items-center justify-between gap-2 px-3 min-h-[48px] -mx-3 rounded-md text-on-surface hover:bg-surface-variant/70 transition-colors"
              >
                <span className="flex items-center gap-3 min-w-0">
                  <Linkedin size={17} className="text-on-surface-variant shrink-0" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-sm font-medium leading-tight">LinkedIn</span>
                    <span className="block text-xs text-on-surface-variant font-mono truncate">in/pranavkavade20</span>
                  </span>
                </span>
                <ArrowUpRight size={15} className="text-on-surface-variant shrink-0" aria-hidden="true" />
              </a>

              <div className="flex items-center gap-3 px-3 min-h-[44px] -mx-3 text-on-surface-variant">
                <MapPin size={16} className="shrink-0" aria-hidden="true" />
                <span className="text-xs font-mono">Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Note Composer (visible and ready) */}
          <div className="expanded:col-span-7 bg-surface border border-outline-variant rounded-lg p-5 tablet:p-6 shadow-elevation-1">
            <div className="mb-4">
              <h2 className="text-lg font-semibold tracking-tight text-on-surface">
                Prepare a note
              </h2>
              <p className="text-sm text-on-surface-variant mt-0.5">
                Draft your message here and launch your email client pre-filled.
              </p>
            </div>

            {/* Quick Subject Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="text-xs font-mono text-on-surface-variant mr-1">
                Topic:
              </span>
              {QUICK_TOPICS.map((topic) => {
                const selected = subject === topic;
                return (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSubject(selected ? '' : topic)}
                    aria-pressed={selected}
                    className={`px-3 min-h-[34px] rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                      selected
                        ? 'bg-primary-container text-on-primary-container border-primary/40 font-semibold'
                        : 'bg-surface-variant/70 text-on-surface-variant border-outline-variant hover:text-on-surface hover:border-outline'
                    }`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>

            <form onSubmit={handleDraftSubmit} className="flex flex-col gap-4" noValidate>
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
                rows={4}
                placeholder="Write a brief note..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (messageError && e.target.value.trim()) setMessageError('');
                }}
                error={messageError}
                required
              />
              <div className="flex justify-end pt-1">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={Send}
                  disabled={!message.trim()}
                  className="w-full tablet:w-auto"
                >
                  Open Email Draft
                </Button>
              </div>
            </form>
          </div>
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
