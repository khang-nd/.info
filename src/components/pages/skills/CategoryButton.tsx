import { alpha } from "@theme-ui/color";
import { Variants } from "framer-motion";
import { ThemeUICSSObject } from "theme-ui";
import useMatchTheme from "../../../hooks/useMatchTheme";
import theme, { ThemeMode } from "../../../themes";
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
    justifyContent: "center",
  };

  const variants: Variants = {
    default: {
      ...(useMatchTheme(ThemeMode.Flat) && {
        backgroundColor: alpha("primary", 0.05)(theme),
      }),

      ...(useMatchTheme(ThemeMode.Soft) && {
        borderRadius: 6,
        boxShadow: "inset 1px 1px 2px #fff, 1px 1px 2px var(--theme-ui-colors-shadow)",
      }),

      ...(useMatchTheme(ThemeMode.Classic) && {
        backgroundColor: "var(--theme-ui-colors-primary)",
        borderRadius: 6,
      }),

      ...(useMatchTheme(ThemeMode.Tron) && {
        backgroundColor: "transparent",
        boxShadow: "0 0 0 1px var(--theme-ui-colors-shadow)",
      }),
    },
    active: {
      ...(useMatchTheme(ThemeMode.Flat) && {
        backgroundColor: "var(--theme-ui-colors-primary)",
        color: "var(--theme-ui-colors-textReverse)",
      }),

      ...(useMatchTheme(ThemeMode.Soft) && {
        borderRadius: 6,
        boxShadow: "inset -1px -1px 2px #fff, inset 1px 1px 2px var(--theme-ui-colors-shadow)",
      }),

      ...(useMatchTheme(ThemeMode.Classic) && {
        backgroundColor: "var(--theme-ui-colors-primary)",
        borderRadius: 6,
        boxShadow: "0 0 0 2px #000",
      }),

      ...(useMatchTheme(ThemeMode.Tron) && {
        backgroundColor: "var(--theme-ui-colors-green)",
        boxShadow: "0 0 0 1px var(--theme-ui-colors-shadow)",
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
