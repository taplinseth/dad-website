import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mack Taplin | Contact</title>
        <meta name="description" content="Welcome to the artist's website" />
        <link rel="icon" href="/painting.png" />
      </Head>
      <Navigation />
      <main className={styles.contactContainer}>
        <h1>Contact Us</h1>
        <form className={styles.form}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />

          <div className={styles.captcha}>{/* Add captcha here */}</div>

          <button type="submit">Send Message</button>
        </form>
        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>
          <p>Email: info@macktaplin.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
