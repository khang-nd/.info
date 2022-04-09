import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useClickAway, useKey } from "react-use";
import { ThemeUICSSObject } from "theme-ui";
import { fadeInUp } from "../../animations/fade";
import useInBreakpoint from "../../hooks/useInBreakpoint";
import useTaskbarHeight from "../../hooks/useTaskbarHeight";
import { getRoute } from "../../misc/routes";
import { zIndex } from "../../themes/common";
import { MotionSection } from "../atoms/Container";
import ButtonConfig from "../molecules/ButtonConfig";
import PanelConfig from "../molecules/PanelConfig";
import TaskbarItem from "../molecules/TaskbarItem";

export default function Taskbar() {
  const [isConfigActive, setIsConfigActive] = useState(false);
  const isMobile = useInBreakpoint(0);
  const taskbarHeight = useTaskbarHeight();
  const panelRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLElement>(null);
  const route = getRoute(useRouter().asPath);

  useClickAway(panelRef, (event) => {
    const isConfigButton = buttonRef.current?.contains(event.target as Node);
    if (!isConfigButton) setIsConfigActive(false);
  });

  useKey("Escape", () => setIsConfigActive(false));

  const taskbarStyle: ThemeUICSSObject = {
    background: "primary",
    boxSizing: "border-box",
    color: "textReverse",
    bottom: 0,
    width: "100%",
    height: taskbarHeight + "px",
    display: "flex",
    alignItems: "center",
    position: "fixed",
    px: 3,
    zIndex: zIndex.taskbar,
  };

  const copyrightStyle: ThemeUICSSObject = {
    ml: "auto",
    color: "mutedReverse",
    whiteSpace: "nowrap",
  };

  return (
    <MotionSection sx={taskbarStyle} {...fadeInUp}>
      <ButtonConfig isActive={isConfigActive} ref={buttonRef} onClick={() => setIsConfigActive(!isConfigActive)} />
      <PanelConfig isVisible={isConfigActive} ref={panelRef} />
      <AnimatePresence exitBeforeEnter>{route && <TaskbarItem key={route.title} data={route} />}</AnimatePresence>
      <div sx={copyrightStyle}>{!isMobile && <>Copyright </>}&copy; 2020 KhangND</div>
    </MotionSection>
  );
}
