import { alpha, darken, getColor } from "@theme-ui/color";
import { motion, Variants } from "framer-motion";
import { ChangeEventHandler, useRef } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { useIsFocused } from "../../hooks/useIsFocused";
import theme from "../../themes";
import { focus } from "../../themes/common";

type ToggleProps = {
  id: string;
  label: string;
  isChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  style?: ThemeUICSSObject;
};

export default function Toggle({ id, label, isChecked, onChange, style }: ToggleProps) {
  const ref = useRef<HTMLInputElement>(null);
  const isFocused = useIsFocused(ref);

  const bgStyle: ThemeUICSSObject = {
    mr: 2,
    width: 40,
    height: 18,
    bg: alpha("secondary", 0.2),
    position: "relative",
    cursor: "pointer",
  };

  const thumbStyle: ThemeUICSSObject = {
    position: "absolute",
    top: "-2px",
    width: "50%",
    height: "100%",
  };

  const variants: Variants = {
    off: {
      x: 0,
      background: darken("secondary", 0.13)(theme),
      boxShadow: "0 4px " + darken("secondary", 0.2)(theme),
      transition: { type: "tween" },
    },
    on: {
      x: "100%",
      background: getColor(theme, "secondary"),
      boxShadow: "0 4px " + darken("secondary", 0.1)(theme),
    },
  };

  const handleChange = (e: any) => {
    onChange && onChange(e);
  };

  return (
    <label sx={{ display: "flex", alignItems: "center", ...style }} htmlFor={id}>
      <input type="checkbox" id={id} ref={ref} sx={{ size: 0, m: 0 }} checked={isChecked} onChange={handleChange} />
      <span sx={bgStyle}>
        <motion.span sx={thumbStyle} variants={variants} animate={isChecked ? "on" : "off"} />
        {isFocused && <span sx={{ ...focus, borderRadius: 2 }} />}
      </span>
      <span sx={{ cursor: "pointer" }}>{label}</span>
    </label>
  );
}
