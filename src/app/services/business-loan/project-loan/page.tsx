import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { projectLoanContent } from "@/lib/serviceDetailContent";

export const metadata: Metadata = {
  title: "Project Loan",
  description: "Finance new business projects, launches, or branch expansion with milestone-based funding.",
};

export default function ProjectLoanPage() {
  return <ServiceDetailPage {...projectLoanContent} />;
}
