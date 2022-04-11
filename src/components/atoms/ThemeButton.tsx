import { motion } from "framer-motion";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ThemeMode } from "../../themes";
import { MotionButton } from "./Button";
import ReactIcon from "./IconReact";

type ThemeButtonProps = {
  theme: ThemeMode;
};

export default function ThemeButton({ theme }: ThemeButtonProps) {
  const { theme: cachedTheme } = useContext(GlobalContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // workaround for Theme UI's color mode being default to user preference,
    // which is light/dark, altering that to match site's default
    const loadedTheme = cachedTheme.val as string;
    const isDefaultMode = (loadedTheme === "light" || loadedTheme === "dark") && theme === ThemeMode.Flat;
    setIsActive(isDefaultMode || cachedTheme.val === theme);
  }, [cachedTheme.val, theme]);

  const maskStyle: ThemeUICSSObject = {
    background: "rgba(0, 0, 0, 0.7)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  };

  return (
    <MotionButton unsetStyle whileHover={{ scale: isActive ? 1 : 0.95 }} onClick={() => cachedTheme.set(theme)}>
      <Image src={`/images/theme-${theme}.webp`} alt={`Theme ${theme}`} layout="fixed" width={140} height={84} />
      {isActive && (
        <motion.span sx={maskStyle} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
            <ReactIcon iconName="FaCheckCircle" size={40} />
          </motion.span>
        </motion.span>
      )}
    </MotionButton>
  );
}
