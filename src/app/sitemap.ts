import type { MetadataRoute } from "next";

const baseUrl = "https://way2wealth4u.com";

const pages = [
  { path: "/", frequency: "weekly" as const, priority: 1 },
  { path: "/about", frequency: "monthly" as const, priority: 0.8 },
  { path: "/services", frequency: "weekly" as const, priority: 0.9 },
  { path: "/projects", frequency: "weekly" as const, priority: 0.8 },
  { path: "/contact", frequency: "monthly" as const, priority: 0.9 },
];

const servicePages = [
  "/services/home-loan",
  "/services/home-loan/plot-purchase-loan",
  "/services/home-loan/home-construction-loan",
  "/services/loan-against-property",
  "/services/loan-against-property/lap",
  "/services/loan-against-property/mortgage-loan",
  "/services/business-loan",
  "/services/business-loan/secured-business-loan",
  "/services/business-loan/unsecured-business-loan",
  "/services/business-loan/project-loan",
  "/services/business-loan/machinery-loan",
  "/services/msme-loans",
  "/services/project-loan",
  "/services/personal-loan",
  "/services/doctor-loan",
  "/services/education-loan",
  "/services/car-loan",
  "/services/car-loan/new-car-purchase-loan",
  "/services/car-loan/refinance-car-loan",
  "/services/gold-loan",
  "/services/credit-cards",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map(({ path, frequency, priority }) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: frequency,
      priority,
    })),
    ...servicePages.map((path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
