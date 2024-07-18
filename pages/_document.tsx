import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Metcon | &copy;</title>
        <meta
          name="description"
          content="METCON Firması sektörde yaklaşık 20 yıllık tecrübeli yönetim kadrosuyla, montaj ve imalat faaliyetlerinde kaliteli ve müşteri odaklı hizmeti ilke edinen Endüstriyel bir firmadır."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
