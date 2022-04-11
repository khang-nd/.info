import { alpha } from "@theme-ui/color";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { Skill } from "../../../data/skills";
import useMatchTheme from "../../../hooks/useMatchTheme";
import { ThemeMode } from "../../../themes";
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
  };

  const hoverStyle: ThemeUICSSObject = {
    position: "absolute",
    borderRadius: "50%",
    top: 0,
    left: 0,
    size: "100%",
    bg: alpha(skill.color, 0.2),

    ...(useMatchTheme(ThemeMode.Soft) && {
      bg: "transparent",
    }),
  };

  const hoverVariants: Variants = {
    ...(useMatchTheme(ThemeMode.Flat) && {
      default: { scale: 0 },
      hovered: { scale: 1 },
    }),

    ...(useMatchTheme(ThemeMode.Soft) && {
      default: {},
      hovered: { boxShadow: `inset 0 0 0 1px ${skill.color}` },
    }),
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
        <motion.span
          sx={hoverStyle}
          variants={hoverVariants}
          animate={isHovered ? "hovered" : "default"}
          initial="default"
        />
        <Icon iconName={iconName} tag="span" size={48} style={{ display: "block" }} />
      </span>
      <span>{skill.label}</span>
    </Button>
  );
}
