import { ReactNode } from "react";
import Layout from "../src/components/pages/Layout";

export default function Edu(): JSX.Element {
  return <h2>Edu</h2>;
}

Edu.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;
