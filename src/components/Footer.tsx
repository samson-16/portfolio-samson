import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },

  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-center text-lg font-semibold mb-4 text-slate-300">
              Quick Links
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/samson-16"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 dark:bg-slate-900 hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/samson-demessie/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 dark:bg-slate-900 hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:samsondemessie@gmail.com"
              className="p-3 rounded-full bg-slate-800 dark:bg-slate-900 hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-slate-400">
              © {currentYear} Samson Demessie Ayalew. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
