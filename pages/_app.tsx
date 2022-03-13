import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../src/themes";

function MyApp({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
