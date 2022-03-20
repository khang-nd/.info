import { Variants } from "framer-motion";
import { ForwardedRef, forwardRef } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { MotionList } from "../atoms/Container";

type PanelConfigProps = {
  isVisible?: boolean;
};

const PanelConfig = ({ isVisible }: PanelConfigProps, ref: ForwardedRef<HTMLElement>) => {
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
      ref={ref}
      sx={panelConfigStyle}
      variants={variants}
      initial="default"
      animate={isVisible ? "active" : "default"}
    ></MotionList>
  );
};

export default forwardRef(PanelConfig);
