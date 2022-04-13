import { ReactNode, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { ThemeUICSSObject } from "theme-ui";
import useMatchTheme from "../../../hooks/useMatchTheme";
import { ThemeMode } from "../../../themes";
import { zIndex } from "../../../themes/common";
import { MotionButton } from "../Button";
import { Box, MotionBox } from "../Container";
import ReactIcon from "../IconReact";

type HelpProps = {
  children?: ReactNode;
  style?: ThemeUICSSObject;
};

export default function Help({ children, style }: HelpProps) {
  const [showHelp, setShowHelp] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useClickAway(buttonRef, () => setShowHelp(false));

  const dropdownStyle: ThemeUICSSObject = {
    position: "absolute",
    top: "100%",
    right: 0,
    width: 250,
    p: 4,
    bg: "background",
    color: "text",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
    zIndex: zIndex.focusbox,

    ...(useMatchTheme(ThemeMode.Classic) && {
      borderRadius: 10,
      boxShadow: "0 0 0 2px #000, 4px 4px 0 2px #000",
    }),

    ...(useMatchTheme(ThemeMode.Tron) && {
      bg: "green",
      boxShadow: (theme) => `inset 0 0 0 1.5px ${theme.colors?.shadow}`,
    }),
  };

  return (
    <Box sx={{ position: "relative", ...style }}>
      <MotionButton
        aria-label="Help"
        aria-controls="popup-help"
        aria-expanded={showHelp}
        ref={buttonRef}
        unsetStyle
        focusStyle={{ borderRadius: "50%" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowHelp(!showHelp)}
      >
        <ReactIcon iconName="MdHelpOutline" size={24} />
      </MotionButton>
      <MotionBox
        id="popup-help"
        sx={dropdownStyle}
        animate={showHelp ? { opacity: 1, display: "block" } : { opacity: 0, transitionEnd: { display: "none" } }}
      >
        {children}
      </MotionBox>
    </Box>
  );
}
