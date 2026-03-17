import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { officeSnapshot } from "@/lib/siteData";

import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with WealthRise Capitals for consultation, applications, and advisory support.",
};

export default function ContactPage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Contact</p>
            <h1>Let&apos;s Build Your Growth Plan</h1>
            <p className={styles.heroLead}>
              Reach out for loan guidance, card recommendations, stock market classes, or a full financial strategy
              review.
            </p>
          </div>

          <div className={styles.heroPanel}>
            <p className={styles.panelEyebrow}>Availability</p>
            <ul className={styles.hoursList}>
              {officeSnapshot.hours.map((hour) => (
                <li key={hour}>{hour}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.gridTwo}>
        <ScrollReveal className={styles.card}>
          <h2>Direct Contact</h2>
          <div className={styles.contactStack}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              <a href={`mailto:${officeSnapshot.email}`}>{officeSnapshot.email}</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Phone</span>
              <a href={`tel:${officeSnapshot.phone.replace(/\s+/g, "")}`}>{officeSnapshot.phone}</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Location</span>
              <p>{officeSnapshot.address}</p>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Support</span>
              <p>WhatsApp assistance is available during working hours for faster coordination.</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className={styles.card} delay={100}>
          <h2>Quick Inquiry</h2>
          <InquiryForm source="Contact Page Quick Inquiry" submitLabel="Submit Request" />
        </ScrollReveal>
      </section>

      <section id="ai-assistant" className={styles.ctaBox}>
        <h2>AI-Assisted Support</h2>
        <p>
          Use our floating AI action for guided query drafting and faster response routing from the advisory team.
        </p>
      </section>
    </div>
  );
}
