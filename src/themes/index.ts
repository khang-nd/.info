import type { Theme } from "theme-ui";

export const sizes: number[] = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 256, 512];

export const breakpoints = ["480px", "768px", "1024px"];

const theme: Theme = {
  colors: {
    background: "#1abc9c",
    highlight: "#1abc9c",
    primary: "#2c3e50",
    secondary: "#1abc9c",
    text: "#2c3e50",
    textReverse: "#fff",
    accent: "#e9f1f5",
    muted: "rgba(0, 0, 0, 0.7)",
    mutedReverse: "rgba(255, 255, 255, 0.7)",
    white: "#fff",
    red: "#ed4c5a",
  },
  breakpoints,
  sizes,
  space: sizes,
};

export default theme;
