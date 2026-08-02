const NAV = [
  { label: "LORE", href: "#lore" },
  { label: "MEMES", href: "#gallery" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-ink bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
        <a href="#hero" className="min-w-0">
          <span className="pk-outline font-display text-xl text-slime sm:text-2xl">
            PAIN KILLER
          </span>
        </a>
        <nav className="flex shrink-0 items-center gap-4">
          <ul className="hidden items-center gap-5 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="font-display text-xs text-foreground transition-colors hover:text-slime"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#community"
            className="rounded-lg border-4 border-ink bg-slime px-3 py-2 font-display text-xs text-ink transition-transform duration-150 hover:-translate-y-0.5 hover:rotate-2"
          >
            APE IN
          </a>
        </nav>
      </div>
    </header>
  );
}
