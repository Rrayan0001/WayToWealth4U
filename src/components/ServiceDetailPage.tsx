"use client";

import Link from "next/link";

import { ScrollReveal } from "@/components/ScrollReveal";

import styles from "./ServiceDetailPage.module.css";

export type ServiceDetailSection = {
  title: string;
  description: string;
  bullets?: string[];
};

export type ServiceDetailPageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  introTitle: string;
  introText: string;
  heroPoints: string[];
  sections: ServiceDetailSection[];
  ctaTitle: string;
  ctaText: string;
};

export function ServiceDetailPage({
  eyebrow,
  title,
  lead,
  introTitle,
  introText,
  heroPoints,
  sections,
  ctaTitle,
  ctaText,
}: ServiceDetailPageProps) {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>{eyebrow}</p>
            <h1>{title}</h1>
            <p className={styles.heroLead}>{lead}</p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="button buttonPrimary">
                Speak To An Advisor
              </Link>
              <Link href="/services" className="button buttonGhost">
                Back To Services
              </Link>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <p className={styles.panelEyebrow}>What This Covers</p>
            <div className={styles.pointList}>
              {heroPoints.map((point) => (
                <div key={point} className={styles.pointItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionIntro}>
        <p className={styles.sectionEyebrow}>Overview</p>
        <h2>{introTitle}</h2>
        <p>{introText}</p>
      </section>

      <section className={styles.sectionGrid}>
        {sections.map((section, index) => (
          <ScrollReveal key={section.title} className={styles.card} delay={index * 90}>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            {section.bullets ? (
              <ul className={styles.bulletList}>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </ScrollReveal>
        ))}
      </section>

      <section className={styles.ctaBox}>
        <div className={styles.ctaCopy}>
          <p className={styles.sectionEyebrow}>Next Step</p>
          <h2>{ctaTitle}</h2>
          <p>{ctaText}</p>
        </div>
        <div className={styles.ctaActions}>
          <Link href="/contact" className="button buttonPrimary">
            Start A Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
