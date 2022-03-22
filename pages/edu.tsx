import { useRouter } from "next/router";
import Window from "../src/components/molecules/Window";
import Layout from "../src/components/pages/Layout";
import { getRoute } from "../src/misc/routes";

export default function Edu(): JSX.Element {
  const { asPath } = useRouter();

  return <Window title={getRoute(asPath)?.title}>Edu</Window>;
}

Edu.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;
