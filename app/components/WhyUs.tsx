"use client";

import Reveal from "./Reveal";

const stats = [
  { value: "12wk", label: "Average time to go-live" },
  { value: "94%", label: "User adoption at 90 days" },
  { value: "0", label: "Surprise change-orders" },
  { value: "1:1", label: "Senior consultant per project" },
];

const reasons = [
  {
    title: "Senior-only delivery",
    desc: "No pyramid staffing. The person scoping your project is the person building it.",
  },
  {
    title: "Fixed-fee phases",
    desc: "Every milestone has a price agreed upfront. No mystery time-and-materials drift.",
  },
  {
    title: "Outcomes, not hours",
    desc: "We measure success in adoption rate, cycle-time reduction and ROI — not consultant hours billed.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="relative w-full px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-3 flex items-center gap-3">
            <span className="section-num">[ 04 / Why All Set ]</span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>
        </Reveal>

        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal delay={0.05}>
              <h2
                className="text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-gradient">Built by operators</span>{" "}
                <span className="text-[var(--muted)]">who have lived through</span>{" "}
                <span className="text-gradient-accent">a bad implementation.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
                We started All Set after watching a third six-figure CRM rollout
                miss the mark — not because the tech failed, but because nobody
                bridged the business and the build. We're the bridge.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 space-y-5">
                {reasons.map((r) => (
                  <div key={r.title} className="flex gap-4">
                    <div className="mt-2 h-px w-8 flex-none bg-[var(--accent)]" />
                    <div>
                      <h3
                        className="text-lg font-medium"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {r.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--muted)]">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:pl-8">
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)]">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="group relative bg-[var(--surface)] p-8 transition-colors hover:bg-[var(--surface-2)] md:p-10"
                  >
                    <div
                      className="text-5xl font-light tracking-tight text-white md:text-6xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.value}
                    </div>
                    <div className="mt-3 text-[13px] leading-snug text-[var(--muted)]">
                      {s.label}
                    </div>
                    <div className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
