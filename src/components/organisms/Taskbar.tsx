import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useContext, useRef, useState } from "react";
import { useClickAway, useKey } from "react-use";
import { ThemeUICSSObject } from "theme-ui";
import { fadeInUp } from "../../animations/fade";
import { GlobalContext } from "../../contexts/GlobalContext";
import useMatchTheme from "../../hooks/useMatchTheme";
import useTaskbarHeight from "../../hooks/useTaskbarHeight";
import { getRoute } from "../../misc/routes";
import { ThemeMode } from "../../themes";
import { zIndex } from "../../themes/common";
import { MotionBox, MotionSection } from "../atoms/Container";
import ButtonConfig from "../molecules/ButtonConfig";
import PanelConfig from "../molecules/PanelConfig";
import TaskbarItem from "../molecules/TaskbarItem";

export default function Taskbar() {
  const { hideTaskbar } = useContext(GlobalContext);
  const [isConfigActive, setIsConfigActive] = useState(false);
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
    position: "absolute",
    px: 3,
    zIndex: zIndex.taskbar,

    ...(useMatchTheme(ThemeMode.Soft) && {
      boxShadow: "inset 4px 4px 4px #fff",
    }),

    ...(useMatchTheme(ThemeMode.Classic) && {
      boxShadow: "inset 0 3px #000",
    }),

    ...(useMatchTheme(ThemeMode.Tron) && {
      boxShadow: (theme) => `inset 0 2px ${theme.colors?.shadow}`,
    }),
  };

  const configStyle: ThemeUICSSObject = {
    bg: "primary",
    position: "absolute",
    left: 2,
    bottom: 2,
    p: 2,
    borderRadius: "50%",

    ...(useMatchTheme(ThemeMode.Soft) && {
      boxShadow: (theme) => `inset 2px 2px 6px #fff, 2px 2px 4px ${theme.colors?.highlight}`,
    }),

    ...(useMatchTheme(ThemeMode.Classic) && {
      boxShadow: "inset 0 0 0 2px #000",
    }),

    ...(useMatchTheme(ThemeMode.Tron) && {
      boxShadow: (theme) => `inset 0 0 0 2px ${theme.colors?.shadow}`,
    }),
  };

  const _ButtonConfig = (
    <ButtonConfig isActive={isConfigActive} ref={buttonRef} onClick={() => setIsConfigActive(!isConfigActive)} />
  );

  return (
    <>
      <AnimatePresence>
        {hideTaskbar.val ? (
          <MotionBox key="config" sx={configStyle} {...fadeInUp}>
            {_ButtonConfig}
          </MotionBox>
        ) : (
          <MotionSection key="taskbar" sx={taskbarStyle} {...fadeInUp}>
            {_ButtonConfig}
            <AnimatePresence exitBeforeEnter>{route && <TaskbarItem key={route.title} data={route} />}</AnimatePresence>
            <div sx={{ ml: "auto", color: "mutedReverse" }}>Crafted with ❤ in 2022</div>
          </MotionSection>
        )}
      </AnimatePresence>
      <PanelConfig isVisible={isConfigActive} ref={panelRef} />
    </>
  );
}
