import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Flex, ThemeUICSSObject } from "theme-ui";
import useInBreakpoint from "../../../hooks/useInBreakpoint";
import useIsLandscape from "../../../hooks/useIsLandscape";
import useMatchTheme from "../../../hooks/useMatchTheme";
import { ThemeMode } from "../../../themes";
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
    display: "flex",
    bg: "primary",
    color: "textReverse",
    p: isMobile && isLandscape ? 2 : 3,
    alignItems: "center",
    justifyContent: "space-between",

    ...(useMatchTheme(ThemeMode.Classic) && {
      boxShadow: "inset 0 -2px #000",
      fontWeight: 600,
    }),

    ...(useMatchTheme(ThemeMode.Tron) && {
      boxShadow: (theme) => `inset 0 -1px ${theme.colors?.shadow}`,
    }),
  };

  const btnStyle: ThemeUICSSObject = {
    border: 0,
    size: 5,
    cursor: "pointer",

    ...(useMatchTheme(ThemeMode.Soft) && {
      borderRadius: "50%",
    }),

    ...(useMatchTheme(ThemeMode.Classic) && {
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 2.5px #000",
    }),

    ...(useMatchTheme(ThemeMode.Tron) && {
      boxShadow: (theme) => `inset 0 0 0 1.5px ${theme.colors?.shadow}`,
    }),
  };

  const closeBtnStyle: ThemeUICSSObject = { bg: "red", ...btnStyle };
  const fullscrBtnStyle: ThemeUICSSObject = { bg: "green", mr: 2, ...btnStyle };

  return (
    <h1 sx={titleStyle}>
      <span>{children}</span>
      <Flex>
        {help && <Help style={{ mr: 2 }}>{help}</Help>}
        <button aria-label="Fullscreen" onClick={onFullscreen} sx={fullscrBtnStyle} />
        <button aria-label="Close" onClick={() => router.push("/")} sx={closeBtnStyle} />
      </Flex>
    </h1>
  );
}
