import type { Theme } from "theme-ui";

export const sizes: number[] = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 256, 512];

export const breakpoints = ["480px", "768px", "1024px"];

export enum ThemeMode {
  Flat = "flat",
  Soft = "soft",
  Tron = "tron",
  Classic = "classic",
}

const theme: Theme = {
  colors: {
    background: "#f2f3f5",
    primary: "#2c3e50",
    secondary: "#1abc9c",
    highlight: "#1abc9c",
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
        background: "#f8f3e7",
        primary: "#f3ebd9",
        secondary: "#d7eae6",
        highlight: "#f9a48c",
        shadow: "#000",
        text: "#000",
        textReverse: "#000",
        muted: "rgba(0, 0, 0, 0.6)",
        mutedReverse: "rgba(0, 0, 0, 0.8)",
        white: "#fff",
        red: "#f8c3c5",
        green: "#cbe7c5",
      },

      tron: {
        background: "#0a1d20",
        primary: "#001d23",
        secondary: "#0a1d20",
        highlight: "#043236",
        shadow: "#288e9f",
        text: "#fff",
        textReverse: "#adeaeb",
        muted: "rgba(255, 255, 255, 0.6)",
        mutedReverse: "rgba(255, 255, 255, 0.6)",
        white: "#fff",
        red: "#166775",
        green: "#0b363d",
      },
    },
  },
  fonts: { heading: "inherit" },
  breakpoints,
  sizes,
  space: sizes,
};

export default theme;
