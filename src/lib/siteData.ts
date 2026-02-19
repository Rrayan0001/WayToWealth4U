export type ServiceItem = {
  title: string;
  description: string;
  points: string[];
  subServices?: { title: string; description: string }[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type TestimonialItem = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const serviceItems: ServiceItem[] = [
  {
    title: "Loans",
    description:
      "Comprehensive lending solutions tailored to your personal and business aspirations.",
    points: [
      "Personal Loan",
      "Business Loan (Secured & Unsecured)",
      "Doctor Loan",
      "Education Loan",
      "OD Loan",
      "New Car Purchase & Refinance",
      "Home Loan (Purchase & Construction)",
      "Loan Against Property (LAP)",
      "Project & Machinery Loans",
      "MSME Loans",
    ],
    subServices: [
      {
        title: "Personal Loan",
        description:
          "Quick and flexible funding for your immediate personal needs with competitive interest rates and easy repayment options.",
      },
      {
        title: "Business Loan (Secured & Un-secured)",
        description:
          "Fuel your business growth with capital solutions that cater to both collateral-backed and collateral-free requirements.",
      },
      {
        title: "Doctor Loan",
        description:
          "Exclusive financing designed for medical professionals to set up clinics, purchase equipment, or expand practice.",
      },
      {
        title: "Education Loan",
        description:
          "Invest in your future with education loans that cover tuition and living expenses for domestic and international studies.",
      },
      {
        title: "OD Loan",
        description:
          "Manage your cash flow efficiently with Overdraft facilities that offer liquidity against your assets or securities.",
      },
      {
        title: "New Car Purchase Loan & Re-Finance Car Loan",
        description:
          "Drive home your dream car with attractive loan offers, or reduce your current EMI burden through smart refinancing options.",
      },
      {
        title: "Home Loan (Plot Purchase and Construction)",
        description:
          "Realize your dream home with loans covering plot purchase, construction, and renovation needs.",
      },
      {
        title: "Loan Against Property (LAP) or Mortgage Loan",
        description:
          "Unlock the value of your property to fund major expenses or business expansion with lower interest rates.",
      },
      {
        title: "Projects Loans, Machinery Loans",
        description:
          "Specialized funding for large-scale projects and industrial machinery acquisition to scale your operations.",
      },
      {
        title: "MSME Loans",
        description:
          "Dedicated support for Micro, Small, and Medium Enterprises to boost working capital and drive business development.",
      },
    ],
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

export const testimonialItems: TestimonialItem[] = [
  {
    text: "My home loan offer improved after their profile cleanup plan. They explained every step clearly and handled paperwork without stress.",
    image: "/testimonials/doodle-1.svg",
    name: "Aarav Sharma",
    role: "Senior Software Engineer",
  },
  {
    text: "They helped me close two expensive card balances and restructure EMIs. Monthly cash flow is now predictable and far easier to manage.",
    image: "/testimonials/doodle-2.svg",
    name: "Riya Nair",
    role: "Marketing Lead",
  },
  {
    text: "Our business loan disbursal was much faster than expected. The team matched us with a lender that actually fit our turnover cycle.",
    image: "/testimonials/doodle-3.svg",
    name: "Kunal Verma",
    role: "Retail Business Owner",
  },
  {
    text: "The market classes gave me a proper framework instead of random tips. I now follow a disciplined approach and avoid emotional trades.",
    image: "/testimonials/doodle-4.svg",
    name: "Sneha Iyer",
    role: "First-Time Investor",
  },
  {
    text: "I came in for a personal loan but stayed for long-term planning. Their advisory made my debt and savings decisions much sharper.",
    image: "/testimonials/doodle-5.svg",
    name: "Rahul Deshmukh",
    role: "Operations Manager",
  },
  {
    text: "Documentation support was excellent. They coordinated with the bank and kept me updated, so the entire process felt transparent.",
    image: "/testimonials/doodle-6.svg",
    name: "Priya Kapoor",
    role: "Healthcare Professional",
  },
  {
    text: "My credit profile improved noticeably in a few months with their utilization strategy. Better offers started coming in quickly.",
    image: "/testimonials/doodle-7.svg",
    name: "Mohit Arora",
    role: "Consultant",
  },
  {
    text: "They simplified complex numbers into clear actions. I finally have a realistic roadmap for loan closure and portfolio growth.",
    image: "/testimonials/doodle-8.svg",
    name: "Ishita Bose",
    role: "Finance Analyst",
  },
  {
    text: "From first call to final approval, the experience was premium. Quick responses, clean process, and genuine guidance throughout.",
    image: "/testimonials/doodle-9.svg",
    name: "Vikram Saini",
    role: "Manufacturing Entrepreneur",
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
