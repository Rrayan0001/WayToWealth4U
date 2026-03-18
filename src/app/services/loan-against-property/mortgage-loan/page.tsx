import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { mortgageLoanContent } from "@/lib/serviceDetailContent";

export const metadata: Metadata = {
  title: "Mortgage Loan",
  description: "Use property-backed financing for larger funding requirements or refinance needs.",
};

export default function MortgageLoanPage() {
  return <ServiceDetailPage {...mortgageLoanContent} />;
}
