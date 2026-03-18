import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { machineryLoanContent } from "@/lib/serviceDetailContent";

export const metadata: Metadata = {
  title: "Machinery Loan",
  description: "Fund equipment and machinery purchases that improve production or service delivery.",
};

export default function MachineryLoanPage() {
  return <ServiceDetailPage {...machineryLoanContent} />;
}
