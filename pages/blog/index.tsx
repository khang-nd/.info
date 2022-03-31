import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Flex } from "theme-ui";
import { getArticles as getDevArticles } from "../../services/devto";
import { getArticles as getVibloArticles } from "../../services/viblo";
import { DevArticle, VibloArticle, VibloResponse } from "../../services/_type";
import Window from "../../src/components/molecules/Window";
import NavigationPane from "../../src/components/pages/blog/NavigationPane";
import Layout from "../../src/components/pages/Layout";
import { getRoute } from "../../src/misc/routes";

type PageProps = {
  devArticles?: DevArticle[];
  vibloArticles?: VibloResponse<VibloArticle[]>;
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const devArticles = await getDevArticles();
  const vibloArticles = await getVibloArticles();

  return {
    props: { devArticles, vibloArticles },
  };
};

export default function Blog({ devArticles: devto, vibloArticles: viblo }: PageProps): JSX.Element {
  const { asPath } = useRouter();
  const [activeArticle, setActiveArticle] = useState("");

  return (
    <Window title={getRoute(asPath)?.title}>
      <Flex sx={{ height: "100%" }}>
        <NavigationPane
          articles={{ devto, viblo: viblo?.data }}
          activeArticle={activeArticle}
          onNavigate={(articleSlug) => setActiveArticle(articleSlug)}
        />
      </Flex>
    </Window>
  );
}

Blog.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;
