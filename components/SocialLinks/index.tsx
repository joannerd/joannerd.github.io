import styles from './SocialLinks.module.css';
import { useModal, MODAL_TYPES } from '../ModalProvider';
import * as gtag from '../../lib/gtag';

interface Props {
  hasScrolledToBottom: boolean;
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
  {
    href: 'https://www.linkedin.com/in/joannerd/',
    label: 'LinkedIn',
    className: 'fab fa-linkedin',
  },
];

const SocialLinks = ({ hasScrolledToBottom }: Props): JSX.Element => {
  const { openModal } = useModal();

  const sendEmailGaEvent = () => {
    openModal(MODAL_TYPES.EMAIL);
    gtag.event({
      action: 'open_contact_form',
      category: 'engagement',
      label: 'Open contact form',
      value: 1,
    });
  };

  return (
    <section
      className={hasScrolledToBottom ? styles.hiddenLinks : styles.links}
    >
      <span role="button" tabIndex={-1} className={styles.icon} aria-hidden>
        <i
          tabIndex={0}
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
        <span
          role="button"
          key={href}
          className={styles.icon}
          aria-label={label}
        >
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
    </section>
  );
};

export default SocialLinks;
