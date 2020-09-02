import React from "react";
import "./Skill.scss";
import TabLink from "./TabLink";
import { CircularProgressbar } from "react-circular-progressbar";
import { Icon } from "../assets";

function Skill({ data }) {
  const { name, value, label, url, color } = data;
  const [percent, setPercent] = React.useState(0);
  const [triggered, setTrigger] = React.useState(false);
  const timer = setTimeout(() => setTrigger(true), 1000);
  if (triggered) {
    clearTimeout(timer);
    requestAnimationFrame(() => {
      const newPercent = percent + 5;
      if (newPercent <= value) setPercent(newPercent);
    });
  }

  return (
    <>
      <TabLink className="skill" href={url}>
        <div className="icon">
          <CircularProgressbar
            value={percent}
            strokeWidth={8}
            styles={{ path: { stroke: color } }}
          />
          <img alt={label} src={Icon(name, "skill")} />
          <span>{value}%</span>
        </div>
        <span>{label}</span>
      </TabLink>
    </>
  );
}

export default Skill;
