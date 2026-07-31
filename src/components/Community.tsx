import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

const communityRoles = [
  {
    role: "Technical Lead",
    organization: "GDG On Campus AASTU & AASTU Software Engineers Association",
    timeline: "Nov 2024 – Apr 2026",
    description:
      "Directed technical programming initiatives and defined the architectural curriculum for a community of over 90 emerging developers. Spearheaded the technical execution of campus-wide hackathons—from providing initial system design guidance to facilitating final project evaluations—while organizing targeted study groups to bridge the gap between theoretical computer science and practical, full-stack software engineering.",
  },
];

export function Community() {
  return (
    <section
      id="community"
      className="tech-grid-section border-y border-slate-200 bg-white py-24 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="section-heading mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker">Community</div>
          <h2 className="section-title">
            Community & <span className="section-title-accent">Leadership</span>
          </h2>
          <p className="section-copy">
            Dedicated to driving technical excellence and enabling the next
            generation of developers.
          </p>
        </motion.div>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-100 to-transparent dark:from-blue-900 dark:via-slate-800 md:left-8" />

          {communityRoles.map((item, index) => (
            <motion.article
              key={item.role}
              className="tech-surface relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg dark:hover:border-blue-800/70"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-6 top-8 flex items-center justify-center md:-left-8">
                <div className="relative flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 ring-4 ring-white dark:bg-blue-500 dark:ring-slate-950 md:h-5 md:w-5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-20" />
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-5">
                <div className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md dark:bg-blue-500">
                  <Briefcase className="h-5 w-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-blue-600 dark:text-blue-400 md:text-base">
                    {item.organization} <span className="text-slate-400 dark:text-slate-500 mx-2">•</span> {item.timeline}
                  </p>
                  <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
