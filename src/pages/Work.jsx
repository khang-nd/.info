import React from "react";
import "./Work.scss";
import { useLocation } from "react-router-dom";
import Window from "../components/Window";
import Folder from "../components/Folder";
import TabLink from "../components/TabLink";
import Works from "../data/works";
import pages from "../pages";

function getDetails(title) {
  return [...Object.values(Works)].flat().find((work) => work.title === title);
}

function parseLinks(data, workObj) {
  const { links } = workObj;
  return !links
    ? data
    : data.split(/(\$\d+)/g).map((s, i) => {
        const link = links[s];
        return !link ? (
          s
        ) : (
          <TabLink key={i} href={link[1]}>
            {link[0]}
          </TabLink>
        );
      });
}

function Work() {
  const { pathname } = useLocation();
  const [active, setActive] = React.useState(null);
  const activeWork = getDetails(active);
  return (
    <Window title={pages[pathname.slice(1)].title} bodyClass="window__works">
      <div id="details" className={active ? "active" : ""}>
        {activeWork ? (
          <>
            <div className="text--right">
              <TabLink click={() => setActive(null)}>Collapse</TabLink>
            </div>
            <div className="title">
              <big>{activeWork.title}</big>
              <span>{activeWork.timeline}</span>
            </div>
            <div className="paragraph">
              <i>{parseLinks(activeWork.description, activeWork)}</i>
            </div>
            <div className="paragraph">
              {parseLinks(activeWork.remark, activeWork)}
            </div>
            <div className="paragraph">
              {activeWork.activities && [
                "My main activities include:",
                <ul key={null}>
                  {activeWork.activities.map((act, i) => (
                    <li key={i}>{parseLinks(act, activeWork)}</li>
                  ))}
                </ul>,
              ]}
            </div>
            <div className="paragraph">
              {activeWork.techs && [
                "Technology stacks: ",
                parseLinks(activeWork.techs, activeWork),
              ]}
            </div>
          </>
        ) : (
          <span className="placeholder">Select a folder</span>
        )}
      </div>
      <div id="works" className={active ? "" : "active"}>
        {Object.keys(Works).map((key) => (
          <React.Fragment key={key}>
            <h3 className="group">{key}</h3>
            <ul className="list">
              {Works[key].map(({ logo, title }) => (
                <li
                  key={title}
                  className={active === title ? "active" : ""}
                  onClick={() => setActive(title)}
                >
                  <Folder icon={logo} title={title} />
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </Window>
  );
}

export default Work;
