import hamster from "@/assets/hamster.png";
import { Reveal } from "./Reveal";

const PANELS = [
  {
    n: "01",
    title: "THE RUG",
    text: "Our hamster aped his whole seed stash into a dogcoin. It rugged in 4 minutes. He cried. A lot.",
    bg: "bg-card",
    dark: false,
  },
  {
    n: "02",
    title: "THE PAIN",
    text: "Red candles everywhere. His wheel stopped spinning. Doctor said: 'this pain has no cure'.",
    bg: "bg-slime-deep",
    dark: true,
  },
  {
    n: "03",
    title: "THE GUN",
    text: "So he found a tiny pistol in the sunflower seed drawer. Nobody knows how. Nobody asks.",
    bg: "bg-card",
    dark: false,
  },
  {
    n: "04",
    title: "THE CURE",
    text: "Now he hunts every bad chart personally. They call him... PAIN KILLER.",
    bg: "bg-blaze",
    dark: true,
  },
];

export function Lore() {
  return (
    <section id="lore" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="pk-outline text-center font-display text-4xl text-zap sm:text-6xl">
            THE LORE
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
            Every meme coin needs an origin story. Ours is medically inaccurate and legally
            questionable.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PANELS.map((p, i) => (
            <Reveal key={p.n} delay={i * 120}>
              <article
                className={`group relative h-full overflow-hidden rounded-2xl border-4 border-ink ${p.bg} p-5 pk-shadow-hard transition-transform duration-200 hover:-translate-y-2 hover:rotate-1`}
              >
                <span className="font-scrawl text-3xl text-ink/40 group-hover:text-ink/70">
                  {p.n}
                </span>
                <h3
                  className={`mt-1 font-display text-xl ${p.dark ? "text-ink" : "text-foreground"}`}
                >
                  {p.title}
                </h3>
                <p
                  className={`mt-2 text-sm ${p.dark ? "text-ink/80" : "text-muted-foreground"}`}
                >
                  {p.text}
                </p>
                <img
                  src={hamster}
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -bottom-6 w-24 opacity-20 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-40"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
