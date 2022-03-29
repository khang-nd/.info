import { AnimatePresence, MotionConfig } from "framer-motion";
import { useRouter } from "next/router";
import { Fragment, ReactNode, useContext } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { GlobalContext } from "../../contexts/GlobalContext";
import Navigation from "../molecules/Navigation";
import SocialLinks from "../molecules/SocialLinks";
import Desktop from "../organisms/Desktop";
import Taskbar from "../organisms/Taskbar";

type LayoutProps = {
  children?: ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  const { enableAnimation } = useContext(GlobalContext);

  const globalStyle: ThemeUICSSObject = {
    fontFamily: "Segoe UI, sans-serif",
  };

  const containerStyle: ThemeUICSSObject = {
    background: "secondary",
    height: "100vh",
    overflow: "hidden",
    ...globalStyle,
  };

  return (
    <main sx={containerStyle}>
      <MotionConfig reducedMotion={enableAnimation.val ? "never" : "always"}>
        <Desktop>
          <Navigation />
          <SocialLinks />
          <AnimatePresence exitBeforeEnter>
            <Fragment key={useRouter().asPath}>{children}</Fragment>
          </AnimatePresence>
        </Desktop>
        <Taskbar />
      </MotionConfig>
    </main>
  );
}
