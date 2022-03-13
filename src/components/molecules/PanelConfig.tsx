import { Variants } from "framer-motion";
import { ThemeUICSSObject } from "theme-ui";
import { MotionList } from "../atoms/Container";

type PanelConfigProps = {
  isVisible?: boolean;
};

export default function PanelConfig({ isVisible }: PanelConfigProps) {
  const panelConfigStyle: ThemeUICSSObject = {
    background: "primary",
    p: 5,
    position: "absolute",
    left: 0,
    bottom: "100%",
  };

  const variants: Variants = {
    default: { translateX: "-100%" },
    active: { translateX: 0 },
  };

  return (
    <MotionList
      sx={panelConfigStyle}
      variants={variants}
      initial="default"
      animate={isVisible ? "active" : "default"}
    ></MotionList>
  );
}
