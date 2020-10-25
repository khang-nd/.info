import React from "react";
import "./About.scss";
import Window from "../components/Window";
import TabLink from "../components/TabLink";
import { useLocation } from "react-router-dom";
import { Avatar } from "../assets";
import pages from "../pages";
import about from "../data/about";
import { IconContext } from "react-icons";
import { MdDescription, MdEmail } from "react-icons/md";
import { parseLinks } from "../_utils";

function About() {
  const { pathname } = useLocation();
  return (
    <Window title={pages[pathname.slice(1)].title} bodyClass="window__about">
      <div className="col text--center">
        <img className="avatar" alt="avatar" src={Avatar} />
        <div className="button-group">
          <IconContext.Provider value={{ className: "react-icons" }}>
            <TabLink className="button" href="https://www.visualcv.com/khangnd">
              <MdDescription /> My Resume
            </TabLink>
            <TabLink
              className="button"
              href="mailto:khang.nguyenduyvn@gmail.com?subject=Hey Khang!"
            >
              <MdEmail />
            </TabLink>
          </IconContext.Provider>
        </div>
      </div>
      <div className="col">
        <div className="title">
          <big>
            Hello, I'm <b>Khang</b>
          </big>
          <span>{about.headline}</span>
        </div>
        <div className="intro">{about.intro}</div>
        <div className="intro">
          <h3>Some Facts</h3>
          <ul>
            {about.facts.map((fact, i) => (
              <li key={i}>{parseLinks(fact, about.links)}</li>
            ))}
          </ul>
        </div>
        <div className="intro">
          <h3>Some Trivias</h3>
          <ul>
            {about.trivias.map((trivia, i) => (
              <li key={i}>{parseLinks(trivia, about.links)}</li>
            ))}
          </ul>
        </div>
      </div>
    </Window>
  );
}

export default About;
