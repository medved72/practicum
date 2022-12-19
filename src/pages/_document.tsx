import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <title>Я.Практикум</title>
        <link
          rel="shortcut icon"
          href={`${process.env.basePath}/favicon.ico`}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
