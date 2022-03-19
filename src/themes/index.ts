import type { Theme } from "theme-ui";

export const sizes: number[] = [0, 4, 8, 12, 16, 24, 32, 40, 64, 96, 128, 256, 512];

const theme: Theme = {
  colors: {
    background: "#1abc9c",
    highlight: "#1abc9c",
    primary: "#2c3e50",
    text: "#2c3e50",
    secondary: "#1abc9c",
    accent: "#e9f1f5",
    white: "#fff",
    red: "#ed4c5a",
  },
  breakpoints: ["600px", "1024px"],
  sizes,
  space: sizes,
};

export default theme;

export const taskbarHeight = sizes[8];
