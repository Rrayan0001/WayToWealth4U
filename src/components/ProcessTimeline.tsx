"use client";

import { Fragment, useEffect, useMemo, useState } from "react";

import type { ProcessStep } from "@/lib/siteData";

import styles from "./ProcessTimeline.module.css";

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

type IconProps = {
  className?: string;
};

function SearchIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="5.5" />
      <line x1="14.5" y1="14.5" x2="20" y2="20" />
    </svg>
  );
}

function IdeaIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M8 10a4 4 0 1 1 8 0c0 2-1 3-2 4v1h-4v-1c-1-1-2-2-2-4Z" />
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="21" x2="14" y2="21" />
    </svg>
  );
}

function LayersIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="m12 4 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </svg>
  );
}

function ActivityIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <polyline points="3 12 8 12 10.5 7 14 17 16 12 21 12" />
    </svg>
  );
}

function CheckIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <polyline points="8 12 11 15 16 9.5" />
    </svg>
  );
}

const icons = [SearchIcon, IdeaIcon, LayersIcon, ActivityIcon, CheckIcon] as const;

type ProcessStepNodeProps = {
  step: ProcessStep;
  index: number;
  activeStep: number;
  onClick: (index: number) => void;
};

function ProcessStepNode({ step, index, activeStep, onClick }: ProcessStepNodeProps) {
  const isActive = activeStep === index;
  const isCompleted = activeStep > index;
  const Icon = icons[index] ?? CheckIcon;

  return (
    <button
      type="button"
      className={`${styles.nodeWrap} ${isActive ? styles.nodeWrapActive : ""}`.trim()}
      onClick={() => onClick(index)}
      aria-label={`Open step ${index + 1}: ${step.title}`}
    >
      <span className={`${styles.nodeAura} ${isActive ? styles.nodeAuraActive : ""}`.trim()} aria-hidden="true" />

      <span
        className={`${styles.node} ${isActive ? styles.nodeActive : isCompleted ? styles.nodeCompleted : ""}`.trim()}
      >
        <Icon className={styles.nodeIcon} />
        <span className={styles.badge}>{index + 1}</span>
      </span>

      <span className={styles.nodeLabel}>{step.title}</span>
    </button>
  );
}

type ConnectingLineProps = {
  isActive: boolean;
  isCompleted: boolean;
};

function ConnectingLine({ isActive, isCompleted }: ConnectingLineProps) {
  return (
    <span className={styles.lineWrap} aria-hidden="true">
      <span className={`${styles.lineFill} ${isCompleted || isActive ? styles.lineVisible : ""}`.trim()} />
      {isActive ? <span className={styles.lineEnergy} /> : null}
    </span>
  );
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth <= 720);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (steps.length === 0) {
      return;
    }

    if (isMobile) {
      setActiveStep(0);
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setActiveStep((previous) => (previous + 1) % steps.length);
    }, 4000);

    return () => window.clearTimeout(timeoutId);
  }, [activeStep, steps.length, isMobile]);

  const ActiveIcon = useMemo(() => icons[activeStep] ?? CheckIcon, [activeStep]);

  if (isMobile) {
    return (
      <section className={styles.section} aria-label="Process timeline">
        <header className={styles.header}>
          <p className={styles.eyebrow}>Steps of Process</p>
          <h2>Transparent Journey From Application To Growth</h2>
        </header>

        <div className={styles.mobileList}>
          {steps.map((step, index) => {
            const Icon = icons[index] ?? CheckIcon;
            return (
              <article key={step.title} className={styles.mobileCard}>
                <div className={styles.mobileIconWrap}>
                  <Icon className={styles.mobileIcon} />
                  <span className={styles.mobileBadge}>{index + 1}</span>
                </div>
                <div className={styles.mobileBody}>
                  <p className={styles.phaseTag}>PHASE 0{index + 1}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section} aria-label="Process timeline">
      <header className={styles.header}>
        <p className={styles.eyebrow}>Steps of Process</p>
        <h2>Transparent Journey From Application To Growth</h2>
      </header>

      <div className={styles.flowRow}>
        {steps.map((step, index) => (
          <Fragment key={step.title}>
            <ProcessStepNode
              step={step}
              index={index}
              activeStep={activeStep}
              onClick={(selected) => setActiveStep(selected)}
            />
            {index < steps.length - 1 ? (
              <ConnectingLine isActive={activeStep === index} isCompleted={activeStep > index} />
            ) : null}
          </Fragment>
        ))}
      </div>

      <article className={styles.detailCard}>
        <div className={styles.detailIconWrap}>
          <ActiveIcon className={styles.detailIcon} />
        </div>

        <div className={styles.detailBody}>
          <div className={styles.detailMetaRow}>
            <span className={styles.phaseTag}>PHASE 0{activeStep + 1}</span>
          </div>

          <h3>{steps[activeStep]?.title ?? ""}</h3>
          <p>{steps[activeStep]?.description ?? ""}</p>

          <div className={styles.detailFooter}>
            <div className={styles.progressDots}>
              {steps.map((_, index) => (
                <span key={`dot-${index}`} className={`${styles.dot} ${activeStep === index ? styles.dotActive : ""}`} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
