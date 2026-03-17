export type ServiceItem = {
  title: string;
  description: string;
  points: string[];
  subServices?: { title: string; description: string }[];
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
  { value: "50+", label: "Banking Partners", color: "gold" },
  { value: "200+", label: "Loan Processed", color: "white" },
  { value: "40+", label: "Clients Guided", color: "white" },
];

export const serviceItems: ServiceItem[] = [
  {
    title: "Home Loan",
    description: "Your dream home awaits. Explore our range of home loan products designed to help you purchase or build your ideal home with flexible repayment options.",
    points: ["Purchase Plot", "Construction", "Renovation"],
    href: "/services/home-loan",
  },
  {
    title: "Loan Against Property",
    description: "Unlock the value of your property with tailored loan solutions. Use your residential or commercial property as collateral to access funds.",
    points: ["Business Funds", "Personal Needs", "Lower Rates"],
    href: "/services/loan-against-property",
  },
  {
    title: "Personal Loan",
    description: "Achieve your dreams with versatile personal loan options designed to cover expenses such as medical emergencies, travel, or weddings.",
    points: ["Quick Funding", "Flexible Repayment", "Competitive Rates"],
    href: "/services/personal-loan",
  },
  {
    title: "Business Loan",
    description: "Boost your business growth with flexible financing options that support working capital, expansion, equipment purchases, and operations.",
    points: ["Collateral Free", "Working Capital", "Equipment Finance"],
    href: "/services/business-loan",
  },
  {
    title: "Education Loan",
    description: "Invest in your child’s future with specialized education loans designed to support higher education expenses including tuition and accommodation.",
    points: ["Domestic Studies", "International Education", "Living Expenses"],
    href: "/services/education-loan",
  },
  {
    title: "Car Loan",
    description: "Drive your dream car with quick and flexible car loan options that make purchasing a new or used vehicle easy and affordable.",
    points: ["New Car", "Used Car", "Refinance"],
    href: "/services/car-loan",
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
  address: "WealthRise Capitals Advisory Desk, Financial District, India",
  phone: "+91 90000 00000",
  whatsapp: "+91 90000 00000",
  email: "hello@way2wealth4u.com",
  hours: [
    "Monday - Friday: 9:00 AM to 7:00 PM",
    "Saturday: 10:00 AM to 4:00 PM",
    "Sunday: By prior appointment",
  ],
};
