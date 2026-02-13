import Link from "next/link";

import { EmiCalculator } from "@/components/EmiCalculator";
import { FeatureTicker } from "@/components/FeatureTicker";
import { ParallaxGrowth } from "@/components/ParallaxGrowth";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { WorkedWith } from "@/components/WorkedWith";
import { processSteps, serviceItems } from "@/lib/siteData";

import styles from "./page.module.css";

const tickerItems = [
  "Fast Loan Delivery",
  "Easy Returns Support",
  "Genuine Advisory Access",
  "Home Loans",
  "Business Loans",
  "Certified Guidance",
  "Up To 70% Savings",
  "Low Processing Time",
];

const secondaryTickerItems = [
  "Personal Loans",
  "Credit Card Optimization",
  "Business Finance Solutions",
  "Mortgage Support",
  "Trading Mentorship",
  "Portfolio Clarity",
  "Priority Support",
  "Secure Documentation",
];

const serviceCardMeta = {
  Loans: {
    href: "/services#loans",
    imgSrc: "/services/loans-illustration.svg",
    imgAlt: "Loan growth and home finance illustration",
    variant: "gold" as const,
  },
  "Credit Cards": {
    href: "/services#credit-cards",
    imgSrc: "/services/credit-cards-illustration.svg",
    imgAlt: "Credit card rewards and optimization illustration",
    variant: "gold" as const,
  },
  "Stock Market Classes": {
    href: "/services#market-classes",
    imgSrc: "/services/market-classes-illustration.svg",
    imgAlt: "Market analysis and training illustration",
    variant: "ivory" as const,
  },
  "Additional Service": {
    href: "/services#additional-service",
    imgSrc: "/services/additional-service-illustration.svg",
    imgAlt: "Customized financial support illustration",
    variant: "ivory" as const,
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <FeatureTicker items={tickerItems} durationSeconds={32} />

      <section className={styles.showcase}>
        <div className={styles.showcasePanel}>
          <div className={styles.showcaseContent}>
            <ScrollReveal className={styles.showcaseLeft}>
              <p className={styles.tagline}>Way2Wealth4U Premium Financial Studio</p>
              <h1>WE CREATE AWESOME WEALTH DESIGN.</h1>
              <p className={styles.showcaseLead}>
                Premium loan strategy, credit optimization, and market education crafted for confident, upward
                financial movement.
              </p>

              <div className={styles.showcaseCtas}>
                <Link href="/contact" className="button buttonPrimary">
                  Apply Now
                </Link>
                <Link href="/#services" className="button buttonGhost">
                  Learn More
                </Link>
              </div>

              <div className={styles.scrollHint}>
                <span>v</span>
                <p>Scroll to discover our services</p>
              </div>
            </ScrollReveal>
          </div>

          <div className={styles.bottomRow}>
            <div className={styles.reviewPill}>
              <span className={styles.reviewBrand}>C</span>
              <span className={styles.reviewStars}>* * * * *</span>
              <strong>4.9</strong>
            </div>
            <p className={styles.reviewText}>TRUST VERIFIED | Our customers love to work with us. 40+ Reviews</p>
          </div>
        </div>
      </section>

      <section id="emi-calculator" className="sectionBlock">
        <div className={`${styles.calculatorGrid} container`}>
          <div>
            <p className="eyebrow">Interactive Tool</p>
            <h2 className="sectionTitle">EMI Calculator</h2>
            <p className="sectionLead">
              Estimate monthly commitments instantly and align repayment strategies before applying for any loan.
            </p>
            <ul className={styles.quickList}>
              <li>Real-time EMI preview</li>
              <li>Interest visibility before commitment</li>
              <li>Suitable for home, business, and personal loans</li>
            </ul>
          </div>
          <EmiCalculator />
        </div>
      </section>

      <WorkedWith />
      <FeatureTicker items={secondaryTickerItems} durationSeconds={36} reverse />

      <section id="services" className="sectionBlock">
        <div className="container">
          <header className="sectionHeader">
            <p className="eyebrow">Core Services</p>
            <h2>Strategic Financial Solutions</h2>
          </header>
          <div className={styles.servicesGrid}>
            {serviceItems.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 90}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  points={service.points}
                  href={serviceCardMeta[service.title as keyof typeof serviceCardMeta]?.href ?? "/services"}
                  imgSrc={
                    serviceCardMeta[service.title as keyof typeof serviceCardMeta]?.imgSrc ??
                    "/services/loans-illustration.svg"
                  }
                  imgAlt={
                    serviceCardMeta[service.title as keyof typeof serviceCardMeta]?.imgAlt ??
                    "Financial services illustration"
                  }
                  variant={serviceCardMeta[service.title as keyof typeof serviceCardMeta]?.variant ?? "gold"}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="sectionBlock">
        <div className="container">
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <section className="sectionBlock">
        <div className="container">
          <ParallaxGrowth />
        </div>
      </section>

      <section id="contact-cta" className="sectionBlock">
        <div className="container">
          <div className={styles.finalCta}>
            <h2>Ready To Upgrade Your Financial Trajectory?</h2>
            <p>
              Work with Way2Wealth4U for a premium experience grounded in speed, clarity, and sustainable growth.
            </p>
            <div className={styles.showcaseCtas}>
              <Link href="/contact" className="button buttonPrimary">
                Start Consultation
              </Link>
              <Link href="/my-office" className="button buttonGhost">
                Visit My Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
