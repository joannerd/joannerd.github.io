import styles from '../styles/Photo.module.css';
import * as gtag from '../lib/gtag';

const photos = [
  {
    link: '/images/1.png',
    id: 'B7FMuw2AOaT',
  },
  {
    link: '/images/2.png',
    id: 'B6zNMYGAyBC',
  },
  {
    link: '/images/3.png',
    id: 'B69tjFagAOT',
  },
  {
    link: '/images/4.png',
    id: 'Bnv_r6Bjmn4',
  },
  {
    link: '/images/5.png',
    id: 'B641_kjAQNM',
  },
  {
    link: '/images/6.png',
    id: 'BlCUgmrjFhM',
  },
];

const Photo = (): JSX.Element => (
  <ul className={styles.projects}>
    {photos.map(({ link, id }) => (
      <a
        onClick={() =>
          gtag.event({
            action: 'visit_instagram',
            category: 'engagement',
            label: `Visit https://www.instagram.com/p/${id}`,
            value: 1,
          })
        }
        href={`https://www.instagram.com/p/${id}`}
        className={styles.project}
        aria-label={`Photo #${id}`}
        target="_blank"
        rel="noopener noreferrer"
        key={id}
      >
        <img className={styles.image} src={link} alt={link} />
      </a>
    ))}
  </ul>
);

export default Photo;
