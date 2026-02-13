export type ServiceItem = {
  title: string;
  description: string;
  points: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export const serviceItems: ServiceItem[] = [
  {
    title: "Loans",
    description:
      "Flexible lending structures designed around life-stage goals and business expansion milestones.",
    points: ["X - Home and Property Loans", "Y - Business Growth Loans", "Z - Personal Liquidity Loans"],
  },
  {
    title: "Credit Cards",
    description:
      "Smart card selection and reward optimization to improve cash flow control and lifestyle leverage.",
    points: ["Premium reward mapping", "Credit score conscious recommendations", "Annual fee optimization"],
  },
  {
    title: "Stock Market Classes",
    description:
      "Structured training programs for disciplined long-term market participation and risk-aware strategy.",
    points: ["Beginner to advanced tracks", "Live scenario workshops", "Portfolio behavior coaching"],
  },
  {
    title: "Additional Service",
    description:
      "Reserved for a customized value stream based on your evolving financial roadmap and goals.",
    points: ["Tax-ready financial records", "Retirement positioning", "Insurance alignment audits"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery Call",
    description:
      "We start with a focused conversation to understand your income pattern, liabilities, and growth aspirations.",
  },
  {
    title: "Strategy Blueprint",
    description:
      "Our advisors design a metal-grade financial blueprint with tailored products, timelines, and risk boundaries.",
  },
  {
    title: "Execution",
    description:
      "Applications, documentation, and approvals are coordinated with transparent progress checkpoints.",
  },
  {
    title: "Growth Monitoring",
    description:
      "We review outcomes, optimize allocations, and keep your financial momentum compounding.",
  },
];

export const projectHighlights = [
  {
    title: "Metro Professional Wealth Lift",
    summary:
      "Designed a blended loan and investment plan that improved monthly liquidity while preserving long-term growth exposure.",
    outcome: "39% debt-service improvement in 7 months",
  },
  {
    title: "SME Expansion Capital Program",
    summary:
      "Structured collateral-backed funding and training support to help a retail business open two new branches.",
    outcome: "2x revenue footprint in 12 months",
  },
  {
    title: "Credit Rebuild Journey",
    summary:
      "Introduced disciplined card utilization and EMI balancing strategy for a first-time salaried client.",
    outcome: "Credit profile upgraded from fair to strong",
  },
];

export const officeSnapshot = {
  address: "Way2Wealth4U Advisory Desk, Financial District, India",
  phone: "+91 90000 00000",
  email: "hello@way2wealth4u.com",
  hours: [
    "Monday - Friday: 9:00 AM to 7:00 PM",
    "Saturday: 10:00 AM to 4:00 PM",
    "Sunday: By prior appointment",
  ],
};
