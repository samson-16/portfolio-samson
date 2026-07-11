import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const CARDS_PER_PAGE = 3;

export function Projects() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);

  const projects = [
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
    // {
    //   title: "Lucy Sourcing",
    //   description:
    //     "Strategic sourcing platform designed to streamline vendor management and procurement workflows.",
    //   tech: ["React", "Prisma", "PostgreSQL"],
    //   liveDemo:
    //     "https://www.figma.com/make/lYx76oehDxQr25hmmF7LRo/FabriNet-Website-Design?node-id=0-1&p=f&t=vJbiOMJhXfQKwedS-0&fullscreen=1",
    //   github: "https://github.com/samson-16/Fabrinetwebsitedesign",
    //   image: "/Lucy.png",
    // },
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
      title: "A2SV Platform",
      description:
        "Centralized system digitizing application workflows for students, reviewers, and managers with role-based access.",
      tech: ["React", "TypeScript", "REST API"],
      liveDemo: "https://starter-project-git-main-ludis-projects.vercel.app/",
      github: "https://github.com/Ludis-ET/Starter-Project",
      image: "/application.png",
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

  const totalPages = Math.ceil(projects.length / CARDS_PER_PAGE);
  const visible = projects.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE,
  );

  function goNext() {
    if (page < totalPages - 1) {
      setDir(1);
      setPage((p) => p + 1);
    }
  }

  function goPrev() {
    if (page > 0) {
      setDir(-1);
      setPage((p) => p - 1);
    }
  }

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, x: d * 80 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -80 }),
  };

  return (
    <section id="projects" className="tech-grid-section bg-white py-24 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header row ── */}
        <div className="flex items-start justify-between gap-6 mb-14">
          {/* Left: title + subtitle */}
          <div className="max-w-2xl">
            <div className="section-kicker">Projects</div>
            <h2 className="section-title">
              Selected <span className="section-title-accent">Works</span>
            </h2>
            <p className="section-copy">
              A curated showcase of engineering projects, ranging from AI
              applications to complex web architectures.
            </p>
          </div>

          {/* Right: nav arrows */}
          <div className="flex items-center gap-3 shrink-0 mt-2">
            <button
              onClick={goPrev}
              disabled={page === 0}
              aria-label="Previous projects"
              className="
                w-11 h-11 rounded-xl flex items-center justify-center
                bg-slate-100 dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                text-slate-600 dark:text-slate-300
                hover:bg-slate-200 dark:hover:bg-slate-700
                disabled:opacity-30 disabled:cursor-not-allowed
                transition-all duration-200
              "
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goNext}
              disabled={page >= totalPages - 1}
              aria-label="Next projects"
              className="
                w-11 h-11 rounded-xl flex items-center justify-center
                bg-blue-600 dark:bg-blue-500
                text-white
                hover:bg-blue-700 dark:hover:bg-blue-600
                disabled:opacity-30 disabled:cursor-not-allowed
                shadow-lg shadow-blue-600/25
                transition-all duration-200
              "
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ── Paginated card grid ── */}
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={page}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-10 lg:gap-x-12 max-w-6xl mx-auto"
          >
            {visible.map((project, index) => (
              <motion.div
                key={project.title}
                className="tech-surface group flex flex-col rounded-2xl overflow-hidden
                  shadow-sm hover:shadow-xl hover:shadow-blue-900/10
                  hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-800/60
                  transition-all duration-300 h-full"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-slate-900 dark:bg-slate-950 shrink-0">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* subtle bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-slate-900/60 to-transparent" />
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description — max 2 lines */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="
                          px-3 py-1 rounded-full text-[10px] font-semibold
                          tracking-widest uppercase
                          bg-slate-200 dark:bg-slate-900
                          text-slate-600 dark:text-slate-300
                          border border-slate-300 dark:border-slate-700
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-slate-200 dark:bg-slate-700/60 mb-4 mt-auto" />

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1 flex items-center justify-center gap-2
                        px-4 py-2.5 rounded-xl text-sm font-semibold
                        bg-blue-600 hover:bg-blue-700
                        dark:bg-blue-600 dark:hover:bg-blue-700
                        text-white shadow-sm
                        transition-all duration-200
                      "
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1 flex items-center justify-center gap-2
                        px-4 py-2.5 rounded-xl text-sm font-semibold
                        bg-slate-100 hover:bg-slate-200
                        dark:bg-slate-700/80 dark:hover:bg-slate-700
                        text-slate-800 dark:text-white
                        border border-slate-300 dark:border-slate-600
                        transition-all duration-200
                      "
                    >
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Page indicator dots ── */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDir(i > page ? 1 : -1);
                setPage(i);
              }}
              aria-label={`Go to page ${i + 1}`}
              className={`
                h-2 rounded-full transition-all duration-300
                ${
                  i === page
                    ? "w-6 bg-blue-600 dark:bg-blue-400"
                    : "w-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
