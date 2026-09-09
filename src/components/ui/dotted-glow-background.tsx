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
          className="absolute inset-0 opacity-70 dark:opacity-45 animate-pulse-slow"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--dot-color) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Animated Glow orbs */}
        <div
          className="absolute -top-52 left-[18%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full blur-[140px] animate-float-slow"
          style={{
            background: "var(--orb-1)",
            animation:
              "float-slow 20s ease-in-out infinite, glow-pulse 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[20%] right-[10%] h-[22rem] w-[22rem] rounded-full blur-[160px]"
          style={{
            background: "var(--orb-2)",
            animation:
              "float-medium 15s ease-in-out infinite 2s, glow-pulse 6s ease-in-out infinite 1s",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[12%] h-[24rem] w-[24rem] rounded-full blur-[150px]"
          style={{
            background: "var(--orb-3)",
            animation:
              "float-fast 18s ease-in-out infinite 4s, glow-pulse 7s ease-in-out infinite 2s",
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/60 dark:via-background/40 dark:to-background/80" />
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
