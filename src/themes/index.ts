import type { Theme } from "theme-ui";

export const sizes: number[] = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 256, 512];

export const breakpoints = ["480px", "768px", "1024px"];

export enum ThemeMode {
  Flat = "flat",
  Soft = "soft",
  Classic = "classic",
}

const theme: Theme = {
  colors: {
    background: "#f2f3f5",
    primary: "#2c3e50",
    secondary: "#1abc9c",
    highlight: undefined,
    shadow: undefined,
    text: "#2c3e50",
    textReverse: "#fff",
    muted: "rgba(0, 0, 0, 0.6)",
    mutedReverse: "rgba(255, 255, 255, 0.6)",
    white: "#fff",
    red: "#ed4c5a",
    green: "#00c851",

    modes: {
      soft: {
        background: "#f1f1f8",
        primary: "#e2e3f0",
        secondary: "#d4d7ec",
        highlight: "#93a1d2",
        shadow: "#ccd0e8",
        text: "#232246",
        textReverse: "#232246",
        muted: "rgba(35, 34, 70, 0.8)",
        mutedReverse: "rgba(35, 34, 70, 0.8)",
        white: "#e2e3f0",
        red: "#ed4c5a",
        green: "#00c851",
      },

      classic: {
        background: "#f2f3f5",
        primary: "#2c3e50",
        secondary: "#1abc9c",
        text: "#2c3e50",
        textReverse: "#fff",
        muted: "rgba(0, 0, 0, 0.6)",
        mutedReverse: "rgba(255, 255, 255, 0.6)",
        white: "#fff",
        red: "#ed4c5a",
        green: "#00c851",
      },
    },
  },
  breakpoints,
  sizes,
  space: sizes,
};

export default theme;
