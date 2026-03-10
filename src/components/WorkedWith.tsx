"use client";

import React, { type SVGProps } from "react";

import { LogoCarousel } from "@/components/ui/logo-carousel";

import styles from "./WorkedWith.module.css";

const allLogos = [
  { name: "HDFC Bank", id: 1, img: "/partners/hdfc.png" },
  { name: "ICICI Bank", id: 2, img: "/partners/icici.png" },
  { name: "State Bank of India", id: 3, img: "/partners/sbi.png" },
  { name: "Axis Bank", id: 4, img: "/partners/axis.png" },
  { name: "Kotak Mahindra", id: 5, img: "/partners/kotak.png" },
  { name: "Punjab National Bank", id: 6, img: "/partners/pnb.png" },
  { name: "Bajaj Finserv", id: 7, img: "/partners/bajaj.png" },
  { name: "Tata Capital", id: 8, img: "/partners/tata.png" },
  { name: "LIC Housing Finance", id: 9, img: "/partners/lic.png" },
  { name: "Yes Bank", id: 10, img: "/partners/yes.png" },
  { name: "IndusInd Bank", id: 11, img: "/partners/indusind.png" },
  { name: "IDFC First Bank", id: 12, img: "/partners/idfc.png" },
];

export function WorkedWith() {
  return (
    <section id="introduction" className={`sectionBlock ${styles.section}`}>
      <div className={`${styles.inner} container`}>
        <div className={styles.headingWrap}>
          <p className={styles.eyebrow}>Trusted Financial Partners</p>
          <h2 className={styles.title}>
            We Work With Leading<br />Banks
          </h2>
          <p className={styles.subtitle}>
            Partnered with India&apos;s top financial institutions to bring you the best loan solutions
          </p>
        </div>

        <LogoCarousel columnCount={4} logos={allLogos} />
      </div>
    </section>
  );
}
