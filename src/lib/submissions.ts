import { randomUUID } from "node:crypto";

import { getPool } from "@/lib/db";
import type { InquiryFormValues } from "@/lib/inquiry";

export type SubmissionType = "user_inquiry" | "agent_inquiry";

export type SubmissionRecord = {
  id: string;
  inquiryType: SubmissionType;
  source: string;
  name: string;
  mobile: string;
  email: string;
  location: string;
  service: string;
  amount: string;
  message: string;
  payload: InquiryFormValues;
  createdAt: string;
};

type SubmissionRow = {
  id: string;
  inquiry_type: SubmissionType;
  source: string;
  name: string;
  mobile: string;
  email: string;
  location: string;
  service: string;
  amount: string;
  message: string;
  payload: InquiryFormValues;
  created_at: Date | string;
};

let schemaReadyPromise: Promise<void> | null = null;

function normalizeValue(value: string | undefined) {
  return (value || "").trim();
}

async function ensureSchema() {
  if (!schemaReadyPromise) {
    schemaReadyPromise = (async () => {
      const pool = getPool();

      await pool.query(`
        CREATE TABLE IF NOT EXISTS form_submissions (
          id TEXT PRIMARY KEY,
          inquiry_type TEXT NOT NULL CHECK (inquiry_type IN ('user_inquiry', 'agent_inquiry')),
          source TEXT NOT NULL,
          name TEXT NOT NULL,
          mobile TEXT NOT NULL DEFAULT '',
          email TEXT NOT NULL DEFAULT '',
          location TEXT NOT NULL DEFAULT '',
          service TEXT NOT NULL DEFAULT '',
          amount TEXT NOT NULL DEFAULT '',
          message TEXT NOT NULL DEFAULT '',
          payload JSONB NOT NULL,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `);

      await pool.query(`
        CREATE INDEX IF NOT EXISTS form_submissions_type_created_at_idx
        ON form_submissions (inquiry_type, created_at DESC);
      `);
    })();
  }

  await schemaReadyPromise;
}

function mapRow(row: SubmissionRow): SubmissionRecord {
  return {
    id: row.id,
    inquiryType: row.inquiry_type,
    source: row.source,
    name: row.name,
    mobile: row.mobile,
    email: row.email,
    location: row.location,
    service: row.service,
    amount: row.amount,
    message: row.message,
    payload: row.payload,
    createdAt: new Date(row.created_at).toISOString(),
  };
}

export async function saveSubmission(input: {
  inquiryType: SubmissionType;
  source: string;
  values: InquiryFormValues;
}) {
  await ensureSchema();

  const pool = getPool();
  const values: InquiryFormValues = {
    name: normalizeValue(input.values.name),
    mobile: normalizeValue(input.values.mobile),
    email: normalizeValue(input.values.email),
    location: normalizeValue(input.values.location),
    service: normalizeValue(input.values.service),
    amount: normalizeValue(input.values.amount),
    message: input.values.message.trim(),
  };

  const result = await pool.query<SubmissionRow>(
    `
      INSERT INTO form_submissions (
        id,
        inquiry_type,
        source,
        name,
        mobile,
        email,
        location,
        service,
        amount,
        message,
        payload
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11::jsonb)
      RETURNING *
    `,
    [
      randomUUID(),
      input.inquiryType,
      input.source.trim(),
      values.name,
      values.mobile,
      values.email,
      values.location,
      values.service,
      values.amount,
      values.message,
      JSON.stringify(values),
    ],
  );

  return mapRow(result.rows[0]);
}

export async function getSubmissionCounts() {
  await ensureSchema();

  const pool = getPool();
  const result = await pool.query<{ inquiry_type: SubmissionType; total: string }>(`
    SELECT inquiry_type, COUNT(*)::text AS total
    FROM form_submissions
    GROUP BY inquiry_type
  `);

  return result.rows.reduce(
    (counts, row) => ({
      ...counts,
      [row.inquiry_type]: Number(row.total),
    }),
    {
      user_inquiry: 0,
      agent_inquiry: 0,
    } satisfies Record<SubmissionType, number>,
  );
}

export async function getSubmissionsByType(inquiryType: SubmissionType) {
  await ensureSchema();

  const pool = getPool();
  const result = await pool.query<SubmissionRow>(
    `
      SELECT *
      FROM form_submissions
      WHERE inquiry_type = $1
      ORDER BY created_at DESC
    `,
    [inquiryType],
  );

  return result.rows.map(mapRow);
}
