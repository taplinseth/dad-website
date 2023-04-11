import Link from 'next/link';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navList}>
        <Link href="/" prefetch>
          <li>
            <div aria-label="Home page">Home</div>
          </li>
        </Link>
        <Link href="/about" prefetch>
          <li>
            <div aria-label="About page">About</div>
          </li>
        </Link>
        <Link href="/portfolio" prefetch>
          <li>
            <div aria-label="Portfolio page">Portfolio</div>
          </li>
        </Link>
        <Link href="/contact" prefetch>
          <li>
            <div aria-label="Contact page">Contact</div>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
