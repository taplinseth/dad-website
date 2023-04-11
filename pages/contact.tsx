import Head from "next/head";
import Navigation from "../components/navigation";
import styles from "../styles/Home.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mack Taplin | Contact</title>
        <meta name="description" content="Welcome to the artist's website" />
        <link rel="icon" href="/painting.png" />
      </Head>

      <header className={styles.header}>
        <h1>Mack Taplin</h1>
        <Navigation />
      </header>
      <main>
        
      </main>
      <footer className={styles.footer}>
        <p>© Mack Taplin {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Contact;
