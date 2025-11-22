import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/card';

export function Experience() {
  const experiences = [
    {
      company: 'Eskalate LLC',
      role: 'Software Engineering Intern',
      period: 'Jun–Sep 2025',
      achievements: [
        'Delivered two production-ready web applications with responsive design.',
        'Focused on API integration, secure input handling, and scalable architecture.',
      ],
    },
    {
      company: 'Kefita Technology PLC',
      role: 'Web Development Intern',
      period: 'Jun–Sep 2024',
      achievements: [
        'Built accessible UI components with React and TypeScript.',
        'Collaborated on 10+ reusable components and 20+ REST APIs for scalable UIs.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center dark:text-white text-primary font-bold text-4xl mb-12">Experience</h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-slate-900 shadow-md hidden md:block"></div>

                  <Card className="md:ml-20 p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600 dark:border-blue-400 dark:bg-slate-800">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-slate-900 dark:text-white mb-1">{exp.company}</h3>
                        <p className="text-blue-600 dark:text-blue-400 flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          {exp.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mt-2 md:mt-0">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                          <span className="text-blue-600 dark:text-blue-400 mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
