import React from 'react';
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>

    <div className={styles.cta}>
  </div>
    <p>© Mack Taplin {new Date().getFullYear()}</p>
  </footer>
  );
}

export default Footer;
