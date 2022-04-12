import { AnimatePresence } from "framer-motion";
import { ThemeUICSSObject } from "theme-ui";
import { fade } from "../../../animations/fade";
import work from "../../../data/work";
import useMatchTheme from "../../../hooks/useMatchTheme";
import { parseLinks } from "../../../misc/utils";
import { ThemeMode } from "../../../themes";
import { MotionBox } from "../../atoms/Container";
import { H2, P, SubTitle } from "../../atoms/Typography";

export default function ContentPane({ title }: { title?: string }) {
  const alignment: ThemeUICSSObject = { textAlign: ["center", null, "unset"] };
  const listStyle: ThemeUICSSObject = { listStyle: "initial", ml: 5 };

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
          <>
            <P style={{ mt: 4, mb: 2 }}>My main activities include:</P>
            <ul sx={{ ...listStyle, mb: 4 }}>
              {job.activities.map((act, i) => (
                <li key={i}>{parseLinks(act, job.links)}</li>
              ))}
            </ul>
          </>
        )}
        {job?.techs &&
          (typeof job.techs === "string" ? (
            <P>Techs used: {parseLinks(job.techs, job.links)}</P>
          ) : (
            <>
              <P>Techs used: </P>
              <ul sx={listStyle}>
                {job.techs.map((tech, i) => (
                  <li key={i}>{parseLinks(tech, job.links)}</li>
                ))}
              </ul>
            </>
          ))}
      </MotionBox>
    );
  }

  return (
    <div
      sx={{
        bg: useMatchTheme(ThemeMode.Tron) ? "transparent" : "background",
        px: 5,
        py: 4,
        flex: 1,
        zIndex: 1,
      }}
    >
      <AnimatePresence exitBeforeEnter>{content}</AnimatePresence>
    </div>
  );
}
