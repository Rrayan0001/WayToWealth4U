import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { refinanceCarLoanContent } from "@/lib/serviceDetailContent";

export const metadata: Metadata = {
  title: "Re-Finance Car Loan",
  description: "Restructure your existing car loan for better repayment comfort.",
};

export default function RefinanceCarLoanPage() {
  return <ServiceDetailPage {...refinanceCarLoanContent} />;
}
