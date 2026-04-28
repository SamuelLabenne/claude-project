"use client";

import { motion } from "motion/react";
import ParticleNetwork from "./ParticleNetwork";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid bg-grid-fade" aria-hidden />

      {/* Glow orbs */}
      <div
        className="glow-orb"
        style={{ top: "10%", left: "12%", width: 380, height: 380, background: "var(--accent)" }}
        aria-hidden
      />
      <div
        className="glow-orb"
        style={{ bottom: "5%", right: "8%", width: 460, height: 460, background: "var(--accent-2)" }}
        aria-hidden
      />

      {/* Particles */}
      <div className="absolute inset-0">
        <ParticleNetwork />
      </div>

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--background)] to-transparent" aria-hidden />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--background)] to-transparent" aria-hidden />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 px-3.5 py-1.5 text-xs font-medium text-[var(--muted)] backdrop-blur"
        >
          <span className="pulse-dot" />
          <span className="font-mono uppercase tracking-[0.18em] text-[11px]">
            Now booking Q3 implementations
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-balance text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-gradient">CRM &amp; ERP,</span>
          <br />
          <span className="text-gradient-accent">fully aligned.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mx-auto mt-7 max-w-2xl text-balance text-base leading-relaxed text-[var(--muted)] md:text-lg"
        >
          We design and ship Salesforce, HubSpot, NetSuite and Odoo
          implementations that match how your business actually runs —
          and get adopted on day one.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a href="#contact" className="btn-primary">
            Start your implementation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#process" className="btn-ghost">
            See how we work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]"
        >
          <span>Set up.</span>
          <span className="text-[var(--accent)]">/</span>
          <span>Switched on.</span>
          <span className="text-[var(--accent)]">/</span>
          <span className="text-white">All set.</span>
        </motion.div>
      </div>
    </section>
  );
}
