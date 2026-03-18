"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { BrandMark } from "@/components/BrandMark";

import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (navRef.current?.contains(target)) return;
      if (menuButtonRef.current?.contains(target)) return;
      closeMenu();
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  useEffect(() => {
    const timeoutId = window.setTimeout(closeMenu, 0);

    return () => window.clearTimeout(timeoutId);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isScrolled = scrolled || !isHome;

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`.trim()}>
      {open ? <button type="button" className={styles.backdrop} onClick={closeMenu} aria-hidden /> : null}

      <div className={`${styles.inner} container`}>
        <Link href="/#home-hero" className={styles.brandLink} aria-label="WealthRise Capitals home">
          <BrandMark compact className={styles.brandMark} />
        </Link>

        <nav
          ref={navRef}
          className={`${styles.nav} ${open ? styles.navOpen : ""}`.trim()}
          aria-label="Main navigation"
        >
          <div className={styles.navKicker}>
            <span>Menu</span>
            <small>Explore WealthRise Capitals</small>
          </div>

          <div className={styles.navList}>
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${active ? styles.active : ""}`.trim()}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className={`${styles.menuButton} ${open ? styles.menuButtonOpen : ""}`.trim()}
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
