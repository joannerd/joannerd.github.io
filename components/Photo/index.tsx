import Image from 'next/image';
import styles from './Photo.module.css';

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
        href={`https://www.instagram.com/p/${id}`}
        className={styles.project}
        aria-label={`Photo #${id}`}
        target="_blank"
        rel="noopener noreferrer"
        key={id}
      >
        <Image
          priority
          layout="responsive"
          quality={100}
          height={250}
          width={400}
          src={link}
          alt={link}
        />
      </a>
    ))}
  </ul>
);

export default Photo;
