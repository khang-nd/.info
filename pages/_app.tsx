import { ThemeProvider } from "@emotion/react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalProvider } from "../src/contexts/GlobalContext";
import theme from "../src/themes";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Khang Nguyen Duy | Winport</title>
        <meta
          name="description"
          content="A window-styled portfolio of Khang Nguyen Duy. Inspired by Microsoft's Windows."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css" />
      </Head>
      <GlobalProvider>
        {getLayout(<Component {...pageProps} />)}
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
