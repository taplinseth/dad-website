import React from "react";
import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import styles from "../styles/Portfolio.module.css";

function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mack Taplin | Portfolio</title>
        <meta name="description" content="Welcome to the artist's website" />
        <link rel="icon" href="/painting.png" />
      </Head>
      <Navigation />
      <Footer />
    </div>
  );
}

export default Portfolio;
