import { motion } from "motion/react";
import { Code2, GraduationCap, Trophy, Users } from "lucide-react";

const leadershipHighlights = [
  {
    title: "Technical Leadership",
    description:
      "Served as Technical Lead for GDG On Campus AASTU and the AASTU Software Engineers Association.",
    icon: Users,
  },
  {
    title: "Programming Initiatives",
    description:
      "Mentored 90+ students, helping them write their first lines of code and launch early applications.",
    icon: Code2,
  },
  {
    title: "Hackathon Execution",
    description:
      "Directed technical execution for community hackathons, from competition structure to team architecture guidance.",
    icon: Trophy,
  },
  {
    title: "Peer Development",
    description:
      "Organized targeted study groups and supported final project evaluations to help peers turn ideas into working software.",
    icon: GraduationCap,
  },
];

export function Leadership() {
  return (
    <section
      id="leadership"
      className="tech-grid-section bg-white py-24 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker">Community</div>
          <h2 className="section-title">
            Community <span className="section-title-accent">Leadership</span>
          </h2>
          <p className="section-copy">
            During my time at university, I served as the Technical Lead for
            both GDG On Campus AASTU and the AASTU Software Engineers
            Association. I am passionate about making tech accessible, running
            study groups, co-hosting campus-wide hackathons, and collaborating
            with peers to turn ideas into working software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {leadershipHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className="tech-surface group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10 dark:hover:border-blue-800/70 md:p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25 transition-transform duration-300 group-hover:scale-105 dark:bg-blue-500">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
