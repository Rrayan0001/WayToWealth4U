import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";

import { SiteChrome } from "@/components/SiteChrome";

import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

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
    description: "Navy-and-gold finance advisory platform for growth-focused clients.",
    type: "website",
    url: "https://way2wealth4u.com",
    siteName: "WealthRise Capitals",
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32" }, { url: "/favicon.png", type: "image/png", sizes: "32x32" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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
    <html lang="en" className={`${cinzel.variable} ${manrope.variable}`}>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
