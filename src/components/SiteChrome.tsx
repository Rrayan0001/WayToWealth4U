"use client";

import type { ReactNode } from "react";

import { usePathname } from "next/navigation";

import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { IntroAnimation } from "@/components/IntroAnimation";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminRoute) {
    return (
      <SmoothScroll>
        <main id="main-content">{children}</main>
      </SmoothScroll>
    );
  }

  return (
    <>
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
    </>
  );
}
