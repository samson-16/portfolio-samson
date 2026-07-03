import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "motion/react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const THEME_TRANSITION_MS = 650;
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionTheme, setTransitionTheme] = useState<Theme>("light");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const transitionTimeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const toggleTheme = () => {
    setTheme((previousTheme) => {
      const nextTheme = previousTheme === "light" ? "dark" : "light";
      setTransitionTheme(nextTheme);

      if (!prefersReducedMotion) {
        if (transitionTimeoutRef.current) {
          window.clearTimeout(transitionTimeoutRef.current);
        }

        setIsTransitioning(true);
        transitionTimeoutRef.current = window.setTimeout(() => {
          setIsTransitioning(false);
        }, THEME_TRANSITION_MS);
      }

      return nextTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key={transitionTheme}
            className="pointer-events-none fixed inset-0 z-[90]"
            style={{
              background:
                transitionTheme === "dark"
                  ? "radial-gradient(circle at top right, rgba(0,80,157,0.42), rgba(15,23,42,0.72) 42%, rgba(2,6,23,0.92))"
                  : "radial-gradient(circle at top right, rgba(255,255,255,0.96), rgba(214,233,255,0.82) 42%, rgba(255,255,255,0.78))",
            }}
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{
              opacity: [0, 0.38, 0],
              clipPath: "circle(145% at 100% 0%)",
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: THEME_TRANSITION_MS / 1000, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
