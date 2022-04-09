import { AnimatePresence } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { ThemeUICSSObject } from "theme-ui";
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
    bg: "white",
    color: "text",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
    textAlign: "justify",
    zIndex: zIndex.focusbox,
  };

  return (
    <Box sx={{ position: "relative", ...style }}>
      <MotionButton
        ref={buttonRef}
        unsetStyle
        focusStyle={{ borderRadius: "50%" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowHelp(!showHelp)}
      >
        <ReactIcon iconName="MdHelpOutline" size={24} />
      </MotionButton>
      <AnimatePresence>
        {showHelp && (
          <MotionBox sx={dropdownStyle} animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
            {children}
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
}
