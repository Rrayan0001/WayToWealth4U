import type { Metadata } from "next";

import { SiteChrome } from "@/components/SiteChrome";

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
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
