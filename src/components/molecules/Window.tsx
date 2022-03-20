import { useIsPresent } from "framer-motion";
import { ReactNode, useContext } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { fadeZoomIn } from "../../animations/fade";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Box, MotionBox } from "../atoms/Container";
import WindowBody from "../atoms/window/Body";
import WindowTitle from "../atoms/window/Title";

type WindowProps = {
  title?: ReactNode;
  children?: ReactNode;
};

export default function Window({ title, children }: WindowProps) {
  const { enableAnimation } = useContext(GlobalContext);
  const isPresent = useIsPresent();

  const style: ThemeUICSSObject = {
    maxWidth: 900,
    minWidth: 900,
    minHeight: "95%",
    display: "flex",
    flexDirection: "column",
  };

  const Container = enableAnimation?.val ? MotionBox : Box;

  return (
    <Container sx={style} variants={fadeZoomIn} animate="animate" initial="initial" exit="initial">
      <WindowTitle>{isPresent && title}</WindowTitle>
      <WindowBody>{isPresent && children}</WindowBody>
    </Container>
  );
}
