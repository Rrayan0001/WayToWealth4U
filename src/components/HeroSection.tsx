"use client";

import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { heroStats } from "@/lib/siteData";

import styles from "./HeroSection.module.css";

const expertiseAreas = [
    "Home & Business Loans",
    "Credit Card Strategy",
    "Stock Market Classes",
];

function Particles({ count = 40 }: { count?: number }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        let w = 0;
        let h = 0;
        let ratio = 1;

        interface Particle {
            x: number;
            y: number;
            r: number;
            dx: number;
            dy: number;
            o: number;
            color: string;
        }

        const particles: Particle[] = [];

        const resize = () => {
            ratio = Math.min(window.devicePixelRatio || 1, 1.5);
            w = canvas.width = canvas.offsetWidth * ratio;
            h = canvas.height = canvas.offsetHeight * ratio;
            ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        };

        const init = () => {
            particles.length = 0;
            const colors = [
                "rgba(214,169,44,<o>)",
                "rgba(56,199,115,<o>)",
                "rgba(255,213,76,<o>)",
                "rgba(155,246,181,<o>)",
            ];
            for (let i = 0; i < count; i++) {
                const o = Math.random() * 0.6 + 0.15;
                particles.push({
                    x: Math.random() * (w / ratio),
                    y: Math.random() * (h / ratio),
                    r: Math.random() * 2.5 + 0.5,
                    dx: (Math.random() - 0.5) * 0.35,
                    dy: (Math.random() - 0.5) * 0.35,
                    o,
                    color: colors[Math.floor(Math.random() * colors.length)].replace(
                        "<o>",
                        String(o)
                    ),
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, w / ratio, h / ratio);
            for (const p of particles) {
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0) p.x = w / ratio;
                if (p.x > w / ratio) p.x = 0;
                if (p.y < 0) p.y = h / ratio;
                if (p.y > h / ratio) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.shadowBlur = p.r * 4;
                ctx.shadowColor = p.color;
                ctx.fill();
            }
            animId = requestAnimationFrame(draw);
        };

        resize();
        init();
        draw();

        const handleResize = () => {
            resize();
            init();
        };

        window.addEventListener("resize", handleResize, { passive: true });

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", handleResize);
        };
    }, [count]);

    return <canvas ref={canvasRef} className={styles.particles} />;
}

export function HeroSection() {
    const reduceMotion = useReducedMotion();
    const particleCount = reduceMotion ? 0 : 26;

    return (
        <section id="home-hero" className={styles.hero}>
            {/* Dark background layer */}
            <div className={styles.bgLayer}>
                <Image
                    src="/hero-bg.png"
                    alt=""
                    fill
                    priority
                    quality={90}
                    className={styles.bgImage}
                />
                <div className={styles.bgOverlay} />
            </div>

            {/* Animated particles */}
            <Particles count={particleCount} />

            {/* Floating glow orbs */}
            <div className={styles.glowOrb1} />
            <div className={styles.glowOrb2} />
            <div className={styles.glowOrb3} />

            <div className={`${styles.heroInner} container`}>
                {/* Left content */}
                <div className={styles.content}>
                    <p className={styles.heroEyebrow}>Strategic Finance Advisory</p>

                    <h1 className={styles.heading}>
                        <span className={styles.headingLine1}>Growing Wealth,</span>
                        <span className={styles.headingLine2}>Creating Futures</span>
                    </h1>

                    <div className={styles.expertiseRail} aria-label="Core services">
                        <span className={styles.expertiseLabel}>Core Focus</span>
                        <div className={styles.expertiseList}>
                            {expertiseAreas.map((area) => (
                                <span key={area} className={styles.expertiseItem}>
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className={styles.lead}>
                        Structured Capital, Scaled Futures
                    </p>

                    <div className={styles.ctas}>
                        <Link href="/contact" className={styles.ctaPrimary}>
                            Get Funding Strategy
                        </Link>
                        <Link href="/services" className={styles.ctaSecondary}>
                            Explore Services
                            <span aria-hidden="true">↗</span>
                        </Link>
                    </div>

                    {/* Trust row */}
                    <div className={styles.trustRow}>
                        <p className={styles.trustText}>
                            Trusted by <strong>40+</strong> growth-focused clients
                        </p>
                        <div className={styles.ratingRow}>
                            <span className={styles.stars}>★★★★★</span>
                            <span className={styles.ratingValue}>4.9 Rating</span>
                        </div>

                    </div>
                </div>

                {/* Boxless stat rail at bottom-right */}
                <div className={styles.statCards}>
                    {heroStats.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`${styles.statCard} ${stat.color === 'gold' ? styles.statCardGold : ''}`}
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <div className={`${styles.statValue} ${stat.color === 'gold' ? styles.textGold : ''}`}>
                                {stat.value}
                                <svg
                                    className={styles.statArrow}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                >
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
