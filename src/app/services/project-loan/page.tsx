import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { standaloneProjectLoanContent } from "@/lib/serviceDetailContent";

export const metadata: Metadata = {
  title: "Project Loan",
  description:
    "Finance new business launches, branch expansions, or large-scale capital projects with milestone-based funding aligned to your project timeline.",
};

export default function ProjectLoanPage() {
  return <ServiceDetailPage {...standaloneProjectLoanContent} />;
}
