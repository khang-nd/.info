import React from "react";
import "./TabLink.scss";

export default function TabLink({ className, href, children, click }) {
  return href ? (
    <a
      className={className || "external"}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <span className={className || "external"} onClick={click}>
      {children}
    </span>
  );
}
