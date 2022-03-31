import { AnimatePresence } from "framer-motion";
import { ThemeUICSSObject } from "theme-ui";
import { fade } from "../../../animations/fade";
import work from "../../../data/work";
import { parseLinks } from "../../../misc/utils";
import { MotionBox } from "../../atoms/Container";
import { H2, P, SubTitle } from "../../atoms/Typography";

export default function ContentPane({ title }: { title?: string }) {
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
}