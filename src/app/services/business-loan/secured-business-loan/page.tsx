import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { securedBusinessLoanContent } from "@/lib/serviceDetailContent";

export const metadata: Metadata = {
  title: "Secured Business Loan",
  description: "Borrow with collateral support to unlock stronger business funding options.",
};

export default function SecuredBusinessLoanPage() {
  return <ServiceDetailPage {...securedBusinessLoanContent} />;
}
