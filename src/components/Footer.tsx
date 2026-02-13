import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.css";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={`${styles.column} ${styles.brandColumn}`}>
          <Link href="/" className={styles.brandLink} aria-label="WayToWealth4U home">
            <Image src="/nav-logo-icon.png" alt="" width={570} height={438} className={styles.brandIcon} priority={false} />
            <Image src="/nav-logo-text.png" alt="WayToWealth4U" width={1337} height={186} className={styles.brandText} priority={false} />
          </Link>

          <p className={styles.brandTextBlock}>
            Premium financial advisory for loans, credit optimization, and market-ready education designed around
            trust and long-term growth.
          </p>
        </div>

        <div className={styles.column}>
          <h3>Contact</h3>
          <a href="mailto:hello@way2wealth4u.com">hello@way2wealth4u.com</a>
          <a href="tel:+919000000000">+91 90000 00000</a>
          <p>Financial District, India</p>
        </div>

        <div className={styles.column}>
          <h3>Navigate</h3>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className={styles.column}>
          <h3>Social</h3>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {year} Way2Wealth4U.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
