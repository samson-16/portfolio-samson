import { motion } from "motion/react";
import {
  CheckCircle2,
  Target,
  Zap,
  Code2,
  Smartphone,
  Brain,
  Server,
  Palette,
} from "lucide-react";

export function About() {
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

  const services = [
    {
      icon: Code2,
      title: "Full-Stack Web Development",
      description:
        "Building responsive, scalable web applications with React, Next.js, Node.js, and modern databases.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile apps using React Native with native performance and smooth UX.",
    },
    {
      icon: Brain,
      title: "AI/ML Integration",
      description:
        "Integrating intelligent features using OpenAI APIs, ML models, and data-driven solutions.",
    },
    {
      icon: Server,
      title: "API Development",
      description:
        "Designing and building secure REST APIs with authentication, error handling, and clean architecture.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Crafting modern, responsive interfaces with clean design systems and smooth animations.",
    },
  ];

  return (
    <section id="about" className="tech-grid-section border-y border-slate-200 bg-white py-24 dark:border-slate-800 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* ── Services Section ── */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-kicker">Services</div>
            <h2 className="section-title">
              What I <span className="section-title-accent">Offer</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="tech-surface group rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02] transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/40 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
