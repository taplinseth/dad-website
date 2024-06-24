// import Link from "next/link";
// import styles from "../styles/Navigation.module.css";

// const Navigation = () => {
//   return (
//     <div className={styles.container}>
//       <header className={styles.header}>
//         <h1>Mack Taplin</h1>
//       </header>
//       <nav className={styles.buttonContainer}>
//         <ul className={styles.navList}>
//           <Link href="/" prefetch>
//             <li>
//               <div aria-label="Home page">Home</div>
//             </li>
//           </Link>
//           <Link href="/about" prefetch>
//             <li>
//               <div aria-label="About page">About</div>
//             </li>
//           </Link>
//           <Link href="/portfolio" prefetch>
//             <li>
//               <div aria-label="Portfolio page">Portfolio</div>
//             </li>
//           </Link>
//           <Link href="/contact" prefetch>
//             <li>
//               <div aria-label="Contact page">Contact</div>
//             </li>
//           </Link>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navigation;
// import Link from "next/link";
// import styles from "../styles/Navigation.module.css";

// const Navigation = () => {
//   return (
//     <div className={styles.container}>
//       <header className={styles.header}>
//         <h1>Mack Taplin</h1>
//       </header>
//       <nav className={styles.buttonContainer}>
//         <ul className={styles.navList}>
//           <li>
//             <Link href="/" prefetch>
//               <div aria-label="Home page">Home</div>
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" prefetch>
//               <div aria-label="About page">About</div>
//             </Link>
//           </li>
//           <li className={styles.dropdown}>
//             <div className={styles.dropdownToggle}>Portfolio</div>
//             <ul className={styles.dropdownMenu}>
//               <li>
//                 <Link href="/portfolio/originals" prefetch>
//                   <div aria-label="Originals page">Originals</div>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/portfolio/rodeo" prefetch>
//                   <div aria-label="Rodeo page">Rodeo</div>
//                 </Link>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <Link href="/contact" prefetch>
//               <div aria-label="Contact page">Contact</div>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navigation;
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
          <li>
            <Link href="/" prefetch>
              <div aria-label="Home page">Home</div>
            </Link>
          </li>
          <li>
            <Link href="/about" prefetch>
              <div aria-label="About page">About</div>
            </Link>
          </li>
          <li className={styles.dropdown}>
            <div className={styles.dropdownToggle}>Portfolio</div>
            <ul className={styles.dropdownMenu}>
              <li>
                <Link href="/originals" prefetch>
                  <div className={styles.orginals}aria-label="Originals page">Originals</div>
                </Link>
              </li>
              <li>
                <Link href="/rodeo" prefetch>
                  <div className={styles.rodeo}aria-label="Rodeo page">Rodeo</div>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact" prefetch>
              <div aria-label="Contact page">Contact</div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
