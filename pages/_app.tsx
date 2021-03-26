import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import '../styles/reset.css';
import '../styles/globals.css';
import * as gtag from '../lib/gtag';
import styles from '../styles/App.module.css';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';
import Footer from '../components/Footer';

const isProduction = process.env.NODE_ENV === 'production';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState<boolean>(
    false
  );

  const scrollListener = () => {
    const totalHeight = window.innerHeight + window.scrollY;
    const hasScrolled = totalHeight >= document.body.offsetHeight;
    setHasScrolledToBottom(hasScrolled);
  };

  const updateGa = (url: URL) => {
    if (isProduction) gtag.pageview(url);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    Router.events.on('routeChangeComplete', updateGa);
    return () => {
      window.removeEventListener('scroll', scrollListener);
      Router.events.off('routeChangeComplete', updateGa);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <title>Joanna Chen - Software Engineer | Percussionist</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Joanna Chen is a software
        engineer and percussionist."
        />
        <meta
          name="keywords"
          content="software engineer development metal pay proton blockchain app academy web
          frontend fullstack programming ruby typescript javascript c# node rails react redux
          express .net core percussionist percussion marimba"
        />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <h1 className={styles.title}>Joanna Chen</h1>
      <Navbar />
      <main>
        <SocialLinks hasScrolledToBottom={hasScrolledToBottom} />
        <Component {...pageProps} />
      </main>
      <Footer hasScrolledToBottom={hasScrolledToBottom} />
    </div>
  );
};

export default MyApp;
