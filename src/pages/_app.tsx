import ReactModal from "react-modal";
import type { AppProps } from "next/app";
import "../styles/globals.scss";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  ReactModal.setAppElement("#__next");
  return (
    <>
      <Head>
        <title>Я.Практикум</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
