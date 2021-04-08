import { useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/storage';
import styles from './SocialLinks.module.css';
import { useModal, MODAL_TYPES } from '../ModalProvider';
import * as gtag from '../../lib/gtag';
// import initializeFirebase from '../../lib/firebase';

interface Props {
  hasScrolledToBottom: boolean;
  brushColor: string;
  setColor: (color: string) => void; // eslint-disable-line no-unused-vars
}

interface Colors {
  [name: string]: string;
}

export const COLORS: Colors = {
  yellow: '#F0CF65',
  red: '#D7816A',
  blue: '#74B2CE',
  purple: 'rgb(187, 132, 219)',
  grey: 'grey',
};

const links = [
  {
    href: 'https://github.com/joannerd',
    label: 'GitHub',
    className: 'fab fa-github',
  },
  // {
  //   href: 'https://medium.com/@joannerd',
  //   label: 'Open https://medium.com/@joannerd',
  //   className: 'fab fa-medium',
  // },
  {
    href: 'https://www.linkedin.com/in/joannerd/',
    label: 'LinkedIn',
    className: 'fab fa-linkedin',
  },
  // {
  //   href: 'https://angel.co/joannerd',
  //   label: 'Open https://angel.co/joannerd',
  //   className: 'fab fa-angellist',
  // },
];

const SocialLinks = ({
  hasScrolledToBottom,
}: Props): JSX.Element => {
  const { openModal } = useModal();

  // useEffect(() => {
  //   initializeFirebase();
  // }, []);

  // const saveCanvas = async () => {
  //   const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  //   const dataUrl = canvas.toDataURL('image/png');
  //   const fileName = `${Date.now()}-${navigator.language}-doodle`;
  //   const ref = firebase.storage().ref().child(fileName);
  //   await ref.putString(dataUrl, 'data_url');
  //   const url = await ref.getDownloadURL();
  //   setImageUrl(url);
  //   openModal(MODAL_TYPES.EMAIL_DRAWING);
  // };

  const sendEmailGaEvent = () => {
    openModal(MODAL_TYPES.EMAIL);
    gtag.event({
      action: 'open_contact_form',
      category: 'engagement',
      label: 'Open contact form',
      value: 1,
    });
  };

  // const sendEmailDrawingGaEvent = async () => {
  //   await saveCanvas();
  //   gtag.event({
  //     action: 'email_drawing',
  //     category: 'engagement',
  //     label: 'Open contact form with drawing',
  //     value: 1,
  //   });
  // };

  return (
    <section
      className={hasScrolledToBottom ? styles.hiddenLinks : styles.links}
    >
      <span role="button" tabIndex={0} className={styles.icon} aria-label="Email Joanna">
        <i
          onClick={sendEmailGaEvent}
          role="button"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendEmailGaEvent();
            }
          }}
          key="Email Joanna"
          aria-label="Email Joanna"
          className="fa fa-envelope"
        />
        <span className={styles.tooltip}>Email</span>
      </span>
      {links.map(({ href, label, className }) => (
        <span role="button" key={href} className={styles.icon} aria-label={label}>
          <a
            onClick={() =>
              gtag.event({
                action: 'open_link',
                category: 'engagement',
                label: `Open ${href}`,
                value: 1,
              })
            }
            aria-hidden="false"
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={className} />
            {null}
          </a>
          <span className={styles.tooltip}>{label}</span>
        </span>
      ))}
      {/* <section className={styles.paintBucketSection}>
        <i tabIndex={1} className="fas fa-palette" style={{ color: brushColor }} />
        <article className={styles.paintBucket}>
          {Object.keys(COLORS).map((colorName) => (
            <div
              key={colorName}
              role="button"
              tabIndex={1}
              className={styles.color}
              aria-label={`Change paintbrush color to ${colorName}`}
              style={{ backgroundColor: COLORS[colorName] }}
              onClick={() => setColor(COLORS[colorName])}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setColor(COLORS[colorName]);
                }
              }}
            />
          ))}
        </article>
        <h1 className={styles.paintBucketText}>
          Select a color to start drawing!
        </h1>
      </section>
      <i
        className="fas fa-share-square"
        onClick={sendEmailDrawingGaEvent}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            sendEmailDrawingGaEvent();
          }
        }}
        role="button"
        tabIndex={1}
        key="Email drawing"
        aria-label="Email drawing"
      /> */}
    </section>
  );
};

export default SocialLinks;
