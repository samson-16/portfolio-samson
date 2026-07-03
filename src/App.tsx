import { useState } from "react";
import { motion } from "motion/react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WelcomeLoader } from "./components/WelcomeLoader";
import { DottedGlowBackground } from "./components/ui/dotted-glow-background";
import { Toaster } from "./components/ui/sonner";
import AnimatedCursor from "react-animated-cursor";

export default function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(() => {
    try {
      return sessionStorage.getItem("samson-portfolio-welcome-seen") === "true";
    } catch {
      return false;
    }
  });

  return (
    <ThemeProvider>
      <WelcomeLoader onComplete={() => setIsIntroComplete(true)} />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#00509d",
        }}
        outerStyle={{
          border: "3px solid #00509d",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <motion.div
        initial={false}
        animate={{
          opacity: isIntroComplete ? 1 : 0.96,
          y: isIntroComplete ? 0 : 8,
        }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <DottedGlowBackground>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
          <Footer />
          <Toaster />
        </DottedGlowBackground>
      </motion.div>
    </ThemeProvider>
  );
}
