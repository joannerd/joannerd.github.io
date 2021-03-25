import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import '../styles/reset.css';
import '../styles/globals.css';
import * as gtag from '../lib/gtag';

const isProduction = process.env.NODE_ENV === 'production';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const updateGa = (url: URL) => {
    if (isProduction) gtag.pageview(url);
  };

  useEffect(() => {
    Router.events.on('routeChangeComplete', updateGa);
    return () => {
      Router.events.off('routeChangeComplete', updateGa);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
