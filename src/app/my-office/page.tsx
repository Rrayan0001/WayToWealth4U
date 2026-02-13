import type { Metadata } from "next";

import { officeSnapshot } from "@/lib/siteData";

import styles from "../inner.module.css";

export const metadata: Metadata = {
  title: "My Office",
  description: "Office information, hours, and appointment details for Way2Wealth4U.",
};

export default function MyOfficePage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <p className="eyebrow">My Office</p>
        <h1>Visit Our Advisory Desk</h1>
        <p>
          Our office environment is designed for calm, focused financial planning conversations with private strategy
          sessions.
        </p>
      </section>

      <section className={styles.gridTwo}>
        <article className={styles.card}>
          <h2>Office Details</h2>
          <ul className={styles.list}>
            <li>Address: {officeSnapshot.address}</li>
            <li>Phone: {officeSnapshot.phone}</li>
            <li>Email: {officeSnapshot.email}</li>
          </ul>
        </article>

        <article className={styles.card}>
          <h2>Working Hours</h2>
          <ul className={styles.list}>
            {officeSnapshot.hours.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className={styles.card}>
        <h2>Office Experience</h2>
        <p>
          Expect a premium consultation setup with dedicated advisory time, personalized financial profiling, and clear
          action planning at each visit.
        </p>
        <p className={styles.highlight}>Appointments are recommended for uninterrupted planning sessions.</p>
      </section>
    </div>
  );
}
