"use client";

import Image from "next/image";
import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

import type { TestimonialItem } from "@/lib/siteData";
import { GradientHeading } from "@/components/ui/gradient-heading";

import styles from "./TestimonialsSection.module.css";

type TestimonialsSectionProps = {
  testimonials: TestimonialItem[];
};

type TestimonialsColumnProps = {
  className?: string;
  items: TestimonialItem[];
  durationSeconds?: number;
  reverse?: boolean;
};

const TestimonialsColumn = memo(function TestimonialsColumn({
  className = "",
  items,
  durationSeconds = 16,
  reverse = false,
}: TestimonialsColumnProps) {
  const reduceMotion = useReducedMotion();
  const repeatedItems = [...items, ...items];

  return (
    <div className={`${styles.column} ${className}`.trim()}>
      <motion.div
        className={styles.columnTrack}
        animate={reduceMotion ? undefined : { translateY: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={
          reduceMotion
            ? undefined
            : {
                duration: durationSeconds,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }
        }
      >
        {repeatedItems.map((item, index) => (
          <article key={`${item.name}-${index}`} className={styles.card}>
            <p className={styles.quote}>{item.text}</p>
            <div className={styles.person}>
              <Image
                src={item.image}
                alt={`${item.name} avatar`}
                width={44}
                height={44}
                className={styles.avatar}
              />
              <div>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.role}>{item.role}</p>
              </div>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  );
});

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="sectionBlock" aria-labelledby="testimonials-title">
      <div className={`${styles.section} container`}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <GradientHeading variant="secondary" size="sm">
            Testimonials
          </GradientHeading>
          <h2 id="testimonials-title">What Our Clients Say</h2>
          <p>
            Real feedback from people who trusted WealthRise Capitals for loans, credit strategy, and long-term financial
            planning.
          </p>
        </motion.div>

        <div className={styles.columnsWrap}>
          <TestimonialsColumn items={firstColumn} durationSeconds={16} />
          <TestimonialsColumn className={styles.hideOnTablet} items={secondColumn} durationSeconds={19} reverse />
          <TestimonialsColumn className={styles.hideOnMobile} items={thirdColumn} durationSeconds={17} />
        </div>
      </div>
    </section>
  );
}
