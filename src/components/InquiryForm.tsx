"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

import { officeSnapshot } from "@/lib/siteData";
import { buildWhatsAppInquiryUrl, type InquiryFormValues } from "@/lib/inquiry";

import styles from "./InquiryForm.module.css";

type InquiryFormProps = {
  className?: string;
  source: string;
  submitLabel?: string;
  buttonFullWidth?: boolean;
  initialService?: string;
  mode?: "default" | "channel-partner";
};

function getInitialValues(initialService: string): InquiryFormValues {
  return {
    name: "",
    mobile: "",
    email: "",
    service: initialService,
    amount: "",
    message: "",
  };
}

function toFieldPrefix(source: string) {
  return source.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function InquiryForm({
  className,
  source,
  submitLabel = "Send Inquiry",
  buttonFullWidth = false,
  initialService = "",
  mode = "default",
}: InquiryFormProps) {
  const [values, setValues] = useState(() => getInitialValues(initialService));
  const [error, setError] = useState("");
  const fieldPrefix = toFieldPrefix(source);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const whatsappUrl = buildWhatsAppInquiryUrl(officeSnapshot.whatsapp, values, source);

    if (!whatsappUrl) {
      setError("WhatsApp contact is not configured yet.");
      return;
    }

    const openedWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!openedWindow) {
      window.location.href = whatsappUrl;
    }
  }

  const formClassName = className ? `${styles.form} ${className}` : styles.form;
  const buttonClassName = buttonFullWidth
    ? `button buttonPrimary ${styles.buttonFullWidth}`
    : "button buttonPrimary";

  return (
    <form className={formClassName} aria-label="Contact inquiry form" onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor={`${fieldPrefix}-name`}>Full Name</label>
        <input
          id={`${fieldPrefix}-name`}
          name="name"
          type="text"
          placeholder="Your name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </div>

      {mode === "channel-partner" ? (
        <>
          <div className={styles.field}>
            <label htmlFor={`${fieldPrefix}-mobile`}>Mobile Number</label>
            <input
              id={`${fieldPrefix}-mobile`}
              name="mobile"
              type="tel"
              inputMode="tel"
              placeholder="Your mobile number"
              value={values.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor={`${fieldPrefix}-email`}>Email</label>
            <input
              id={`${fieldPrefix}-email`}
              name="email"
              type="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={handleChange}
              required
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles.field}>
            <label htmlFor={`${fieldPrefix}-email`}>Email</label>
            <input
              id={`${fieldPrefix}-email`}
              name="email"
              type="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor={`${fieldPrefix}-service`}>Service Needed</label>
            <input
              id={`${fieldPrefix}-service`}
              name="service"
              type="text"
              placeholder="Loan / Credit / Market Classes"
              value={values.service}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor={`${fieldPrefix}-amount`}>Amount Required</label>
            <input
              id={`${fieldPrefix}-amount`}
              name="amount"
              type="text"
              placeholder="e.g. ₹50,00,000"
              value={values.amount}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor={`${fieldPrefix}-message`}>Message</label>
            <textarea
              id={`${fieldPrefix}-message`}
              name="message"
              rows={4}
              placeholder="Tell us your goals"
              value={values.message}
              onChange={handleChange}
              required
            />
          </div>
        </>
      )}

      <button type="submit" className={buttonClassName}>
        {submitLabel}
      </button>

      <p className={styles.helperText}>Submitting opens WhatsApp with your inquiry arranged in a ready-to-send format.</p>

      {error ? (
        <p className={`${styles.helperText} ${styles.errorText}`} aria-live="polite">
          {error}
        </p>
      ) : null}
    </form>
  );
}
