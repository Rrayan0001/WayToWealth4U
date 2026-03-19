import Link from "next/link";
import { EmiCalculator } from "@/components/EmiCalculator";
import { FeatureTicker } from "@/components/FeatureTicker";
import { HeroSection } from "@/components/HeroSection";
import { InquiryForm } from "@/components/InquiryForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WorkedWith } from "@/components/WorkedWith";
import { officeSnapshot, serviceItems, testimonialItems } from "@/lib/siteData";

import styles from "./page.module.css";

const tickerItems = [
  "Growth-Led Loan Structuring",
  "Gold-Standard Credit Guidance",
  "Trusted Advisory Access",
  "Home Loans",
  "Business Loans",
  "Certified Guidance",
  "Long-Term Wealth Planning",
  "Fast Documentation Support",
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
  "Home Loan": {
    imgSrc: "/services/home-loan.svg",
    imgAlt: "Home Loan",
    variant: "ivory" as const,
  },
  "Loan Against Property": {
    imgSrc: "/services/lap.svg",
    imgAlt: "Loan Against Property",
    variant: "blue" as const,
  },
  "Personal Loan": {
    imgSrc: "/services/personal-loan.svg",
    imgAlt: "Personal Loan",
    variant: "slate" as const,
  },
  "Business Loan": {
    imgSrc: "/services/business-loan.svg",
    imgAlt: "Business Loan",
    variant: "gold" as const,
  },
  "MSME Loans": {
    imgSrc: "/services/business-loan.svg",
    imgAlt: "MSME Loans",
    variant: "gold" as const,
  },
  "Doctor Loan": {
    imgSrc: "/services/personal-loan.svg",
    imgAlt: "Doctor Loan",
    variant: "ivory" as const,
  },
  "Project Loan": {
    imgSrc: "/services/business-loan.svg",
    imgAlt: "Project Loan",
    variant: "blue" as const,
  },
  "Education Loan": {
    imgSrc: "/services/education.svg",
    imgAlt: "Education Loan",
    variant: "blue" as const,
  },
  "Car Loan": {
    imgSrc: "/services/car.svg",
    imgAlt: "Car Loan",
    variant: "slate" as const,
  },
  "Gold Loan": {
    imgSrc: "/services/gold.svg",
    imgAlt: "Gold Loan",
    variant: "gold" as const,
  },
  "Credit Cards": {
    imgSrc: "/services/credit-cards.svg",
    imgAlt: "Credit Cards",
    variant: "ivory" as const,
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />

      <FeatureTicker items={tickerItems} durationSeconds={32} />

      <section id="emi-calculator" className="sectionBlock">
        <div className={`${styles.calculatorGrid} container`}>
          <ScrollReveal variant="slide-right">
            <h2 className="sectionTitle">EMI Calculator</h2>
            <p className="sectionLead">
              Estimate monthly commitments instantly and align repayment strategies before applying for any loan.
            </p>
            <ul className={styles.quickList}>
              <li>Real-time EMI preview</li>
              <li>Interest visibility before commitment</li>
              <li>Suitable for home, business, and personal loans</li>
            </ul>
          </ScrollReveal>
          <EmiCalculator />
        </div>
      </section>

      <WorkedWith />
      <FeatureTicker items={secondaryTickerItems} durationSeconds={36} reverse />

      <section id="services" className={styles.servicesSection}>
        <div className="container">
          <header className={styles.servicesHeader}>
            <p className="eyebrow" style={{ color: "var(--gold-600)" }}>We Facilitate</p>
            <h2 className={styles.servicesTitle}>Financial Products We Facilitate</h2>
            <p className={styles.servicesSubtitle}>Wide Range of Financial Products That Suit Your Customer&apos;s Needs</p>
            <div className={styles.servicesDivider} />
          </header>
          <div className={styles.servicesGrid}>
            {serviceItems.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 90} variant="pop">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  points={service.points}
                  href={service.href ?? "/services"}
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


      <TestimonialsSection testimonials={testimonialItems} />

      <div className="container">
        <hr style={{ border: "none", borderTop: "1px solid color-mix(in srgb, var(--emerald-200) 38%, transparent)" }} />
      </div>

      <section id="contact-cta" className="sectionBlock">
        <div className="container">
          <div className={styles.contactSection}>
            <div className={styles.contactInfo}>
              <p className="eyebrow">Contact</p>
              <h2>Tell WealthRise Capitals What You Need</h2>
              <p className={styles.contactDesc}>
                Share your goals and we&apos;ll help you map the right loan, credit, or market-growth strategy.
              </p>
              <div className={styles.contactActions}>
                <Link href="/contact#channel-partner" className="button buttonOutline">
                  Become a Channel Partner
                </Link>
              </div>
              <ul className={styles.contactMethods}>
                <li>
                  <span className={styles.contactIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="22" height="22">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <span>Advisory Inbox</span>
                </li>
                <li>
                  <span className={styles.contactIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="22" height="22">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <span>{officeSnapshot.phone}</span>
                </li>
                <li>
                  <span className={styles.contactIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="22" height="22">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  <a href={officeSnapshot.mapUrl} target="_blank" rel="noopener noreferrer">
                    {officeSnapshot.address}
                  </a>
                </li>
              </ul>
            </div>
            <InquiryForm
              className={styles.contactForm}
              source="Homepage Contact Section"
              submitLabel="Send Inquiry"
              buttonFullWidth
              submissionType="user_inquiry"
            />
          </div>
        </div>
      </section>
    </div >
  );
}
