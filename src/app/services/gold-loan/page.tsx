import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceFeatureIcon } from "@/components/ServiceFeatureIcon";
import styles from "./gold-loan.module.css";

export const metadata: Metadata = {
  title: "Gold Loan",
  description: "Instant Gold Loans to Meet Your Financial Needs. Access secure gold loans with faster approvals and no hidden fees.",
};

const visualFeatures = [
  {
    title: "Approval in 15 Minutes",
    icon: "fastApproval" as const,
  },
  {
    title: "Apply with minimal Docs",
    icon: "minimalDocumentation" as const,
  },
  {
    title: "Flexible Repayment Plans",
    icon: "flexibleRepayment" as const,
  },
];

const loanTypes = [
  {
    title: "Secured Loan",
    desc: "Gold loans are secured loans backed by gold jewelry or ornaments pledged as collateral.",
  },
  {
    title: "Quick Processing",
    desc: "Loans are processed quickly due to the collateral involved, enabling faster approvals and disbursement.",
  },
  {
    title: "Lower Interest Rates",
    desc: "Because gold loans are secured, they usually come with lower interest rates compared to unsecured loans.",
  },
  {
    title: "Versatile Use",
    desc: "The loan funds can be used for personal, medical, business, or emergency financial needs without restrictions.",
  },
];

export default function GoldLoanPage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Gold Loan</p>
            <h1>Instant Gold Loans to Meet Your Financial Needs</h1>
            <p className={styles.heroLead}>
              Access secure gold loans with faster approvals and no hidden fees.
            </p>
            <div className={styles.heroAction}>
              <Link href="/contact" className="button buttonPrimary">
                Apply Now
              </Link>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <p className={styles.panelEyebrow}>Quick Benefits</p>
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Fast Evaluation</span>
              </div>
              <div className={styles.featureItem}>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Safe Storage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionIntro}>
        <p className={styles.sectionEyebrow}>Key Highlights</p>
        <h2>Gold Loan Features</h2>
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
        <h2>Features and Benefits of Our Gold Loan</h2>
        <p>
          Secure funds against your gold jewelry. We offer flexible repayment plans, quick processing,
          and transparent evaluation for your peace of mind.
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
        <h2>Ready for an Instant Gold Loan?</h2>
        <p>Book a call with our advisory team to evaluate your gold assets and get funded.</p>
        <div>
          <Link href="/contact" className="button buttonPrimary">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
