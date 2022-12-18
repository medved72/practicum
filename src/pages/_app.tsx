import ReactModal from "react-modal";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  ReactModal.setAppElement("#__next");
  return <Component {...pageProps} />;
}
