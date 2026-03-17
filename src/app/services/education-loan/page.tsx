import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceFeatureIcon } from "@/components/ServiceFeatureIcon";
import styles from "./education-loan.module.css";

export const metadata: Metadata = {
  title: "Education Loan",
  description: "Affordable Education Loans for Your Academic Dreams. Get affordable education loans from top lenders for your child's brighter future.",
};

const visualFeatures = [
  {
    title: "Pre-Admission Sanction",
    icon: "preAdmissionSanction" as const,
  },
  {
    title: "Max Repayment Tenure",
    icon: "loanTenure" as const,
  },
  {
    title: "Tax Benefit (Section 80E)",
    icon: "taxBenefit" as const,
  },
];

const loanFeatures = [
  "Pre-Admission Sanction",
  "Maximum Loan Repayment Tenure",
  "Tax Benefit under Section 80E",
];

const loanBenefits = [
  {
    title: "Moratorium Period",
    desc: "Repayment usually begins after the completion of the course, allowing students time to secure employment before starting repayment.",
  },
  {
    title: "Co-Borrower Option",
    desc: "Parents or guardians can apply as co-borrowers to improve eligibility and increase the chances of loan approval.",
  },
  {
    title: "Tax Benefits",
    desc: "Interest paid on education loan repayment may qualify for tax deductions under Section 80E of the Income Tax Act.",
  },
  {
    title: "Multiple Courses and Institutions",
    desc: "Education loans are available for various programs including undergraduate, postgraduate, and professional courses in India and abroad.",
  },
];

export default function EducationLoanPage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Education Loan</p>
            <h1>Affordable Education Loans for Your Academic Dreams</h1>
            <p className={styles.heroLead}>
              Get affordable education loans from top lenders for your child&apos;s brighter future.
            </p>
            <div className={styles.heroAction}>
              <Link href="/contact" className="button buttonPrimary">
                Apply Now
              </Link>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <p className={styles.panelEyebrow}>Education Loan Features</p>
            <div className={styles.featureList}>
              {loanFeatures.map((feature, i) => (
                <div key={i} className={styles.featureItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionIntro}>
        <p className={styles.sectionEyebrow}>Key Highlights</p>
        <h2>Education Loan Features</h2>
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
        <h2>Features and Benefits of Our Education Loan</h2>
        <p>Expert guidance and flexible financing for higher education aspirations in India and globally.</p>
      </section>

      <section className={styles.servicesGrid}>
        {loanBenefits.map((benefit, index) => (
          <ScrollReveal key={benefit.title} className={styles.card} delay={index * 100}>
            <h3>{benefit.title}</h3>
            <p>{benefit.desc}</p>
          </ScrollReveal>
        ))}
      </section>

      <section className={styles.ctaBox} style={{ marginTop: "2rem" }}>
        <h2>Ready to Finance Your Dreams?</h2>
        <p>Book a call with our advisory team to discuss your education loan options.</p>
        <div>
          <Link href="/contact" className="button buttonPrimary">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
