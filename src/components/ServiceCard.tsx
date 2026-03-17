import Image from "next/image";
import Link from "next/link";

import styles from "./ServiceCard.module.css";

type ServiceCardVariant = "gold" | "slate" | "ivory" | "blue";

type ServiceCardProps = {
  title: string;
  description: string;
  points: string[];
  href: string;
  imgSrc: string;
  imgAlt: string;
  variant: ServiceCardVariant;
};

function cleanPoint(point: string) {
  return point.replace(/^[A-Za-z]\s*-\s*/, "").trim();
}

export function ServiceCard({ title, description, points, href, imgSrc, imgAlt, variant }: ServiceCardProps) {
  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{description}</p>

        <Link href={href} className={styles.link} aria-label={`Check Eligibility for ${title}`}>
          Check Eligibility
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </Link>
      </div>

      <Image src={imgSrc} alt={imgAlt} width={56} height={56} className={styles.illustration} />
    </article>
  );
}
