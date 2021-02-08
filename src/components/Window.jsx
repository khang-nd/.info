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
    <section className={"window" + (zooming ? " zooming" : "")}>
      <h1 className="window__titlebar">
        <span className="window__title">{title}</span>
        <Link className="window__close" to="/" aria-label="Close" />
      </h1>
      <div className={"window__content " + (bodyClass || "")}>{children}</div>
    </section>
  );
}

export default Window;
