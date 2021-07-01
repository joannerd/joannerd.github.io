import styles from '../styles/Profile.module.css';
import * as gtag from '../lib/gtag';
import Title from '../components/Title';

const Profile = (): JSX.Element => (
  <article className={styles.container}>
    <Title pageTitle="Joanna Chen - Software Engineer | Percussionist" />
    <img className={styles.image} src="/images/boba-jo.jpg" alt="Joanna Chen" />
    <section className={styles.profile}>
      <h2 className={styles.subtitle}>Software engineer and percussionist</h2>
      <p className={styles.paragraph}>
        Los Angeles based software engineer and percussionist with a diverse
        professional background ranging from the innovative crypto/blockchain
        space, mission-driven EdTech field, and client-oriented live events
        industry.
      </p>
      <p className={styles.paragraph}>
        {
          "She's currently a software engineer at Metal, pioneering the exciting world of "
        }
        <a
          onClick={() =>
            gtag.event({
              action: 'open_link',
              category: 'engagement',
              label: 'Visit https://www.protonchain.com/',
              value: 1,
            })
          }
          className={styles.link}
          href="https://www.protonchain.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          blockchain dApps
        </a>
        ! As a former concert producer, she has an eye for elegant and
        functional design as well as a knack for clear and effective
        communication.
      </p>
      <p className={styles.paragraph}>
        {
          'On the weekends, she connects her crafty coding skills to her musical roots by architecting internal tools for '
        }
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
          Southern California Marimba
        </a>
        , where she volunteers as their Operations Manager.
      </p>
    </section>
  </article>
);

export default Profile;
