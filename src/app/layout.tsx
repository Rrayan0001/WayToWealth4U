import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import "./globals.css";

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://way2wealth4u.com"),
  title: {
    default: "Way2Wealth4U | Premium Finance Consultancy",
    template: "%s | Way2Wealth4U",
  },
  description:
    "Way2Wealth4U delivers premium finance solutions across loans, credit cards, market education, and strategic growth advisory.",
  keywords: [
    "Way2Wealth4U",
    "finance consultancy",
    "loan advisory",
    "credit cards",
    "stock market classes",
    "wealth planning",
  ],
  openGraph: {
    title: "Way2Wealth4U",
    description: "Bright, premium finance advisory platform for growth-focused clients.",
    type: "website",
    url: "https://way2wealth4u.com",
    siteName: "Way2Wealth4U",
  },
  icons: {
    icon: [
      { url: "/way2wealth4u-logo-gold.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/way2wealth4u-logo-gold.png"],
    apple: [{ url: "/way2wealth4u-logo-gold.png", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <a href="#main-content" className="skipLink">
          Skip to content
        </a>
        <div className="siteShell">
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
        <FloatingActions />
      </body>
    </html>
  );
}
