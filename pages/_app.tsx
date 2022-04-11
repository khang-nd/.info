import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "theme-ui";
import { GlobalProvider } from "../src/contexts/GlobalContext";
import theme from "../src/themes";
import "../src/themes/global.css";

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
      </Head>
      <GlobalProvider>{getLayout(<Component {...pageProps} />)}</GlobalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
