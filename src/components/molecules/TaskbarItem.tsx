import { ThemeUICSSObject } from "theme-ui";
import { Route } from "../../misc/routes";
import { slideIn } from "../../animations/slide";
import { MotionBox } from "../atoms/Container";
import Icon from "../atoms/Icon";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

type TaskbarItemProps = {
  data: Route;
};

export default function TaskbarItem({ data }: TaskbarItemProps): JSX.Element {
  const { enableAnimation } = useContext(GlobalContext);
  const { icon, title } = data;

  const containerStyle: ThemeUICSSObject = {
    height: "100%",
    overflow: "hidden",
  };

  const itemStyle: ThemeUICSSObject = {
    px: 5,
    bg: "rgba(0, 0, 0, 0.4)",
    cursor: "default",
    borderBottom: "2px solid",
    borderBottomColor: "background",
    display: "flex",
    alignItems: "center",
    minWidth: 180,
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
        <span sx={{ ml: 3 }}>{title}</span>
      </MotionBox>
    </div>
  );
}
