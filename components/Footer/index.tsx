import styles from './Footer.module.css';

const Footer = ({
  hasScrolledToBottom,
}: {
  hasScrolledToBottom: boolean;
}): JSX.Element => (
  <footer className={hasScrolledToBottom ? styles.footer : styles.hiddenFooter}>
    &copy;
    {` ${new Date().getFullYear()} Joanna Chen · LA`}
  </footer>
);

export default Footer;
