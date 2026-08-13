import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, ChevronLeft, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: "Lucy Sourcing",
      description:
        "Responsive industrial sourcing website for presenting product categories, sourcing services, blog content, and inquiry workflows.",
      tech: ["React", "Vite", "TypeScript", "Sanity"],
      liveDemo: "https://lucy-sourcing.vercel.app/",
      github: "https://github.com/samson-16/Lucy-sourcing",
      image: "/lucy-sourcing.png",
    },
     {
      title: "WikiTides",
      description:
        "WikiTides is an independent reference database dedicated to peptide research. It serves as a comprehensive hub for information on various peptide compounds and their applications.",
      tech: ["React", "Vite", "TypeScript", "Node.js", "Express", "PostgreSQL"],
      liveDemo: "https://www.wikitides.com/",
      github: "",
      image: "/wikidies.png",
    },
    {
      title: "Siempre21",
      description:
        "Siempre21 is a supplier of clinical-grade peptide solutions intended strictly for scientific research. Specialized e-commerce storefront that allows medical researchers, clinical scientists, and laboratory directors to browse, verify, and purchase clinical-grade peptide solutions at wholesale prices.",
      tech: ["React", "Vite", "TypeScript", "Node.js", "Express", "PostgreSQL"],
      liveDemo: "https://siempre21.com/",
      github: "",
      image: "/simpre.png",
    },
    {
      title: "BookBuddy AI",
      description:
        "FastAPI and Next.js reading workspace for PDF books with uploads, chapter summaries, and page-cited Q&A.",
      tech: ["Next.js", "FastAPI", "PDFPlumber", "Hugging Face"],
      liveDemo: "https://book-buddy-ai-five.vercel.app/",
      github: "https://github.com/samson-16/Book-Buddy-Ai",
      image: "/book-buddy-ai.png",
    },
    {
      title: "LawGen",
      description:
        "AI-powered legal document generation platform automating contract drafting and verification for Ethiopian law.",
      tech: ["Next.js", "OpenAI API", "Tailwind"],
      liveDemo: "https://lawgen-frontend-wine.vercel.app/",
      github: "#",
      image: "/legal.png",
    },
     {
      title: "A2SV Platform",
      description:
        "Centralized system digitizing application workflows for students, reviewers, and managers with role-based access.",
      tech: ["React", "TypeScript", "REST API"],
      liveDemo: "https://starter-project-git-main-ludis-projects.vercel.app/",
      github: "https://github.com/Ludis-ET/Starter-Project",
      image: "/application.png",
    },
    {
      title: "Chatter",
      description:
        "Real-time messaging ecosystem featuring end-to-end encryption and ultra-low latency communication.",
      tech: ["Node.js", "Socket.io", "MongoDB"],
      liveDemo: "https://chatter-tfxk.onrender.com/login",
      github: "#",
      image: "/chatter.png",
    },
    {
      title: "Maed (DineSplit)",
      description:
        "Cross-platform mobile app for bill splitting and restaurant discovery, built to simplify group dining with VAT, tips, and shared-item calculations.",
      tech: ["React Native Expo", "Express", "TypeScript"],
      liveDemo: "#",
      github: "https://github.com/samson-16/dine-split",
      image: "/maed.png",
    },
    {
      title: "Subscription Tracker",
      description:
        "Express-based REST API for managing user accounts and recurring subscriptions with JWT auth and centralized error handling.",
      tech: ["Node.js", "Express", "MongoDB"],
      liveDemo: "https://github.com/samson-16/Pennysubscription-backend",
      github: "https://github.com/samson-16/Pennysubscription-backend",
      image: "/subscribe.png",
    },
    {
      title: "Plant Disease AI",
      description:
        "Web-based ML system detecting plant diseases from leaf images using CNN and Random Forest classification.",
      tech: ["Python", "TensorFlow", "Streamlit"],
      liveDemo: "https://github.com/samson-16/plant_diseases_prediction",
      github: "https://github.com/samson-16/plant_diseases_prediction",
      image: "/plant.png",
    },
   
    {
      title: "Rental Management",
      description:
        "Web platform simplifying housing rentals in Ethiopia for tenants and landlords with agreement tracking.",
      tech: ["Node.js", "Express", "MongoDB"],
      liveDemo: "https://front-end-tenants.vercel.app/",
      github: "https://github.com/Kefita-Technology-PLC/ForntEnd_Tenure_Tenant",
      image: "/rental.png",
    },
  ];

  const firstProjects = projects.slice(0, 6);
  const remainingProjects = projects.slice(6);

  function handleViewMore() {
    setShowMore(true);
  }

  function handleBackToProjects() {
    setShowMore(false);
  }

  function renderCard(project: typeof projects[0], index: number) {
    return (
      <motion.div
        key={project.title}
        className="tech-surface group flex flex-col rounded-2xl overflow-hidden
          shadow-sm hover:shadow-2xl hover:shadow-blue-500/20
          hover:scale-[1.02] hover:border-blue-400/50 dark:hover:border-blue-500/40
          transition-all duration-300 h-full relative"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08, duration: 0.4 }}
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative h-48 overflow-hidden bg-slate-900 dark:bg-slate-950 shrink-0">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        </div>

        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
            {project.title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="
                  inline-flex items-center gap-1.5
                  px-2.5 py-1 rounded-md text-[10px] font-semibold
                  tracking-wide uppercase
                  bg-blue-50 dark:bg-blue-950/30
                  text-blue-700 dark:text-blue-300
                "
              >
                <span className="w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-400" />
                {tag}
              </span>
            ))}
          </div>

          <div className="h-px bg-slate-200 dark:bg-slate-700/60 mb-4 mt-auto" />

          <div className="flex gap-2">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group/btn flex-1 flex items-center justify-center gap-2
                px-4 py-2.5 rounded-lg text-sm font-semibold
                bg-blue-600 hover:bg-blue-700
                dark:bg-blue-600 dark:hover:bg-blue-700
                text-white shadow-sm
                transition-all duration-200 hover:scale-105
              "
            >
              <span>Live Demo</span>
              <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1 flex items-center justify-center gap-2
                px-4 py-2.5 rounded-lg text-sm font-semibold
                bg-transparent hover:bg-slate-100
                dark:bg-transparent dark:hover:bg-slate-800
                text-slate-700 dark:text-slate-300
                border border-slate-300 dark:border-slate-600
                transition-all duration-200 hover:scale-105
              "
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <section
      id="projects"
      className="tech-grid-section border-y border-slate-200 bg-background py-24 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (always visible) */}
        <div className="max-w-2xl mb-14">
          <div className="section-kicker">Projects</div>
          <h2 className="section-title">
            Selected <span className="section-title-accent">Works</span>
          </h2>
          <p className="section-copy">
            A curated showcase of engineering projects, ranging from AI
            applications to complex web architectures.
          </p>
        </div>

        {/* Sliding container for cards only */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: showMore ? "-100%" : "0%" }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Page 1: First 6 projects */}
            <div className="w-full shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-10 lg:gap-x-12 max-w-6xl mx-auto">
                {firstProjects.map((project, index) => renderCard(project, index))}
              </div>
            </div>

            {/* Page 2: Remaining projects */}
            <div className="w-full shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-10 lg:gap-x-12 max-w-6xl mx-auto">
                {remainingProjects.map((project, index) => renderCard(project, index))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation buttons (fixed position, not sliding) */}
        <div className="flex justify-center mt-12">
          {!showMore ? (
            <button
              onClick={handleViewMore}
              className="
                flex items-center gap-2 px-6 py-3 rounded-lg
                text-sm font-semibold
                bg-slate-100 hover:bg-slate-200
                dark:bg-slate-800 dark:hover:bg-slate-700
                text-slate-700 dark:text-slate-300
                border border-slate-300 dark:border-slate-600
                transition-all duration-200 hover:scale-105
              "
            >
              <span>View More Projects</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={handleBackToProjects}
              className="
                flex items-center gap-2 px-6 py-3 rounded-lg
                text-sm font-semibold
                bg-slate-100 hover:bg-slate-200
                dark:bg-slate-800 dark:hover:bg-slate-700
                text-slate-700 dark:text-slate-300
                border border-slate-300 dark:border-slate-600
                transition-all duration-200 hover:scale-105
              "
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
