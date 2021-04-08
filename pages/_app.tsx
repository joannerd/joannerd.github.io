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
// import Canvas from '../components/Canvas';
import ModalProvider from '../components/ModalProvider';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [isColorSelected, setIsColorSelected] = useState<boolean>(false);
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
      {/* <div className={styles.background}> */}
        <ModalProvider>
          {/* <Canvas
            brushColor={brushColor}
            isColorSelected={isColorSelected}
            setIsColorSelected={setIsColorSelected}
          /> */}
          <div className={styles.container}>
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
      {/* </div> */}
    </>
  );
};

export default MyApp;
