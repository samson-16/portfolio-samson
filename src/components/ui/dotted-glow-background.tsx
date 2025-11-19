import { type ReactNode } from "react";
import { cn } from "./utils";

interface DottedGlowBackgroundProps {
  children: ReactNode;
  className?: string;
}

export function DottedGlowBackground({
  children,
  className,
}: DottedGlowBackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-x-hidden bg-background",
        className
      )}
    >
      {/* Background layer with dots and glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Dotted pattern with pulse animation */}
        <div
          className="absolute inset-0 opacity-70 dark:opacity-30 animate-pulse-slow"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.45) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Animated Glow orbs */}
        <div
          className="absolute -top-52 left-[18%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-500/35 blur-[140px] dark:bg-blue-500/15 animate-float-slow"
          style={{
            animation:
              "float-slow 20s ease-in-out infinite, glow-pulse 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[20%] right-[10%] h-[22rem] w-[22rem] rounded-full bg-purple-400/30 blur-[160px] dark:bg-purple-500/15"
          style={{
            animation:
              "float-medium 15s ease-in-out infinite 2s, glow-pulse 6s ease-in-out infinite 1s",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[12%] h-[24rem] w-[24rem] rounded-full bg-cyan-400/25 blur-[150px] dark:bg-cyan-500/12"
          style={{
            animation:
              "float-fast 18s ease-in-out infinite 4s, glow-pulse 7s ease-in-out infinite 2s",
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/60 dark:via-slate-950/40 dark:to-slate-950/80" />
      </div>

      {/* Content layer */}
      <div className="relative z-10">{children}</div>

      {/* Inline styles for animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translate(-50%, 0) scale(1);
          }
          25% {
            transform: translate(-45%, -20px) scale(1.05);
          }
          50% {
            transform: translate(-55%, -10px) scale(0.95);
          }
          75% {
            transform: translate(-50%, 15px) scale(1.02);
          }
        }
        
        @keyframes float-medium {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(15px, -25px) scale(1.08);
          }
          66% {
            transform: translate(-10px, 20px) scale(0.92);
          }
        }
        
        @keyframes float-fast {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          30% {
            transform: translate(-20px, -15px) scale(1.06);
          }
          60% {
            transform: translate(25px, 10px) scale(0.94);
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            opacity: 1;
            filter: blur(140px);
          }
          50% {
            opacity: 0.6;
            filter: blur(180px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .dark .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .dark @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
