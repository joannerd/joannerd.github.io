import styles from './SocialLinks.module.css';
import * as gtag from '../../lib/gtag';
import { useModal } from '../ModalProvider/index';

const SocialLinks = ({
  hasScrolledToBottom,
}: {
  hasScrolledToBottom: boolean;
}): JSX.Element => {
  const { openModal } = useModal();

  const links = [
    {
      href: 'https://github.com/joannerd',
      label: 'Open https://github.com/joannerd',
      className: 'fab fa-github',
    },
    {
      href: 'https://medium.com/@joannerd',
      label: 'Open https://medium.com/@joannerd',
      className: 'fab fa-medium',
    },
    {
      href: 'https://www.linkedin.com/in/joannerd/',
      label: 'Open https://www.linkedin.com/in/joannerd/',
      className: 'fab fa-linkedin',
    },
    {
      href: 'https://angel.co/joannerd',
      label: 'Open https://angel.co/joannerd',
      className: 'fab fa-angellist',
    },
  ];

  const sendEmailGaEvent = () => {
    openModal();
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
      <i
        onClick={sendEmailGaEvent}
        role="button"
        tabIndex={1}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            sendEmailGaEvent();
          }
        }}
        key="Email Joanna at joannerdchen@gmail.com"
        aria-label="Email Joanna at joannerdchen@gmail.com"
        className="fa fa-envelope"
      />
      {links.map(({ href, label, className }) => (
        <a
          onClick={() =>
            gtag.event({
              action: 'open_link',
              category: 'engagement',
              label: `Open ${href}`,
              value: 1,
            })
          }
          key={href}
          href={href}
          aria-label={label}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {null}
        </a>
      ))}
    </section>
  );
};

export default SocialLinks;
