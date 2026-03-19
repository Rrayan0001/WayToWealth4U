import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { doctorLoanContent } from "@/lib/serviceDetailContent";

export const metadata: Metadata = {
  title: "Doctor Loan",
  description:
    "Specialized financing for medical professionals — clinic setup, equipment purchase, practice expansion, and more.",
};

export default function DoctorLoanPage() {
  return <ServiceDetailPage {...doctorLoanContent} />;
}
