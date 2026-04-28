export default function Footer() {
  return (
    <footer className="relative w-full border-t border-[var(--border)] px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-6 w-6 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)]">
            <span className="absolute inset-1 rounded-sm bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] opacity-90" />
          </span>
          <span
            className="text-sm tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            All Set Consulting
          </span>
        </div>

        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
          © {new Date().getFullYear()} · Set up. Switched on. All set.
        </div>

        <div className="flex items-center gap-5">
          <a
            href="mailto:hello@allsetconsulting.com"
            className="text-sm text-[var(--muted)] transition-colors hover:text-white"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com"
            className="text-sm text-[var(--muted)] transition-colors hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
