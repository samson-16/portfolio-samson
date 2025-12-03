import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-18">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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

          {/* Copyright & Tech Stack */}
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
