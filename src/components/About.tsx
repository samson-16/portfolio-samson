import { motion } from 'motion/react';
import { GraduationCap, Brain, Users, MapPin, Code2, Coffee, Sparkles } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
  const snapshots = [
    {
      icon: GraduationCap,
      text: 'BSc in Software Engineering – AASTU',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      text: '500+ DSA problems solved on Codeforces & LeetCode',
      color: 'from-purple-500 to-pink-500',
    },
   
    {
      icon: MapPin,
      text: 'Based in Addis Ababa, Ethiopia',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const highlights = [
    { icon: Code2, label: 'Clean Code', value: 'Always' },
    { icon: Coffee, label: 'Problem Solver', value: '24/7' },
    { icon: Sparkles, label: 'Innovation', value: 'Driven' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="text-blue-600 dark:text-blue-400 mb-2 block">Get to know me</span>
              <h2 className="mb-6">About Me</h2>
            </motion.div>

            <motion.p
              className="text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I write code to solve real problems not just to ship features. 
              I enjoy building things that feel simple on the outside but are powered by solid
              engineering under the hood.
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left Column - Story */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 h-full border-l-4 border-blue-600 dark:border-blue-400 hover:shadow-xl transition-shadow dark:bg-slate-800">
                <h3 className="mb-4 text-blue-700 dark:text-white">My Journey</h3>
                <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  <p>
                    Over the past few years, I've worked on everything from AI-powered legal tools for Ethiopia to
                    full-stack platforms that automate contracts and social apps with real-time features.
                  </p>
                  <p>
                    I care a lot about <span className="text-blue-600 dark:text-blue-400">accessibility</span>, 
                    <span className="text-blue-600 dark:text-blue-400"> performance</span>, and designing for people who usually get left out of tech.
                  </p>
                  <p>
                    When I'm not coding, I'm probably solving algorithmic challenges, exploring new frameworks,
                    or thinking about how technology can drive positive change in underserved communities.
                  </p>
                  <p>
                    Let's collaborate to bring your vision to life. From concept to deployment, 
                    I deliver high-quality software solutions that exceed expectations and drive real business results.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Right Column - Quick Stats */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-slate-800 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-600 dark:bg-blue-500 rounded-lg">
                          <highlight.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{highlight.label}</p>
                          <p className="text-slate-900 dark:text-white">{highlight.value}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Snapshot Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-center mb-8 text-slate-900 dark:text-white">Quick Snapshot</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {snapshots.map((snapshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-blue-600 dark:hover:border-blue-400 group dark:bg-slate-800">
                    <div className="flex flex-col items-center text-center">
                      <div className={`p-4 rounded-full bg-gradient-to-br ${snapshot.color} mb-4 group-hover:scale-110 transition-transform`}>
                        <snapshot.icon className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-snug">{snapshot.text}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
