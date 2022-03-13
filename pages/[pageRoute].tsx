import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import TaskbarItem from "../src/components/molecules/TaskbarItem";
import Window from "../src/components/molecules/Window";
import Layout from "../src/components/pages/Layout";
import pages, { Page } from "./pageRoutes";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: pages.map(({ path }) => path),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

const DynamicPage: NextPage = () => {
  const { asPath } = useRouter();
  const page = pages.find(({ path }) => path === asPath) as Page;
  const Page = page.component;

  const desktop = (
    <Window title={page.title}>
      <Page />
    </Window>
  );

  const taskbar = <TaskbarItem title={page.title} />;

  return <Layout desktop={desktop} taskbar={taskbar} />;
};

export default DynamicPage;
