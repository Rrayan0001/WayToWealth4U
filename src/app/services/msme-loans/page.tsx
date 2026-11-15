import type { Metadata } from "next";
import Link from "next/link";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceFeatureIcon } from "@/components/ServiceFeatureIcon";

import styles from "../business-loan/business-loan.module.css";

export const metadata: Metadata = {
  title: "MSME Loans",
  description:
    "Support micro, small, and medium enterprises with practical financing options for working capital, equipment, and business growth.",
};

const visualFeatures = [
  {
    title: "Working Capital Support",
    icon: "workingCapital" as const,
  },
  {
    title: "Business Expansion Funding",
    icon: "businessExpansion" as const,
  },
  {
    title: "Machinery & Equipment Loans",
    icon: "machineryLoan" as const,
  },
  {
    title: "Flexible MSME Structures",
    icon: "flexibleRepayment" as const,
  },
  {
    title: "Competitive Interest Options",
    icon: "attractiveRates" as const,
  },
  {
    title: "Minimal Documentation Support",
    icon: "minimalDocumentation" as const,
  },
];

const msmeOverview = [
  {
    title: "Purpose-Built for Growing Enterprises",
    desc: "MSME loans are designed for micro, small, and medium enterprises that need funding for day-to-day operations, expansion, inventory, equipment, or liquidity support.",
  },
  {
    title: "Funding Across Multiple Business Needs",
    desc: "These loans can be structured for working capital gaps, new branch launches, technology upgrades, machinery procurement, or strengthening operational cash flow.",
  },
  {
    title: "Guided File Preparation",
    desc: "We help organize business proofs, bank statements, KYC, turnover records, and financial details so the MSME application is stronger and easier to process.",
  },
];

const quickHighlights = [
  "Working Capital & Expansion Support",
  "Ideal for Small & Medium Businesses",
  "Machinery, Inventory, and Growth Funding",
  "Structured Guidance from Start to Sanction",
];

const msmeBenefits = [
  {
    title: "Working Capital Stability",
    desc: "Keep operations smooth during seasonal fluctuations, receivable delays, or periods of business growth.",
  },
  {
    title: "Expansion Readiness",
    desc: "Use MSME funding for branch growth, service upgrades, staff expansion, or production scale-up.",
  },
  {
    title: "Asset and Equipment Support",
    desc: "Invest in machinery, tools, or essential infrastructure without stretching everyday business liquidity.",
  },
  {
    title: "Better Business Planning",
    desc: "A well-structured loan helps balance incoming revenue with planned repayments more comfortably.",
  },
  {
    title: "Practical Eligibility Assistance",
    desc: "We guide you on lender fitment based on turnover, vintage, business activity, and repayment profile.",
  },
  {
    title: "End-to-End Advisory Help",
    desc: "From requirement mapping to lender selection and application support, we help simplify the process.",
  },
];

export default function MsmeLoanPage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>MSME Loans</p>
            <h1>Practical Finance Solutions for Micro, Small, and Medium Enterprises</h1>
            <p className={styles.heroLead}>
              Access structured MSME financing for working capital, expansion, machinery, and day-to-day business growth.
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
              {quickHighlights.map((text) => (
                <div key={text} className={styles.featureItem}>
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
        <h2>MSME Loan Overview</h2>
        <p>Built for business owners who need reliable funding support to operate, upgrade, and grow with confidence.</p>
      </section>

      <section className={styles.servicesGrid}>
        {msmeOverview.map((item, index) => (
          <ScrollReveal key={item.title} className={styles.card} delay={index * 100}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </ScrollReveal>
        ))}
      </section>

      <section className={styles.sectionIntro} style={{ marginTop: "2.5rem" }}>
        <p className={styles.sectionEyebrow}>Key Benefits</p>
        <h2>Features and Benefits of Our MSME Loans</h2>
      </section>

      <div className={styles.visualFeatures} style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {visualFeatures.map((feat, i) => (
          <ScrollReveal key={feat.title} className={styles.visualCard} delay={i * 100}>
            <div className={styles.iconContainer}>
              <ServiceFeatureIcon icon={feat.icon} title={feat.title} />
            </div>
            <span>{feat.title}</span>
          </ScrollReveal>
        ))}
      </div>

      <section className={styles.servicesGrid}>
        {msmeBenefits.map((item, index) => (
          <ScrollReveal key={item.title} className={styles.card} delay={index * 90}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </ScrollReveal>
        ))}
      </section>

      <section className={styles.ctaBox} style={{ marginTop: "3rem" }}>
        <h2>Ready to Fund Your Business Growth?</h2>
        <p>Book a consultation and we&apos;ll help identify the right MSME loan structure for your current stage and funding requirement.</p>
        <div>
          <Link href="/contact" className="button buttonPrimary">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
