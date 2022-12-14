import ReactModal from "react-modal";
import "../styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  ReactModal.setAppElement("#__next");

  return <Component {...pageProps} />;
}
