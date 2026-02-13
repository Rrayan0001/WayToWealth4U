"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import type { ProcessStep } from "@/lib/siteData";

import styles from "./ProcessTimeline.module.css";

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [maxShift, setMaxShift] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const calculate = () => {
      const section = sectionRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!section || !viewport || !track) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const sectionSpan = Math.max(section.offsetHeight - window.innerHeight, 1);
      const local = clamp((-rect.top + window.innerHeight * 0.1) / sectionSpan, 0, 1);
      const shift = Math.max(track.scrollHeight - viewport.clientHeight, 0);

      setProgress(local);
      setMaxShift(shift);
    };

    const onScroll = () => {
      if (rafId !== 0) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        calculate();
        rafId = 0;
      });
    };

    calculate();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const shiftY = useMemo(() => progress * maxShift, [progress, maxShift]);
  const activeIndex = useMemo(
    () => clamp(Math.round(progress * Math.max(steps.length - 1, 0)), 0, Math.max(steps.length - 1, 0)),
    [progress, steps.length],
  );

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      style={{ height: `${Math.max(steps.length * 78, 220)}vh` }}
      aria-label="Process timeline"
    >
      <header className={styles.header}>
        <p className={styles.eyebrow}>Steps of Process</p>
        <h2>Transparent Journey From Application To Growth</h2>
      </header>

      <div className={styles.sticky}>
        <div className={styles.viewport} ref={viewportRef}>
          <div className={styles.track} ref={trackRef} style={{ transform: `translate3d(0, -${shiftY}px, 0)` }}>
            {steps.map((step, index) => (
              <article
                key={step.title}
                className={`${styles.card} ${index === activeIndex ? styles.active : ""}`.trim()}
                aria-label={`Step ${index + 1}: ${step.title}`}
              >
                <div className={styles.stepTag}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
