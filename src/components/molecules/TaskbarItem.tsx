import { ThemeUICSSObject } from "theme-ui";
import { Route } from "../../misc/routes";
import { slideIn } from "../../animations/slide";
import { MotionBox } from "../atoms/Container";
import Icon from "../atoms/Icon";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import useInBreakpoint from "../../hooks/useInBreakpoint";
import { darken } from "@theme-ui/color";

type TaskbarItemProps = {
  data: Route;
};

export default function TaskbarItem({ data }: TaskbarItemProps): JSX.Element {
  const isMobile = useInBreakpoint(0);
  const { enableAnimation } = useContext(GlobalContext);
  const { icon, title } = data;

  const containerStyle: ThemeUICSSObject = {
    height: "100%",
    overflow: "hidden",
  };

  const itemStyle: ThemeUICSSObject = {
    px: 5,
    mr: 3,
    bg: darken("primary", 0.08),
    cursor: "default",
    borderBottom: "2px solid",
    borderBottomColor: "secondary",
    display: "flex",
    alignItems: "center",
    minWidth: [null, null, 180],
    height: "100%",
  };

  return (
    <div sx={containerStyle}>
      <MotionBox
        sx={itemStyle}
        custom="right"
        variants={slideIn}
        animate={enableAnimation.val && "animate"}
        initial={enableAnimation.val ? "initial" : "animate"}
        exit={enableAnimation.val ? "initial" : undefined}
      >
        <Icon iconName={icon} size={32} />
        {!isMobile && <span sx={{ ml: 3 }}>{title}</span>}
      </MotionBox>
    </div>
  );
}
