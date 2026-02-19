"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        <Link href="/" className={styles.brandLink} aria-label="WayToWealth4U home">
          <span className={styles.brandVisual}>
            <Image
              src="/nav-logo-icon.png"
              alt=""
              width={570}
              height={438}
              priority
              className={styles.navLogoIcon}
            />
            <Image
              src="/nav-logo-text.png"
              alt=""
              width={1337}
              height={186}
              priority
              className={styles.navLogoText}
            />
          </span>
        </Link>

        <nav
          ref={navRef}
          className={`${styles.nav} ${open ? styles.navOpen : ""}`.trim()}
          aria-label="Main navigation"
        >
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
        </nav>

        <Link href="/contact" className={`${styles.desktopApply} button buttonPrimary`.trim()}>
          Apply Now
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className={styles.menuButton}
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
