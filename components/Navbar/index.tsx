import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const routes = [
  {
    name: 'Profile',
    path: '/',
  },
  {
    name: 'Resume',
    path: '/resume',
  },
  {
    name: 'Code',
    path: '/code',
  },
  {
    name: 'Music',
    path: '/music',
  },
  {
    name: 'Photo',
    path: '/photo',
  },
];

const Navbar = (): JSX.Element => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      {routes.map(({ name, path }) => {
        const isActive = router.pathname === path;
        return (
          <button
            type="button"
            onClick={() => router.push(path)}
            name={name}
            key={name}
            className={isActive ? styles.activeButton : styles.button}
          >
            {name}
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;
