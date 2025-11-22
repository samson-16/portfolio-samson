import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';
import { Card } from './ui/card';

export function Education() {
  const education = [
    {
      icon: GraduationCap,
      title: 'BSc in Software Engineering',
      institution: 'Addis Ababa Science and Technology University',
      description: 'Relevant Courses: DSA, Operating Systems, ML, Networking, Embedded Systems',
    },
    {
      icon: Award,
      title: 'A2SV (Africa to Silicon Valley)',
      institution: 'Google-backed Program',
      description: 'Completed 30+ hours/week advanced DSA training and solved 500+ competitive programming problems.',
    },
  ];

  return (
    <section id="education" className="py-28 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-12 text-primary font-bold text-4xl dark:text-white">Education & Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600 dark:border-blue-400 dark:bg-slate-800">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg shrink-0">
                      <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 dark:text-white">{item.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 mb-3">{item.institution}</p>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
