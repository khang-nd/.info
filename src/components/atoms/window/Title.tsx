import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Flex, ThemeUICSSObject } from "theme-ui";
import useInBreakpoint from "../../../hooks/useInBreakpoint";
import useIsLandscape from "../../../hooks/useIsLandscape";
import Help from "./Help";

type WindowTitleProps = {
  children?: ReactNode;
  help?: string;
  onFullscreen?: () => void;
};

export default function WindowTitle({ children, help, onFullscreen }: WindowTitleProps) {
  const router = useRouter();
  const isLandscape = useIsLandscape();
  const isMobile = useInBreakpoint(0, isLandscape);

  const titleStyle: ThemeUICSSObject = {
    bg: "primary",
    color: "textReverse",
    p: isMobile && isLandscape ? 2 : 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const btnStyle: ThemeUICSSObject = {
    border: 0,
    color: "textReverse",
    size: 5,
    cursor: "pointer",
  };

  const closeBtnStyle: ThemeUICSSObject = { bg: "red", ...btnStyle };
  const fullscrBtnStyle: ThemeUICSSObject = { bg: "green", mr: 2, ...btnStyle };

  return (
    <div sx={titleStyle}>
      <span>{children}</span>
      <Flex>
        {help && <Help style={{ mr: 1 }}>{help}</Help>}
        <button aria-label="Fullscreen" onClick={onFullscreen} sx={fullscrBtnStyle} />
        <button aria-label="Close" onClick={() => router.push("/")} sx={closeBtnStyle} />
      </Flex>
    </div>
  );
}
