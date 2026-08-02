import { useCallback, useRef, useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const COLORS = ["var(--slime)", "var(--zap)", "var(--blaze)", "#ffffff"];

export function CopyContract({
  address = "CA: dropping soon 👀",
  className,
}: {
  address?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  const burst = useCallback(() => {
    const host = hostRef.current;
    if (!host) return;
    for (let i = 0; i < 28; i++) {
      const p = document.createElement("span");
      const angle = Math.random() * Math.PI * 2;
      const dist = 60 + Math.random() * 120;
      p.style.cssText = `position:absolute;left:50%;top:50%;width:${
        5 + Math.random() * 7
      }px;height:${5 + Math.random() * 9}px;background:${
        COLORS[i % COLORS.length]
      };border-radius:${Math.random() > 0.5 ? "50%" : "2px"};pointer-events:none;z-index:50;--dx:${(
        Math.cos(angle) * dist
      ).toFixed(0)}px;--dy:${(Math.sin(angle) * dist - 40).toFixed(0)}px;--rot:${
        Math.random() * 720 - 360
      }deg;animation:pk-confetti ${700 + Math.random() * 500}ms ease-out forwards;`;
      host.appendChild(p);
      setTimeout(() => p.remove(), 1300);
    }
  }, []);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
    } catch {
      /* clipboard blocked — still celebrate */
    }
    setCopied(true);
    burst();
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div
      ref={hostRef}
      className={cn(
        "relative grid w-full max-w-xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-xl border-4 border-ink bg-card p-2 pl-4 pk-shadow-slime",
        className,
      )}
    >
      <div className="min-w-0">
        <p className="font-display text-[10px] tracking-widest text-slime">CONTRACT</p>
        <p className="truncate font-mono text-xs text-foreground sm:text-sm">{address}</p>
      </div>
      <button
        onClick={onCopy}
        aria-label="Copy contract address"
        className="flex shrink-0 items-center gap-2 rounded-lg border-4 border-ink bg-zap px-3 py-2 font-display text-xs text-ink transition-transform duration-150 hover:-translate-y-1 hover:rotate-2 active:translate-y-0"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        <span className="hidden sm:inline">{copied ? "COPIED!" : "COPY"}</span>
      </button>
    </div>
  );
}
