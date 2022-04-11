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
  };

  return <div sx={bodyStyle}>{children}</div>;
}
