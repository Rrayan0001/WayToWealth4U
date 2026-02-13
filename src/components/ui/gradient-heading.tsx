import type { HTMLAttributes } from "react";

import styles from "./gradient-heading.module.css";

type GradientHeadingProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "xl";
} & HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>;

export function GradientHeading({
  children,
  variant = "primary",
  size = "xl",
  className = "",
  ...rest
}: GradientHeadingProps) {
  const sharedClassName = `${styles.heading} ${styles[variant]} ${styles[size]} ${className}`.trim();

  if (variant === "secondary") {
    return (
      <p className={sharedClassName} {...rest}>
        {children}
      </p>
    );
  }

  return (
    <h2 className={sharedClassName} {...rest}>
      {children}
    </h2>
  );
}
