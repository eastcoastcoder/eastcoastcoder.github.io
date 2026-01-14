import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/static/images/2.jpeg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
