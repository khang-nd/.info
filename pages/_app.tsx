import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { ThemeProvider } from "theme-ui";
import { GlobalProvider } from "../src/contexts/GlobalContext";
import meta from "../src/data/meta";
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
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-165934858-2" strategy="afterInteractive" />
      <Script id="gg-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());

          gtag('config', 'UA-165934858-2');`}
      </Script>

      <GlobalProvider>{getLayout(<Component {...pageProps} />)}</GlobalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
