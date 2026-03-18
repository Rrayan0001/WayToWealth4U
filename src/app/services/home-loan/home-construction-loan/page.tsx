import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { homeConstructionLoanContent } from "@/lib/serviceDetailContent";

export const metadata: Metadata = {
  title: "Home Construction Loan",
  description: "Build your home on owned land with a construction-focused financing plan.",
};

export default function HomeConstructionLoanPage() {
  return <ServiceDetailPage {...homeConstructionLoanContent} />;
}
