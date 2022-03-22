/* eslint-disable @next/next/no-img-element */
import { Variants } from "framer-motion";
import { ForwardedRef, forwardRef, useContext } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { GlobalContext } from "../../contexts/GlobalContext";
import { sizes } from "../../themes";
import Button from "../atoms/Button";
import { List, MotionBox } from "../atoms/Container";
import Toggle from "../atoms/Toggle";

type PanelConfigProps = {
  isVisible?: boolean;
};

const PanelConfig = ({ isVisible }: PanelConfigProps, ref: ForwardedRef<HTMLElement>) => {
  const { enableAnimation } = useContext(GlobalContext);
  const activeX = sizes[2] + "px";

  const panelConfigStyle: ThemeUICSSObject = {
    background: "primary",
    p: 4,
    position: "absolute",
    left: activeX,
    bottom: `calc(100% + ${activeX})`,
  };

  const variants: Variants = {
    default: { x: "-105%" },
    active: { x: 0 },
  };

  const ThemePreview = ({ image }: { image: string }) => (
    <li>
      <Button unsetStyle>
        <img src={`/images/theme-${image}.webp`} alt={`Theme ${image}`} width="150" />
      </Button>
    </li>
  );

  return (
    <MotionBox
      ref={ref}
      sx={panelConfigStyle}
      variants={variants}
      initial="default"
      animate={isVisible ? "active" : "default"}
      transition={enableAnimation.val ? undefined : { duration: 0 }}
    >
      <h3>Theme</h3>
      <List sx={{ display: "grid", gridTemplateColumns: "auto auto", gap: 3 }}>
        <ThemePreview image="flat" />
        <ThemePreview image="neumorphism" />
        <ThemePreview image="classic" />
      </List>
      <h3>Settings</h3>
      <Toggle
        id="toggle-enableAnimation"
        label="Enable Animation"
        isChecked={enableAnimation.val}
        onChange={() => enableAnimation.set(!enableAnimation.val)}
      />
    </MotionBox>
  );
};

export default forwardRef(PanelConfig);
