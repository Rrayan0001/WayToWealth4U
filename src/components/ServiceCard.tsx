import Image from "next/image";
import Link from "next/link";

import styles from "./ServiceCard.module.css";

type ServiceCardVariant = "gold" | "slate" | "ivory" | "blue";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
  variant: ServiceCardVariant;
};

export function ServiceCard({ title, description, href, imgSrc, imgAlt, variant }: ServiceCardProps) {
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

      <Image src={imgSrc} alt={imgAlt} width={168} height={168} className={styles.illustration} />
    </article>
  );
}
