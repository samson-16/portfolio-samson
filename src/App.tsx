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
import { DottedGlowBackground } from "./components/ui/dotted-glow-background";
import { Toaster } from "./components/ui/sonner";
import AnimatedCursor from "react-animated-cursor";

export default function App() {
  return (
    <ThemeProvider>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "rgb(59, 130, 246)",
        }}
        outerStyle={{
          border: "3px solid rgb(59, 130, 246)",
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
    </ThemeProvider>
  );
}
