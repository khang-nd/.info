import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Icon, themes } from "../assets";
import links from "../links.json";

function Taskbar({ theme, setTheme }) {
  const [menu, showMenu] = useState(false);
  const { pathname } = useLocation();
  const key = pathname.slice(1);
  return (
    <div id="taskbar" className={theme}>
      <ul id="menu" hidden={!menu}>
        {Object.keys(themes).map((key) => (
          <li
            key={key}
            className={theme === key ? "active" : ""}
            onClick={() => setTheme(key)}
          >
            <img src={themes[key]} alt={key}></img>
            {key}
          </li>
        ))}
      </ul>
      <div
        id="start"
        style={{ backgroundImage: `url(${Icon("settings", theme)})` }}
        onClick={() => showMenu(!menu)}
      ></div>
      {key && (
        <div className="item">
          <img src={Icon(key, theme)} alt="" />
          <label>{links[key]}</label>
        </div>
      )}
      <div className="item right">Copyright &copy; 2020 KhangND</div>
    </div>
  );
}

export default Taskbar;
