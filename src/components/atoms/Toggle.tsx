import { alpha, darken, getColor } from "@theme-ui/color";
import { motion, Variants } from "framer-motion";
import { ChangeEventHandler, useState } from "react";
import { ThemeUICSSObject } from "theme-ui";
import theme from "../../themes";

type ToggleProps = {
  id: string;
  label: string;
  isChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  style?: ThemeUICSSObject;
};

export default function Toggle({ id, label, isChecked, onChange, style }: ToggleProps) {
  const [inputChecked, setInputChecked] = useState(isChecked);

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
    setInputChecked(!isChecked);
    onChange && onChange(e);
  };

  return (
    <div sx={style}>
      <input type="checkbox" id={id} sx={{ display: "none" }} checked={inputChecked} onChange={handleChange} />
      <label sx={{ display: "flex", alignItems: "center" }} htmlFor={id}>
        <span sx={bgStyle}>
          <motion.span sx={thumbStyle} variants={variants} animate={inputChecked ? "on" : "off"} />
        </span>
        <span sx={{ cursor: "pointer" }}>{label}</span>
      </label>
    </div>
  );
}
