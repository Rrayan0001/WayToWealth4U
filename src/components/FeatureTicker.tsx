import styles from "./FeatureTicker.module.css";
import type { CSSProperties } from "react";

type FeatureTickerProps = {
  items: string[];
  durationSeconds?: number;
  reverse?: boolean;
};

export function FeatureTicker({ items, durationSeconds = 28, reverse = false }: FeatureTickerProps) {
  return (
    <section className={styles.wrap} aria-label="Highlights ticker">
      <div className={styles.viewport}>
        <div
          className={`${styles.track} ${reverse ? styles.trackReverse : ""}`}
          style={{ "--ticker-duration": `${durationSeconds}s` } as CSSProperties}
        >
          {[0, 1].map((copyIndex) => (
            <ul key={copyIndex} className={styles.group} aria-hidden={copyIndex === 1}>
              {items.map((item, itemIndex) => (
                <li key={`${copyIndex}-${item}-${itemIndex}`} className={styles.item}>
                  <span>{item}</span>
                  <span className={styles.dot} aria-hidden="true">
                    •
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
