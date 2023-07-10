import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();

  console.log('Pathname ');
  console.log(router.pathname);

  return (
    <nav className={styles.nav}>
      <style jsx>
        {`
          .test {
            color: green;
          }
        `}
      </style>
      <style jsx global>
        {`
          a {
            text-decoration: none;
          }
          p {
            background-color: lightblue;
          }
        `}
      </style>
      <Link href="/">
        <p
          className={`${styles.backgrey} ${
            router.pathname === '/' ? styles.active : styles.noneactive
          }`}
        >
          Home
        </p>
      </Link>
      <Link href="/about">
        <p
          className={[
            styles.backgrey,
            router.pathname === '/about' ? styles.active : styles.noneactive,
          ].join(' ')}
        >
          About
        </p>
      </Link>

      <Link href="/category">
        <p className="test">Category</p>
      </Link>
    </nav>
  );
}
