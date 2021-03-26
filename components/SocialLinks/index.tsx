import styles from './SocialLinks.module.css';
import * as gtag from '../../lib/gtag';

const links = [
  {
    href: 'mailto:joannerdchen@gmail.com',
    label: 'Email Joanna at joannerdchen@gmail.com',
    className: 'fa fa-envelope',
  },
  {
    href: 'https://github.com/joannerd',
    label: "Visit Joanna's Github at https://github.com/joannerd",
    className: 'fab fa-github',
  },
  {
    href: 'https://medium.com/@joannerd',
    label: "Visit Joanna's Medium at https://medium.com/@joannerd",
    className: 'fab fa-medium',
  },
  {
    href: 'https://www.linkedin.com/in/joannerd/',
    label: "Visit Joanna's LinkedIn at https://www.linkedin.com/in/joannerd/",
    className: 'fab fa-linkedin',
  },
  {
    href: 'https://angel.co/joannerd',
    label: "Visit Joanna's Angel List at https://angel.co/joannerd",
    className: 'fab fa-angellist',
  },
];

const SocialLinks = ({
  hasScrolledToBottom,
}: {
  hasScrolledToBottom: boolean;
}): JSX.Element => (
  <section className={hasScrolledToBottom ? styles.hiddenLinks : styles.links}>
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
        aria-hidden
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

export default SocialLinks;
