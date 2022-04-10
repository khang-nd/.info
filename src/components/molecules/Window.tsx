import { useIsPresent } from "framer-motion";
import { ReactNode, useContext, useRef } from "react";
import { useFullscreen, useToggle } from "react-use";
import { ThemeUICSSObject } from "theme-ui";
import { fadeZoomIn } from "../../animations/fade";
import { GlobalContext } from "../../contexts/GlobalContext";
import { sizes } from "../../themes";
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
