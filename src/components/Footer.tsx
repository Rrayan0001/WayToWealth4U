import Link from "next/link";

import { BrandMark } from "@/components/BrandMark";
import { officeSnapshot } from "@/lib/siteData";

import styles from "./Footer.module.css";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={`${styles.column} ${styles.brandColumn}`}>
          <Link href="/#home-hero" className={styles.brandLink} aria-label="WealthRise Capitals home">
            <div className={styles.brandMarkWrap}>
              <BrandMark className={styles.brandMark} />
            </div>
            <p className={styles.tagline}>
              Growing Wealth, Creating Futures.
            </p>
          </Link>

          <p className={styles.brandTextBlock}>
            Strategic advisory for loans & credit optimization, designed for growth.
          </p>
        </div>

        <div className={styles.column}>
          <h3>Location</h3>
          <div className={styles.locationBlock}>
            <div className={styles.mapContainer}>
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d9331.022369211561!2d77.55348829834837!3d12.999961502296072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU5JzU1LjkiTiA3N8KwMzMnMjQuNSJF!5e1!3m2!1sen!2sin!4v1773853580644!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className={styles.addressText}>{officeSnapshot.address}</p>
            <a href={officeSnapshot.mapUrl} target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
              Open in Google Maps
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <h3>Contact</h3>
          <a href={`mailto:${officeSnapshot.email}`} className={`${styles.iconLink} ${styles.contactLink}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className={styles.contactText}>{officeSnapshot.email}</span>
          </a>
          <a href={`tel:${officeSnapshot.phone.replace(/\s+/g, "")}`} className={`${styles.iconLink} ${styles.contactLink}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span className={styles.contactText}>{officeSnapshot.phone}</span>
          </a>
        </div>

        <div className={styles.column}>
          <h3>Navigate</h3>
          <div className={styles.linkList}>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className={styles.column}>
          <h3>Social</h3>
          <div className={styles.linkList}>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              LinkedIn
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              Instagram
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
              YouTube
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              Facebook
            </a>
          </div>
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
