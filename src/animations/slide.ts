import { Variants } from "framer-motion";

export type Direction = "up" | "down" | "left" | "right";

export const slideIn: Variants = {
  initial: (dir: Direction) => ({
    x: dir === "left" ? "100%" : dir === "right" ? "-100%" : 0,
    y: dir === "up" ? "100%" : dir === "down" ? "-100%" : 0,
    transition: { type: "tween" },
  }),
  animate: {
    x: 0,
    y: 0,
    transition: { type: "tween" },
  },
};
