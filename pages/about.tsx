import { useRouter } from "next/router";
import { Flex } from "theme-ui";
import Window from "../src/components/molecules/Window";
import LeftPanel from "../src/components/pages/about/LeftPanel";
import RightPanel from "../src/components/pages/about/RightPanel";
import Layout from "../src/components/pages/Layout";
import { getRoute } from "../src/misc/routes";

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
