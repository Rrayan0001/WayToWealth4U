import type { Metadata } from "next";
import Link from "next/link";

import { ScrollReveal } from "@/components/ScrollReveal";
import { projectHighlights } from "@/lib/siteData";

import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description: "Review outcome-driven project highlights from WealthRise Capitals advisory clients.",
};

export default function ProjectsPage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Projects</p>
            <h1>Real Client Outcomes, Measured In Financial Progress</h1>
            <p className={styles.heroLead}>
              Every engagement focuses on implementable strategy and measurable improvement, not generic advice.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionIntro}>
        <p className={styles.sectionEyebrow}>Selected Outcomes</p>
        <h2>Result-Driven Engagements Designed Around Real Financial Improvement</h2>
      </section>

      <section className={styles.projectsGrid}>
        {projectHighlights.map((project, index) => (
          <ScrollReveal key={project.title} className={styles.card} delay={index * 110}>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <p className={styles.outcome}>{project.outcome}</p>
          </ScrollReveal>
        ))}
      </section>

      <section className={styles.ctaBox}>
        <h2>Want Your Own Growth Case Study?</h2>
        <p>Start with a strategy call and let WealthRise Capitals build a roadmap designed for measurable progress.</p>
        <Link href="/contact" className="button buttonPrimary">
          Talk To An Advisor
        </Link>
      </section>
    </div>
  );
}
