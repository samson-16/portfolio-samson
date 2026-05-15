import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Upwork",
      role: "Freelance Full-Stack Developer",
      period: "Nov 2026 — Present",
      current: true,
      achievements: [
        "Developed responsive web applications using React, Tailwind CSS, and Next.js.",
        "Built reusable UI components and scalable frontend architectures.",
        "Integrated REST APIs and authentication systems.",
        "Improved application performance and mobile responsiveness.",
        "Collaborated with clients from requirement gathering to deployment.",
      ],
    },
    {
      company: "Eskalate LLC",
      role: "Software Engineering Intern",
      period: "Jul 2025 – Sep 2025",
      current: false,
      achievements: [
        "Delivered two production-ready web applications with responsive design.",
        "Focused on API integration, secure input handling, and scalable architecture.",
        "Collaborated on reusable components and engineering workflows for maintainable front-end systems.",
      ],
    },
    {
      company: "Kefita Technology PLC",
      role: "Web Development Intern",
      period: "Jun 2024 – Sep 2024",
      current: false,
      achievements: [
        "Built accessible UI components with React and TypeScript.",
        "Collaborated on 10+ reusable components and 20+ REST APIs for scalable UIs.",
        "Worked across frontend and backend tasks to improve delivery speed and code quality.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Heading ── */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-slate-900 dark:text-white">
              Professional{" "}
            </span>
            <span className="text-blue-600 dark:text-blue-400">Timeline</span>
          </h2>
        </motion.div>

        {/* ── Timeline — no max-width so cards go end to end ── */}
        <div className="relative">
          {/* Vertical line — centered inside the 24-px dot column (left-3 = 12 px) */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 md:gap-8"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.18, duration: 0.55 }}
              >
                {/* ── Dot column (w-6 = 24 px; dot centred → sits on line) ── */}
                <div className="hidden md:flex w-6 shrink-0 justify-center pt-8">
                  <div
                    className={`w-3.5 h-3.5 rounded-full ring-[3px] shrink-0 transition-colors duration-300 ${
                      exp.current
                        ? "bg-blue-600 dark:bg-blue-400 ring-slate-50 dark:ring-slate-900"
                        : "bg-slate-400 dark:bg-slate-500 ring-slate-50 dark:ring-slate-900"
                    }`}
                  />
                </div>

                {/* ── Card — flex-1 so it fills all remaining width ── */}
                <div className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800/60 transition-all duration-300 p-7 md:p-8">
                  {/* Top row: company name (left) | period (right) */}
                  <div className="flex items-center justify-between gap-4 mb-3">
                    {/* Left: company name only */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                      {exp.company}
                    </h3>

                    {/* Right: period */}
                    <span className="text-xs font-medium tracking-widest uppercase text-slate-500 dark:text-slate-400 shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  {/* Role + badge row */}
                  <div className="flex items-center gap-3 mb-5">
                    <p
                      className={`text-[0.95rem] font-semibold ${
                        exp.current
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {exp.role}
                    </p>
                    {exp.current && (
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-600 dark:bg-blue-500 text-white shadow-sm">
                        Current Role
                      </span>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-slate-100 dark:bg-slate-700/60 mb-5" />

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight className="h-4 w-4 mt-0.5 shrink-0 text-blue-500 dark:text-blue-400 opacity-80" />
                        <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
