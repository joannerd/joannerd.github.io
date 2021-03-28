/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { isProduction, gaTrackingId } from '../lib/config';

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
                src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaTrackingId}');
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
