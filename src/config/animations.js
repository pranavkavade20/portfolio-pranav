// Centralized animation variants for a consistent, restrained Material/Meta feel.

export const springConfig = {
  type: 'spring',
  stiffness: 240,
  damping: 26,
  mass: 1,
};

export const slowSpringConfig = {
  type: 'spring',
  stiffness: 160,
  damping: 24,
  mass: 1,
};

export const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.24, ease: [0.2, 0, 0, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.16, ease: [0.3, 0, 1, 1] },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.24, ease: [0.2, 0, 0, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.16, ease: [0.3, 0, 1, 1] },
  },
};

export const fadeUpLarge = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.2, 0, 0, 1] },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const revealText = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.26, ease: [0.2, 0, 0, 1] },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.22, ease: [0.2, 0, 0, 1] },
  },
};
