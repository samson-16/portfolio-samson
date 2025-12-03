import { motion } from "motion/react";

const techIcons = [
  {
    label: "React",
    svg: (
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="React"
        className="h-12 w-12"
      >
        <circle cx="32" cy="32" r="6" fill="#61DAFB" />
        <ellipse
          cx="32"
          cy="32"
          rx="20"
          ry="8.5"
          stroke="#61DAFB"
          strokeWidth="3"
          fill="none"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="20"
          ry="8.5"
          stroke="#61DAFB"
          strokeWidth="3"
          fill="none"
          transform="rotate(60 32 32)"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="20"
          ry="8.5"
          stroke="#61DAFB"
          strokeWidth="3"
          fill="none"
          transform="rotate(-60 32 32)"
        />
      </svg>
    ),
  },
  {
    label: "Next.js",
    svg: (
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="Next.js"
        className="h-12 w-12"
      >
        <rect width="64" height="64" rx="14" fill="#0D1117" />
        <path
          d="M18 20h8v24h-8z"
          fill="#ffffff"
        />
        <path
          d="M34 20h6l12 24h-8l-2-4h-6l-1.4 3.8L30 44z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
  {
    label: "TypeScript",
    svg: (
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="TypeScript"
        className="h-12 w-12"
      >
        <rect width="64" height="64" rx="14" fill="#3178C6" />
        <path
          d="M20 22h24v6h-8v16h-8V28h-8zM36 34.5c0-4.5 3.2-6.8 6.5-6.8 3.2 0 5.5 1.6 6.5 4.3l-5.8 2.3c-.2-.8-.6-1.3-1.3-1.3-.7 0-1 .4-1 1 0 2.4 8.5 1.3 8.5 7.6 0 3.6-3.1 6.4-7.3 6.4-3.6 0-6.1-1.8-7.6-4.6l5.5-2.7c.4 1.1 1.1 1.9 2.3 1.9 1 0 1.5-.5 1.5-1.2 0-2.4-7.3-1.4-7.3-6.9z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
  {
    label: "Tailwind CSS",
    svg: (
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="Tailwind CSS"
        className="h-12 w-12"
      >
        <rect width="64" height="64" rx="14" fill="#0B1120" />
        <path
          d="M18 26c2.4-8 7.8-12 16.1-12 7.6 0 11.7 3.8 12.3 11.4-2.4-3.6-5.1-5-8.1-4.2-2 .5-3.7 2-5.4 3.6-2.6 2.4-5.4 5-10.9 5-4.4 0-7.4-1.9-9-3.8zM17.6 42.5c2.3-7.7 7.6-12 16-12 7.5 0 11.6 3.8 12.2 11.6-2.4-3.6-5.1-5.1-8-4.3-2 .5-3.7 2.1-5.4 3.7-2.6 2.4-5.4 5.1-10.9 5.1-4.4-.1-7.4-1.9-8.9-4.1z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    label: "Redux",
    svg: (
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="Redux"
        className="h-12 w-12"
      >
        <rect width="64" height="64" rx="14" fill="#F5F3FF" />
        <path
          d="M32 20c-6.7 0-12.2 5.4-12.2 12.1 0 2.5.7 4.8 2 6.8-2.4 1.3-4 3.8-4 6.7 0 4.2 3.5 7.7 7.8 7.7 3.3 0 6.1-2 7.2-4.9 1 .3 2 .4 3.1.4 6.7 0 12.2-5.4 12.2-12.1 0-4.5-2.4-8.5-6-10.6C41.2 22.1 37 20 32 20zm-6.4 30.4c-2.3 0-4.2-1.8-4.2-4.1s1.9-4.1 4.2-4.1 4.2 1.8 4.2 4.1-1.9 4.1-4.2 4.1zm6.4-8.5c-1.1 0-2.2-.2-3.2-.5.2-.7.3-1.5.3-2.3 0-2.9-1.1-5.6-3-7.7 1.8-2.8 5-4.7 8.6-4.7 5.7 0 10.3 4.5 10.3 10.1 0 5.6-4.6 10.1-10.3 10.1z"
          fill="#7C3AED"
        />
      </svg>
    ),
  },
  {
    label: "Git",
    svg: (
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="Git"
        className="h-12 w-12"
      >
        <rect width="64" height="64" rx="14" fill="#FEE2E2" />
        <path
          d="M46.5 29.3 34.7 17.5c-.9-.9-2.4-.9-3.3 0l-2.8 2.8 3.9 3.9c1.2-.3 2.5.1 3.4 1 1 1 1.3 2.3 1 3.5l3.7 3.7c1-.3 2.1 0 2.9.8 1.2 1.2 1.2 3.2 0 4.4-1.3 1.3-3.3 1.3-4.5 0-.8-.8-1.1-1.9-.8-2.9l-3.3-3.3v8.7c.3.1.5.3.8.6 1.2 1.2 1.2 3.2 0 4.4-1.2 1.3-3.3 1.3-4.5 0-1.2-1.2-1.2-3.2 0-4.4.2-.2.5-.4.8-.6V30.4c-.3-.2-.6-.4-.8-.6-1.1-1.1-1.3-2.7-.9-4l-3.8-3.8-10 10c-.9.9-.9 2.4 0 3.3l11.7 11.8c.9.9 2.4.9 3.3 0l11.8-11.8c1-.9 1-2.4.1-3.3z"
          fill="#EF4444"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    svg: (
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="GitHub"
        className="h-12 w-12"
      >
        <rect width="64" height="64" rx="14" fill="#0D1117" />
        <path
          d="M32 18c-8 0-14.5 6.5-14.5 14.5 0 6.4 4.1 11.8 9.9 13.7.7.1.9-.3.9-.7v-2.6c-4 1-4.8-1.9-4.8-1.9-.6-1.6-1.6-2-1.6-2-1.3-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.3 1.2.1-.9.5-1.6.9-1.9-3.2-.4-6.5-1.6-6.5-7.1 0-1.6.6-2.9 1.5-3.9-.2-.4-.7-1.9.1-4 0 0 1.2-.4 4.1 1.5 1.2-.3 2.6-.5 4-.5s2.8.2 4 .5c2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.3 1.5 3.9 0 5.6-3.3 6.7-6.5 7.1.5.4.9 1.2.9 2.5v3.7c0 .4.2.8.9.7 5.8-1.9 9.9-7.3 9.9-13.7C46.5 24.5 40 18 32 18z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    label: "Firebase",
    svg: (
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="Firebase"
        className="h-12 w-12"
      >
        <rect width="64" height="64" rx="14" fill="#FFF7ED" />
        <path
          d="M20 44.5 32 15l4.5 12.8L44 20l4 24.5L32 52z"
          fill="#F97316"
        />
        <path d="M32 52 20 44.5l12-29.5z" fill="#FDBA74" />
      </svg>
    ),
  },
  {
    label: "PostgreSQL",
    svg: (
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="PostgreSQL"
        className="h-12 w-12"
      >
        <rect width="64" height="64" rx="14" fill="#E2E8F0" />
        <path
          d="M43 21c-3.5-7.2-18.5-7.2-22 0-3 6.2-1 17.6 7 21l-1.5 6H32l1.5-5.8c8 .3 10.4-11 7.5-21.2z"
          fill="#1D4ED8"
        />
        <path
          d="M27 27c-1.5 0-2.5 1.3-2.1 2.7 1 3.6 3.5 6 7.1 7.6l1.3-4.5C31.1 31.3 29.6 27 27 27z"
          fill="#93C5FD"
        />
      </svg>
    ),
  },
  {
    label: "MySQL",
    svg: (
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="MySQL"
        className="h-12 w-12"
      >
        <rect width="64" height="64" rx="14" fill="#F0FDFA" />
        <path
          d="M22 44c0-9 5.7-14 10-14 3.4 0 5.7 1.7 7.3 4.9 1.3 2.6 3.6 4.1 6.7 4.1H48c-1.2 4.8-5.3 7-10.1 7-6.5 0-9.5-3.2-11.3-6.4-.8 3.1-2.9 4.4-6.6 4.4z"
          fill="#0EA5E9"
        />
        <path d="M22 30h4v10l-4 4z" fill="#082F49" />
      </svg>
    ),
  },
  {
    label: "MongoDB",
    svg: (
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="MongoDB"
        className="h-12 w-12"
      >
        <rect width="64" height="64" rx="14" fill="#ECFDF5" />
        <path
          d="M32 16c8.5 10.6 6.5 24 1.5 32-2 3.2-3.5 4.8-3.5 4.8S29 50 28 46c-5-12 2-24 4-30z"
          fill="#15803D"
        />
        <path d="M31 22c-3 7-3 14.5 0 22" stroke="#4ADE80" strokeWidth="3" />
      </svg>
    ),
  },
  {
    label: "Docker",
    svg: (
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="Docker"
        className="h-12 w-12"
      >
        <rect width="64" height="64" rx="14" fill="#DBEAFE" />
        <path
          d="M18 36h28c4.4 0 6.4 3.6 6.4 6.6 0 4.7-3.6 7.4-9.2 7.4H28c-7 0-13-5.6-13-11.8V36z"
          fill="#2563EB"
        />
        <path
          d="M22 22h6v6h-6zM30 22h6v6h-6zM38 22h6v6h-6zM30 30h6v6h-6zM22 30h6v6h-6z"
          fill="#1E40AF"
        />
      </svg>
    ),
  },
  {
    label: "AWS",
    svg: (
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="AWS"
        className="h-12 w-12"
      >
        <rect width="64" height="64" rx="14" fill="#FFFBEB" />
        <path
          d="M18 34c2.2-4.8 6.3-7.2 12-7.2 4.7 0 8 1.7 10 4.8 1.8-2.5 4.6-4 7.9-4 5.1 0 9.1 3.1 10 8.5-2.6-2.3-5.4-3.4-8.1-3.4-2.5 0-4.8 1-6.6 3-2.1 2.3-4.8 3.6-8.3 3.6-4 0-7.1-1.8-9.3-4.9-1.7 2.7-4.6 4.3-8.1 4.3-3.6 0-6.5-1.6-9.5-4.7z"
          fill="#F97316"
        />
        <path
          d="M20 42c3.5 2.6 7.9 4 13 4 6.8 0 12.4-2.2 17.4-5.8" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
];

const marqueeIcons = [...techIcons, ...techIcons];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
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
            A curated toolkit I use to design, develop, and deliver modern web experiences.
          </p>
        </motion.div>

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
              {marqueeIcons.map((icon, index) => (
                <div
                  key={`${icon.label}-${index}`}
                  className="flex flex-col items-center justify-center gap-3"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_-20px_rgba(148,163,184,0.7)] dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-[0_12px_30px_-15px_rgba(15,23,42,0.75)]">
                    {icon.svg}
                  </div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    {icon.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes skills-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .group:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
