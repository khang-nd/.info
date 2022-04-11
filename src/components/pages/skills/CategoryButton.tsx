import { alpha } from "@theme-ui/color";
import { Variants } from "framer-motion";
import { ThemeUICSSObject } from "theme-ui";
import useMatchTheme from "../../../hooks/useMatchTheme";
import { ThemeMode } from "../../../themes";
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
      backgroundColor: "var(--theme-ui-colors-primary)",
      color: "var(--theme-ui-colors-textReverse)",

      ...(useMatchTheme(ThemeMode.Classic) && {
        borderRadius: 6,
        boxShadow: "0 0 0 2px #000",
      }),
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
