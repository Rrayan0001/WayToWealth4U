import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceFeatureIcon } from "@/components/ServiceFeatureIcon";
import styles from "./car-loan.module.css";

export const metadata: Metadata = {
  title: "Car Loan",
  description: "Drive Your Dream Car with Easy Car Loan Options. Secure a car loan with competitive interest rates and flexible tenure.",
};

const visualFeatures = [
  {
    title: "Loan Amount up to ₹47 Lakh",
    icon: "loanAmount" as const,
  },
  {
    title: "3 Unique Loan Variants",
    icon: "loanVariants" as const,
  },
  {
    title: "Loan Tenure up to 72 Months",
    icon: "loanTenure" as const,
  },
];

const loanFeatures = [
  "Loan Amount up to ₹47 Lakh",
  "3 Unique Loan Variants",
  "Loan Tenure up to 72 Months",
  "Minimal Documentation Required",
];

const loanTypes = [
  {
    title: "Access to Immediate Funds",
    desc: "Car loans allow you to purchase your vehicle immediately without paying the full cost upfront.",
  },
  {
    title: "Flexible Loan Tenure",
    desc: "Choose repayment periods that suit your financial comfort and repayment ability.",
  },
  {
    title: "Fixed Interest Rates",
    desc: "Stable interest rates ensure predictable monthly repayments throughout the loan tenure.",
  },
  {
    title: "Customized Loan Amount",
    desc: "Loan amounts can be structured according to the vehicle price and borrower eligibility.",
  },
];

export default function CarLoanPage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Car Loan</p>
            <h1>Drive Your Dream Car with Easy Car Loan Options</h1>
            <p className={styles.heroLead}>
              Secure a car loan with competitive interest rates and flexible tenure.
            </p>
            <div className={styles.heroAction}>
              <Link href="/contact" className="button buttonPrimary">
                Apply Now
              </Link>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <p className={styles.panelEyebrow}>Car Loan Features</p>
            <div className={styles.featureList}>
              {loanFeatures.map((feature) => (
                <div key={feature} className={styles.featureItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionIntro}>
        <p className={styles.sectionEyebrow}>Key Highlights</p>
        <h2>Car Loan Features</h2>
      </section>

      <div className={styles.visualFeatures}>
        {visualFeatures.map((feat, i) => (
          <ScrollReveal key={i} className={styles.visualCard} delay={i * 100}>
            <div className={styles.iconContainer}>
              <ServiceFeatureIcon icon={feat.icon} title={feat.title} />
            </div>
            <span>{feat.title}</span>
          </ScrollReveal>
        ))}
      </div>

      <section className={styles.sectionIntro}>
        <h2>Features and Benefits of Our Car Loan</h2>
        <p>
          Whether for personal or professional use, experience immediate vehicle ownership
          coupled with fixed interest rates and flexible tenures.
        </p>
      </section>

      <section className={styles.servicesGrid}>
        {loanTypes.map((loan, index) => (
          <ScrollReveal key={loan.title} className={styles.card} delay={index * 100}>
            <h3>{loan.title}</h3>
            <p>{loan.desc}</p>
          </ScrollReveal>
        ))}
      </section>

      <section className={styles.ctaBox} style={{ marginTop: "2rem" }}>
        <h2>Ready to Drive Your Dream Car?</h2>
        <p>Book a call with our advisory team to discuss your car loan options.</p>
        <div>
          <Link href="/contact" className="button buttonPrimary">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
