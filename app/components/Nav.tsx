"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[rgba(7,8,13,0.7)] border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)]">
            <span className="absolute inset-1 rounded-sm bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] opacity-90" />
            <span className="relative z-10 font-mono text-[10px] font-bold text-black">AS</span>
          </span>
          <span
            className="text-sm font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            All Set<span className="text-[var(--muted)]"> / Consulting</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {[
            ["Services", "#services"],
            ["Process", "#process"],
            ["Platforms", "#platforms"],
            ["About", "#about"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="link-underline text-sm text-[var(--muted)] hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <a href="#contact" className="btn-primary text-xs md:text-sm">
          Book intro call
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </nav>
    </header>
  );
}
