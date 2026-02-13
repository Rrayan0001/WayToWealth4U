import type { Metadata } from "next";

import { ScrollReveal } from "@/components/ScrollReveal";
import { projectHighlights } from "@/lib/siteData";

import styles from "../inner.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description: "Review outcome-driven project highlights from Way2Wealth4U advisory clients.",
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
        <p className="eyebrow">Projects</p>
        <h1>Real Client Outcomes, Measured in Financial Progress</h1>
        <p>
          Every engagement focuses on implementable strategy and measurable improvement, not generic advice.
        </p>
      </section>

      <section className={styles.card}>
        <h2>Live Advisory Snapshot</h2>
        <p className={styles.highlight}>Server-rendered update: {generatedAt}</p>
        <p>
          This page uses SSR for up-to-date advisory context while the rest of the website remains statically optimized
          for speed.
        </p>
      </section>

      <section className={styles.gridThree}>
        {projectHighlights.map((project, index) => (
          <ScrollReveal key={project.title} className={styles.card} delay={index * 110}>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <p className={styles.highlight}>{project.outcome}</p>
          </ScrollReveal>
        ))}
      </section>
    </div>
  );
}
