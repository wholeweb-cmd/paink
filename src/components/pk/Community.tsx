import { Reveal } from "./Reveal";

const LINKS = [
  {
    label: "Follow Pain Killer on X (Twitter)",
    href: "https://x.com/painkiller_rh",
  },
];

export function Community() {
  return (
    <section id="community" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <h2 className="pk-outline text-center font-display text-4xl text-zap sm:text-6xl">
            JOIN THE SQUAD
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
            The hamster is loud, online and mildly unhinged. Come say hi.
          </p>
        </Reveal>

        <div className="mt-12 flex justify-center">
          {LINKS.map((l, i) => (
            <Reveal key={l.label} delay={i * 120}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                className="relative flex h-48 w-48 items-center justify-center rounded-2xl border-4 border-slime bg-ink pk-shadow-slime transition-transform duration-150 hover:-translate-y-2 hover:scale-105 hover:rotate-2 sm:h-56 sm:w-56"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-20 w-20 fill-foreground sm:h-24 sm:w-24"
                  aria-hidden="true"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
