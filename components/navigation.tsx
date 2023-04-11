import Link from "next/link";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Mack Taplin</h1>
      </header>
      <nav className={styles.buttonContainer}>
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
    </div>
  );
};

export default Navigation;
