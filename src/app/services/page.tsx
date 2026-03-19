import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/ScrollReveal";
import { heroStats, processSteps, serviceItems } from "@/lib/siteData";
import { serviceIllustrations } from "@/lib/serviceVisuals";

import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore loan, credit card, and market education services from WealthRise Capitals.",
};

const serviceFocus = [
  "Retail Lending",
  "Business Finance",
  "MSME Loans",
  "Credit Cards",
  "Education & Asset-Backed Loans",
];

export default function ServicesPage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Services</p>
            <h1>
              <span className={styles.heroTitleLine}>Premium Financial Services</span>
              <span className={styles.heroTitleLine}>Under One Advisory Roof</span>
            </h1>
            <p className={styles.heroLead}>
              From loan structuring to credit strategy and stock market learning, our services are designed to move you
              from short-term decisions to long-term prosperity.
            </p>

            <div className={styles.focusRail} aria-label="Service focus areas">
              {serviceFocus.map((item) => (
                <span key={item} className={styles.focusChip}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.heroPanel}>
            <p className={styles.panelEyebrow}>Coverage Snapshot</p>
            <div className={styles.metricGrid}>
              {heroStats.map((metric) => (
                <div key={metric.label} className={styles.metricCard}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <p className={styles.panelNote}>
              Structured guidance across home, property-backed, personal, business, education, vehicle, gold, and
              credit-card needs.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionIntro}>
        <p className={styles.sectionEyebrow}>What We Cover</p>
        <h2>Structured Support Across Lending, Credit, And Financial Growth</h2>
        <p>
          Each service line is designed to be practical, bank-ready, and easy to act on, with transparent support from
          evaluation to execution.
        </p>
      </section>

      <section className={styles.servicesGrid}>
        {serviceItems.map((service, index) => (
          <ScrollReveal key={service.title} className={styles.card} delay={index * 100}>
            <div className={styles.cardArt}>
              <Image
                src={serviceIllustrations[service.title] ?? "/services/loans-illustration.svg"}
                alt=""
                aria-hidden="true"
                width={180}
                height={180}
                className={styles.cardIllustration}
              />
            </div>

            <h2>{service.title}</h2>
            <p>{service.description}</p>

            {service.href && (
              <div className={styles.serviceAction}>
                <Link href={service.href} className="button buttonOutline">
                  <span>Learn More</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={styles.chevronIcon}
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </div>
            )}
          </ScrollReveal>
        ))}
      </section>

      <section className={styles.processShell}>
        <div className={styles.processHeader}>
          <p className={styles.sectionEyebrow}>How We Work</p>
          <h2>A Clear Advisory Process From Discovery To Delivery</h2>
        </div>

        <div className={styles.processGrid}>
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.title} className={styles.processCard} delay={index * 90}>
              <span className={styles.processIndex}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className={styles.ctaBox}>
        <div className={styles.ctaCopy}>
          <p className={styles.sectionEyebrow}>Next Step</p>
          <h2>Need Help Choosing The Right Service?</h2>
          <p>Tell us your current goal and we&apos;ll map the right loan, card, or market-learning path for you.</p>
        </div>

        <div className={styles.ctaActions}>
          <Link href="/contact" className="button buttonPrimary">
            Book A Strategy Call
          </Link>
          <Link href="/contact" className="button buttonGhost">
            Speak To An Advisor
          </Link>
        </div>
      </section>
    </div>
  );
}
