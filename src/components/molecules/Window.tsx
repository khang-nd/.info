import { useIsPresent } from "framer-motion";
import { ReactNode, useContext } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { fadeZoomIn } from "../../animations/fade";
import { GlobalContext } from "../../contexts/GlobalContext";
import { sizes } from "../../themes";
import { zIndex } from "../../themes/common";
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
  const w = ["100%", null, null, 900];
  const h = ["100%", null, null, `calc(100% - ${sizes[2] * 2}px)`];

  const style: ThemeUICSSObject = {
    maxWidth: w,
    minWidth: w,
    maxHeight: h,
    display: "flex",
    flexDirection: "column",
    zIndex: zIndex.window,
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
      <WindowBody>{children}</WindowBody>
    </MotionBox>
  );
}
