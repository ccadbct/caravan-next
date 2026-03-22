"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-warm-black/95 shadow-lg backdrop-blur-sm py-2"
            : "bg-warm-black py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Hamburger - mobile only */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/branding/logo.svg"
              alt="Caravan Restaurant & Coffee"
              width={scrolled ? 40 : 52}
              height={scrolled ? 40 : 52}
              className="transition-all duration-300"
              priority
            />
            <span
              className={`hidden font-display font-light tracking-wider text-white transition-all duration-300 sm:block ${
                scrolled ? "text-lg" : "text-xl"
              }`}
            >
              CARAVAN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" role="navigation">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.label} link={link} />
            ))}
          </nav>

          {/* Address / CTA */}
          <a
            href={BUSINESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 border border-amber/30 px-4 py-2 text-xs font-medium tracking-wider text-amber-light uppercase transition-colors hover:border-amber hover:bg-amber/10 sm:flex"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="hidden md:inline">317 Sand Lane, SI</span>
          </a>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Spacer for fixed header */}
      <div className={scrolled ? "h-16" : "h-20"} />
    </>
  );
}

function NavItem({
  link,
}: {
  link: (typeof NAV_LINKS)[number];
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = "children" in link && link.children;

  if (!hasChildren) {
    return (
      <Link
        href={link.href}
        className="px-4 py-2 text-sm font-medium tracking-wider text-white/80 uppercase transition-colors hover:text-amber-light"
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wider text-white/80 uppercase transition-colors hover:text-amber-light">
        {link.label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M3 4.5L6 7.5L9 4.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 min-w-56 border border-white/10 bg-warm-black/95 py-2 shadow-xl backdrop-blur-sm">
          {link.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              className="block px-5 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-amber-light"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
