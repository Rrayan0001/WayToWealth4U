import type { Metadata } from "next";
import Link from "next/link";

import { ScrollReveal } from "@/components/ScrollReveal";

import styles from "../inner.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Way2Wealth4U's mission, values, and premium advisory methodology.",
};

export default function AboutPage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <p className="eyebrow">About Way2Wealth4U</p>
        <h1>We Design Financial Growth With Precision</h1>
        <p>
          Way2Wealth4U is a premium consultancy focused on helping professionals, families, and businesses make
          high-quality financial decisions with confidence.
        </p>
      </section>

      <section className={styles.gridTwo}>
        <ScrollReveal className={styles.card}>
          <h2>Our Mission</h2>
          <p>
            To convert financial complexity into clear action plans that protect today&apos;s stability while building
            tomorrow&apos;s wealth.
          </p>
          <p className={styles.highlight}>Trust is our first product. Performance is our ongoing commitment.</p>
        </ScrollReveal>

        <ScrollReveal className={styles.card} delay={120}>
          <h2>Our Approach</h2>
          <ul className={styles.list}>
            <li>Client-first advisory with transparent product guidance</li>
            <li>Integrated planning across loans, credit, and investing</li>
            <li>Continuous monitoring for sustained growth momentum</li>
          </ul>
        </ScrollReveal>
      </section>

      <section className={styles.gridThree}>
        <ScrollReveal className={styles.card}>
          <h3>Reliability</h3>
          <p>Every recommendation is documented and aligned to practical affordability and risk comfort.</p>
        </ScrollReveal>
        <ScrollReveal className={styles.card} delay={100}>
          <h3>Clarity</h3>
          <p>We remove jargon and present a decisive path so you know what to do next, every time.</p>
        </ScrollReveal>
        <ScrollReveal className={styles.card} delay={200}>
          <h3>Growth</h3>
          <p>Our success is measured by your improved financial position, not just completed paperwork.</p>
        </ScrollReveal>
      </section>

      <section className={styles.ctaBox}>
        <h2>Start Your Wealth Upgrade</h2>
        <p>Schedule a strategy call and let us craft a premium roadmap tailored to your goals.</p>
        <Link href="/contact" className="button buttonPrimary">
          Book Consultation
        </Link>
      </section>
    </div>
  );
}
