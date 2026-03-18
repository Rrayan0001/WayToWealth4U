import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { lapLoanContent } from "@/lib/serviceDetailContent";

export const metadata: Metadata = {
  title: "Loan Against Property",
  description: "Unlock the value of your property with a structured LAP loan.",
};

export default function LapPage() {
  return <ServiceDetailPage {...lapLoanContent} />;
}
