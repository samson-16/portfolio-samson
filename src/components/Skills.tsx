import { motion } from "motion/react";

const techIcons = [
  { label: "React", icon: "react" },
  { label: "Next.js", icon: "nextjs" },
  { label: "TypeScript", icon: "typescript" },
  { label: "JavaScript", icon: "javascript" },
  { label: "Tailwind CSS", icon: "tailwindcss" },
  { label: "Redux", icon: "redux" },
  { label: "Git", icon: "git" },
  { label: "GitHub", icon: "github" },
  { label: "Firebase", icon: "firebase" },
  { label: "PostgreSQL", icon: "postgresql" },
  { label: "MySQL", icon: "mysql" },
  { label: "MongoDB", icon: "mongodb" },
  { label: "Docker", icon: "docker" },
  { label: "AWS", icon: "amazonwebservices" },
  { label: "Node.js", icon: "nodejs" },
  { label: "Express", icon: "express" },
  { label: "Python", icon: "python" },
  { label: "HTML5", icon: "html5" },
  { label: "CSS3", icon: "css3" },
];

const marqueeIcons = [...techIcons, ...techIcons];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            Technologies I work with to build modern web applications
          </p>
        </motion.div>
      </div>

      <motion.div
        className="w-full relative overflow-hidden py-8 group"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="absolute inset-y-0 left-0 w-32 pointer-events-none bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-900 z-10" />
        <div className="absolute inset-y-0 right-0 w-32 pointer-events-none bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-900 z-10" />

        <div className="relative overflow-hidden">
          <div
            className="marquee-track flex items-center gap-16 w-max"
            style={{ animation: "skills-marquee 40s linear infinite" }}
          >
            {marqueeIcons.map((tech, index) => (
              <div
                key={`${tech.label}-${index}`}
                className="flex flex-col items-center justify-center gap-3"
              >
                <div className="flex h-16 w-16 items-center justify-center transition-transform duration-300 hover:scale-110">
                  <i
                    className={`devicon-${tech.icon}-plain colored text-6xl`}
                  ></i>
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes skills-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        #skills .group:hover .marquee-track {
          animation-play-state: paused !important;
        }

        .marquee-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
