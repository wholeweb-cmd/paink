import { cn } from "@/lib/utils";

export function GlitchTitle({ text, className }: { text: string; className?: string }) {
  return (
    <span className={cn("relative inline-block", className)}>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 text-blaze"
        style={{ animation: "pk-glitch-a 5s infinite steps(1)" }}
      >
        {text}
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 text-slime"
        style={{ animation: "pk-glitch-a 5s infinite steps(1)", animationDelay: "0.12s" }}
      >
        {text}
      </span>
      <span className="pk-flicker relative">{text}</span>
    </span>
  );
}
