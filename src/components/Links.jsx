import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Icon } from "../assets";
import links from "../links.json";

function Links({ theme }) {
  let { pathname } = useLocation();
  pathname = pathname.slice(1);
  return (
    <div className={`wrapper${pathname ? " minimized" : ""}`}>
      {Object.keys(links).map((key) => (
        <Link key={key} to={key} className="link">
          <span style={{ backgroundImage: `url(${Icon(key, theme)})` }}></span>
          <span>{links[key]}</span>
        </Link>
      ))}
    </div>
  );
}

export default Links;
