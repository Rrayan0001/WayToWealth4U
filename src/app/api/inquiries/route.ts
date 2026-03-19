import { NextResponse } from "next/server";

import type { InquiryFormValues } from "@/lib/inquiry";
import { saveSubmission, type SubmissionType } from "@/lib/submissions";

type SubmissionRequestBody = {
  submissionType?: SubmissionType;
  source?: string;
  values?: Partial<InquiryFormValues>;
};

function toText(value: unknown) {
  return typeof value === "string" ? value : "";
}

function toInquiryValues(values: SubmissionRequestBody["values"]): InquiryFormValues {
  return {
    name: toText(values?.name),
    mobile: toText(values?.mobile),
    email: toText(values?.email),
    location: toText(values?.location),
    service: toText(values?.service),
    amount: toText(values?.amount),
    message: toText(values?.message),
  };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SubmissionRequestBody;
    const submissionType = body.submissionType === "agent_inquiry" ? "agent_inquiry" : "user_inquiry";
    const source = toText(body.source).trim();
    const values = toInquiryValues(body.values);

    if (!source) {
      return NextResponse.json({ error: "Missing inquiry source." }, { status: 400 });
    }

    if (!values.name.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    await saveSubmission({
      inquiryType: submissionType,
      source,
      values,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to save inquiry submission", error);

    return NextResponse.json({ error: "Unable to save inquiry right now." }, { status: 500 });
  }
}
