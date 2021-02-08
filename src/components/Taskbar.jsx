import React from "react";
import "./Taskbar.scss";
import { useLocation } from "react-router-dom";
import { Icon, themes } from "../assets";
import routes from "../routes";

function Taskbar({ theme, setTheme }) {
  const [menu, showMenu] = React.useState(false);
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  return (
    <>
      <div id="taskbar" className={theme}>
        <div
          id="settings"
          className={menu ? "active" : ""}
          style={{ backgroundImage: `url(${Icon("settings", theme)})` }}
          onClick={() => showMenu(!menu)}
        ></div>
        {path && (
          <div className="item">
            <img src={Icon(path, theme)} alt="" />
            <label>{routes[path].title}</label>
          </div>
        )}
        <div className="item right">Copyright &copy; 2020 KhangND</div>
      </div>
      <ul id="menu" className={theme + (menu ? "" : " hidden")}>
        {Object.keys(themes).map((key) => (
          <li
            key={key}
            className={theme === key ? "active" : ""}
            onClick={() => setTheme(key)}
          >
            <img src={themes[key]} alt={key}></img>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Taskbar;
