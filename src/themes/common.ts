import { ThemeUICSSObject } from "theme-ui";

export const zIndex = {
  desktop: 0,
  taskbar: 1,
  window: 2,
  focusbox: 10,
};

export const focus: ThemeUICSSObject = {
  boxShadow: "0 0 0 1px black, 0 0 1px 3px white",
  pointerEvents: "none",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: zIndex.focusbox,
};
