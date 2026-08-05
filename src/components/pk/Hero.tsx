import hamster from "@/assets/hamster.png";
import { CopyContract } from "./CopyContract";
import { GlitchTitle } from "./GlitchTitle";
import { useParallax } from "./Reveal";

export function Hero() {
  const blobRef = useParallax(0.12);

  return (
    <section id="hero" className="relative overflow-hidden pt-10 pb-16 sm:pt-16">
      <div className="pk-noise absolute inset-0 opacity-60" aria-hidden />
      <div
        ref={blobRef}
        aria-hidden
        className="absolute top-10 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-slime opacity-25 blur-[110px] sm:h-[620px] sm:w-[620px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span className="inline-block -rotate-2 rounded-full border-4 border-ink bg-zap px-4 py-1 font-display text-[11px] tracking-widest text-ink">
            $PAINK • CERTIFIED SIGMA RODENT
          </span>

          <h1 className="pk-outline mt-5 font-display text-5xl leading-[0.92] tracking-tight text-slime sm:text-7xl lg:text-8xl">
            <GlitchTitle text="PAIN" />
            <br />
            <GlitchTitle text="KILLER" />
          </h1>

          <p className="mx-auto mt-5 max-w-md font-display text-base text-foreground sm:text-xl lg:mx-0">
            The Cure For Your Portfolio Pain
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground sm:text-base lg:mx-0">
            One angry hamster. One tiny gun. Zero utility. Side effects may include
            uncontrollable gains, chart-staring and telling your mom about crypto again.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="https://app.virtuals.io/virtuals/130238"
              className="pk-glow rounded-xl border-4 border-ink bg-slime px-7 py-4 font-display text-lg text-ink transition-transform duration-150 hover:-translate-y-1.5 hover:scale-105 hover:-rotate-2 active:translate-y-0"

              target="_blank" rel="noopener noreferrer"
            >
              BUY NOW
            </a>
            <a
              href="#community"
              className="rounded-xl border-4 border-ink bg-blaze px-7 py-4 font-display text-lg text-ink pk-shadow-hard transition-transform duration-150 hover:-translate-y-1.5 hover:scale-105 hover:rotate-2 active:translate-y-0"
            >
              APE IN 🦍
            </a>
          </div>

          <div className="mt-7 flex justify-center lg:justify-start">
            <CopyContract />
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div
            aria-hidden
            className="absolute inset-x-6 top-8 bottom-8 rounded-[3rem] bg-slime opacity-70 blur-2xl"
          />
          <div className="pk-recoil relative">
            <div className="pk-wiggle">
              <img
                src={hamster}
                alt="Pain Killer mascot: a chubby hamster with big teary eyes aiming a tiny pistol"
                className="mx-auto w-[85%] max-w-md drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
          <span className="pk-float absolute top-2 right-2 rounded-lg border-4 border-ink bg-zap px-3 py-1 font-display text-xs text-ink sm:text-sm">
            NO PAIN ALLOWED
          </span>
          <span
            className="pk-float absolute bottom-6 left-0 rounded-lg border-4 border-ink bg-background px-3 py-1 font-display text-xs text-slime sm:text-sm"
            style={{ animationDelay: "1.2s" }}
          >
            BANG 💥
          </span>
        </div>
      </div>
    </section>
  );
}
