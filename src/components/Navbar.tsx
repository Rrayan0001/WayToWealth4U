"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/my-office", label: "My Office" },
];

const homeAnchors = [
  { href: "/#emi-calculator", label: "EMI" },
  { href: "/#process", label: "Process" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

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

        <button
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

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`.trim()} aria-label="Main navigation">
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

          <div className={styles.anchorSet}>
            {homeAnchors.map((anchor) => (
              <Link key={anchor.href} href={anchor.href} className={styles.anchorLink} onClick={closeMenu}>
                {anchor.label}
              </Link>
            ))}
          </div>

          <Link href="/contact" className="button buttonPrimary" onClick={closeMenu}>
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
