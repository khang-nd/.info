import React from "react";
import "./Skills.scss";
import Window from "../components/Window";
import Skill from "../components/Skill";
import { useLocation } from "react-router-dom";
import pages from "../pages";

function Skills() {
  const { pathname } = useLocation();
  return (
    <Window title={pages[pathname.slice(1)].title} bodyClass="window__skills">
      <div className="col">
        <div className="title">
          <big>Web Development</big>
        </div>
        <div className="skills">
          <Skill name="html" value={85} />
          <Skill name="css" value={90} />
          <Skill name="sass" value={40} />
          <Skill name="bootstrap" value={80} />
          <Skill name="jquery" value={80} />
          <Skill name="reactjs" value={70} />
          <Skill name="vuejs" value={55} />
        </div>
      </div>
      <div className="col">
        <div className="title">
          <big>Languages</big>
        </div>
        <div className="skills">
          <Skill name="js" value={80} />
          <Skill name="csharp" value={40} />
          <Skill name="java" value={40} />
        </div>
      </div>
      <div className="col">
        <div className="title">
          <big>Tools</big>
        </div>
        <div className="skills">
          <Skill name="vscode" value={80} />
          <Skill name="vs" value={40} />
          <Skill name="office" value={40} />
          <Skill name="eclipse" value={80} />
          <Skill name="androidstd" value={40} />
          <Skill name="balsamiq" value={40} />
          <Skill name="photoshop" value={40} />
        </div>
      </div>
    </Window>
  );
}

export default Skills;
