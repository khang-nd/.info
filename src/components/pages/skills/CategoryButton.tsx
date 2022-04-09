import { alpha, getColor } from "@theme-ui/color";
import { Variants } from "framer-motion";
import { ThemeUICSSObject } from "theme-ui";
import theme from "../../../themes";
import { MotionButton } from "../../atoms/Button";

type CategoryButtonProps = {
  children: string;
  isActive?: boolean;
  onClick?: () => void;
};

export default function CategoryButton({ children, isActive, onClick }: CategoryButtonProps) {
  const style: ThemeUICSSObject = {
    py: 2,
    px: 3,
    mx: [1, null, 2],
    my: 1,
    width: "auto",
    minWidth: 100,
    bg: alpha("primary", 0.05),
    justifyContent: "center",
  };

  const variants: Variants = {
    default: {},
    active: {
      backgroundColor: getColor(theme, "primary"),
      color: getColor(theme, "textReverse"),
    },
  };

  return (
    <MotionButton
      unsetStyle
      sx={style}
      variants={variants}
      animate={isActive ? "active" : "default"}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </MotionButton>
  );
}
