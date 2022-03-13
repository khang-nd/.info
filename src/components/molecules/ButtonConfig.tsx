import { Variants } from "framer-motion";
import { MouseEventHandler } from "react";
import { MotionButton } from "../atoms/Button";
import Icon from "../atoms/Icon";

type ButtonConfigProps = {
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function ButtonConfig({ isActive, onClick }: ButtonConfigProps) {
  const variants: Variants = {
    default: { rotateZ: 0 },
    active: { rotateZ: 180 },
  };

  return (
    <MotionButton
      unsetStyle
      style={{ size: 7 }}
      variants={variants}
      animate={isActive ? "active" : "default"}
      onClick={onClick}
    >
      <Icon iconName="FlatSettings" size={7} />
    </MotionButton>
  );
}
