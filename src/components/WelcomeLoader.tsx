import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { TypingKeyboard } from "./ui/typing-keyboard";

const INTRO_STORAGE_KEY = "samson-portfolio-welcome-seen";
const INTRO_TEXT =
  "Hello, I'm Samson. Full-stack developer. AI + clean energy builder. Let's build something useful.       ";

interface WelcomeLoaderProps {
  onComplete?: () => void;
}

export function WelcomeLoader({ onComplete }: WelcomeLoaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isCompactViewport, setIsCompactViewport] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 640px)").matches;
  });
  const [isVisible, setIsVisible] = useState(() => {
    try {
      return sessionStorage.getItem(INTRO_STORAGE_KEY) !== "true";
    } catch {
      return true;
    }
  });

  const completeIntro = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
    } catch {
      // Storage can be unavailable in strict privacy modes.
    }

    setIsVisible(false);
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    if (!isVisible) {
      onComplete?.();
      return;
    }

    const timeout = window.setTimeout(
      completeIntro,
      prefersReducedMotion ? 900 : 3600
    );

    return () => window.clearTimeout(timeout);
  }, [completeIntro, isVisible, onComplete, prefersReducedMotion]);

  useEffect(() => {
    if (!isVisible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const handleChange = () => setIsCompactViewport(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          role="status"
          aria-live="polite"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,80,157,0.34),transparent_34%),radial-gradient(circle_at_72%_68%,rgba(14,165,233,0.22),transparent_28%)]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.42) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          <motion.div
            className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-200">
                Welcome
              </p>
              <h1 className="text-3xl font-bold text-white sm:text-5xl">
                Samson Demessie Ayalew
              </h1>
            </div>

            <div className="relative h-[280px] w-full max-w-[620px] sm:h-[430px]">
              {prefersReducedMotion ? (
                <div className="flex h-full items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6">
                  <p className="max-w-md text-lg font-medium leading-relaxed text-slate-100">
                    Full-stack developer building useful products with AI,
                    performance, and thoughtful user experience.
                  </p>
                </div>
              ) : (
                <TypingKeyboard
                  autoTypeText={INTRO_TEXT}
                  typingSpeed={[28, 72]}
                  scale={isCompactViewport ? 0.42 : 0.64}
                  accentColor="#00509d"
                  secondaryAccent="#38bdf8"
                />
              )}
            </div>

            <button
              type="button"
              onClick={completeIntro}
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-blue-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
            >
              Skip intro
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
