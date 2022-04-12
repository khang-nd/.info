import { alpha } from "@theme-ui/color";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { Skill } from "../../../data/skills";
import useMatchTheme from "../../../hooks/useMatchTheme";
import theme, { ThemeMode } from "../../../themes";
import Button from "../../atoms/Button";
import Icon, { IconName } from "../../atoms/Icon";

type SkillButtonProps = {
  skill: Skill;
};

export default function SkillButton({ skill }: SkillButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: ThemeUICSSObject = {
    textDecoration: "none",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: "text",
    fontWeight: 600,
  };

  const iconWrapperStyle: ThemeUICSSObject = {
    position: "relative",
    borderRadius: "50%",
    bg: alpha(skill.color, 0.08),
    p: [5, null, 6],
    mb: 1,

    ...(useMatchTheme(ThemeMode.Soft) && {
      bg: "transparent",
      boxShadow: (theme) => `inset 1px 1px 4px #fff, 1px 1px 4px 1px ${theme.colors?.shadow}`,
    }),

    ...(useMatchTheme(ThemeMode.Classic) && {
      boxShadow: "inset 0 0 0 2px #000, 3px 3px #000",
    }),

    ...(useMatchTheme(ThemeMode.Tron) && {
      boxShadow: (theme) => `0 0 0 1.5px ${theme.colors?.shadow}`,
    }),
  };

  const hoverStyle: ThemeUICSSObject = {
    position: "absolute",
    borderRadius: "50%",
    top: 0,
    left: 0,
    size: "100%",
  };

  const hoverVariants: Variants = {
    default: {
      ...(useMatchTheme(ThemeMode.Flat) && { scale: 0, backgroundColor: "transparent" }),
      ...(useMatchTheme(ThemeMode.Tron) && { backgroundColor: "var(--theme-ui-colors-green)" }),
    },
    hovered: {
      ...(useMatchTheme(ThemeMode.Flat) && { scale: 1, backgroundColor: alpha(skill.color, 0.2)(theme) }),
      ...(useMatchTheme(ThemeMode.Soft) && { boxShadow: `inset 0 0 0 1px ${skill.color}` }),
      ...(useMatchTheme(ThemeMode.Tron) && { backgroundColor: "var(--theme-ui-colors-red)" }),
    },
  };

  const iconName = ("Logo" + skill.name) as IconName;

  return (
    <Button
      sx={buttonStyle}
      href={skill.url}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span sx={iconWrapperStyle}>
        <motion.span sx={hoverStyle} variants={hoverVariants} animate={isHovered ? "hovered" : "default"} />
        <Icon iconName={iconName} tag="span" size={48} style={{ display: "block" }} />
      </span>
      <span>{skill.label}</span>
    </Button>
  );
}
