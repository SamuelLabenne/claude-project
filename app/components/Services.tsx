"use client";

import Reveal from "./Reveal";

const services = [
  {
    code: "01",
    title: "CRM Implementation",
    desc: "Salesforce, HubSpot, Dynamics. Sales, service and marketing clouds configured around your real pipeline — not the demo one.",
    bullets: ["Lead-to-cash workflows", "Custom objects & automation", "Migration from legacy CRMs"],
  },
  {
    code: "02",
    title: "ERP Implementation",
    desc: "NetSuite, Odoo, Microsoft Dynamics 365. Finance, inventory, procurement and manufacturing wired into a single source of truth.",
    bullets: ["Chart of accounts & reporting", "Inventory & order management", "Multi-entity rollouts"],
  },
  {
    code: "03",
    title: "Integration & Data",
    desc: "Stop copy-pasting between tools. We connect CRM, ERP, billing and your product into clean, observable data flows.",
    bullets: ["API & middleware (Workato, Boomi)", "Data migration & cleansing", "Reporting warehouses"],
  },
  {
    code: "04",
    title: "Adoption & Enablement",
    desc: "A platform nobody uses is a liability. We pair every rollout with training, change-management and 90-day adoption metrics.",
    bullets: ["Role-based training", "Process documentation", "Hypercare & optimisation"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-3 flex items-center gap-3">
            <span className="section-num">[ 01 / Services ]</span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="max-w-3xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-gradient">Four disciplines.</span>{" "}
            <span className="text-[var(--muted)]">One outcome —</span>{" "}
            <span className="text-gradient-accent">software people actually use.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.code} delay={i * 0.08}>
              <article className="glass group relative h-full overflow-hidden rounded-2xl p-7 transition-all duration-500 md:p-9">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--accent)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />

                <div className="mb-6 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[var(--accent)]">{s.code}</span>
                  <span className="h-px flex-1 bg-[var(--border)]" />
                </div>

                <h3
                  className="text-2xl font-medium tracking-tight md:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--muted)]">
                  {s.desc}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 text-sm text-[var(--foreground)]/80"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" className="flex-none text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M4 12l5 5L20 6" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
