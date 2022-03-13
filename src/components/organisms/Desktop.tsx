import { ReactNode } from "react";
import { ThemeUICSSObject } from "theme-ui";

type DesktopProps = {
  children: ReactNode;
};

export default function Desktop({ children }: DesktopProps) {
  const desktopStyle: ThemeUICSSObject = {
    background: "secondary",
    height: "100%",
    position: "relative",
  };

  return <section sx={desktopStyle}>{children}</section>;
}
