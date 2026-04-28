"use client";

import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden px-6 py-32 md:px-10 md:py-40"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade" aria-hidden />
      <div
        className="glow-orb"
        style={{ top: "10%", left: "20%", width: 400, height: 400, background: "var(--accent-2)" }}
        aria-hidden
      />
      <div
        className="glow-orb"
        style={{ bottom: "10%", right: "15%", width: 360, height: 360, background: "var(--accent)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="section-num">[ 05 / Let&rsquo;s talk ]</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="mt-6 text-balance text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-gradient">Ready to be</span>{" "}
            <span className="text-gradient-accent">all set?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl text-balance text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Tell us about your stack, your team and what&rsquo;s broken.
            We&rsquo;ll come back within 24 hours with a plan — or an honest
            &ldquo;not us.&rdquo;
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="mailto:hello@allsetconsulting.com?subject=Implementation%20enquiry"
              className="btn-primary"
            >
              hello@allsetconsulting.com
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://cal.com/allset"
              className="btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              Book a 30-min intro
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3">
            {[
              ["Response time", "< 24 hours"],
              ["Engagement size", "$25k – $500k"],
              ["Locations", "EU · UK · US"],
            ].map(([k, v]) => (
              <div key={k} className="bg-[var(--surface)] p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  {k}
                </div>
                <div
                  className="mt-2 text-lg font-medium text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {v}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
