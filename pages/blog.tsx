import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Flex } from "theme-ui";
import { getArticles as getDevtoArticles } from "../services/devto";
import { getArticles as getVibloArticles } from "../services/viblo";
import { BlogPlatform, DevArticle, VibloArticle } from "../services/_type";
import Window from "../src/components/molecules/Window";
import ContentPane from "../src/components/pages/blog/ContentPane";
import NavigationPane from "../src/components/pages/blog/NavigationPane";
import Layout from "../src/components/pages/Layout";
import { getRoute } from "../src/misc/routes";

type PageProps = {
  devtoArticles: DevArticle[];
  vibloArticles: VibloArticle[];
  lastUpdated?: string;
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const [devtoArticles, vibloArticles] = await Promise.all([getDevtoArticles(), getVibloArticles()]);

  return {
    revalidate: 604800,
    props: {
      vibloArticles,
      devtoArticles,
      lastUpdated: new Date().toLocaleDateString(), // this prop shall update per revalidation time met
    },
  };
};

export default function Blog({ devtoArticles, vibloArticles, lastUpdated }: PageProps): JSX.Element {
  const { asPath } = useRouter();
  const [activePlatform, setActivePlatform] = useState<BlogPlatform>(BlogPlatform.Devto);

  return (
    <Window title={getRoute(asPath)?.title}>
      <Flex sx={{ flexDirection: ["column", null, "row"] }}>
        <NavigationPane
          activePlatform={activePlatform}
          lastUpdated={lastUpdated}
          onNavigate={(p) => setActivePlatform(p)}
        />
        <ContentPane activePlatform={activePlatform} articles={{ "Dev.to": devtoArticles, Viblo: vibloArticles }} />
      </Flex>
    </Window>
  );
}

Blog.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;
