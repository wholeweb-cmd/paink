import { Coins, Flame, Lock, PiggyBank } from "lucide-react";
import { Reveal } from "./Reveal";

const STATS = [
  { icon: Coins, label: "TOTAL SUPPLY", value: "1,000,000,000", note: "one billion pills" },
  { icon: Flame, label: "BUY / SELL TAX", value: "0% / 0%", note: "we are not monsters" },
  { icon: Lock, label: "LP STATUS", value: "BURNED 🔥", note: "keys thrown in the wheel" },
  { icon: PiggyBank, label: "TEAM ALLOC", value: "2%", note: "for seeds and therapy" },
];

export function Tokenomics() {
  return (
    <section id="tokenomics" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="pk-outline text-center font-display text-4xl text-slime sm:text-6xl">
            TOKENOMICS
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
            Placeholder numbers. Real vibes. Consult your hamster before dosing.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="h-full rounded-2xl border-4 border-ink bg-card p-6 text-center pk-shadow-slime transition-transform duration-200 hover:-translate-y-2 hover:-rotate-1">
                <div className="pk-glow mx-auto grid h-14 w-14 place-items-center rounded-full border-4 border-ink bg-slime">
                  <s.icon className="h-6 w-6 text-ink" />
                </div>
                <p className="mt-4 font-display text-[11px] tracking-widest text-zap">
                  {s.label}
                </p>
                <p className="pk-text-glow mt-2 font-display text-2xl text-foreground">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
