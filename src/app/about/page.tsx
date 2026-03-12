import type { Metadata } from "next";
import Link from "next/link";

import { ScrollReveal } from "@/components/ScrollReveal";

import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about WealthRise Capitals' mission, values, and strategic advisory methodology.",
};

export default function AboutPage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>About WealthRise Capitals</p>
            <h1>We Design Financial Growth With Precision</h1>
            <p className={styles.heroLead}>
              WealthRise Capitals is a strategic advisory firm focused on helping professionals, families, and
              businesses make high-quality financial decisions with confidence.
            </p>
          </div>

          <div className={styles.heroPanel}>
            <p className={styles.panelEyebrow}>Why Clients Choose Us</p>
            <ul className={styles.heroList}>
              <li>Clear loan structuring aligned to affordability and long-term growth</li>
              <li>Integrated guidance across loans, credit, and market education</li>
              <li>Transparent execution support from first discussion to final outcome</li>
            </ul>
          </div>
        </div>
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

      <section className={styles.gridTwo}>
        <ScrollReveal className={styles.card}>
          <h2>Our Vision</h2>
          <p>
            To be the most trusted financial architect for ambitious individuals and growing businesses across India, transforming everyday potential into generational prosperity.
          </p>
          <p className={styles.highlight}>Guided by foresight. Delivered with precision.</p>
        </ScrollReveal>

        <ScrollReveal className={styles.card} delay={120}>
          <h2>Our Goal</h2>
          <ul className={styles.list}>
            <li>Empower 10,000+ clients with structured capital solutions by 2030</li>
            <li>Eliminate financial friction through technology and transparent advisory</li>
            <li>Build a legacy of educated, strategy-driven investors and homeowners</li>
          </ul>
        </ScrollReveal>
      </section>

      <section className={styles.valuesIntro}>
        <p className={styles.sectionEyebrow}>What Defines Us</p>
        <h2>Advisory Built On Clarity, Discipline, And Momentum</h2>
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
