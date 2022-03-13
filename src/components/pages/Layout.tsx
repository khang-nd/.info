import { ReactNode } from "react";
import { ThemeUICSSObject } from "theme-ui";
import Desktop from "../organisms/Desktop";
import Navigation from "../organisms/Navigation";
import Taskbar from "../organisms/Taskbar";

type LayoutProps = {
  desktop?: ReactNode;
  taskbar?: ReactNode;
};

export default function Layout({ desktop, taskbar }: LayoutProps): JSX.Element {
  const globalStyle: ThemeUICSSObject = {
    fontFamily: "sans-serif",
  };

  const containerStyle: ThemeUICSSObject = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden",
    ...globalStyle,
  };

  return (
    <main sx={containerStyle}>
      <Desktop>
        <Navigation />
        {desktop}
      </Desktop>
      <Taskbar>{taskbar}</Taskbar>
    </main>
  );
}
