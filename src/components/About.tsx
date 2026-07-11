import { motion } from "motion/react";
import {
  Monitor,
  Code2,
  MapPin,
  CheckCircle2,
  Target,
  Zap,
} from "lucide-react";

export function About() {
  const stats = [
    {
      icon: Monitor,
      value: "2+ Years",
      label: "Engineering Experience",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Code2,
      value: "600+ Solved",
      label: "DSA Problems",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: MapPin,
      value: "Addis Ababa",
      label: "Primary Location",
      iconColor: "text-red-500 dark:text-red-400",
    },
  ];

  const values = [
    {
      icon: CheckCircle2,
      title: "Clean Code Architecture",
      description:
        "Prioritizing maintainability and readability across every project.",
    },
    {
      icon: Target,
      title: "Strategic Problem Solver",
      description:
        "Approaching complex challenges with a structured, data-driven mindset.",
    },
    {
      icon: Zap,
      title: "Constant Innovation",
      description:
        "Always exploring emerging technologies to stay at the digital frontier.",
    },
  ];

  return (
    <section id="about" className="tech-grid-section bg-white py-24 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top Stats Row ── */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="
                tech-surface flex flex-1 items-center gap-4 px-6 py-5 rounded-2xl
                shadow-sm hover:shadow-md
                hover:border-blue-200 dark:hover:border-blue-800/60
                backdrop-blur-sm transition-all duration-300
              "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              {/* Icon box */}
              <div
                className="
                p-3 rounded-xl shrink-0
                bg-blue-50 dark:bg-slate-700
                border border-blue-100 dark:border-slate-600/50
              "
              >
                <stat.icon
                  className={`h-5 w-5 ${stat.iconColor}`}
                  strokeWidth={2.5}
                />
              </div>

              {/* Text */}
              <div>
                <p className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                  {stat.value}
                </p>
                <p className="text-xs font-medium tracking-widest uppercase text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Mission + Code Editor ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left – Mission & Core Values */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-kicker">Profile</div>
            <h2 className="section-title mb-6">
              About <span className="section-title-accent">Me</span>
            </h2>

            {/* Paragraph */}
            <p className="mb-10 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
             I’m a full-stack and mobile developer based in Addis Ababa, focused on building practical web, mobile, and AI-powered products.

I work with React, Next.js, TypeScript, NestJS, Node.js, Prisma, PostgreSQL, Mongodb, Supabase, FastAPI, and React Native. I enjoy turning ideas into clean, usable products, from backend APIs and dashboards to mobile apps and intelligent tools.

My work combines strong problem-solving, clean code, and product thinking to build systems that are reliable, scalable, and easy to maintain..
            </p>

            {/* Feature Items */}
            <div className="space-y-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + 0.15 * index, duration: 0.5 }}
                >
                  {/* Icon */}
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/40 shrink-0 mt-0.5">
                    <value.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Content */}
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {value.title}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right – Code Editor Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="tech-surface rounded-2xl overflow-hidden shadow-2xl">
              {/* Title bar */}
              <div
                className="
                flex items-center gap-2 px-4 py-3
                bg-slate-100 dark:bg-slate-800
                border-b border-slate-200 dark:border-slate-700/60
              "
              >
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs font-mono text-slate-500 dark:text-slate-400 select-none tracking-wide">
                  about_me.ts
                </span>
              </div>

              {/* Code body */}
              <div className="bg-slate-50 dark:bg-slate-950 px-6 py-6 font-mono text-sm leading-7 overflow-x-auto">
                {/* const engineer = { */}
                <p>
                  <span className="text-blue-600 dark:text-blue-400">
                    const
                  </span>
                  <span className="text-slate-800 dark:text-slate-100">
                    {" "}
                    engineer{" "}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {"= {"}
                  </span>
                </p>

                {/* name: "Architect", */}
                <p className="pl-6">
                  <span className="text-blue-700 dark:text-blue-300">name</span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {": "}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">"</span>
                  <span className="text-blue-600 dark:text-blue-400">
                    Samson Demessie
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">"</span>
                  <span className="text-slate-600 dark:text-slate-300">,</span>
                </p>

                {/* focus: ["Scalability", "Security", "UX"], */}
                <p className="pl-6">
                  <span className="text-blue-700 dark:text-blue-300">
                    focus
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {": ["}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">"</span>
                  <span className="text-blue-600 dark:text-blue-400">
                    Full-Stack Development
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">"</span>
                  <span className="text-slate-600 dark:text-slate-300">, </span>
                  <span className="text-slate-500 dark:text-slate-400">"</span>
                  <span className="text-blue-600 dark:text-blue-400">
                    AI/ML Integration
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">"</span>
                  <span className="text-slate-600 dark:text-slate-300">, </span>
                  <span className="text-slate-500 dark:text-slate-400">"</span>
                  <span className="text-blue-600 dark:text-blue-400">Mobile Apps</span>
                  <span className="text-slate-500 dark:text-slate-400">"</span>
                  <span className="text-slate-600 dark:text-slate-300">],</span>
                </p>

                {/* mindset: () => { */}
                <p className="pl-6">
                  <span className="text-blue-700 dark:text-blue-300">
                    mindset
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {": () => {"}
                  </span>
                </p>

                {/* // Continuous learning loop */}
                <p className="pl-10">
                  <span className="text-slate-400 dark:text-slate-500">
                    {"// Continuous learning loop"}
                  </span>
                </p>

                {/* while (problemsExist) { */}
                <p className="pl-10">
                  <span className="text-blue-600 dark:text-blue-400">
                    while{" "}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">(</span>
                  <span className="text-slate-700 dark:text-slate-200">
                    problemsExist
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {")"} {"{"}
                  </span>
                </p>

                {/* analyze(); */}
                <p className="pl-16">
                  <span className="text-blue-700 dark:text-blue-300">
                    analyze
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    ();
                  </span>
                </p>

                {/* solve(); */}
                <p className="pl-16">
                  <span className="text-blue-700 dark:text-blue-300">
                    solve
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    ();
                  </span>
                </p>

                {/* innovate(); */}
                <p className="pl-16">
                  <span className="text-blue-700 dark:text-blue-300">
                    innovate
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    ();
                  </span>
                </p>

                {/* closing } while */}
                <p className="pl-10">
                  <span className="text-slate-600 dark:text-slate-300">
                    {"}"}
                  </span>
                </p>

                {/* closing } mindset */}
                <p className="pl-6">
                  <span className="text-slate-600 dark:text-slate-300">
                    {"}"}
                  </span>
                </p>

                {/* closing }; */}
                <p>
                  <span className="text-slate-600 dark:text-slate-300">
                    {"}"}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">;</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
