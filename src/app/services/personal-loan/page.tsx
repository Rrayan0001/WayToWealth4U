import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceFeatureIcon } from "@/components/ServiceFeatureIcon";
import styles from "./personal-loan.module.css";

export const metadata: Metadata = {
  title: "Personal Loan",
  description: "Get Closer to Your Goals with an Instant Personal Loan. Explore flexible personal loan options tailored to meet your financial needs.",
};

const visualFeatures = [
  {
    title: "Instant Personal Loan",
    icon: "instantPersonalLoan" as const,
  },
  {
    title: "3 Unique Loan Variants",
    icon: "loanVariants" as const,
  },
  {
    title: "Loan Up to ₹40 Lakh",
    icon: "loanAmount" as const,
  },
  {
    title: "Tenure up to 84 Months",
    icon: "loanTenure" as const,
  },
];

const eligibilityCriteria = [
  {
    title: "Age & Residency",
    desc: "Applicants must be resident citizens of India, aged between 21 and 60 years.",
  },
  {
    title: "Income Thresholds",
    desc: "Net monthly income must be at least ₹15,000 for salaried/self-employed. Self-employed yearly transactions should be min ₹20 Lakhs.",
  },
  {
    title: "Credit Score",
    desc: "A credit score of 650 or above is required. Maintaining a clean repayment history is essential.",
  },
  {
    title: "Financial Stability",
    desc: "Lenders evaluate your debt-to-income ratio, employment stability, and overall track record of financial responsibility.",
  },
];

const loanFeatures = [
  "Offers for New Customers",
  "3 Unique Loan Variants",
  "Loan Amount up to ₹40 Lakh",
  "Loan Tenure up to 84 Months",
  "No Guarantor or Collateral Required",
  "No Hidden Charges",
];

const loanBenefits = [
  {
    title: "Debt Consolidation",
    desc: "Combine multiple debts into a single loan with a potentially lower interest rate. This helps simplify repayment and may reduce the overall interest burden.",
  },
  {
    title: "Home Renovation",
    desc: "Personal loans can be used to finance home improvement projects such as remodeling, interior upgrades, or property repairs.",
  },
  {
    title: "Medical Emergencies",
    desc: "Quick access to funds during health crises can help cover hospitalization, surgery, or any urgent medical expenses.",
  },
  {
    title: "Wedding Expenses",
    desc: "Personal loans provide financial support for wedding ceremonies, catering, venue booking, and other associated costs.",
  },
  {
    title: "Travel and Vacation",
    desc: "Funds can be used to plan dream vacations, covering flight tickets, accommodation, and sightseeing expenses.",
  },
  {
    title: "Educational Costs",
    desc: "Borrowers can use personal loans to pay for tuition fees, higher education, or professional certification courses.",
  },
];

export default function PersonalLoanPage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Personal Loan</p>
            <h1>Get Closer to Your Goals with an Instant Personal Loan</h1>
            <p className={styles.heroLead}>
              Explore flexible personal loan options tailored to meet your financial needs.
            </p>
            <div className={styles.heroAction}>
              <Link href="/contact" className="button buttonPrimary">
                Apply Now
              </Link>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <p className={styles.panelEyebrow}>Personal Loan Features</p>
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
        <h2>Personal Loan Features</h2>
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
        <h2>Personal Loan Eligibility Criteria</h2>
        <p>Ensure you meet the basic requirements of our lending partners to qualify for a personal loan.</p>
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
        <h2>Features and Benefits of Our Personal Loan</h2>
        <p>A personal loan is an unsecured loan that does not require collateral or security. This makes it a flexible financing option that can be used for multiple purposes without restrictions.</p>
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
        <h2>Ready to Meet Your Financial Goals?</h2>
        <p>Book a call with our advisory team to discuss your personal loan options.</p>
        <div>
          <Link href="/contact" className="button buttonPrimary">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
