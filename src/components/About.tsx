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
  MapPin,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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
    <section id="about" className="tech-grid-section border-y border-slate-200 bg-background py-24 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── About + Photo ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24 items-center">
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
            <div className="mb-10 space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
              <p>
                Hey, I’m Samson, a software engineer focused on turning business
                ideas and real-world problems into reliable digital products.
              </p>
              <p>
                I build modern web applications, mobile apps, backend systems,
                APIs, and AI-powered solutions that help businesses improve how
                they operate, serve their customers, and grow. I work mainly with{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, and
                  React Native
                </span>
                , choosing the right tools based on the needs of each project.
              </p>
              <p>
                I care about more than just making software work. I focus on
                understanding the problem behind the project, creating a clean and
                intuitive user experience, and building systems that are reliable,
                maintainable, and ready to grow with the business.
              </p>
              <p>
                Whether you have an idea you want to bring to life, an existing
                system that needs improvement, or a business process that could be
                made more efficient with technology, I enjoy turning those
                challenges into practical solutions.
              </p>
            </div>

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

          {/* Right – About Me Portrait */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="group relative w-full max-w-sm md:max-w-none">
              {/* Ambient glow */}
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-br from-blue-500/25 via-cyan-400/15 to-transparent blur-3xl" />

              {/* Offset blueprint frame */}
              <div className="pointer-events-none absolute inset-0 translate-x-4 translate-y-4 rounded-[1.75rem] border border-blue-400/40 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 dark:border-blue-500/35 sm:translate-x-5 sm:translate-y-5" />

              {/* Dotted accent */}
              <div
                className="pointer-events-none absolute -left-6 -top-6 -z-10 hidden h-24 w-24 rounded-full opacity-70 md:block"
                style={{
                  backgroundImage:
                    "radial-gradient(currentColor 1px, transparent 1px)",
                  backgroundSize: "10px 10px",
                  color: "rgb(59 130 246 / 0.45)",
                }}
              />

              {/* Portrait frame */}
              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-linear-to-br from-white/90 to-slate-50/70 p-2 shadow-[0_30px_70px_-40px_rgb(15_23_42/0.55)] backdrop-blur-sm dark:border-slate-700/70 dark:from-slate-800/70 dark:to-slate-900/60">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] md:aspect-[4/4.6]">
                  <ImageWithFallback
                    src="/aboutme.jpg"
                    alt="Samson Demessie Ayalew"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Bottom scrim */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-slate-950/75 via-slate-950/25 to-transparent" />

                  {/* Caption chip */}
                  <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 font-mono text-[11px] font-medium tracking-wide text-white backdrop-blur-md">
                      <MapPin className="h-3.5 w-3.5 text-cyan-300" />
                      Addis Ababa, Ethiopia
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 font-mono text-[11px] font-medium tracking-wide text-white backdrop-blur-md">
                      <Sparkles className="h-3.5 w-3.5 text-blue-300" />
                      Software Engineer
                    </span>
                  </div>
                </div>
              </div>

              {/* Corner brackets */}
              <span className="pointer-events-none absolute -left-2 -top-2 h-7 w-7 rounded-tl-lg border-l-2 border-t-2 border-blue-500/70 dark:border-blue-400/70" />
              <span className="pointer-events-none absolute -right-2 -top-2 h-7 w-7 rounded-tr-lg border-r-2 border-t-2 border-cyan-400/70" />
              <span className="pointer-events-none absolute -bottom-2 -left-2 h-7 w-7 rounded-bl-lg border-b-2 border-l-2 border-cyan-400/70" />
              <span className="pointer-events-none absolute -bottom-2 -right-2 h-7 w-7 rounded-br-lg border-b-2 border-r-2 border-blue-500/70 dark:border-blue-400/70" />
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
