import type { Metadata } from "next";

import { ScrollReveal } from "@/components/ScrollReveal";
import { processSteps, serviceItems } from "@/lib/siteData";

import styles from "../inner.module.css";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore premium loan, credit card, and market education services from Way2Wealth4U.",
};

export default function ServicesPage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <p className="eyebrow">Services</p>
        <h1>Premium Financial Services Under One Advisory Roof</h1>
        <p>
          From loan structuring to credit strategy and stock market learning, our services are designed to move you
          from short-term decisions to long-term prosperity.
        </p>
      </section>

      <section className={styles.gridTwo}>
        {serviceItems.map((service, index) => (
          <ScrollReveal key={service.title} className={styles.card} delay={index * 100}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            {service.subServices ? (
              <div className={styles.subServicesGrid}>
                {service.subServices.map((sub) => (
                  <div key={sub.title} className={styles.subServiceItem}>
                    <h3>{sub.title}</h3>
                    <p>{sub.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <ul className={styles.list}>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </ScrollReveal>
        ))}
      </section>

      <section className={styles.card}>
        <h2>How We Engage</h2>
        <div className={styles.gridTwo}>
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.title} className={styles.card} delay={index * 100}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
