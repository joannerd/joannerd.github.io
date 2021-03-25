import styles from './Profile.module.css';

const Profile = (): JSX.Element => (
  <article className={styles.container}>
    <img
      className={styles.image}
      src="/images/boba-jo.jpg"
      alt="Joanna Chen"
    />
    <section className={styles.profile}>
      <h2 className={styles.subtitle}>Software engineer and percussionist</h2>
      <p className={styles.paragraph}>
        Los Angeles based software engineer and percussionist with a diverse
        professional background ranging from the innovative crypto/blockchain
        space, mission-driven EdTech field, and client-oriented live events
        industry.
      </p>
      <p className={styles.paragraph}>
        {"She's currently a software engineer at "}
        <a
          className={styles.link}
          href="http://www.metalpay.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Metal
        </a>
        {', pioneering the exciting world of '}
        <a
          className={styles.link}
          href="https://www.protonchain.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          blockchain DApps
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
          className={styles.link}
          href="https://scmarimba.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Southern California Marimba
        </a>
        , where she volunteers as their Production and Media Manager.
      </p>
    </section>
  </article>
);

export default Profile;
