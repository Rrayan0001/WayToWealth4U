import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceFeatureIcon } from "@/components/ServiceFeatureIcon";
import styles from "./loan-against-property.module.css";

export const metadata: Metadata = {
  title: "Loan Against Property",
  description: "Turn Your Property into Capital with Ease. Get the best Loan Against Property deals at a lower interest rate.",
};

const visualFeatures = [
  {
    title: "Flexible Loan Eligibility",
    icon: "flexibleEligibility" as const,
  },
  {
    title: "Loan value from ₹10 Lakh to ₹5 Crore",
    icon: "highLoanValue" as const,
  },
  {
    title: "Loans against diverse property",
    icon: "diverseProperty" as const,
  },
  {
    title: "Business & personal needs",
    icon: "businessPersonalNeeds" as const,
  },
];

const loanFeatures = [
  "Flexible Loan Eligibility",
  "Loan value from ₹10 Lakh to ₹5 Crore",
  "Loans available against commercial, residential, or industrial property",
  "Loan available for both business and personal needs",
];

const eligibilityCriteria = [
  {
    title: "Nationality",
    desc: "You need to be a Citizen of India with valid government-issued documents to prove your claim.",
  },
  {
    title: "Occupation and Income",
    desc: "Details regarding your occupation and income are required to prove stability and determine creditworthiness.",
  },
  {
    title: "Credit History",
    desc: "Your three-digit Credit Score, indicative of your repayment track record, is a deciding factor for eligibility.",
  },
  {
    title: "Banking Relationship",
    desc: "A healthy relationship with your lender can lead to better terms, lower interest rates, and faster processing.",
  },
  {
    title: "Market Value of Property",
    desc: "The loan amount is based on the current market value of your collateral, which must be higher than the requested loan.",
  },
  {
    title: "Title of Property",
    desc: "You must be the current owner with a clear title. The property must not be mortgaged with any other institution.",
  },
];

const loanTypes = [
  {
    title: "Secured Loan",
    desc: "The loan is secured against the value of your property. The property acts as collateral, reducing the risk for the lender and often resulting in lower interest rates compared to unsecured loans.",
  },
  {
    title: "Loan Amount",
    desc: "The loan amount is determined based on the value of the property you pledge. Generally, you can receive a higher loan amount compared to personal loans or other unsecured loans.",
  },
  {
    title: "Flexible Tenure",
    desc: "The repayment tenure for a Loan Against Property is usually longer than other loans, providing flexibility in repaying the loan over an extended period.",
  },
  {
    title: "Multi-purpose Use",
    desc: "The loan funds can be used for various purposes such as business expansion, education, medical expenses, home renovation, or any other personal or professional needs.",
  },
  {
    title: "Lower Interest Rates",
    desc: "Loan Against Property usually carries lower interest rates compared to personal loans or other unsecured loans, making it a cost-effective financing option.",
  },
];

export default function LoanAgainstPropertyPage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Loan Against Property</p>
            <h1>Turn Your Property into Capital with Ease</h1>
            <p className={styles.heroLead}>
              Get the best Loan Against Property deals at a lower interest rate.
            </p>
            <div className={styles.heroAction}>
              <Link href="/contact" className="button buttonPrimary">
                Apply Now
              </Link>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <p className={styles.panelEyebrow}>Loan Features</p>
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
        <h2>Loan Against Property Features</h2>
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
        <h2>Eligibility Criteria for Loan Against Property</h2>
        <p>Review the essential requirements to qualify for a LAP and secure the best terms for your assets.</p>
      </section>

      <section className={styles.servicesGrid}>
        {eligibilityCriteria.map((item, index) => (
          <ScrollReveal key={item.title} className={styles.card} delay={index * 100}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </ScrollReveal>
        ))}
      </section>

      <section className={styles.sectionIntro}>
        <h2>Features and Benefits of Our Loan Against Property</h2>
        <p>A secured loan option that turns your property into immediate capital for your business or personal needs.</p>
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
        <h2>Ready to Leverage Your Property?</h2>
        <p>Book a call with our advisory team to discuss your Loan Against Property options.</p>
        <div>
          <Link href="/contact" className="button buttonPrimary">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
