import { Wallet, Banknote, ArrowLeftRight, Rocket } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    icon: Wallet,
    title: "GET A WALLET",
    text: "Download MetaMask or Phantom. Write the seed phrase on paper, not in your group chat.",
  },
  {
    icon: Banknote,
    title: "LOAD SOME GAS",
    text: "Send ETH/SOL to your wallet. Skip one coffee, gain one hamster.",
  },
  {
    icon: ArrowLeftRight,
    title: "SWAP FOR $PAINK",
    text: "Paste the contract address into your DEX of choice and swap. Set slippage if it screams.",
  },
  {
    icon: Rocket,
    title: "HOLD & COPE",
    text: "Close the app. Touch grass. Come back when the pain is gone.",
  },
];

export function HowToBuy() {
  return (
    <section id="how-to-buy" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <h2 className="pk-outline text-center font-display text-4xl text-blaze sm:text-6xl">
            HOW TO BUY
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
            Four steps. Even the hamster managed it, and he has tiny hands.
          </p>
        </Reveal>

        <div className="mt-12 space-y-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 110}>
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-2xl border-4 border-ink bg-card p-5 pk-shadow-hard transition-transform duration-200 hover:translate-x-2">
                <div className="relative grid h-16 w-16 shrink-0 place-items-center rounded-xl border-4 border-ink bg-zap">
                  <s.icon className="h-7 w-7 text-ink" />
                  <span className="absolute -top-3 -left-3 grid h-8 w-8 place-items-center rounded-full border-4 border-ink bg-slime font-display text-xs text-ink">
                    {i + 1}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg text-slime sm:text-xl">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
