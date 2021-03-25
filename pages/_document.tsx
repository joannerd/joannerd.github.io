/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';

const isProduction = process.env.NODE_ENV === 'production';

class MyDocument extends Document {
  render() {
    const images = [
      '1.png',
      '2.png',
      '3.png',
      '4.png',
      '5.png',
      '6.png',
      'adastra.png',
      'boba-jo.jpg',
      'boopblocks.gif',
      'brewer.gif',
      'owlscrolls.png',
      'pomoplan.gif',
      'synewaveshi.gif',
    ];

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <title>Joanna Chen - Software Engineer | Percussionist</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Joanna Chen is a software
          engineer and percussionist." />
          <meta name="keywords" content="software engineer development app academy web
          frontend fullstack programming ruby javascript c# node rails react redux
          express .net core percussionist percussion marimba"/>
          <link rel='icon' href='favicon.ico' type='image/x-icon' />
          {images.map((image) => (
            <link
              key={image}
              rel="prefetch"
              href={`https://joannerd.github.io/images/${image}`}
            />
          ))}
          <script
            src="https://kit.fontawesome.com/51da45b07a.js"
            crossOrigin="anonymous"
          />
          {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', ${process.env.NEXT_PUBLIC_GA_TRACKING_ID});
              `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
