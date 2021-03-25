import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
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
    }
  }, []);

  return (
    <div className={styles.container}>
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
