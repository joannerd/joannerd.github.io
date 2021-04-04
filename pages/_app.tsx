import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import { init } from 'emailjs-com';
import '../styles/reset.css';
import '../styles/globals.css';
import { pageview } from '../lib/gtag';
import { emailUserId } from '../lib/config';
import styles from '../styles/App.module.css';
import Navbar from '../components/Navbar';
import SocialLinks, { COLORS } from '../components/SocialLinks';
import Footer from '../components/Footer';
import Canvas from '../components/Canvas';
import ModalProvider from '../components/ModalProvider';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [isColorSelected, setIsColorSelected] = useState<boolean>(false)
  const [brushColor, setBrushColor] = useState<string>(COLORS.grey);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState<boolean>(
    false
  );

  const scrollListener = () => {
    const totalHeight = window.innerHeight + window.scrollY;
    const hasScrolled = totalHeight >= document.body.offsetHeight;
    setHasScrolledToBottom(hasScrolled);
  };

  const updateGa = (url: URL) => pageview(url);

  useEffect(() => {
    init(emailUserId);
    window.addEventListener('scroll', scrollListener);
    Router.events.on('routeChangeComplete', updateGa);
    return () => {
      window.removeEventListener('scroll', scrollListener);
      Router.events.off('routeChangeComplete', updateGa);
    };
  }, []);

  return (
    <>
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
      <div className={styles.background}>
        <ModalProvider>
          <Canvas
            brushColor={brushColor}
            isColorSelected={isColorSelected}
            setIsColorSelected={setIsColorSelected}
          />
          <div className={styles.container}>
            <h1 className={styles.title}>Joanna Chen</h1>
            <Navbar />
            <main>
                <Component {...pageProps} />
              <SocialLinks
                hasScrolledToBottom={hasScrolledToBottom}
                brushColor={brushColor}
                setColor={(color: string) => {
                  setBrushColor(color);
                  setIsColorSelected(true);
                }}
              />
            </main>
            <Footer hasScrolledToBottom={hasScrolledToBottom} />
          </div>
        </ModalProvider>
      </div>
    </>
  );
};

export default MyApp;
