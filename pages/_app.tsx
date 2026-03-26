import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import '../styles/reset.css';
import '../styles/globals.css';
import { pageview } from '../lib/gtag';
import styles from '../styles/App.module.css';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';
import Footer from '../components/Footer';

const MyApp = ({ Component, pageProps }: AppProps): React.JSX.Element => {
  const [hasScrolledToBottom, setHasScrolledToBottom] =
    useState<boolean>(false);

  const scrollListener = () => {
    const totalHeight = window.innerHeight + window.scrollY;
    const hasScrolled = totalHeight >= document.body.offsetHeight;
    setHasScrolledToBottom(hasScrolled);
  };

  const updateGa = (url: URL) => pageview(url);

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
      <Navbar />
      <main>
        <Component {...pageProps} />
        <SocialLinks hasScrolledToBottom={hasScrolledToBottom} />
      </main>
      <Footer hasScrolledToBottom={hasScrolledToBottom} />
    </div>
  );
};

export default MyApp;
