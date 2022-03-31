import { useRouter } from "next/router";
import { useState } from "react";
import { Flex } from "theme-ui";
import Window from "../src/components/molecules/Window";
import Layout from "../src/components/pages/Layout";
import ContentPane from "../src/components/pages/work/ContentPane";
import NavigationPane from "../src/components/pages/work/NavigationPane";
import { getRoute } from "../src/misc/routes";

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
