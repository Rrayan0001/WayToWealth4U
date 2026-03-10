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
          src="/logo-icon-transparent.png"
          alt=""
          className={styles.symbolImage}
          width={617}
          height={404}
          unoptimized
        />
      </span>

      {!iconOnly ? (
        <span className={styles.wordmark}>
          <Image
            src="/logo-text-transparent.png"
            alt="WealthRise Capitals"
            className={styles.wordmarkImage}
            width={1433}
            height={174}
            unoptimized
          />
        </span>
      ) : null}
    </span>
  );
}
