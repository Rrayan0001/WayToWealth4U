import type { Metadata } from "next";
import Link from "next/link";

import { ScrollReveal } from "@/components/ScrollReveal";
import { projectHighlights } from "@/lib/siteData";

import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description: "Review outcome-driven project highlights from WealthRise Capitals advisory clients.",
};

export const dynamic = "force-dynamic";

export default function ProjectsPage() {
  const generatedAt = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());

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

          <div className={styles.heroPanel}>
            <p className={styles.panelEyebrow}>Live Advisory Snapshot</p>
            <p className={styles.snapshotTime}>Server-rendered update: {generatedAt}</p>
            <p className={styles.snapshotText}>
              This page stays dynamic so current advisory context can be rendered live while the rest of the site stays
              statically optimized for speed.
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
