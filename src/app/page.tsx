import Link from "next/link";

import { EmiCalculator } from "@/components/EmiCalculator";
import { FeatureTicker } from "@/components/FeatureTicker";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WorkedWith } from "@/components/WorkedWith";
import { processSteps, serviceItems, testimonialItems } from "@/lib/siteData";

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
      <section className={styles.showcase}>
        <div className={styles.showcasePanel}>
          <div className={styles.showcaseContent}>
            <ScrollReveal className={styles.showcaseLeft} variant="pop">
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
            </ScrollReveal>
          </div>

          <div className={styles.bottomRow}>
            <div className={styles.reviewPill}>
              <span className={styles.reviewBrand}>W</span>
              <div className={styles.reviewContent}>
                <div className={styles.reviewStars}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    style={{ width: "14px", height: "14px" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    style={{ width: "14px", height: "14px" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    style={{ width: "14px", height: "14px" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    style={{ width: "14px", height: "14px" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    style={{ width: "14px", height: "14px" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className={styles.reviewText}>
                  4.9/5 <span>from 40+ Clients</span>
                </p>
              </div>
            </div>
          </div>
        </div >
      </section >

      <FeatureTicker items={tickerItems} durationSeconds={32} />

      <section id="emi-calculator" className="sectionBlock">
        <div className={`${styles.calculatorGrid} container`}>
          <ScrollReveal variant="slide-right">
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
          </ScrollReveal>
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
              <ScrollReveal key={service.title} delay={index * 90} variant="pop">
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

      <section id="process" className={styles.processSection}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <TestimonialsSection testimonials={testimonialItems} />

      <div className="container">
        <hr style={{ border: 'none', borderTop: '1px solid color-mix(in srgb, var(--gold-300) 30%, transparent)' }} />
      </div>

      <section id="contact-cta" className="sectionBlock">
        <div className="container">
          <div className={styles.contactSection}>
            <div className={styles.contactInfo}>
              <p className="eyebrow">Contact</p>
              <h2>Let Us Know How We Can Help</h2>
              <p className={styles.contactDesc}>
                We&apos;re here to help and answer any question you might have. We look forward to hearing from you!
              </p>
              <ul className={styles.contactMethods}>
                <li>
                  <span className={styles.contactIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="22" height="22">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <span>hello@way2wealth4u.com</span>
                </li>
                <li>
                  <span className={styles.contactIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="22" height="22">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <span>+91 90000 00000</span>
                </li>
                <li>
                  <span className={styles.contactIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="22" height="22">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  <span>Way2Wealth4U Advisory Desk, Financial District, India</span>
                </li>
              </ul>
            </div>
            <form className={styles.contactForm} aria-label="Contact inquiry form">
              <div className={styles.formField}>
                <label htmlFor="contact-name">Full Name</label>
                <input id="contact-name" type="text" placeholder="Your name" required />
              </div>
              <div className={styles.formField}>
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" type="email" placeholder="you@example.com" required />
              </div>
              <div className={styles.formField}>
                <label htmlFor="contact-service">Service Needed</label>
                <input id="contact-service" type="text" placeholder="Loan / Credit / Market Classes" />
              </div>
              <div className={styles.formField}>
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" rows={4} placeholder="Tell us your goals" required />
              </div>
              <button type="submit" className="button buttonPrimary" style={{ width: '100%', justifyContent: 'center' }}>
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div >
  );
}
