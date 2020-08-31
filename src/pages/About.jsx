import React from "react";
import "./About.scss";
import Window from "../components/Window";
import TabLink from "../components/TabLink";
import { useLocation } from "react-router-dom";
import { Avatar } from "../assets";
import pages from "../pages";
import { IconContext } from "react-icons";
import { MdDescription, MdEmail } from "react-icons/md";

function About() {
  const { pathname } = useLocation();
  return (
    <Window title={pages[pathname.slice(1)].title}>
      <div className="col text--center">
        <img className="avatar" alt="avatar" src={Avatar} />
        <div className="button-group">
          <IconContext.Provider value={{ className: "react-icons" }}>
            <TabLink className="button" href="#">
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
          <span>A software developer, front-end enthusiast.</span>
        </div>
        <div className="intro">
          I'm a full-time software developer who has a one-sided love for visual
          and design. I enjoy developing visual-related stuffs, reading random
          tech blogs and getting inspired by the awesomeness.
        </div>
        <div className="intro">
          <h3>Some Facts</h3>
          <ul>
            <li>
              My full name is Khang Nguyen Duy, but I prefer just{" "}
              <TabLink href="https://www.howtopronounce.com/khang">
                Khang
              </TabLink>
              .
            </li>
            <li>I was born on a wonderful day in 1995.</li>
            <li>I am a citizen of Vietnam, living in its largest city.</li>
            <li>I am of an introvert type.</li>
            <li>
              I bear an unsettled love for visual, and you will keep hearing
              this from me.
            </li>
          </ul>
        </div>
        <div className="intro">
          <h3>Some Trivias</h3>
          <ul>
            <li>Baseketball is my favorite sport.</li>
            <li>
              I love winter, but only on screen. I can hardly handle the cold in
              actuality.
            </li>
            <li>I served the country in a local militia for 2 years.</li>
            <li>
              There is this video game franchise that has a major impact on my
              life called Fire Emblem. And I have been serving its{" "}
              <TabLink href="https://fireemblem.fandom.com/">
                biggest knowledge base
              </TabLink>{" "}
              as an admin for several years.
            </li>
          </ul>
        </div>
      </div>
    </Window>
  );
}

export default About;
