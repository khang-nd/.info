import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { getRoute } from "../../../pages/_routes";
import { fadeInUp } from "../../animations/fade";
import { GlobalContext } from "../../contexts/GlobalContext";
import { taskbarHeight } from "../../themes";
import { MotionSection, Section } from "../atoms/Container";
import ButtonConfig from "../molecules/ButtonConfig";
import PanelConfig from "../molecules/PanelConfig";
import TaskbarItem from "../molecules/TaskbarItem";

export default function Taskbar() {
  const [isConfigActive, setConfigActive] = useState(false);
  const { enableAnimation } = useContext(GlobalContext);

  const taskbarStyle: ThemeUICSSObject = {
    background: "primary",
    color: "white",
    bottom: 0,
    width: "100%",
    height: taskbarHeight + "px",
    display: "flex",
    alignItems: "center",
    position: "fixed",
    px: 2,
  };

  const Container = enableAnimation?.val ? MotionSection : Section;

  return (
    <Container sx={taskbarStyle} variants={fadeInUp} animate="animate" initial="initial">
      <PanelConfig isVisible={isConfigActive} />
      <ButtonConfig isActive={isConfigActive} onClick={() => setConfigActive(!isConfigActive)} />
      <TaskbarItem title={getRoute(useRouter().asPath)?.title} />
      <div sx={{ ml: "auto" }}>Copyright &copy; 2020 KhangND</div>
    </Container>
  );
}
