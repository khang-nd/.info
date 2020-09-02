import React from "react";
import "./Skills.scss";
import Window from "../components/Window";
import Skill from "../components/Skill";
import { useLocation } from "react-router-dom";
import pages from "../pages";
import skills from "../data/skills";

function Skills() {
  const { pathname } = useLocation();
  return (
    <Window title={pages[pathname.slice(1)].title} bodyClass="window__skills">
      {Object.keys(skills).map((category) => (
        <div key={category} className="col">
          <div className="title">
            <big>{skills[category].label}</big>
          </div>
          <div className="skills">
            {skills[category].skills.map((skill) => (
              <Skill key={skill.name} data={skill} />
            ))}
          </div>
        </div>
      ))}
    </Window>
  );
}

export default Skills;
