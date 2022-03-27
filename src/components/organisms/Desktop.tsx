import { ReactNode } from "react";
import { ThemeUICSSObject } from "theme-ui";
import useTaskbarHeight from "../../hooks/useTaskbarHeight";
import { zIndex } from "../../themes/common";

type DesktopProps = {
  children: ReactNode;
};

export default function Desktop({ children }: DesktopProps) {
  const taskbarHeight = useTaskbarHeight();

  const desktopStyle: ThemeUICSSObject = {
    height: `calc(100% - ${taskbarHeight}px)`,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: zIndex.desktop,
  };

  return <section sx={desktopStyle}>{children}</section>;
}
