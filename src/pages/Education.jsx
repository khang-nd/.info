import React from "react";
import "./Education.scss";
import Window from "../components/Window";
import { useLocation } from "react-router-dom";
import pages from "../pages";
import education from "../data/edu";

function Education() {
  const { pathname } = useLocation();
  return (
    <Window title={pages[pathname.slice(1)].title} bodyClass="window__edu">
      {education.map((edu, i) => (
        <div key={i} className="container">
          <div className="icon">{React.createElement(edu.icon)}</div>
          <div className="time">{edu.time}</div>
          <div className="degree">{edu.title}</div>
          <div className="place">{edu.place}</div>
          <div className="description">{edu.description}</div>
        </div>
      ))}
    </Window>
  );
}

export default Education;
