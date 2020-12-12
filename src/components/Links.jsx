import React from "react";
import "./Links.scss";
import { useLocation, Link } from "react-router-dom";
import { Icon } from "../assets";
import routes from "../routes";

function Links({ theme }) {
  const { pathname } = useLocation();
  const _path = pathname.slice(1);
  return (
    <div className={`wrapper${_path ? " minimized" : ""}`}>
      {Object.keys(routes).map((path) => (
        <Link
          key={path}
          to={path}
          className={path === _path ? "link active" : "link"}
          onClick={(e) => (path === _path ? e.preventDefault() : null)}
        >
          <span style={{ backgroundImage: `url(${Icon(path, theme)})` }}></span>
          <span>{routes[path].title}</span>
        </Link>
      ))}
    </div>
  );
}

export default Links;
