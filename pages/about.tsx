import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Flex, ThemeUICSSObject } from "theme-ui";
import StyledButton from "../src/components/atoms/styled/Button";
import { H2, H3, SubTitle } from "../src/components/atoms/Typography";
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
        <StyledButton
          sx={buttonStyle}
          iconName="AiOutlineMail"
          href="mailto:khang.nguyenduyvn@gmail.com?subject=Hey Khang!"
        >
          Email
        </StyledButton>
      </Box>
    </Box>
  );
};

const RightPanel = () => {
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
};

export default function About(): JSX.Element {
  const { asPath } = useRouter();

  return (
    <Window title={getRoute(asPath)?.title}>
      <Flex sx={{ flexDirection: ["column", null, "row"], height: "100%" }}>
        <LeftPanel />
        <RightPanel />
      </Flex>
    </Window>
  );
}

About.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;
