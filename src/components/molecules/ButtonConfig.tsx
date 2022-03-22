import { Variants } from "framer-motion";
import { ForwardedRef, forwardRef, MouseEventHandler, useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { MotionButton } from "../atoms/Button";
import Icon from "../atoms/Icon";

type ButtonConfigProps = {
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ButtonConfig = ({ isActive, onClick }: ButtonConfigProps, ref: ForwardedRef<HTMLElement>) => {
  const { enableAnimation } = useContext(GlobalContext);

  const variants: Variants = {
    default: { rotateZ: 0 },
    active: { rotateZ: 180 },
  };

  return (
    <MotionButton
      ref={ref}
      unsetStyle
      style={{ size: 7, mr: 3 }}
      variants={variants}
      animate={isActive ? "active" : "default"}
      transition={enableAnimation.val ? undefined : { duration: 0 }}
      onClick={onClick}
    >
      <Icon iconName="FlatSettings" size={7} />
    </MotionButton>
  );
};

export default forwardRef(ButtonConfig);
