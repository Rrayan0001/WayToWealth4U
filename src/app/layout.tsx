import type { Metadata } from "next";

import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { IntroAnimation } from "@/components/IntroAnimation";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://way2wealth4u.com"),
  title: {
    default: "WealthRise Capitals | Strategic Finance Advisory",
    template: "%s | WealthRise Capitals",
  },
  description:
    "WealthRise Capitals delivers strategic loan advisory, credit optimization, and market education built around long-term financial growth.",
  keywords: [
    "WealthRise Capitals",
    "finance consultancy",
    "loan advisory",
    "credit cards",
    "stock market classes",
    "wealth planning",
  ],
  openGraph: {
    title: "WealthRise Capitals",
    description: "Emerald-and-gold finance advisory platform for growth-focused clients.",
    type: "website",
    url: "https://way2wealth4u.com",
    siteName: "WealthRise Capitals",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/icon.png"],
    apple: [{ url: "/icon.png", type: "image/png" }],
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
      <body>
        <IntroAnimation />
        <SmoothScroll>
          <a href="#main-content" className="skipLink">
            Skip to content
          </a>
          <div className="siteShell">
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </div>
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  );
}
