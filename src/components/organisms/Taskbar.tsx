import { ReactNode, useState } from "react";
import { ThemeUICSSObject } from "theme-ui";
import ButtonConfig from "../molecules/ButtonConfig";
import PanelConfig from "../molecules/PanelConfig";

type TaskbarProps = {
  children?: ReactNode;
};

export default function Taskbar({ children }: TaskbarProps) {
  const [isConfigActive, setConfigActive] = useState(false);

  const taskbarStyle: ThemeUICSSObject = {
    background: "primary",
    color: "white",
    bottom: 0,
    width: "100%",
    height: 8,
    display: "flex",
    alignItems: "center",
    position: "relative",
    px: 2,
  };

  return (
    <section sx={taskbarStyle}>
      <PanelConfig isVisible={isConfigActive} />
      <ButtonConfig isActive={isConfigActive} onClick={() => setConfigActive(!isConfigActive)} />
      {children}
      <div sx={{ ml: "auto" }}>Copyright &copy; 2020 KhangND</div>
    </section>
  );
}
