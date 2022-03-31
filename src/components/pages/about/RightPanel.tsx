import { ThemeUICSSObject } from "theme-ui";
import about from "../../../data/about";
import { parseLinks } from "../../../misc/utils";
import { H2, H3, SubTitle } from "../../atoms/Typography";

export default function RightPanel() {
  const containerStyle: ThemeUICSSObject = {
    bg: "background",
    p: 4,
    mt: [4, null, 0],
    ml: [null, null, 4],
    textAlign: "justify",
  };

  const listStyle: ThemeUICSSObject = {
    mb: 5,
    ml: 5,
    listStyle: "initial",
  };

  const alignment: ThemeUICSSObject = { textAlign: ["center", null, "unset"] };

  return (
    <div sx={containerStyle}>
      <H2 style={alignment}>
        Hello, I&apos;m <span sx={{ color: "red", fontWeight: "bold" }}>Khang</span>
      </H2>
      <SubTitle style={alignment}>{about.headline}</SubTitle>
      <p sx={{ mb: 5 }}>{about.intro}</p>
      <H3>Some facts</H3>
      <ul sx={listStyle}>
        {about.facts.map((fact, index) => (
          <li key={index}>{parseLinks(fact, about.links)}</li>
        ))}
      </ul>
      <H3>Some trivias</H3>
      <ul sx={listStyle}>
        {about.trivias.map((trivia, index) => (
          <li key={index}>{parseLinks(trivia, about.links)}</li>
        ))}
      </ul>
    </div>
  );
}
