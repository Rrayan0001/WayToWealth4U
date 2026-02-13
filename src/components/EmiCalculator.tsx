"use client";

import { useMemo, useState } from "react";

import styles from "./EmiCalculator.module.css";

const money = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0,
  style: "currency",
  currency: "INR",
});

export function EmiCalculator() {
  const [amount, setAmount] = useState(1500000);
  const [rate, setRate] = useState(10.25);
  const [years, setYears] = useState(5);

  const result = useMemo(() => {
    const principal = Number.isFinite(amount) ? amount : 0;
    const annualRate = Number.isFinite(rate) ? rate : 0;
    const durationYears = Number.isFinite(years) ? years : 0;

    const months = Math.max(1, Math.round(durationYears * 12));
    const monthlyRate = annualRate / 12 / 100;

    const emi =
      monthlyRate === 0
        ? principal / months
        : (principal * monthlyRate * (1 + monthlyRate) ** months) / ((1 + monthlyRate) ** months - 1);

    const totalPayable = emi * months;
    const totalInterest = totalPayable - principal;

    return {
      emi,
      totalInterest,
      totalPayable,
    };
  }, [amount, rate, years]);

  return (
    <section className={styles.shell} aria-label="EMI calculator tool">
      <div className={styles.inputs}>
        <label>
          Loan Amount (INR)
          <input
            value={amount}
            type="number"
            min={10000}
            step={10000}
            onChange={(event) => setAmount(Number(event.target.value))}
          />
        </label>

        <label>
          Annual Interest Rate (%)
          <input
            value={rate}
            type="number"
            min={0}
            max={40}
            step={0.05}
            onChange={(event) => setRate(Number(event.target.value))}
          />
        </label>

        <label>
          Tenure (Years)
          <input
            value={years}
            type="number"
            min={1}
            max={30}
            step={1}
            onChange={(event) => setYears(Number(event.target.value))}
          />
        </label>
      </div>

      <div className={styles.metrics}>
        <article className={styles.metricCard}>
          <h4>Estimated EMI / Month</h4>
          <p>{money.format(result.emi)}</p>
        </article>
        <article className={styles.metricCard}>
          <h4>Total Interest</h4>
          <p>{money.format(result.totalInterest)}</p>
        </article>
        <article className={styles.metricCard}>
          <h4>Total Payable</h4>
          <p>{money.format(result.totalPayable)}</p>
        </article>
      </div>
    </section>
  );
}
