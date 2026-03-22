"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <nav
        className={`fixed top-0 left-0 z-50 flex h-full w-80 max-w-[85vw] flex-col bg-warm-black transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <Image
            src="/images/branding/logo.svg"
            alt="Caravan"
            width={40}
            height={40}
          />
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center text-white/60 hover:text-white"
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto py-4">
          {NAV_LINKS.map((link) => {
            const hasChildren = "children" in link && link.children;
            const isExpanded = expandedMenu === link.label;

            if (!hasChildren) {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className="block px-6 py-3.5 text-sm font-medium tracking-wider text-white/80 uppercase transition-colors hover:text-amber-light"
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <div key={link.label}>
                <button
                  onClick={() =>
                    setExpandedMenu(isExpanded ? null : link.label)
                  }
                  className="flex w-full items-center justify-between px-6 py-3.5 text-sm font-medium tracking-wider text-white/80 uppercase transition-colors hover:text-amber-light"
                >
                  {link.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M3 4.5L6 7.5L9 4.5" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={onClose}
                      className="block py-2.5 pr-6 pl-10 text-sm text-white/60 transition-colors hover:text-amber-light"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom contact info */}
        <div className="border-t border-white/10 px-6 py-5">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="flex items-center gap-3 text-sm text-amber-light"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            {BUSINESS.phone}
          </a>
          <p className="mt-2 text-xs text-white/40">
            {BUSINESS.address.full}
          </p>
        </div>
      </nav>
    </>
  );
}
