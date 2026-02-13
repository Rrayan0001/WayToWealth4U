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

        <ul>
          {points.map((point) => (
            <li key={point}>{cleanPoint(point)}</li>
          ))}
        </ul>

        <Link href={href} className={styles.link} aria-label={`Learn more about ${title}`}>
          Learn More
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </Link>
      </div>

      <Image src={imgSrc} alt={imgAlt} width={220} height={220} className={styles.illustration} />
    </article>
  );
}
