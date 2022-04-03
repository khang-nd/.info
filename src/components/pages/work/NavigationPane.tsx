import React from "react";
import work from "../../../data/work";
import { List } from "../../atoms/Container";
import NavigationPaneItem from "../../atoms/NavigationPaneItem";
import { H3 } from "../../atoms/Typography";

type NavigationPaneProps = {
  title?: string;
  onNavigate: (item: string) => void;
};

export default function NavigationPane({ title, onNavigate }: NavigationPaneProps) {
  return (
    <div sx={{ minWidth: 200 }}>
      {Object.keys(work).map((category, i) => (
        <React.Fragment key={i}>
          <H3>{category}</H3>
          <List sx={{ mb: 5, display: ["grid", null, "block"], gridTemplateColumns: "1fr 1fr 1fr" }}>
            {work[category].map((job, j) => (
              <NavigationPaneItem
                key={j}
                icon={["FcFolder", "FcOpenedFolder"]}
                text={job.title}
                isActive={title === job.title}
                onClick={() => onNavigate(job.title)}
              />
            ))}
          </List>
        </React.Fragment>
      ))}
    </div>
  );
}
