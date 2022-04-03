import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Flex } from "theme-ui";
import {
  DevArticle,
  GetDevtoArticlesDocument,
  GetDevtoArticlesQuery,
  GetVibloArticlesDocument,
  GetVibloArticlesQuery,
  VibloArticle
} from "../services/graphql/generated";
import client from "../services/_apollo";
import Window from "../src/components/molecules/Window";
import ContentPane from "../src/components/pages/blog/ContentPane";
import NavigationPane from "../src/components/pages/blog/NavigationPane";
import Layout from "../src/components/pages/Layout";
import { getRoute } from "../src/misc/routes";
import { BlogPlatform } from "../src/misc/types";

type PageProps = {
  devtoArticles: DevArticle[];
  vibloArticles: VibloArticle[];
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  // An overkill using GraphQL to fetch data, for learning purpose.
  // Could achieve the same with much less effort using the REST APIs.
  const queryVibloArticles = client.query<GetVibloArticlesQuery>({ query: GetVibloArticlesDocument });
  const queryDevtoArticles = client.query<GetDevtoArticlesQuery>({ query: GetDevtoArticlesDocument });
  const [vibloResponse, devtoResponse] = await Promise.all([queryVibloArticles, queryDevtoArticles]);

  return {
    revalidate: 604800,
    props: {
      vibloArticles: vibloResponse?.data.vibloArticles,
      devtoArticles: devtoResponse?.data.devtoArticles,
    },
  };
};

export default function Blog({ devtoArticles, vibloArticles }: PageProps): JSX.Element {
  const { asPath } = useRouter();
  const [activePlatform, setActivePlatform] = useState<BlogPlatform>(BlogPlatform.Devto);

  return (
    <Window title={getRoute(asPath)?.title}>
      <Flex sx={{ height: "100%", flexDirection: ["column", null, "row"] }}>
        <NavigationPane activePlatform={activePlatform} onNavigate={(platform) => setActivePlatform(platform)} />
        <ContentPane activePlatform={activePlatform} articles={{ "Dev.to": devtoArticles, Viblo: vibloArticles }} />
      </Flex>
    </Window>
  );
}

Blog.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;
