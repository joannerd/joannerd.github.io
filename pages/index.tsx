import styles from '../styles/Profile.module.css';
import Title from '../components/Title';

const Profile = (): JSX.Element => (
  <article className={styles.container}>
    <Title pageTitle="Joanna Chen - Software Engineer | Percussionist" />
    <img className={styles.image} src="/images/waterfall-jo.jpg" alt="Joanna Chen" />
    <section className={styles.profile}>
      <h2 className={styles.subtitle}>Software Engineer</h2>
      <p className={styles.paragraph}>
        Hi I’m Joanna, a software engineer with a diverse professional background 
        ranging between engineering, curriculum writing, music education, event production, 
        and non-profit work. In my day to day, I’m the type of engineer who is an empathetic 
        and reliable team player that takes ownership and enjoys helping out those around me.
      </p>
      <p className={styles.paragraph}>
        Aside from being an engineer, I enjoy cultivating mindfulness through yoga, 
        staying in touch with my musical roots by being an avid concert attendee, 
        and wandering in nature with my senior doggo named Lemon.
      </p>
    </section>
  </article>
);

export default Profile;
