import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Flex, ThemeUICSSObject } from "theme-ui";
import { fade } from "../src/animations/fade";
import Button from "../src/components/atoms/Button";
import { List, MotionBox } from "../src/components/atoms/Container";
import ReactIcon from "../src/components/atoms/IconReact";
import { H2, H3, P, SubTitle } from "../src/components/atoms/Typography";
import Window from "../src/components/molecules/Window";
import Layout from "../src/components/pages/Layout";
import work from "../src/data/work";
import useInBreakpoint from "../src/hooks/useInBreakpoint";
import { getRoute } from "../src/misc/routes";
import { parseLinks } from "../src/misc/utils";

const NavigationPane = ({ title, onNavigate }: { title?: string; onNavigate: (item: string) => void }) => {
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
};

const ContentPane = ({ title }: { title?: string }) => {
  const alignment: ThemeUICSSObject = { textAlign: ["center", null, "unset"] };

  let content = (
    <MotionBox {...fade} sx={{ color: "muted", textAlign: "center" }}>
      Select a folder to view
    </MotionBox>
  );

  if (title) {
    const job = Object.values(work)
      .flat()
      .find((job) => job.title === title);

    content = (
      <MotionBox key={title} {...fade} sx={{ textAlign: "justify" }}>
        <H2 style={alignment}>{job?.title}</H2>
        <SubTitle style={alignment}>{job?.timeline}</SubTitle>
        <P style={{ fontStyle: "italic", mb: 5 }}>{job?.description}</P>
        {job?.remark && <P>{parseLinks(job.remark, job.links)}</P>}
        {job?.activities && (
          <P>
            My main activities include:
            <ul sx={{ listStyle: "initial", ml: 5, mt: 3 }}>
              {job.activities.map((act, i) => (
                <li key={i}>{parseLinks(act, job.links)}</li>
              ))}
            </ul>
          </P>
        )}
        {job?.techs && <P>Techs used: {parseLinks(job.techs, job.links)}</P>}
      </MotionBox>
    );
  }

  return (
    <div sx={{ bg: "background", px: 5, py: 4, flex: 1, zIndex: 1 }}>
      <AnimatePresence exitBeforeEnter>{content}</AnimatePresence>
    </div>
  );
};

export default function Work(): JSX.Element {
  const { asPath } = useRouter();
  const [activeItem, setActiveItem] = useState<string>();

  return (
    <Window title={getRoute(asPath)?.title}>
      <Flex sx={{ height: "100%", flexDirection: ["column", null, "row"] }}>
        <NavigationPane title={activeItem} onNavigate={(item) => setActiveItem(item)} />
        <ContentPane title={activeItem} />
      </Flex>
    </Window>
  );
}

Work.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;
