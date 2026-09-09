import { motion } from "motion/react";
import {
  Check,
  CheckCircle2,
  Copy,
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const fieldClassName =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/15 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-blue-400 dark:focus:bg-surface-2";

const labelClassName =
  "text-xs font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-300";

export function Contact() {
  const [copied, setCopied] = useState(false);
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          "Thank you for your message! I'll get back to you soon.",
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
          "Email delivery is available on the deployed site. For now, please email me directly at samsondemessie@gmail.com.",
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
      label: "Email",
      value: "samsondemessie@gmail.com",
      href: "mailto:samsondemessie@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/samson-demessie",
      href: "https://www.linkedin.com/in/samson-demessie/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/samson-16",
      href: "https://github.com/samson-16",
    },
    {
      icon: Send,
      label: "Telegram",
      value: "@Sami_Ed",
      href: "https://t.me/Sami_Ed",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+251 975 660 501",
      href: "tel:+251975660501",
    },
  ];

  return (
    <section
      id="contact"
      className="section-band tech-grid-section relative overflow-hidden border-y border-slate-200 py-24 dark:border-slate-800"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:gap-14">
            <div className="flex flex-col gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-xl"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 dark:border-blue-800/60 dark:bg-blue-900/30 dark:text-blue-300">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Available for new projects
                </div>
                <h2 className="section-title mb-4">
                  Let&apos;s build something{" "}
                  <span className="section-title-accent">
                    meaningful.
                  </span>
                </h2>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
                  Have a project, an opportunity, or an idea worth exploring?
                  Send me a note and I&apos;ll get back to you as soon as I can.
                </p>
              </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="tech-surface mt-10 w-full rounded-2xl p-5 sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Find me online
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {contactLinks.map(({ icon: Icon, label, value, href }, index) => (
                  <motion.li
                    key={label}
                    className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors duration-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/50"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * index + 0.15, duration: 0.4 }}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                    </span>

                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="min-w-0 flex-1 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                    >
                      <span className="block text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        {label}
                      </span>
                      <span className="block truncate text-sm font-medium text-slate-800 group-hover:text-blue-600 dark:text-slate-200">
                        {value}
                      </span>
                    </a>

                    {label === "Email" && (
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(value);
                          setCopied(true);
                          toast.success("Email copied to clipboard");
                          setTimeout(() => setCopied(false), 2000);
                        }}
                        aria-label="Copy email address"
                        className="shrink-0 rounded-lg p-2 text-slate-400 transition-colors duration-200 hover:bg-slate-200/70 hover:text-slate-700 focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:hover:bg-slate-700/60 dark:hover:text-slate-200"
                      >
                        {copied ? (
                          <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="tech-surface rounded-2xl p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    Send me a message
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Tell me a little about what you have in mind.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className={labelClassName}>
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        autoComplete="name"
                        required
                        className={fieldClassName}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className={labelClassName}>
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                        className={fieldClassName}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className={labelClassName}>
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      className={fieldClassName}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className={labelClassName}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      required
                      rows={5}
                      className={`${fieldClassName} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
