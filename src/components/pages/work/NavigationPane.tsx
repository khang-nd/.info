import { motion } from "framer-motion";
import React from "react";
import { Flex } from "theme-ui";
import { fade } from "../../../animations/fade";
import work from "../../../data/work";
import useInBreakpoint from "../../../hooks/useInBreakpoint";
import Button from "../../atoms/Button";
import { List } from "../../atoms/Container";
import ReactIcon from "../../atoms/IconReact";
import { H3 } from "../../atoms/Typography";

type NavigationPaneProps = {
  title?: string;
  onNavigate: (item: string) => void;
};

export default function NavigationPane({ title, onNavigate }: NavigationPaneProps) {
  const isMobile = useInBreakpoint(0);

  return (
    <div>
      {Object.keys(work).map((category, i) => (
        <React.Fragment key={i}>
          <H3>{category}</H3>
          <List sx={{ mb: 5, display: ["grid", null, "block"], gridTemplateColumns: "1fr 1fr 1fr" }}>
            {work[category].map((job, j) => {
              const isActive = title === job.title;
              return (
                <li key={j}>
                  <Button unsetStyle sx={{ py: 1, px: 1, pr: 4 }} onClick={() => onNavigate(job.title)}>
                    <Flex as="span" sx={{ alignItems: "center", zIndex: 1 }}>
                      <ReactIcon iconName={isActive ? "FcOpenedFolder" : "FcFolder"} size={isMobile ? 24 : 32} />
                      <span sx={{ flex: 1, ml: [2, null, 3], fontSize: [14, null, "initial"] }}>{job.title}</span>
                    </Flex>
                    {isActive && (
                      <motion.span
                        layoutId="navigation-indicator"
                        {...fade}
                        sx={{
                          bg: "background",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          zIndex: 0,
                        }}
                      />
                    )}
                  </Button>
                </li>
              );
            })}
          </List>
        </React.Fragment>
      ))}
    </div>
  );
}
