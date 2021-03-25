import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const images = [
      '1.png',
      '2.png',
      '3.png',
      '4.png',
      '5.png',
      '6.png',
      '7.png',
      'addastra.png',
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
            <link key={image} rel="prefetch" href={`https://joannerd.github.io/images/${image}`} />
          ))}
          <script
            src="https://kit.fontawesome.com/51da45b07a.js"
            crossOrigin="anonymous"
          />
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
