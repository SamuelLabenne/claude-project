"use client";

import Reveal from "./Reveal";

const platforms = [
  "Salesforce",
  "HubSpot",
  "NetSuite",
  "Odoo",
  "Microsoft Dynamics 365",
  "Pipedrive",
  "Zoho One",
  "Workato",
  "Boomi",
  "Make",
  "Snowflake",
  "Stripe Billing",
];

export default function Platforms() {
  return (
    <section
      id="platforms"
      className="relative w-full overflow-hidden px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-3 flex items-center gap-3">
            <span className="section-num">[ 03 / Platforms ]</span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="max-w-3xl text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-gradient">Platform-agnostic.</span>{" "}
            <span className="text-[var(--muted)]">Opinionated about outcomes.</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[var(--background)] to-transparent" />

        <div className="flex w-max gap-3 marquee">
          {[...platforms, ...platforms].map((p, i) => (
            <div
              key={i}
              className="flex h-16 items-center gap-3 whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 text-[15px] font-medium text-[var(--foreground)]/80"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
