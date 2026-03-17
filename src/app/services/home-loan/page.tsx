import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceFeatureIcon } from "@/components/ServiceFeatureIcon";
import styles from "./home-loan.module.css";

export const metadata: Metadata = {
  title: "Home Loan",
  description: "Make Your Homeownership Dream a Reality! Find the perfect home loan with minimal documentation and lower interest rates!",
};

const visualFeatures = [
  {
    title: "Attractive Interest Rates",
    icon: "attractiveRates" as const,
  },
  {
    title: "Minimal Documentation",
    icon: "minimalDocumentation" as const,
  },
  {
    title: "Up to 30 Years Loan Tenure",
    icon: "loanTenure" as const,
  },
];

const loanFeatures = [
  "Attractive Interest Rates",
  "Minimal Documentation",
  "Up to 30 Years Loan Tenure",
];

const loanTypes = [
  {
    title: "Home Construction Loan",
    desc: "If you own a plot of land but need funds to build a house, a home construction loan helps finance the construction or major renovation of your property.",
  },
  {
    title: "Home Extension Loan",
    desc: "If you already own a home and want to expand it by adding a new room, an additional floor, or extending the structure, this loan helps finance those improvements.",
  },
  {
    title: "Home Improvement Loan",
    desc: "This loan helps you renovate or upgrade your house, including replacing furniture, repairing fixtures, improving lighting systems, or refreshing the overall interior/exterior of your property.",
  },
];

const eligibilityCriteria = [
  {
    title: "Age Criteria",
    desc: "You must be above 21 years of age at the time of commencing your loan, and up to 65 years or less at loan maturity.\n- Salaried: 21 to 58 years\n- Self-Employed: 25 to 65 years",
  },
  {
    title: "Income Requirements",
    desc: "- Salaried Person: Minimum ₹10,000 per month\n- Self-Employed Person: Minimum ₹2,00,000 per year",
  },
  {
    title: "Employment/Experience",
    desc: "- Salaried: Minimum 2 to 3 years of experience in MNC, Private, or Public Ltd Company\n- Self-Employed: Minimum 3 years in the current field",
  },
  {
    title: "Credit Score",
    desc: "A credit score of 750 or above is considered ideal for faster approval and better interest rates.",
  },
];

export default function HomeLoanPage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Home Loan</p>
            <h1>Make Your Homeownership Dream a Reality!</h1>
            <p className={styles.heroLead}>
              Find the perfect home loan with minimal documentation and lower interest rates!
            </p>
            <div className={styles.heroAction}>
              <Link href="/contact" className="button buttonPrimary">
                Apply Now
              </Link>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <p className={styles.panelEyebrow}>Home Loan Features</p>
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
        <h2>Home Loan Features</h2>
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
        <h2>Home Loan Eligibility Criteria</h2>
        <p>Ensure you meet the basic requirements to qualify for our home loan offerings.</p>
      </section>

      <section className={styles.servicesGrid}>
        {eligibilityCriteria.map((item, index) => (
          <ScrollReveal key={item.title} className={styles.card} delay={index * 100}>
            <h3>{item.title}</h3>
            <div style={{ whiteSpace: 'pre-line' }}>
              <p>{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </section>

      <section className={styles.sectionIntro}>
        <h2>Features and Benefits of Our Home Loan</h2>
        <p>A wide range of financial institutions offer competitive home loan rates and affordable EMIs to help you finance your dream home.</p>
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
        <h2>Ready to Build Your Future?</h2>
        <p>Book a call with our advisory team to discuss your home loan options.</p>
        <div>
          <Link href="/contact" className="button buttonPrimary">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
