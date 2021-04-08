import Head from 'next/head';

const Title = ({ pageTitle }: { pageTitle: string }): JSX.Element => (
  <Head>
    <title>{pageTitle}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content={pageTitle} key="title" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="apple-mobile-web-app-status-bar" content="#ffffff" />
    <meta
      name="description"
      content="Joanna Chen: Los Angeles based software engineer and percussionist with a diverse
    professional background."
    />
    <meta
      name="keywords"
      content="software engineer development metal pay proton blockchain XPR MTL NFT app academy web
      frontend fullstack programming ruby typescript javascript c# node rails react redux
      express .net core percussionist percussion marimba"
    />
    <link rel="manifest" href="/manifest.json" />
    <link rel="canonical" href="https://joannerd.github.io/" />
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" href="/logo.png" />
  </Head>
);

export default Title;
