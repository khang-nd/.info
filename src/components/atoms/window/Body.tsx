import { lighten } from "@theme-ui/color";
import { ReactNode } from "react";
import { ThemeUICSSObject } from "theme-ui";
import useMatchTheme from "../../../hooks/useMatchTheme";
import { ThemeMode } from "../../../themes";

type WindowBodyProps = {
  children: ReactNode;
};

export default function WindowBody({ children }: WindowBodyProps) {
  const bodyStyle: ThemeUICSSObject = {
    bg: "white",
    p: 4,
    flex: 1,
    overflow: "auto",

    ...(!useMatchTheme(ThemeMode.Flat) && { bg: "background" }),

    ...(useMatchTheme(ThemeMode.Tron) && {
      background: (theme) =>
        `linear-gradient(135deg, ${theme.colors?.background} 10%, ${lighten("background", 0.1)(theme)})`,
    }),
  };

  return <div sx={bodyStyle}>{children}</div>;
}
