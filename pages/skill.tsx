import Layout from "../src/components/pages/Layout";

export default function Skill(): JSX.Element {
  return <h2>Skill</h2>;
}

Skill.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;
