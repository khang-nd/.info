import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: "100%",
    transition: { duration: 0.6 },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeZoomIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.4 },
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export const fadeZoomOut: Variants = {
  initial: fadeZoomIn.animate,
  animate: fadeZoomIn.initial,
};
