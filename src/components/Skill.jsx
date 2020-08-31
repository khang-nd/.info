import React from "react";
import "./Skill.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import { Icon } from "../assets";
import skills from "../data/skills";

function Skill({ name, value = 50 }) {
  const [percent, setPercent] = React.useState(0);
  const [triggered, setTrigger] = React.useState(false);
  const timer = setTimeout(() => setTrigger(true), 1000);
  if (triggered) {
    clearTimeout(timer);
    requestAnimationFrame(() => {
      const newPercent = percent + 1;
      if (newPercent < value) setPercent(newPercent);
    });
  }

  return (
    <>
      <div className="skill">
        <div className="icon">
          <CircularProgressbar
            value={percent}
            strokeWidth={8}
            styles={{
              path: { stroke: skills[name].color },
              trail: { stroke: "#eee" },
            }}
          />
          <img alt={name} src={Icon(name, "skill")} />
          <label>{value}%</label>
        </div>
        <label>{skills[name].label}</label>
      </div>
    </>
  );
}

export default Skill;
