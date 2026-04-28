"use client";

import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    duration: "Week 1–2",
    desc: "We map your current workflows, data and pain points end-to-end. No questionnaires — we sit with your team.",
  },
  {
    n: "02",
    title: "Design",
    duration: "Week 2–4",
    desc: "Solution blueprint, data model and integration architecture. Signed off before a single field is configured.",
  },
  {
    n: "03",
    title: "Deliver",
    duration: "Week 4–12",
    desc: "Iterative builds in two-week sprints with live demos. You see progress weekly — never a six-month black box.",
  },
  {
    n: "04",
    title: "Adopt",
    duration: "90 days post go-live",
    desc: "Hypercare, training and adoption metrics. We're only done when usage and ROI hit your targets.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative w-full overflow-hidden border-y border-[var(--border)] bg-[var(--surface)] px-6 py-32 md:px-10 md:py-40"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-3 flex items-center gap-3">
            <span className="section-num">[ 02 / Process ]</span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="max-w-3xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-gradient">A method,</span>{" "}
            <span className="text-gradient-accent">not a slide deck.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
            Most implementations fail in the gap between discovery and delivery.
            Our four-phase model closes it — every milestone is demoable, signed
            off, and visible to your team.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="group relative h-full bg-[var(--surface)] p-7 transition-colors hover:bg-[var(--surface-2)] md:p-9">
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className="text-5xl font-light tracking-tighter text-[var(--accent)]/90"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.n}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    {s.duration}
                  </span>
                </div>
                <h3
                  className="text-xl font-medium md:text-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--muted)]">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
