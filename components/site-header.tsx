"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  AFFILIATE_LINK,
  AFFILIATE_REL,
  LOGO_PATH,
  NAV_LINKS,
  SITE_NAME,
} from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-shell">
        <div className="header-bar">
          <Link className="brand-mark" href="/" onClick={closeMenu}>
            <Image
              alt="GoPay 11 APK — GoPlay11 logo"
              className="brand-logo"
              height={44}
              priority
              src={LOGO_PATH}
              width={44}
            />
            <span className="brand-text-wrap">
              <span className="brand-name">{SITE_NAME}</span>
              <span className="brand-tag">Fantasy Gaming Resource Hub</span>
            </span>
          </Link>
          <button
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="menu-toggle"
            onClick={() => setIsMenuOpen((value) => !value)}
            type="button"
          >
            <span className="menu-icon" aria-hidden="true">
              {isMenuOpen ? "x" : "|||"}
            </span>
            <span className="menu-text">{isMenuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>

        <nav
          aria-label="Primary navigation"
          className={`top-nav${isMenuOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`nav-link${pathname === link.href ? " is-active" : ""}`}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <a
            className="btn btn-primary btn-compact mobile-cta"
            href={AFFILIATE_LINK}
            rel={AFFILIATE_REL}
            target="_blank"
          >
            Download GoPay 11 APK
          </a>
        </nav>

        <a
          className="btn btn-primary btn-compact header-cta"
          href={AFFILIATE_LINK}
          rel={AFFILIATE_REL}
        target="_blank"
      >
        Download GoPay 11 APK
      </a>
      </div>
    </header>
  );
}
