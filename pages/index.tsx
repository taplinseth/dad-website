import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mack Taplin | Home</title>
        <meta name="description" content="Welcome to the artist's website" />
        <link rel="icon" href="/painting.png" />
      </Head>
      <Navigation />
      <main className={styles.homeMain}>
        <img src="portfolio/horses.jpeg" alt="horses" />
        <div>Welcome to my studio.</div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
