import React from "react";
import "./Window.scss";
import { Link } from "react-router-dom";

function Window({ title, children, bodyClass }) {
  // for transition
  const [zooming, setZooming] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setZooming(false), 1);
  });

  return (
    <div className={"window" + (zooming ? " zooming" : "")}>
      <div className="window__titlebar">
        <div className="window__title">{title}</div>
        <Link className="window__close" to="/" />
      </div>
      <div className={"window__content " + (bodyClass || "")}>{children}</div>
    </div>
  );
}

export default Window;
