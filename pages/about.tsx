import { useRouter } from "next/router";
import Window from "../src/components/molecules/Window";
import Layout from "../src/components/pages/Layout";
import { getRoute } from "./_routes";

export default function About(): JSX.Element {
  const { asPath } = useRouter();

  return <Window title={getRoute(asPath)?.title}>About</Window>;
}

About.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;
