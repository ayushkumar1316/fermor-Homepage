export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42 }
  },
};

export const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export const springSnappy = {
  type: 'spring',
  stiffness: 320,
  damping: 28,
};
