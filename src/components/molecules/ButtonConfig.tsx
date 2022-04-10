import { Variants } from "framer-motion";
import { ForwardedRef, forwardRef, MouseEventHandler } from "react";
import useInBreakpoint from "../../hooks/useInBreakpoint";
import useIsLandscape from "../../hooks/useIsLandscape";
import { MotionButton } from "../atoms/Button";
import Icon from "../atoms/Icon";

type ButtonConfigProps = {
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ButtonConfig = ({ isActive, onClick }: ButtonConfigProps, ref: ForwardedRef<HTMLElement>) => {
  const isLandscape = useIsLandscape();
  const isMobile = useInBreakpoint(0, isLandscape);

  const size = isLandscape && isMobile ? 32 : 40;

  const variants: Variants = {
    default: { rotateZ: 0 },
    active: { rotateZ: 180 },
  };

  return (
    <MotionButton
      ref={ref}
      unsetStyle
      sx={{ size }}
      focusStyle={{ borderRadius: "50%" }}
      variants={variants}
      animate={isActive ? "active" : "default"}
      onClick={onClick}
      aria-label="Site config"
    >
      <Icon iconName="FlatSettings" size={size} />
    </MotionButton>
  );
};

export default forwardRef(ButtonConfig);
