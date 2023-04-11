import Head from "next/head";
import Navigation from "../components/navigation";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mack Taplin | Home</title>
        <meta name="description" content="Welcome to the artist's website" />
        <link rel="icon" href="/painting.png" />
      </Head>

      <header className={styles.header}>
        <h1>Mack Taplin</h1>
        <Navigation />
      </header>
      <main className={styles.homeMain}>
      <img src="portfolio/horses.jpeg" alt="horses" />
      <div>Welcome to my studio.</div>
      </main>
      <footer className={styles.footer}>
        <p>© Mack Taplin {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Home;
