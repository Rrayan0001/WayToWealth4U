import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { newCarPurchaseLoanContent } from "@/lib/serviceDetailContent";

export const metadata: Metadata = {
  title: "New Car Purchase Loan",
  description: "Finance a brand-new vehicle with structured EMI planning.",
};

export default function NewCarPurchaseLoanPage() {
  return <ServiceDetailPage {...newCarPurchaseLoanContent} />;
}
