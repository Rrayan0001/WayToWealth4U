export type ServiceItem = {
  title: string;
  description: string;
  points: string[];
  subServices?: { title: string; description: string; href?: string }[];
  href?: string;
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

export type HeroStatItem = {
  value: string;
  label: string;
  color?: "gold" | "white";
};

export const heroStats: HeroStatItem[] = [
  { value: "100+", label: "Banking Partners", color: "gold" },
  { value: "25000+", label: "Loan Processed", color: "white" },
  { value: "20000+", label: "Clients Guided", color: "white" },
];

export const serviceItems: ServiceItem[] = [
  {
    title: "Home Loan",
    description:
      "Your dream home awaits. Explore home financing solutions for plot purchase, construction, renovation, and long-tenure repayment planning.",
    points: ["Plot Purchase", "Construction", "Renovation"],
    href: "/services/home-loan",
    subServices: [
      {
        title: "Plot Purchase Loan",
        description: "Finance a residential plot before building, with structured support for land acquisition and future construction planning.",
        href: "/services/home-loan/plot-purchase-loan",
      },
      {
        title: "Home Construction Loan",
        description: "Fund the construction of a new house on owned land with stage-wise disbursal and progress-based planning.",
        href: "/services/home-loan/home-construction-loan",
      },
    ],
  },
  {
    title: "Loan Against Property",
    description:
      "Unlock the value of your property with tailored funding options for business, personal, or consolidation needs using residential or commercial collateral.",
    points: ["Business Funds", "Personal Needs", "Lower Rates"],
    href: "/services/loan-against-property",
    subServices: [
      {
        title: "LAP Loan",
        description: "Raise capital against residential or commercial property while keeping repayment aligned to your cash flow.",
        href: "/services/loan-against-property/lap",
      },
      {
        title: "Mortgage Loan",
        description: "Use property-backed financing for large-value requirements, refinancing, or working capital support.",
        href: "/services/loan-against-property/mortgage-loan",
      },
    ],
  },
  {
    title: "Personal Loan",
    description: "Achieve your dreams with versatile personal loan options designed to cover expenses such as medical emergencies, travel, or weddings.",
    points: ["Quick Funding", "Flexible Repayment", "Competitive Rates"],
    href: "/services/personal-loan",
  },
  {
    title: "Business Loan",
    description:
      "Boost your business growth with structured financing for working capital, expansion, machinery, project execution, and both secured and unsecured borrowing.",
    points: ["Secured & Unsecured", "Working Capital", "Project Finance"],
    href: "/services/business-loan",
    subServices: [
      {
        title: "Secured Business Loan",
        description: "Borrow against collateral to unlock higher limits, lower rates, and longer repayment flexibility.",
        href: "/services/business-loan/secured-business-loan",
      },
      {
        title: "Unsecured Business Loan",
        description: "Access business capital without collateral, ideal for operating expenses and growth initiatives.",
        href: "/services/business-loan/unsecured-business-loan",
      },
      {
        title: "Project Loan",
        description: "Finance new projects, business launches, branch expansion, or capacity upgrades with structured drawdowns.",
        href: "/services/business-loan/project-loan",
      },
      {
        title: "Machinery Loan",
        description: "Fund equipment and machinery purchases that improve efficiency, production, or service delivery.",
        href: "/services/business-loan/machinery-loan",
      },
    ],
  },
  {
    title: "MSME Loans",
    description:
      "Support micro, small, and medium enterprises with growth financing, working capital, and business development support.",
    points: ["Small Business", "Working Capital", "Growth Funding"],
    href: "/services/msme-loans",
  },
  {
    title: "Doctor Loan",
    description:
      "Specialized financing for medical professionals to set up clinics, purchase medical equipment, expand hospitals, or meet personal financial goals.",
    points: ["Clinic Setup", "Equipment Finance", "Practice Expansion"],
    href: "/services/doctor-loan",
  },
  {
    title: "Project Loan",
    description:
      "Finance new business launches, branch expansions, or large-scale projects with milestone-based funding aligned to your project's execution timeline.",
    points: ["Milestone Funding", "Expansion Support", "Structured Disbursement"],
    href: "/services/project-loan",
  },
  {
    title: "Education Loan",
    description: "Invest in your child’s future with specialized education loans designed to support higher education expenses including tuition and accommodation.",
    points: ["Domestic Studies", "International Education", "Living Expenses"],
    href: "/services/education-loan",
  },
  {
    title: "Car Loan",
    description:
      "Drive your dream car with quick and flexible vehicle financing for fresh purchases and refinance requirements.",
    points: ["New Car", "Refinance", "Flexible Tenure"],
    href: "/services/car-loan",
    subServices: [
      {
        title: "New Car Purchase Loan",
        description: "Finance a brand-new vehicle with competitive rates and repayment terms structured around your budget.",
        href: "/services/car-loan/new-car-purchase-loan",
      },
      {
        title: "Re-Finance Car Loan",
        description: "Restructure an existing car loan to improve repayment comfort, tenure, or cash flow management.",
        href: "/services/car-loan/refinance-car-loan",
      },
    ],
  },
  {
    title: "Gold Loan",
    description: "Meet your financial needs with gold loans from trusted banks by pledging your gold assets and receiving quick access to funds.",
    points: ["High Value per Gram", "Quick Disbursal", "Trusted Banks"],
    href: "/services/gold-loan",
  },
  {
    title: "Credit Cards",
    description: "Upgrade your lifestyle with feature-packed credit cards offering rewards, cashback, travel benefits, and flexible payment options.",
    points: ["Rewards & Cashback", "Travel Benefits", "Flexible EMI"],
    href: "/services/credit-cards",
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
      "Our advisors design a growth-led financial blueprint with tailored products, timelines, and risk boundaries.",
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
  address: "Gayatri Nagar Behind Kavi Kuvempu Metro station, Rajaji Nagar Bangalore",
  mapUrl: "https://maps.google.com/maps?q=12.9988695,77.5568147",
  phone: "+91 95138 73555",
  whatsapp: "+91 95138 73555",
  email: "wealthrisecapitals@gmail.com",
  secondaryEmail: "info@wealthrisecapitals.com",
  hours: [
    "Monday - Friday: 10:00 AM to 7:00 PM",
    "Saturday: 10:00 AM to 4:00 PM",
    "Sunday: By prior appointment",
  ],
};
