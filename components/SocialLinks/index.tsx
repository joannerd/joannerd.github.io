import styles from './SocialLinks.module.css';
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

const SocialLinks = ({ hasScrolledToBottom }: Props): React.JSX.Element => {
  return (
    <section
      className={hasScrolledToBottom ? styles.hiddenLinks : styles.links}
    >
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
