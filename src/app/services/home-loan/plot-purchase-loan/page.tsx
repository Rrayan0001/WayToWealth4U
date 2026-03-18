import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { plotPurchaseLoanContent } from "@/lib/serviceDetailContent";

export const metadata: Metadata = {
  title: "Plot Purchase Loan",
  description: "Finance a residential plot before construction begins with structured loan guidance.",
};

export default function PlotPurchaseLoanPage() {
  return <ServiceDetailPage {...plotPurchaseLoanContent} />;
}
