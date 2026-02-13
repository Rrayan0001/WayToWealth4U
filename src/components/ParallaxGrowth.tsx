import styles from "./ParallaxGrowth.module.css";

const ribbons = [
  "Infinite Wealth Flow",
  "Portfolio Expansion",
  "Credit Optimization",
  "Loan Intelligence",
  "Market Education",
  "Risk Governance",
  "Premium Advisory",
];

const growthCards = [
  { title: "Debt Control", text: "Track and reduce interest leakage while preserving liquidity." },
  { title: "Asset Discipline", text: "Build a consistent, compounding allocation framework." },
  { title: "Credit Strength", text: "Improve profile quality for better approvals and pricing." },
  { title: "Cash Flow", text: "Balance EMIs and investment timelines with stable reserves." },
  { title: "Market Skills", text: "Learn structured participation instead of emotional trading." },
];

export function ParallaxGrowth() {
  const ribbonItems = [...ribbons, ...ribbons];

  return (
    <section className={styles.section} aria-label="Strategic growth framework">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Strategy Engine</p>
        <h2>Structured Growth Framework</h2>
        <p>
          A clean, data-first workflow focused on disciplined borrowing, risk calibration, and steady long-term
          financial growth.
        </p>
      </div>

      <div className={styles.marqueeViewport} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {ribbonItems.map((item, index) => (
            <span key={`ribbon-${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <div className={styles.loopGrid}>
        {growthCards.map((card) => (
          <article key={card.title} className={styles.loopCard}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
