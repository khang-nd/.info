import { lighten } from "@theme-ui/color";
import { Variants } from "framer-motion";
import { ForwardedRef, forwardRef, useContext } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { GlobalContext } from "../../contexts/GlobalContext";
import useMatchTheme from "../../hooks/useMatchTheme";
import useReduceMotion from "../../hooks/useReduceMotion";
import useTaskbarHeight from "../../hooks/useTaskbarHeight";
import { sizes, ThemeMode } from "../../themes";
import { zIndex } from "../../themes/common";
import { List, MotionBox } from "../atoms/Container";
import ThemeButton from "../atoms/ThemeButton";
import Toggle from "../atoms/Toggle";

type PanelConfigProps = {
  isVisible?: boolean;
};

const PanelConfig = ({ isVisible }: PanelConfigProps, ref: ForwardedRef<HTMLElement>) => {
  const { reduceMotion, hideTaskbar } = useContext(GlobalContext);

  const panelConfigStyle: ThemeUICSSObject = {
    p: 4,
    bg: "primary",
    color: "textReverse",
    position: "absolute",
    left: 2,
    bottom: useTaskbarHeight() + sizes[2],
    zIndex: zIndex.taskbar,

    ...(useMatchTheme(ThemeMode.Soft) && {
      bg: lighten("primary", 0.02),
      borderRadius: "5%",
      boxShadow: (theme) => `inset 2px 2px 4px rgba(255, 255, 255, 0.8), 1px 1px 4px ${theme.colors?.shadow}`,
    }),

    ...(useMatchTheme(ThemeMode.Classic) && {
      bg: "background",
      borderRadius: "6%",
      boxShadow: "inset 0 0 0 3px #000, 4px 4px 0 #000",
    }),

    ...(useMatchTheme(ThemeMode.Tron) && {
      boxShadow: "inset 0 0 0 2px var(--theme-ui-colors-shadow)",
    }),
  };

  const variants: Variants = {
    default: { x: "-105%", transitionEnd: { display: "none" } },
    active: { x: 0, display: "block" },
  };

  return (
    <MotionBox
      ref={ref}
      sx={panelConfigStyle}
      variants={variants}
      initial="default"
      animate={isVisible ? "active" : "default"}
      transition={useReduceMotion()}
    >
      <List sx={{ display: "grid", gridTemplateColumns: "auto auto", gap: 3, mb: 4 }}>
        <li>
          <ThemeButton theme={ThemeMode.Flat} />
        </li>
        <li>
          <ThemeButton theme={ThemeMode.Soft} />
        </li>
        <li>
          <ThemeButton theme={ThemeMode.Tron} />
        </li>
        <li>
          <ThemeButton theme={ThemeMode.Classic} />
        </li>
      </List>
      <Toggle
        id="toggle-reduceMotion"
        label="Reduce motion"
        isChecked={reduceMotion.val}
        onChange={() => reduceMotion.set(!reduceMotion.val)}
        style={{ mb: 3 }}
      />
      <Toggle
        id="toggle-hideTaskbar"
        label="Hide taskbar"
        isChecked={hideTaskbar.val}
        onChange={() => hideTaskbar.set(!hideTaskbar.val)}
      />
    </MotionBox>
  );
};

export default forwardRef(PanelConfig);
