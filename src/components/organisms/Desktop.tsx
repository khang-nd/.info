import { ReactNode, useContext, useEffect, useState } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { GlobalContext } from "../../contexts/GlobalContext";
import useTaskbarHeight from "../../hooks/useTaskbarHeight";
import { zIndex } from "../../themes/common";

type DesktopProps = {
  children: ReactNode;
};

export default function Desktop({ children }: DesktopProps) {
  const { hideTaskbar } = useContext(GlobalContext);
  const _taskbarHeight = useTaskbarHeight();
  const taskbarHeight = hideTaskbar.val ? 0 : _taskbarHeight;

  const desktopStyle: ThemeUICSSObject = {
    height: `calc(100% - ${taskbarHeight}px)`,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: zIndex.desktop,
    transition: "height 0.6s",
  };

  return <section sx={desktopStyle}>{children}</section>;
}
