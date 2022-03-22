import { Variant, Variants } from "framer-motion";

export type Direction = "up" | "down" | "left" | "right";

const slideInInitial: Variant = (dir: Direction) => ({
  x: dir === "left" ? "100%" : dir === "right" ? "-100%" : 0,
  y: dir === "up" ? "100%" : dir === "down" ? "-100%" : 0,
  transition: { type: "tween" },
});

export const slideIn: Variants = {
  initial: slideInInitial,
  animate: {
    x: 0,
    y: 0,
    transition: { type: "tween" },
  },
  exit: slideInInitial,
};
