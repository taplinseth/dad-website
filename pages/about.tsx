import Head from "next/head";
import Navigation from "../components/navigation";
import styles from "../styles/AboutMe.module.css"

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mack Taplin | About</title>
        <meta name="description" content="Welcome to the artist's website" />
        <link rel="icon" href="/painting.png" />
      </Head>

      <header className={styles.header}>
        <h1>Mack Taplin</h1>
        <Navigation />
      </header>
        <h1 className={styles.pageTitle}>About The Artist</h1>
      <main className={styles.main}>
        <section className={styles.aboutMe}>
          <p>
            Hello there, my name is Mack Taplin and I specialize in realism oil
            paintings of western and wildlife scenes. I've been passionate about
            art for as long as I can remember.{" "}
          </p>
          <p>
            {" "}
            I was born and raised in Texas, where the stunning natural
            landscapes and abundant wildlife inspired me to pick up a paintbrush
            and start capturing the beauty around me. Growing up, I spent
            countless hours studying the intricacies of animal behavior and the
            ever-changing light and color of the Texas sky.
          </p>
          <p>
            {" "}
            I've honed my skills through years of practice and experimentation,
            and I'm proud to say that my paintings now showcase the beauty of
            the American country side and its wildlife in an incredibly
            realistic way. My work is all about capturing the essence of a
            moment and bringing it to life on canvas, whether it's a majestic
            bison in the Yellowstone National Park or a cowboy working on a
            ranch at sunset.
          </p>
          <p>
            {" "}
            My paintings are not just about capturing the beauty and scenery of
            the wild lands, but also about telling a story. Each painting has a
            narrative and a unique emotional resonance that invites the viewer
            to connect with the scene on a deeper level.
          </p>
          <p>
            {" "}
            I am deeply passionate about my craft and consider it an honor to be
            able to create art that celebrates the natural beauty of the world.
            I hope that my paintings bring you as much joy as they bring me.
          </p>
        </section>
        <img className={styles.aboutMeImg} src="/mom-and-dad.jpeg" alt="mom-and-dad" />
      </main>
      <footer className={styles.footer}>
        <p>© Mack Taplin {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default About;
