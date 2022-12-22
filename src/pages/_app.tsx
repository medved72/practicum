import ReactModal from "react-modal";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  ReactModal.setAppElement("#__next");
  return (
    <>
      <Head>
        <title>Я.Практикум</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1.0, user-scalable=yes"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
