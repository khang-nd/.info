import { useRouter } from "next/router";
import Window from "../../src/components/molecules/Window";
import Layout from "../../src/components/pages/Layout";
import { getRoute } from "../../src/misc/routes";

export default function Blogs(): JSX.Element {
  const { asPath } = useRouter();

  return <Window title={getRoute(asPath)?.title}>Blogs</Window>;
}

Blogs.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;
