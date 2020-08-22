import React from "react";
import { Link } from "react-router-dom";

function Window({ title, children }) {
  return (
    <div className="window">
      <div className="titlebar">
        <div className="title">{title}</div>
        <Link className="close" to="/" />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}

export default Window;
