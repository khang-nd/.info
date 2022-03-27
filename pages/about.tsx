import { alpha } from "@theme-ui/color";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, ThemeUICSSObject } from "theme-ui";
import StyledButton from "../src/components/atoms/styled/Button";
import { H3 } from "../src/components/atoms/Typography";
import Window from "../src/components/molecules/Window";
import Layout from "../src/components/pages/Layout";
import about from "../src/data/about";
import { getRoute } from "../src/misc/routes";
import { parseLinks } from "../src/misc/utils";

const LeftPanel = () => {
  const avatarSize = 220;
  const avatarUrl = `https://gravatar.com/avatar/7a054fbf58c9fe4f7dadb07091fe4cff?s=${avatarSize}`;

  const buttonStyle: ThemeUICSSObject = {
    mt: 3,
    mx: [1, null, 0],
    display: ["inline-block", null, "flex"],
    width: ["unset", null, "100%"],
  };

  return (
    <Box sx={{ textAlign: "center", flexShrink: 0 }}>
      <Image src={avatarUrl} alt="Avatar Khang" width={avatarSize} height={avatarSize} quality={100} />
      <Box>
        <StyledButton sx={buttonStyle} iconName="AiOutlineProfile" href="https://www.visualcv.com/khangnd">
          Resume
        </StyledButton>
        <StyledButton sx={buttonStyle} iconName="AiOutlineMail" href="mailto:khang.nguyenduyvn@gmail.com">
          Email
        </StyledButton>
      </Box>
    </Box>
  );
};

const RightPanel = () => {
  const containerStyle: ThemeUICSSObject = {
    bg: alpha("primary", 0.06),
    p: 4,
    mt: [4, null, 0],
    ml: [null, null, 4],
    height: "100%",
    textAlign: "justify",
  };

  const listStyle: ThemeUICSSObject = {
    mb: 5,
    ml: 5,
    listStyle: "initial",
  };

  return (
    <div sx={containerStyle}>
      <h2 sx={{ fontSize: "200%", textAlign: ["center", null, "unset"] }}>
        Hello, I&apos;m <span sx={{ color: "red", fontWeight: "bold" }}>Khang</span>
      </h2>
      <p sx={{ color: "muted", mb: 5, textAlign: ["center", null, "unset"] }}>{about.headline}</p>
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
};

export default function About(): JSX.Element {
  const { asPath } = useRouter();
  const bodyStyle: ThemeUICSSObject = {
    display: "flex",
    flexDirection: ["column", null, "row"],
  };

  return (
    <Window title={getRoute(asPath)?.title} bodyStyle={bodyStyle}>
      <LeftPanel />
      <RightPanel />
    </Window>
  );
}

About.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;
