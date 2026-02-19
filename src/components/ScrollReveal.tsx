"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./ScrollReveal.module.css";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade-up" | "pop" | "slide-right" | "slide-left";
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  const getVariantClass = () => {
    switch (variant) {
      case "pop":
        return styles.pop;
      case "slide-right":
        return styles.slideRight;
      case "slide-left":
        return styles.slideLeft;
      default:
        return styles.reveal;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getVariantClass()} ${visible ? styles.visible : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
