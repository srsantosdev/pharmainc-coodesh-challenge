import { Variant } from 'framer-motion';

type ObjectVariants = {
  [key: string]: Variant;
};

export const overlayVariants: ObjectVariants = {
  unMounted: { opacity: 0 },
  mounted: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.5,
    },
  },
};

export const contentModalVariants: ObjectVariants = {
  unMounted: { opacity: 0, y: -200 },
  mounted: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      duration: 0.5,
    },
  },
};
