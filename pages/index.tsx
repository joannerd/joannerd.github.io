import styles from '../styles/Profile.module.css';
import * as gtag from '../lib/gtag';
import Title from '../components/Title';

const Profile = (): JSX.Element => (
  <article className={styles.container}>
    <Title pageTitle="Joanna Chen - Software Engineer | Percussionist" />
    <img className={styles.image} src="/images/boba-jo.jpg" alt="Joanna Chen" />
    <section className={styles.profile}>
      <h2 className={styles.subtitle}>Software Engineer</h2>
      <p className={styles.paragraph}>
        Los Angeles based software engineer with a diverse professional
        background ranging from the innovative blockchain space, mission-driven
        EdTech field, rigorous classical music craft, and client-oriented
        hospitality industry.
      </p>
      <p className={styles.paragraph}>
        On the weekends, Joanna volunteers as the Operations Manager of
        <a
          onClick={() =>
            gtag.event({
              action: 'open_link',
              category: 'engagement',
              label: 'Visit https://scmarimba.org/',
              value: 1,
            })
          }
          className={styles.link}
          href="https://scmarimba.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' Southern California Marimba'}
        </a>
        , where she connects her crafty coding skills to her musical roots by
        architecting internal tools to streamline administrative processes. As
        her hobbies, Joanna enjoys hiking, karaoke, concerts, gaming, learning,
        and getting into that zen work-mode at cafes/breweries!
      </p>
    </section>
  </article>
);

export default Profile;
