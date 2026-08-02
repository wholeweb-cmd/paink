import hamster from "@/assets/hamster.png";

export function Footer() {
  return (
    <footer className="relative border-t-4 border-ink bg-card py-12">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <img
          src={hamster}
          alt="Pain Killer hamster mascot"
          loading="lazy"
          className="pk-wiggle mx-auto w-24"
        />
        <p className="pk-outline mt-4 font-display text-2xl text-slime sm:text-3xl">
          PAIN KILLER
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-xs text-muted-foreground sm:text-sm">
          $PAINK is a meme coin with no intrinsic value or expectation of financial return.
          There is no formal team or roadmap. This is not financial advice. Crypto is risky,
          the hamster is armed, and you are responsible for your own bags. Do your own
          research.
        </p>
        <p className="mt-6 font-mono text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} PAIN KILLER. All memes reserved.
        </p>
      </div>
    </footer>
  );
}
