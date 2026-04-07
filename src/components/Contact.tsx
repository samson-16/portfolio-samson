import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          "Thank you for your message! I'll get back to you soon. 👋",
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("API Error:", data);
        toast.error(data.error || "Failed to send message. Please try again.");

        if (data.details) {
          console.error("Error details:", data.details);
        }
      }
    } catch (error) {
      console.error("Network Error:", error);
      const isDev =
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";
      if (isDev) {
        toast.info(
          "📧 Email API only works when deployed to Vercel. For now, please email me directly at samsondemessie@gmail.com",
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "samsondemessie@gmail.com",
      href: "mailto:samsondemessie@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn /in/samson-demessie",
      href: "https://www.linkedin.com/in/samson-demessie/",
    },
    {
      icon: Github,
      label: "GitHub /samson-16",
      href: "https://github.com/samson-16",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950" />
      <div className="pointer-events-none absolute inset-y-0 left-4 w-px bg-blue-600/35 dark:bg-blue-600/60 hidden md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-4 w-px bg-blue-600/35 dark:bg-blue-600/60 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">

            {/* ── Left: Headline + Contact Links ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-10 md:pt-2"
            >
              {/* Heading */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
                  <span className="text-slate-900 dark:text-white">Let's </span>
                  <span className="text-blue-600 dark:text-blue-400">Connect</span>
                  <span className="text-slate-900 dark:text-white">.</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-md">
                  Ready to collaborate on high-impact projects or discuss
                  technical architectures? Drop a line.
                </p>
              </div>

              {/* Contact Info Links */}
              <div className="flex flex-col gap-5">
                {contactLinks.map(({ icon: Icon, label, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i + 0.3, duration: 0.5 }}
                    className="flex items-center gap-4 group w-fit"
                  >
                    <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:border-blue-500 dark:group-hover:border-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-slate-800/80 transition-all duration-200 shrink-0">
                      <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-semibold text-xl transition-colors duration-200">
                      {label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* ── Right: Contact Form Card ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="rounded-3xl border border-slate-200 dark:border-slate-700/80 bg-white/90 dark:bg-slate-800/70 shadow-xl dark:shadow-2xl shadow-slate-300/35 dark:shadow-slate-950/50 p-6 md:p-8 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Samson Demessie"
                        required
                        className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 py-3 text-sm outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="samsondemesie@gmail.com"
                        required
                        className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 py-3 text-sm outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="subject"
                      className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 py-3 text-sm outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                      rows={5}
                      className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 py-3 text-sm outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 resize-none transition-all duration-200"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold bg-blue-600 hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 text-white dark:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-blue-600/25 dark:hover:shadow-blue-900/30"
                  >
                    {isSubmitting ? "Sending…" : "Send Message"}
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
