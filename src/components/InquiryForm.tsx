"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

import { officeSnapshot } from "@/lib/siteData";
import { buildWhatsAppInquiryUrl, type InquiryFormValues } from "@/lib/inquiry";
import type { SubmissionType } from "@/lib/submissions";

import styles from "./InquiryForm.module.css";

type InquiryFormProps = {
  className?: string;
  source: string;
  submitLabel?: string;
  buttonFullWidth?: boolean;
  initialService?: string;
  mode?: "default" | "channel-partner";
  submissionType?: SubmissionType;
};

function getInitialValues(initialService: string): InquiryFormValues {
  return {
    name: "",
    mobile: "",
    email: "",
    location: "",
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
  submissionType = "user_inquiry",
}: InquiryFormProps) {
  const [values, setValues] = useState(() => getInitialValues(initialService));
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          submissionType,
          source,
          values,
        }),
      });

      if (!response.ok) {
        throw new Error("We could not save your inquiry right now. Please try again once.");
      }

      const whatsappUrl = buildWhatsAppInquiryUrl(officeSnapshot.whatsapp, values, source);

      if (!whatsappUrl) {
        throw new Error("WhatsApp contact is not configured yet.");
      }

      const openedWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      if (!openedWindow) {
        window.location.href = whatsappUrl;
      }

      setValues(getInitialValues(initialService));
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to submit your inquiry right now.");
    } finally {
      setIsSubmitting(false);
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

          <div className={styles.field}>
            <label htmlFor={`${fieldPrefix}-location`}>Location</label>
            <input
              id={`${fieldPrefix}-location`}
              name="location"
              type="text"
              placeholder="Your city / area"
              value={values.location}
              onChange={handleChange}
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
            <label htmlFor={`${fieldPrefix}-location`}>Location</label>
            <input
              id={`${fieldPrefix}-location`}
              name="location"
              type="text"
              placeholder="Your city / area"
              value={values.location}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor={`${fieldPrefix}-service`}>Service Needed</label>
            <input
              id={`${fieldPrefix}-service`}
              name="service"
              type="text"
              placeholder="Loan / Insurance / Real Estate / Stock Market Coaching / Investments"
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

      <button type="submit" className={buttonClassName} disabled={isSubmitting}>
        {isSubmitting ? "Saving Inquiry..." : submitLabel}
      </button>

      <p className={styles.helperText}>Submitting saves your inquiry and opens WhatsApp with the same details ready to send.</p>

      {error ? (
        <p className={`${styles.helperText} ${styles.errorText}`} aria-live="polite">
          {error}
        </p>
      ) : null}
    </form>
  );
}
