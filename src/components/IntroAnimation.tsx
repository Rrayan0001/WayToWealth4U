"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

import styles from "./IntroAnimation.module.css";

type Phase = "loading" | "init" | "reveal" | "transition" | "complete" | "hidden";

export function IntroAnimation() {
    const [phase, setPhase] = useState<Phase>("init");

    const startAnimation = useCallback(() => {
        setPhase("init");

        // Prevent scrolling during animation
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";

        const t1 = setTimeout(() => setPhase("reveal"), 300);
        const t2 = setTimeout(() => setPhase("transition"), 2800);
        const t3 = setTimeout(() => {
            setPhase("complete");
        }, 4200);
        const t4 = setTimeout(() => {
            setPhase("hidden");
            sessionStorage.setItem("wealthrise_intro_played", "true");
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }, 4800);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, []);

    useEffect(() => {
        const cleanup = startAnimation();
        return cleanup;
    }, [startAnimation]);

    // Don't render anything if hidden
    if (phase === "hidden") return null;

    const cinematicEase = "cubic-bezier(0.76, 0, 0.24, 1)";
    const isRevealed = phase === "reveal" || phase === "transition" || phase === "complete";
    const isTransitioning = phase === "transition" || phase === "complete";

    return (
        <>
            {/* Dark overlay that covers the entire screen */}
            <div
                className={styles.overlay}
                style={{
                    transitionTimingFunction: cinematicEase,
                    transitionDuration: isTransitioning ? "1.4s" : "0.6s",
                    clipPath: isTransitioning ? "inset(0 0 100% 0)" : "inset(0 0 0 0)",
                }}
            >
                {/* Ambient golden glow in the background */}
                <div className={styles.ambientGlow} />

                {/* Decorative grid lines */}
                <div className={`${styles.gridLine} ${styles.gridV1} ${isRevealed ? styles.gridAnimate : ""}`} />
                <div className={`${styles.gridLine} ${styles.gridV2} ${isRevealed ? styles.gridAnimate : ""}`} />
                <div className={`${styles.gridLine} ${styles.gridH1} ${isRevealed ? styles.gridAnimate : ""}`} />
            </div>

            {/* Logo centered on screen, transitions to navbar position */}
            <div
                className={styles.logoContainer}
                style={{
                    transitionTimingFunction: cinematicEase,
                    transitionDuration: "1.4s",
                    ...(isTransitioning
                        ? {
                            top: "22px",
                            left: "clamp(1.5rem, 5vw, 4rem)",
                            transform: "scale(0.45)",
                            opacity: 0,
                        }
                        : {
                            top: "45%",
                            left: "50%",
                            transform: `translate(-50%, -50%) scale(1.35)`,
                            opacity: 1,
                        }),
                } as React.CSSProperties}
            >
                <div
                    style={{
                        overflow: "hidden",
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        className={styles.logoInner}
                        style={{
                            transitionTimingFunction: cinematicEase,
                            transitionDuration: "1.2s",
                            transform: phase === "init" || phase === "loading" ? "translateY(120%)" : "translateY(0%)",
                            opacity: phase === "init" || phase === "loading" ? 0 : 1,
                        }}
                    >
                        <Image
                            src="/logo-icon-transparent.png"
                            alt=""
                            width={617}
                            height={404}
                            className={styles.logoIcon}
                            priority
                            unoptimized
                        />
                        <Image
                            src="/logo-text-transparent.png"
                            alt="WealthRise Capitals"
                            width={1433}
                            height={174}
                            className={styles.logoText}
                            priority
                            unoptimized
                        />
                    </div>
                </div>
            </div>

            {/* Subtitle text */}
            <div
                className={styles.subtitleWrapper}
                style={{
                    transitionTimingFunction: cinematicEase,
                    transitionDuration: "0.8s",
                    opacity: phase === "reveal" ? 1 : 0,
                }}
            >
                <div
                    style={{
                        overflow: "hidden",
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            transitionTimingFunction: cinematicEase,
                            transitionDuration: "1s",
                            transitionDelay: "0.2s",
                            transform: phase === "reveal" ? "translateY(0)" : "translateY(100%)",
                        }}
                    >
                        <span className={styles.subtitleText}>
                            GROWING WEALTH &nbsp;·&nbsp; CREATING FUTURES
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
