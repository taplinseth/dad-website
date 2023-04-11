import React from "react";
import Head from "next/head";
import Navigation from "../components/navigation";
import styles from "../styles/Home.module.css";

function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mack Taplin | Portfolio</title>
        <meta name="description" content="Welcome to the artist's website" />
        <link rel="icon" href="/painting.png" />
      </Head>

      <header className={styles.header}>
        <h1>Mack Taplin</h1>
        <Navigation />
      </header>
      <div className={styles.gallery}>
        <img src="portfolio/druid-wolf-photo-312.jpeg" alt="Image 1" />
        <img
          src="portfolio/Kingfisher ©jonhawkinsSurreyHillsPhotography.jpeg"
          alt="Image 2"
        />
        <img
          src="portfolio/shutterstock_1867751035_rhino with baby.jpeg"
          alt="Image 3"
        />
        <img
          src="portfolio/stop-the-wildlife-trade-shaaz-jung-1.avif"
          alt="Image 4"
        />
        <img
          src="portfolio/two-large-bull-elk-in-golden-morning-light-1568x1046.jpeg"
          alt="Image 5"
        />
        <img
          src="portfolio/wildlife-photography-bear-by-arankadelina.jpeg"
          alt="Image 6"
        />
      </div>
      <footer className={styles.footer}>
        <p>© Mack Taplin {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
export default Portfolio;
