import { useIsPresent } from "framer-motion";
import { ReactNode, useContext, useRef } from "react";
import { useFullscreen, useToggle } from "react-use";
import { ThemeUICSSObject } from "theme-ui";
import { fadeZoomIn } from "../../animations/fade";
import { GlobalContext } from "../../contexts/GlobalContext";
import useMatchTheme from "../../hooks/useMatchTheme";
import { sizes, ThemeMode } from "../../themes";
import { zIndex } from "../../themes/common";
import { Box, MotionBox } from "../atoms/Container";
import WindowBody from "../atoms/window/Body";
import WindowTitle from "../atoms/window/Title";

type WindowProps = {
  title?: ReactNode;
  children?: ReactNode;
  help?: string;
};

export default function Window({ title, children, help }: WindowProps) {
  const { reduceMotion } = useContext(GlobalContext);
  const [fullscreen, toggleFullscreen] = useToggle(false);
  const ref = useRef(null);
  const isPresent = useIsPresent();
  useFullscreen(ref, fullscreen);
  const w = ["100%", null, null, 900];
  const h = ["100%", null, null, `calc(100% - ${sizes[2] * 2}px)`];

  const Container = reduceMotion.val ? Box : MotionBox;

  const style: ThemeUICSSObject = {
    maxWidth: w,
    minWidth: w,
    maxHeight: h,
    minHeight: ["100%", null, "initial"],
    display: "flex",
    flexDirection: "column",
    zIndex: zIndex.window,
    overflow: "hidden",

    ...(useMatchTheme(ThemeMode.Soft) && {
      bg: "primary",
      borderRadius: 20,
      boxShadow: (theme) => `0 -1px 1px #fff, 4px 4px 6px 4px ${theme.colors?.shadow}`,
    }),

    ...(useMatchTheme(ThemeMode.Classic) && {
      bg: "background",
      borderRadius: 20,
      boxShadow: "0 0 0 3px #000, 6px 4px 0 2px #000",
    }),

    ...(useMatchTheme(ThemeMode.Tron) && {
      boxShadow: (theme) => `0 0 0 2px ${theme.colors?.shadow}`,
    }),
  };

  return (
    <Container ref={ref} sx={style} {...fadeZoomIn}>
      <WindowTitle onFullscreen={toggleFullscreen} help={help}>
        {isPresent && title}
      </WindowTitle>
      <WindowBody>{children}</WindowBody>
    </Container>
  );
}
