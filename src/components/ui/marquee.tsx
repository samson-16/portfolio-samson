import { cn } from "./utils";

interface MarqueeProps {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  fade?: boolean;
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

export function Marquee({
  children,
  pauseOnHover = true,
  reverse = false,
  fade = true,
  className,
  speed = "normal",
}: MarqueeProps) {
  const speedMap = {
    slow: "60s",
    normal: "40s",
    fast: "20s",
  };

  return (
    <div className={cn("group relative flex overflow-hidden", className)}>
      {/* Fade effects */}
      {fade && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-900 z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-900 z-10" />
        </>
      )}

      {/* Marquee content */}
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-4",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `scroll ${speedMap[speed]} linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
      </div>

      {/* Duplicate for seamless loop */}
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-4",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `scroll ${speedMap[speed]} linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
        aria-hidden="true"
      >
        {children}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
