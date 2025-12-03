import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TypingAnimation } from "./ui/typing-animation";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full mb-6"
            >
              Available for opportunities
            </motion.div>

            <motion.h1
              className="mb-4 font-extrabold tracking-tight text-slate-900 dark:text-white"
              style={{
                fontSize: "clamp(0.5rem, 6vw, 2.25rem)",
                lineHeight: 1.05,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Samson Demessie Ayalew
            </motion.h1>

            <motion.h2
              className="mb-6 min-h-[2.5rem] text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <TypingAnimation
                texts={[
                  "Software Engineer",
                  "Full-stack Developer",
                  "AI Enthusiast",
                  "Competitive Programmer",
                  "Mentor",
                ]}
                typingSpeed={80}
                deletingSpeed={50}
                delayBetweenTexts={2000}
                className="font-semibold"
              />
            </motion.h2>

            <motion.p
              className="text-slate-700 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              I build impactful digital products with a focus on accessibility,
              performance, and user experience. Passionate about clean energy,
              AI, and scalable web solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white group"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="https://github.com/samson-16"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
              >
                <Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/samson-demessie/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </a>
              <a
                href="mailto:samsondemessie@gmail.com"
                className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
              >
                <Mail className="h-5 w-5 text-slate-700 dark:text-slate-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <ImageWithFallback
                src="/header (2).jpg"
                alt="Samson Demessie Ayalew"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-8 border-white dark:border-slate-800 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full p-1">
          <div className="w-1.5 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mx-auto"></div>
        </div>
      </motion.div>
    </section>
  );
}
