import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Projects() {
  const projects = [
    {
      title: "LawGen – AI Legal Assistance Tool",
      description:
        "AI platform simplifying Ethiopian laws with chat and document explainer. Integrated GenAI APIs and built scraping pipelines. Designed accessible UI for low-literacy users.",
      tech: ["React", "TypeScript", "GenAI APIs", "Python", "Tailwind CSS"],
      liveDemo: "#",
      github: "#",
      emoji: "⚖️",
    },
    {
      title: "Chatter – Social Networking App",
      description:
        "Scalable platform with Node.js, Express, and MongoDB. Real-time feeds, JWT authentication, and efficient state management.",
      tech: ["Node.js", "Express", "MongoDB", "React", "JWT"],
      liveDemo: "#",
      github: "#",
      emoji: "💬",
    },
    {
      title: "Lucy Sourcing Website",
      description:
        "Full website for Lucy Sourcing, a China-based sourcing and verification agency. Transformed extensive documentation into a modern, trustworthy online presence with responsive design and smooth UX.",
      tech: ["React", "Tailwind CSS", "Responsive Design"],
      liveDemo: "#",
      github: "#",
      emoji: "🏭",
    },
    {
      title: "Subscription Tracker API",
      description:
        "Express-based REST API for managing user accounts and recurring subscriptions. Features JWT authentication, password hashing, MongoDB with Mongoose, subscription validation, and centralized error handling.",
      tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
      liveDemo: "#",
      github: "https://github.com/samson-16/Pennysubscription-backend",
      emoji: "💰",
    },
    {
      title: "Plant Disease Recognition System",
      description:
        "Web-based ML system detecting plant diseases from leaf images. Features CNN for feature extraction, Random Forest for classification, top-3 predictions, multilingual interface (English & Amharic), and downloadable CSV results.",
      tech: [
        "Python",
        "TensorFlow",
        "scikit-learn",
        "Streamlit",
        "CNN",
        "Random Forest",
      ],
      liveDemo: "#",
      github: "https://github.com/samson-16/plant_diseases_prediction",
      emoji: "🌿",
    },
    {
      title: "A2SV Application Platform",
      description:
        "Centralized system digitizing application workflows for students, reviewers, and managers at Eskalate LLC. Reduced manual review effort by 40% through API integrations and role-based access.",
      tech: ["React", "TypeScript", "API Integration", "State Management"],
      liveDemo: "#",
      github: "https://github.com/Ludis-ET/Starter-Project",
      emoji: "📋",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-12">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="p-6 h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-slate-200 dark:border-slate-700 dark:bg-slate-800">
                  <div className="mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-6xl">{project.emoji}</div>
                    </div>
                    <h3 className="mb-3 dark:text-white">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
                        asChild
                      >
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
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
