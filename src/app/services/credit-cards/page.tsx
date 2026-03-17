import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceFeatureIcon } from "@/components/ServiceFeatureIcon";
import styles from "./credit-cards.module.css";

export const metadata: Metadata = {
  title: "Credit Cards",
  description: "A credit card is a financial instrument that allows the cardholder to make purchases and pay for them later using a pre-approved credit limit.",
};

const visualFeatures = [
  {
    title: "Interest-free up to 50 Days",
    icon: "interestFreeDays" as const,
  },
  {
    title: "Instant Rewards & Cashback",
    icon: "rewardsCashback" as const,
  },
  {
    title: "Pre-approved Credit Limit",
    icon: "preApprovedLimit" as const,
  },
];

const ccTypes = [
  {
    title: "Shopping Credit Cards",
    desc: "These cards are designed to reward users for their shopping expenses. They provide rewards such as cashback or reward points that can be redeemed for merchandise, travel benefits, or other offers.",
  },
  {
    title: "Lifestyle Credit Cards",
    desc: "Lifestyle credit cards are created to match modern lifestyle needs. They offer reward points, discounts, and cashback on retail purchases, dining, entertainment, and other lifestyle spending.",
  },
  {
    title: "Fuel Credit Cards",
    desc: "Fuel credit cards help customers save money on fuel purchases. These cards provide benefits such as fuel surcharge waivers, cashback, or reward points on fuel transactions.",
  },
  {
    title: "Rewards Credit Cards",
    desc: "Rewards credit cards provide benefits like cashback, reward points, or travel miles for every purchase made using the card. These rewards can be redeemed in various ways depending on the card issuer.",
  },
  {
    title: "Travel Credit Cards",
    desc: "Travel credit cards offer benefits related to travel expenses such as discounts on flight tickets, hotel bookings, travel reward points, and other travel-related perks.",
  },
];

const ccEligibility = [
  "Applicants are generally required to be at least 18 years old",
  "A minimum income level may be required to ensure the applicant can repay",
  "A good credit score increases the chances of approval",
  "Proof of current residential address is required",
];

export default function CreditCardsPage() {
  return (
    <div className={`${styles.page} container`}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Credit Cards</p>
            <h1>Unlock Rewards & Financial Flexibility</h1>
            <p className={styles.heroLead}>
              A credit card allows you to make purchases and pay later using a pre-approved limit.
              Enjoy an interest-free period up to 50 days based on your billing cycle.
            </p>
            <div className={styles.heroAction}>
              <Link href="/contact" className="button buttonPrimary">
                Apply Now
              </Link>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <p className={styles.panelEyebrow}>Eligibility Criteria</p>
            <div className={styles.featureList}>
              {ccEligibility.map((feature, i) => (
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
        <h2>Credit Card Rewards</h2>
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
        <h2>Different Types of Credit Cards in India</h2>
        <p>
          Find the perfect card that aligns with your lifestyle. Whether it&apos;s covering daily
          commutes or frequent travel, we have options to maximize your benefits.
        </p>
      </section>

      <section className={styles.servicesGrid}>
        {ccTypes.map((loan, index) => (
          <ScrollReveal key={loan.title} className={styles.card} delay={index * 100}>
            <h3>{loan.title}</h3>
            <p>{loan.desc}</p>
          </ScrollReveal>
        ))}
      </section>

      <section className={styles.ctaBox} style={{ marginTop: "2rem" }}>
        <h2>Ready to Upgrade Your Lifestyle?</h2>
        <p>Book a call with our advisory team to find a credit card perfectly suited for you.</p>
        <div>
          <Link href="/contact" className="button buttonPrimary">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
