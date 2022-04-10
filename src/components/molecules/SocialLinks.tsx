import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useClickAway, useKey } from "react-use";
import { ThemeUICSSObject } from "theme-ui";
import { slideIn } from "../../animations/slide";
import SocialPanel from "../atoms/social/Panel";
import SocialToggle from "../atoms/social/Toggle";

export default function SocialLinks() {
  const [isActive, setIsActive] = useState(false);
  const panelRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useClickAway(panelRef, (event) => {
    const isToggleButton = toggleRef.current?.contains(event.target as Node);
    if (!isToggleButton) setIsActive(false);
  });

  useKey("Escape", () => setIsActive(false));

  const containerStyle: ThemeUICSSObject = {
    position: "absolute",
    bottom: 2,
    right: 2,
  };

  return (
    <motion.div sx={containerStyle} custom="left" {...slideIn}>
      <SocialToggle ref={toggleRef} isActive={isActive} onClick={() => setIsActive(!isActive)} />
      <AnimatePresence>{isActive && <SocialPanel ref={panelRef} />}</AnimatePresence>
    </motion.div>
  );
}
