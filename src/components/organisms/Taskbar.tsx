import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useContext, useRef, useState } from "react";
import { ThemeUICSSObject } from "theme-ui";
import useOnClickOutside from "use-onclickoutside";
import { getRoute } from "../../../pages/_routes";
import { fadeInUp } from "../../animations/fade";
import { GlobalContext } from "../../contexts/GlobalContext";
import { taskbarHeight } from "../../themes";
import { MotionSection, Section } from "../atoms/Container";
import ButtonConfig from "../molecules/ButtonConfig";
import PanelConfig from "../molecules/PanelConfig";
import TaskbarItem from "../molecules/TaskbarItem";

export default function Taskbar() {
  const [isConfigActive, setIsConfigActive] = useState(false);
  const { enableAnimation } = useContext(GlobalContext);
  const panelRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLElement>(null);
  const route = getRoute(useRouter().asPath);
  useOnClickOutside(panelRef, (event) => {
    const isConfigButton = buttonRef.current?.contains(event.target as Node);
    if (!isConfigButton) setIsConfigActive(false);
  });

  const taskbarStyle: ThemeUICSSObject = {
    background: "primary",
    color: "white",
    bottom: 0,
    width: "100%",
    height: taskbarHeight + "px",
    display: "flex",
    alignItems: "center",
    position: "fixed",
    px: 3,
  };

  const Container = enableAnimation?.val ? MotionSection : Section;

  return (
    <Container sx={taskbarStyle} variants={fadeInUp} animate="animate" initial="initial">
      <PanelConfig isVisible={isConfigActive} ref={panelRef} />
      <ButtonConfig isActive={isConfigActive} ref={buttonRef} onClick={() => setIsConfigActive(!isConfigActive)} />
      <AnimatePresence exitBeforeEnter>{route && <TaskbarItem key={route.title} data={route} />}</AnimatePresence>
      <div sx={{ ml: "auto" }}>Copyright &copy; 2020 KhangND</div>
    </Container>
  );
}
