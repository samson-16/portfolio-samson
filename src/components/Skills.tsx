import { motion } from "motion/react";
import { useState } from "react";

export function Skills() {
  const [isHovering, setIsHovering] = useState(false);

  const techStackItems = [
    {
      name: "JavaScript",
      icon: (
        <img
          src="https://img.icons8.com/color/96/javascript.png"
          alt="JavaScript"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <img
          src="https://img.icons8.com/color/96/typescript.png"
          alt="TypeScript"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "Python",
      icon: (
        <img
          src="https://img.icons8.com/color/96/python.png"
          alt="Python"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "React",
      icon: (
        <img
          src="https://img.icons8.com/color/96/react-native.png"
          alt="React"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "Next.js",
      icon: (
        <img
          src="https://img.icons8.com/fluency/96/nextjs.png"
          alt="Next.js"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "Node.js",
      icon: (
        <img
          src="https://img.icons8.com/color/96/nodejs.png"
          alt="Node.js"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "Express",
      icon: (
        <img
          src="https://img.icons8.com/fluency/96/express-js.png"
          alt="Express"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "PyTorch",
      icon: (
        <img
          src="https://img.icons8.com/fluency/96/pytorch.png"
          alt="PyTorch"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <img
          src="https://img.icons8.com/color/96/tailwindcss.png"
          alt="Tailwind CSS"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <img
          src="https://img.icons8.com/color/96/mongodb.png"
          alt="MongoDB"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "MySQL",
      icon: (
        <img
          src="https://img.icons8.com/color/96/mysql-logo.png"
          alt="MySQL"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "Git",
      icon: (
        <img
          src="https://img.icons8.com/color/96/git.png"
          alt="Git"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "GitHub",
      icon: (
        <img
          src="https://img.icons8.com/fluency/96/github.png"
          alt="GitHub"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "Figma",
      icon: (
        <img
          src="https://img.icons8.com/color/96/figma.png"
          alt="Figma"
          className="w-10 h-10"
        />
      ),
    },
  ];

  // Duplicate icons for seamless loop
  const duplicatedIcons = [...techStackItems, ...techStackItems];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="w-full max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
              Tech Stack
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Tools and technologies I work with
            </p>
          </div>

          {/* Marquee Container */}
          <div
            className="relative w-full overflow-hidden rounded-xl bg-white/40 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm py-10"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent pointer-events-none z-10" />

            {/* Marquee Content */}
            <div
              className="flex gap-8 w-fit animate-marquee"
              style={{
                animationPlayState: isHovering ? "paused" : "running",
              }}
            >
              {duplicatedIcons.map((skill, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center gap-3 group cursor-default px-5"
                >
                  {/* Icon Container */}
                  <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/80 border border-slate-200/40 dark:border-slate-700/40 group-hover:border-slate-300/80 dark:group-hover:border-slate-600/80 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/10 dark:group-hover:shadow-blue-400/10">
                    {skill.icon}
                  </div>

                  {/* Label */}
                  <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-300 font-medium whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
