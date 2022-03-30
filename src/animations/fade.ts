import { Variants } from "framer-motion";

export const fade: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: "100%",
    transition: { duration: 0.6 },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, when: "beforeChildren", delayChildren: 1 },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: { duration: 0.6 },
  },
};

export const fadeZoomIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    transition: { type: "tween" },
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { type: "tween" },
  },
};
