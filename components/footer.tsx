import React from 'react';
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>

    <div className={styles.cta}>
    <h2>Ready to get started?</h2>
    <p>Get in touch with us today to discuss your project.</p>
    <a href="/contact">Contact Us Now</a>
  </div>
    <p>© Mack Taplin {new Date().getFullYear()}</p>
  </footer>
  );
}

export default Footer;
