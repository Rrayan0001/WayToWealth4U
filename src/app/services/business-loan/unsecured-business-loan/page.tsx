import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { unsecuredBusinessLoanContent } from "@/lib/serviceDetailContent";

export const metadata: Metadata = {
  title: "Unsecured Business Loan",
  description: "Access business capital without pledging collateral.",
};

export default function UnsecuredBusinessLoanPage() {
  return <ServiceDetailPage {...unsecuredBusinessLoanContent} />;
}
