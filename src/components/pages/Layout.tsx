import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Fragment, ReactNode } from "react";
import { ThemeUICSSObject } from "theme-ui";
import Navigation from "../molecules/Navigation";
import SocialLinks from "../molecules/SocialLinks";
import Desktop from "../organisms/Desktop";
import Taskbar from "../organisms/Taskbar";

type LayoutProps = {
  children?: ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  const containerStyle: ThemeUICSSObject = {
    position: "relative",
    background: "secondary",
    height: "100vh",
    overflow: "hidden",
  };

  return (
    <main sx={containerStyle}>
      <Desktop>
        <Navigation />
        <SocialLinks />
        <AnimatePresence exitBeforeEnter>
          <Fragment key={useRouter().asPath}>{children}</Fragment>
        </AnimatePresence>
      </Desktop>
      <Taskbar />
    </main>
  );
}
