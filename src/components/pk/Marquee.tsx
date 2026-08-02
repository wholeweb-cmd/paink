import { cn } from "@/lib/utils";

export function Marquee({
  text = "PAIN KILLER TO THE MOON",
  className,
  reverse = false,
}: {
  text?: string;
  className?: string;
  reverse?: boolean;
}) {
  const items = Array.from({ length: 8 });

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y-4 border-ink bg-slime py-3 select-none",
        className,
      )}
    >
      <div
        className="pk-marquee-track flex w-max items-center gap-6 whitespace-nowrap"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-6">
            {items.map((_, i) => (
              <span
                key={i}
                className="font-display text-lg tracking-wider text-ink sm:text-2xl"
              >
                {text}
                <span className="mx-4 text-blaze">●</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
