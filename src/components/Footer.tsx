import Link from "next/link";

import { BrandMark } from "@/components/BrandMark";

import styles from "./Footer.module.css";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={`${styles.column} ${styles.brandColumn}`}>
          <Link href="/" className={styles.brandLink} aria-label="WealthRise Capitals home">
            <BrandMark className={styles.brandMark} />
          </Link>

          <p className={styles.brandTextBlock}>
            Premium financial advisory for loans, credit optimization, and market-ready education designed around
            trust and long-term growth.
          </p>
        </div>

        <div className={styles.column}>
          <h3>Contact</h3>
          <a href="mailto:hello@way2wealth4u.com">Advisory Inbox</a>
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
          <p>&copy; {year} WealthRise Capitals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
