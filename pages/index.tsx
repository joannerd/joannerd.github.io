import styles from '../styles/Profile.module.css';
import Title from '../components/Title';

const Profile = (): JSX.Element => (
  <article className={styles.container}>
    <Title pageTitle="Joanna Chen - Software Engineer | Percussionist" />
    <img className={styles.image} src="/images/boba-jo.jpg" alt="Joanna Chen" />
    <section className={styles.profile}>
      <h2 className={styles.subtitle}>Software Engineer</h2>
      <p className={styles.paragraph}>
        Hi I’m Joanna, a software engineer with a diverse professional
        background ranging from full-stack software engineering, education,
        percussion, and event production. In my day to day, I’m the type of
        engineer who is an empathetic and patient teammate, an autonomous
        critical thinker, a motivated constant learner, and an active
        contributor who takes ownership and enjoys collaboration.
      </p>
      <p className={styles.paragraph}>
        Aside from being an engineer, I coach high school percussion ensemble
        stay in touch with my musical roots as a marimba/voice artist. I spend
        spend my free time as a dog mom and avid concert attendee who loves
        exploring breweries, walking in nature, and playing board games.
      </p>
    </section>
  </article>
);

export default Profile;
