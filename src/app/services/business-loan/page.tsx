import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceFeatureIcon } from "@/components/ServiceFeatureIcon";
import styles from "./business-loan.module.css";

export const metadata: Metadata = {
  title: "Business Loan",
  description: "Fuel Your Business Growth with a Fast Business Loan. Get a convenient business loan to support assets, working capital, and business expansion.",
};

const visualFeatures = [
  {
    title: "Term Loans",
    icon: "termLoan" as const,
  },
  {
    title: "Working Capital Loans",
    icon: "workingCapital" as const,
  },
  {
    title: "Business Expansion Loans",
    icon: "businessExpansion" as const,
  },
  {
    title: "Equipment Financing Loans",
    icon: "equipmentFinancing" as const,
  },
  {
    title: "Invoice Financing & Bill Discounting",
    icon: "invoiceFinancing" as const,
  },
  {
    title: "Machinery Loans",
    icon: "machineryLoan" as const,
  },
];

const businessOverview = [
  {
    title: "Get High Business Loan Eligibility",
    desc: "Before applying, prepare a proper business plan, review your credit score, determine the required loan amount, research market options, and keep all documents ready.",
  },
  {
    title: "Common Documents Required",
    desc: "Proof of address/ID of promoters, business/income proof, partnership deed, AA/MOA, board resolution, PAN card, and other relevant documentation.",
  },
  {
    title: "Criteria for Business Loan Approval",
    desc: "Applicants aged 21-65. Business should have 1–2 years history, meet annual turnover requirements, and show profitability for at least the previous year.",
  },
];

const quickHighlights = [
  "Fuel Growth with Fast Loans",
  "Support Assets & Expansion",
  "Working Capital Support",
  "Convenient & Flexible",
];

export default function BusinessLoanPage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Business Loan</p>
            <h1>Fuel Your Business Growth with a Fast Business Loan</h1>
            <p className={styles.heroLead}>
              Get a convenient business loan to support assets, working capital, and business expansion.
            </p>
            <div className={styles.heroAction}>
              <Link href="/contact" className="button buttonPrimary">
                Apply Now
              </Link>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <p className={styles.panelEyebrow}>Quick Highlights</p>
            <div className={styles.featureList}>
              {quickHighlights.map((text, i) => (
                <div key={i} className={styles.featureItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionIntro}>
        <p className={styles.sectionEyebrow}>Strategic Overview</p>
        <h2>Business Loan Overview</h2>
        <p>Expert guidance and strategic preparation to ensure your business secures the capital it needs to thrive.</p>
      </section>

      <section className={styles.servicesGrid}>
        {businessOverview.map((item, index) => (
          <ScrollReveal key={item.title} className={styles.card} delay={index * 100}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </ScrollReveal>
        ))}
      </section>

      <section className={styles.sectionIntro} style={{ marginTop: "2.5rem" }}>
        <p className={styles.sectionEyebrow}>Tailored Solutions</p>
        <h2>Features and Benefits of Our Business Loans</h2>
      </section>

      <div className={styles.visualFeatures} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {visualFeatures.map((feat, i) => (
          <ScrollReveal key={i} className={styles.visualCard} delay={i * 100}>
            <div className={styles.iconContainer}>
              <ServiceFeatureIcon icon={feat.icon} title={feat.title} />
            </div>
            <span>{feat.title}</span>
          </ScrollReveal>
        ))}
      </div>

      <section className={styles.ctaBox} style={{ marginTop: "3rem" }}>
        <h2>Ready to Fuel Your Growth?</h2>
        <p>Book a consultation with our financial experts to discuss your business funding strategy and find the perfect loan variant for your needs.</p>
        <div>
          <Link href="/contact" className="button buttonPrimary">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
