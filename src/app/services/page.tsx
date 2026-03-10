import type { Metadata } from "next";
import Link from "next/link";

import { ScrollReveal } from "@/components/ScrollReveal";
import { processSteps, serviceItems } from "@/lib/siteData";

import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore loan, credit card, and market education services from WealthRise Capitals.",
};

const serviceMetrics = [
  { value: "4", label: "Advisory Tracks" },
  { value: "10+", label: "Loan Programs" },
  { value: "12+", label: "Lending Partners" },
];

export default function ServicesPage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Services</p>
            <h1>Premium Financial Services Under One Advisory Roof</h1>
            <p className={styles.heroLead}>
              From loan structuring to credit strategy and stock market learning, our services are designed to move you
              from short-term decisions to long-term prosperity.
            </p>
          </div>

          <div className={styles.heroPanel}>
            <p className={styles.panelEyebrow}>Coverage Snapshot</p>
            <div className={styles.metricGrid}>
              {serviceMetrics.map((metric) => (
                <div key={metric.label} className={styles.metricCard}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionIntro}>
        <p className={styles.sectionEyebrow}>What We Cover</p>
        <h2>Structured Support Across Lending, Credit, And Financial Growth</h2>
      </section>

      <section className={styles.servicesGrid}>
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
              <ul className={styles.pillList}>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </ScrollReveal>
        ))}
      </section>

      <section className={styles.processShell}>
        <div className={styles.processHeader}>
          <p className={styles.sectionEyebrow}>How We Engage</p>
          <h2>From First Conversation To Ongoing Financial Momentum</h2>
        </div>

        <div className={styles.processGrid}>
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.title} className={styles.card} delay={index * 100}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className={styles.ctaBox}>
        <h2>Need Help Choosing The Right Service?</h2>
        <p>Tell us your current goal and we&apos;ll map the right loan, card, or market-learning path for you.</p>
        <Link href="/contact" className="button buttonPrimary">
          Book A Strategy Call
        </Link>
      </section>
    </div>
  );
}
