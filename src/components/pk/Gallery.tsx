import hamster from "@/assets/hamster.png";
import { Reveal } from "./Reveal";

const MEMES = [
  { caption: "WHEN THE CHART DIPS 2%", rotate: "-rotate-2", bg: "bg-slime" },
  { caption: "SIR, THIS IS A WENDY'S", rotate: "rotate-1", bg: "bg-zap" },
  { caption: "SELL? I DON'T KNOW HER", rotate: "rotate-2", bg: "bg-blaze" },
  { caption: "MY BAG AT 3AM", rotate: "-rotate-1", bg: "bg-slime-deep" },
  { caption: "PAPER HANDS DETECTED", rotate: "rotate-3", bg: "bg-zap" },
  { caption: "STILL NOT FINANCIAL ADVICE", rotate: "-rotate-3", bg: "bg-slime" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="pk-outline text-center font-display text-4xl text-slime sm:text-6xl">
            MEME VAULT
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
            Right-click, steal, post. That is the whole marketing plan.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {MEMES.map((m, i) => (
            <Reveal key={m.caption} delay={i * 80}>
              <figure
                className={`group ${m.rotate} overflow-hidden rounded-2xl border-4 border-ink ${m.bg} pk-shadow-hard transition-transform duration-200 hover:rotate-0 hover:scale-105`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={hamster}
                    alt={`Pain Killer hamster meme: ${m.caption.toLowerCase()}`}
                    loading="lazy"
                    className="h-full w-full scale-110 object-contain transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
                <figcaption className="border-t-4 border-ink bg-background px-3 py-2 text-center font-display text-[10px] text-foreground sm:text-xs">
                  {m.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
