import { useIsPresent } from "framer-motion";
import { ReactNode, useContext } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { fadeZoomIn } from "../../animations/fade";
import { GlobalContext } from "../../contexts/GlobalContext";
import useInBreakpoint from "../../hooks/useInBreakpoint";
import { sizes } from "../../themes";
import { MotionBox } from "../atoms/Container";
import WindowBody from "../atoms/window/Body";
import WindowTitle from "../atoms/window/Title";

type WindowProps = {
  title?: ReactNode;
  children?: ReactNode;
};

export default function Window({ title, children }: WindowProps) {
  const { enableAnimation } = useContext(GlobalContext);
  const isPresent = useIsPresent();
  const isMobile = useInBreakpoint(0);

  const style: ThemeUICSSObject = {
    maxWidth: !isMobile && 900,
    maxHeight: isMobile ? "100%" : `calc(100% - ${sizes[2] * 2}px)`,
    display: "flex",
    flexDirection: "column",
  };

  return (
    <MotionBox
      sx={style}
      variants={fadeZoomIn}
      animate={enableAnimation.val && "animate"}
      initial={enableAnimation.val ? "initial" : "animate"}
      exit={enableAnimation.val ? "initial" : undefined}
    >
      <WindowTitle>{isPresent && title}</WindowTitle>
      <WindowBody>{isPresent && children}</WindowBody>
    </MotionBox>
  );
}
