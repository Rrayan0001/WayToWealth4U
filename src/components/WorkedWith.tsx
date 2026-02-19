"use client";

import React, { type SVGProps } from "react";

import { LogoCarousel } from "@/components/ui/logo-carousel";

import styles from "./WorkedWith.module.css";

function HDFCIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="32" fontWeight="bold" fill="#004C8F">
        HDFC
      </text>
    </svg>
  );
}

function ICICIIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="32" fontWeight="bold" fill="#F37021">
        ICICI
      </text>
    </svg>
  );
}

function SBIIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="32" fontWeight="bold" fill="#22409A">
        SBI
      </text>
    </svg>
  );
}

function AxisIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="32" fontWeight="bold" fill="#97144D">
        AXIS
      </text>
    </svg>
  );
}

function KotakIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="28" fontWeight="bold" fill="#ED232A">
        KOTAK
      </text>
    </svg>
  );
}

function PNBIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="32" fontWeight="bold" fill="#F15A29">
        PNB
      </text>
    </svg>
  );
}

function BajajIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="28" fontWeight="bold" fill="#0066B2">
        BAJAJ
      </text>
    </svg>
  );
}

function TataIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="32" fontWeight="bold" fill="#1C4E80">
        TATA
      </text>
    </svg>
  );
}

function LICIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="32" fontWeight="bold" fill="#FF6B00">
        LIC
      </text>
    </svg>
  );
}

function YesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="28" fontWeight="bold" fill="#003DA5">
        YES BANK
      </text>
    </svg>
  );
}

function IndusIndIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="24" fontWeight="bold" fill="#D71920">
        INDUSIND
      </text>
    </svg>
  );
}

function IDFCIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="32" fontWeight="bold" fill="#8B1538">
        IDFC
      </text>
    </svg>
  );
}

const allLogos = [
  { name: "HDFC Bank", id: 1, img: HDFCIcon },
  { name: "ICICI Bank", id: 2, img: ICICIIcon },
  { name: "State Bank of India", id: 3, img: SBIIcon },
  { name: "Axis Bank", id: 4, img: AxisIcon },
  { name: "Kotak Mahindra", id: 5, img: KotakIcon },
  { name: "Punjab National Bank", id: 6, img: PNBIcon },
  { name: "Bajaj Finserv", id: 7, img: BajajIcon },
  { name: "Tata Capital", id: 8, img: TataIcon },
  { name: "LIC Housing Finance", id: 9, img: LICIcon },
  { name: "Yes Bank", id: 10, img: YesIcon },
  { name: "IndusInd Bank", id: 11, img: IndusIndIcon },
  { name: "IDFC First Bank", id: 12, img: IDFCIcon },
];

export function WorkedWith() {
  return (
    <section id="introduction" className={`sectionBlock ${styles.section}`}>
      <div className={`${styles.inner} container`}>
        <div className={styles.headingWrap}>
          <p className={styles.eyebrow}>Trusted Financial Partners</p>
          <h2 className={styles.title}>We Work With Leading Banks</h2>
          <p className={styles.subtitle}>
            Partnered with India&apos;s top financial institutions to bring you the best loan solutions
          </p>
        </div>

        <LogoCarousel columnCount={4} logos={allLogos} />
      </div>
    </section>
  );
}
