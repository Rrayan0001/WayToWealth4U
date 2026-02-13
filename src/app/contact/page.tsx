import type { Metadata } from "next";

import styles from "../inner.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Way2Wealth4U for consultation, applications, and advisory support.",
};

export default function ContactPage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s Build Your Growth Plan</h1>
        <p>
          Reach out for loan guidance, card recommendations, stock market classes, or a full financial strategy review.
        </p>
      </section>

      <section className={styles.gridTwo}>
        <article className={styles.card}>
          <h2>Direct Contact</h2>
          <ul className={styles.list}>
            <li>Email: hello@way2wealth4u.com</li>
            <li>Phone: +91 90000 00000</li>
            <li>WhatsApp support available on working days</li>
          </ul>
        </article>

        <form className={styles.card} aria-label="Contact inquiry form">
          <h2>Quick Inquiry</h2>
          <div className="formGrid">
            <label>
              Full Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Service Needed
              <input type="text" placeholder="Loan / Credit / Market Classes" />
            </label>
            <label>
              Message
              <textarea rows={4} placeholder="Tell us your goals" />
            </label>
            <button type="button" className="button buttonPrimary">
              Submit Request
            </button>
          </div>
        </form>
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
