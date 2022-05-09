import React, { useEffect } from "react";
import Head from "next/head";
import { Provider } from "next-auth/client";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "@emotion/react";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import "../styles/globals.css";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

// Import FontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider
          theme={{
            color: {
              brand: "#3399ff",
              brandbg: "#ffecd9",
              brand2: "#ff005a",
              darkgray: "#f4eeea",
              gray: "#838380",
              lightgray: "#6e6e6c",
              white: "#fff;",
              pastelGreen: "#21DBD6",
              event: "#1778b5",
              primary: "#337ab7",
              submit: "#c9302c",
              black: "#000"
            }
          }}
        >
          <Provider
            options={{
              clientMaxAge: 0,
              keepAlive: 0
            }}
            session={pageProps.session}
          >
            <Head>
              {/* <meta
                name="viewport"
                content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
              /> */}
              <meta name="viewport" content="width=360, initial-scale=1" />
              <meta name="mobile-web-app-capable" content="yes" />
            </Head>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
export default MyApp;
