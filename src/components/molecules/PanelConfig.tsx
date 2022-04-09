import { Variants } from "framer-motion";
import Image from "next/image";
import { ForwardedRef, forwardRef } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { sizes } from "../../themes";
import Button from "../atoms/Button";
import { List, MotionBox } from "../atoms/Container";
import Toggle from "../atoms/Toggle";

type PanelConfigProps = {
  isVisible?: boolean;
};

const PanelConfig = ({ isVisible }: PanelConfigProps, ref: ForwardedRef<HTMLElement>) => {
  const activeX = sizes[2] + "px";

  const panelConfigStyle: ThemeUICSSObject = {
    background: "primary",
    p: 4,
    position: "absolute",
    left: activeX,
    bottom: `calc(100% + ${activeX})`,
  };

  const variants: Variants = {
    default: { x: "-105%", transitionEnd: { display: "none" } },
    active: { x: 0, display: "block" },
  };

  const ThemePreview = ({ image }: { image: string }) => (
    <li>
      <Button unsetStyle>
        <Image src={`/images/theme-${image}.webp`} alt={`Theme ${image}`} layout="fixed" width={140} height={84} />
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
    >
      <List sx={{ display: "grid", gridTemplateColumns: "auto auto", gap: 3, mb: 4 }}>
        <ThemePreview image="flat" />
        <ThemePreview image="neumorphism" />
        <ThemePreview image="classic" />
      </List>
      {/* <Toggle
        id="toggle-enableAnimation"
        label="Enable animation"
        isChecked={enableAnimation.val}
        onChange={() => enableAnimation.set(!enableAnimation.val)}
      /> */}
    </MotionBox>
  );
};

export default forwardRef(PanelConfig);
