import { useRouter } from "next/router";
import Window from "../src/components/molecules/Window";
import Layout from "../src/components/pages/Layout";
import { getRoute } from "./_routes";

export default function Work(): JSX.Element {
  const { asPath } = useRouter();

  return <Window title={getRoute(asPath)?.title}>Work</Window>;
}

Work.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;
