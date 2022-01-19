import type { NextPage } from "next";
import Head from "next/head";
import Link from "../src/components/Link";
import Desktop from "../src/layouts/Desktop";
import Taskbar from "../src/layouts/Taskbar";

const links = [
  { path: "/about", text: "About Me" },
  { path: "/work", text: "My Work" },
  { path: "/exp", text: "Experience" },
  { path: "/edu", text: "Education" },
];

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Khang Nguyen Duy | Winport</title>
        <meta
          name="description"
          content="A window-styled portfolio of Khang Nguyen Duy. Inspired by Microsoft's Windows."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Desktop>
        {links.map(({ path, text }) => (
          <Link key={path} href={path} text={text}></Link>
        ))}
      </Desktop>
      <Taskbar />
    </main>
  );
};

export default Home;
