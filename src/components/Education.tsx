import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  const education = [
    {
      icon: GraduationCap,
      title: "Addis Ababa Science & Technology University",
      institution: "B.Sc. in Software Engineering",
      description:
        "Focus on Advanced Algorithms, System Architecture, and Machine Learning Fundamentals.",
    },
    {
      icon: Award,
      title: "Africa to Silicon Valley (A2SV)",
      institution: "Competitive Programming Program",
      description:
        "Intensive training in Data Structures, Algorithms, and solving real-world scalable challenges.",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
            <span className="text-slate-900 dark:text-white">Education & </span>
            <span className="text-blue-600 dark:text-blue-400">Recognition</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <article className="h-full rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/80 shadow-sm hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800/60 transition-all duration-300 p-6 md:p-7">
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-700/70 border border-slate-200 dark:border-slate-600/50 shrink-0">
                      <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        {item.institution}
                      </p>
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
