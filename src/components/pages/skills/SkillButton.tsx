import { alpha } from "@theme-ui/color";
import { motion, Variants } from "framer-motion";
import { useContext, useState } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { Skill } from "../../../data/skills";
import Button from "../../atoms/Button";
import Icon, { IconName } from "../../atoms/Icon";

type SkillButtonProps = {
  skill: Skill;
};

export default function SkillButton({ skill }: SkillButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { enableAnimation } = useContext(GlobalContext);

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
  };

  const hoverStyle: ThemeUICSSObject = {
    position: "absolute",
    borderRadius: "50%",
    top: 0,
    left: 0,
    size: "100%",
    bg: alpha(skill.color, 0.2),
  };

  const hoverVariants: Variants = {
    default: { scale: 0 },
    hovered: { scale: 1 },
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
          transition={enableAnimation.val ? undefined : { duration: 0 }}
        />
        <Icon iconName={iconName} tag="span" size={48} style={{ display: "block" }} />
      </span>
      <span>{skill.label}</span>
    </Button>
  );
}
