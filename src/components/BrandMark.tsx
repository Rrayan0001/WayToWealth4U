import Image from "next/image";

import styles from "./BrandMark.module.css";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
  iconOnly?: boolean;
};

export function BrandMark({ className = "", compact = false, iconOnly = false }: BrandMarkProps) {
  return (
    <span
      className={`${styles.brand} ${compact ? styles.compact : ""} ${iconOnly ? styles.iconOnly : ""} ${className}`.trim()}
      {...(iconOnly ? { role: "img", "aria-label": "WealthRise Capitals" } : {})}
    >
      <span className={styles.symbol} aria-hidden="true">
        <Image
          src="/logo.png"
          alt=""
          className={styles.symbolImage}
          width={1312}
          height={1199}
        />
      </span>

      {!iconOnly ? (
        <span className={styles.wordmark}>
          <span className={styles.wordWealth}>WEALTH</span>
          <span className={styles.wordRise}>RISE CAPITALS</span>
        </span>
      ) : null}
    </span>
  );
}
