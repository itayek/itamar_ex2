import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Our Creative Space</h1>
          <p className={styles.heroSubtitle}>
            Explore exciting projects, innovative designs, and interactive demos.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/tic-tac-toe" className={styles.linkButton}>
              Tic-Tac-Toe <br />Game
            </Link>
            <Link href="/nasa" className={styles.linkButton}>
              See images and explenations <br />from NASA
            </Link>
            <Link href="/design" className={styles.linkButton}>
              Whatsapp Memory Design.<br /> By Meyron
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <h2 className={styles.sectionTitle}>About Our Projects</h2>
        <p className={styles.aboutText}>
        This website connects creativity, exploration, and interactivity.<br /> <br />
        The Tic-Tac-Toe game showcases the power of simple, fun applications that engage users. <br /><br />
        Our partnership with NASA highlights the importance of exploration and innovation,
        drawing inspiration from cutting-edge science and technology.<br /><br />
        Meanwhile, the design section reflects our dedication to aesthetics and functionality,
        creating solutions that merge visual appeal with user-friendly experiences. Together,
        these links represent a journey through imagination, learning, and design excellence.
        </p>
      </section>
    </main>
  );
}
