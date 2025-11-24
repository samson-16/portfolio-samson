import { motion } from "motion/react";

const techStack = [
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Next.js", icon: "devicon-nextjs-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express", icon: "devicon-express-original colored" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
  { name: "Redux", icon: "devicon-redux-original colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original colored" },
  { name: "Firebase", icon: "devicon-firebase-plain colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
];

const marqueeIcons = [...techStack, ...techStack];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 mb-14">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] text-sm mb-4 block">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            My Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            A curated toolkit I use to design, develop, and deliver modern web
            experiences.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <div className="absolute inset-y-0 left-0 w-32 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent dark:from-slate-900 dark:via-slate-900/80" />
        <div className="absolute inset-y-0 right-0 w-32 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent dark:from-slate-900 dark:via-slate-900/80" />

        <div className="relative overflow-hidden">
          <div
            className="marquee-track flex items-center gap-12 py-10 pl-16 pr-16 w-max"
            style={{ animation: "skills-marquee 28s linear infinite" }}
          >
            {marqueeIcons.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center justify-center gap-3"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_-20px_rgba(148,163,184,0.7)] dark:border-slate-700 dark:bg-slate-800 dark:shadow-[0_12px_30px_-15px_rgba(15,23,42,0.75)] transition-transform hover:scale-110">
                  <i className={`${tech.icon} text-5xl`}></i>
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  {tech.name}
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

        .group:hover .marquee-track,
        .marquee-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
