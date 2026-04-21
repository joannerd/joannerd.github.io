import styles from '../styles/Profile.module.css';
import Title from '../components/Title';

const Profile = (): React.JSX.Element => (
  <article className={styles.container}>
    <Title pageTitle="Joanna Chen - Software Engineer" />
    <img
      className={styles.image}
      src="/images/waterfall-jo.jpg"
      alt="Joanna Chen"
    />
    <section className={styles.profile}>
      <h2 className={styles.subtitle}>Software Engineer</h2>
      <p className={styles.paragraph}>
        Hello! I’m Joanna, a software engineer with a diverse professional
        background spanning fullstack engineering, curriculum development, music
        education, event production, and nonprofit work.
      </p>
      <p className={styles.paragraph}>
        In my day to day, I’m the type of engineer who is an empathetic and
        reliable team player that takes ownership and enjoys helping out those
        around me. I’m known as a highly dependable, detail-oriented teammate
        with a strong track record of cross-team impact and mentorship.
      </p>
      <p className={styles.paragraph}>
        Aside from being an engineer, I enjoy cultivating mindfulness through
        yoga, staying connected to my musical roots as an avid concert attendee,
        and touching grass with my senior doggo named Lemon.
      </p>
    </section>
  </article>
);

export default Profile;
