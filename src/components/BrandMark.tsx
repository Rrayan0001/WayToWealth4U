"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import styles from "./BrandMark.module.css";

type BrandMarkProps = {
  compact?: boolean;
  priority?: boolean;
};

const logoSources = [
  "/way2wealth4u-logo-transparent.png",
  "/way2wealth4u-logo.png",
  "/way2wealth-logo-transparent.png",
  "/way2wealth-logo.png",
  "/logo-transparent.png",
  "/logo.png",
];

export function BrandMark({ compact = false, priority = false }: BrandMarkProps) {
  const [index, setIndex] = useState(0);
  const [fallback, setFallback] = useState(false);

  const dimensions = useMemo(() => {
    return compact ? { width: 180, height: 72 } : { width: 250, height: 100 };
  }, [compact]);

  const source = logoSources[index];

  if (!fallback) {
    return (
      <Image
        src={source}
        alt="Way2Wealth4U"
        width={dimensions.width}
        height={dimensions.height}
        priority={priority}
        className={styles.logoImage}
        onError={() => {
          if (index < logoSources.length - 1) {
            setIndex(index + 1);
            return;
          }

          setFallback(true);
        }}
      />
    );
  }

  return (
    <div className={`${styles.brand} ${compact ? styles.compact : ""}`.trim()} aria-label="Way2Wealth4U logo fallback">
      <span className={styles.icon} aria-hidden="true">
        <span className={styles.barOne} />
        <span className={styles.barTwo} />
        <span className={styles.barThree} />
        <span className={styles.arrow} />
        <span className={styles.starOne}>*</span>
        <span className={styles.starTwo}>*</span>
      </span>
      <span className={styles.wordmark}>
        <span className={styles.wordSilver}>Way2</span>
        <span className={styles.wordGold}>Wealth4U</span>
      </span>
    </div>
  );
}
