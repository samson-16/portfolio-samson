import { motion } from "motion/react";
import {
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const fieldClassName =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/15 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-400 dark:focus:bg-slate-950";

const labelClassName =
  "text-xs font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-300";

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
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-y border-slate-200 bg-slate-50 py-24 dark:border-slate-800 dark:bg-slate-900"
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
                <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl">
                  Let&apos;s build something{" "}
                  <span className="text-blue-600 dark:text-blue-400">
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
              className="contact-social-card"
            >
              <p className="px-4 pt-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Find me online
              </p>
              <ul>
                {contactLinks.map(({ icon: Icon, label, value, href }, index) => (
                  <motion.li
                    key={label}
                    className="contact-iso-pro"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index + 0.15, duration: 0.45 }}
                  >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={`${label}: ${value}`}
                    >
                      <Icon className="contact-social-icon" strokeWidth={2} />
                      <span className="contact-social-text">{label}</span>
                    </a>
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
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-800/70 md:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
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

      <style>{`
        /* From Uiverse.io by MijailVillegas — scoped to contact social links */
        .contact-social-card {
          width: fit-content;
          min-width: 8.5rem;
          border: 1px solid rgb(226 232 240 / 0.9);
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: center;
          gap: 0.25rem;
          background: rgb(255 255 255 / 0.55);
          backdrop-filter: blur(15px);
          box-shadow: inset 0 0 20px rgb(255 255 255 / 0.2),
            inset 0 0 5px rgb(255 255 255 / 0.28),
            0 5px 5px rgb(0 0 0 / 0.12);
          transition: 0.5s;
        }

        .contact-social-card:hover {
          background: rgb(173 173 173 / 0.05);
        }

        .contact-social-card ul {
          padding: 1rem 1.5rem 1.5rem;
          display: flex;
          list-style: none;
          gap: 1.25rem;
          align-items: center;
          justify-content: center;
          align-content: center;
          flex-wrap: wrap;
          flex-direction: column;
        }

        .contact-iso-pro {
          position: relative;
          cursor: pointer;
          transition: 0.5s;
        }

        .contact-iso-pro a {
          display: block;
          position: relative;
        }

        .contact-social-icon {
          position: relative;
          z-index: 4;
          box-sizing: border-box;
          padding: 1rem;
          height: 60px;
          width: 60px;
          border-radius: 100%;
          color: rgb(37 99 235);
          fill: none;
          background: rgb(255 255 255 / 0.22);
          box-shadow: inset 0 0 20px rgb(255 255 255 / 0.3),
            inset 0 0 5px rgb(255 255 255 / 0.5),
            0 5px 5px rgb(0 0 0 / 0.16);
          transition: all 0.3s;
        }

        .contact-social-text {
          opacity: 0;
          position: absolute;
          left: 100%;
          top: 50%;
          z-index: 10;
          width: max-content;
          border-radius: 5px;
          padding: 5px 9px;
          color: rgb(37 99 235);
          background-color: rgb(255 255 255 / 0.82);
          box-shadow: -5px 0 1px rgb(153 153 153 / 0.2),
            -10px 0 1px rgb(153 153 153 / 0.2),
            inset 0 0 20px rgb(255 255 255 / 0.3),
            inset 0 0 5px rgb(255 255 255 / 0.5),
            0 5px 5px rgb(0 0 0 / 0.08);
          pointer-events: none;
          transition: all 0.3s;
        }

        .contact-iso-pro > span {
          opacity: 0;
          position: absolute;
          inset: 0;
          z-index: 1;
          height: 60px;
          width: 60px;
          border: 1px solid rgb(37 99 235);
          border-radius: 50%;
          color: rgb(37 99 235);
          box-shadow: inset 0 0 20px rgb(255 255 255 / 0.3),
            inset 0 0 5px rgb(255 255 255 / 0.5),
            0 5px 5px rgb(0 0 0 / 0.16);
          transition: all 0.3s;
        }

        .contact-iso-pro:hover a > .contact-social-icon,
        .contact-iso-pro:focus-within a > .contact-social-icon {
          transform: translate(15px, -15px);
        }

        .contact-iso-pro:hover .contact-social-text,
        .contact-iso-pro:focus-within .contact-social-text {
          opacity: 1;
          transform: translate(25px, -50%) skew(-5deg);
        }

        .contact-iso-pro:hover > span,
        .contact-iso-pro:focus-within > span {
          opacity: 1;
        }

        .contact-iso-pro:hover > span:nth-child(1),
        .contact-iso-pro:focus-within > span:nth-child(1) {
          opacity: 0.2;
        }

        .contact-iso-pro:hover > span:nth-child(2),
        .contact-iso-pro:focus-within > span:nth-child(2) {
          opacity: 0.4;
          transform: translate(5px, -5px);
        }

        .contact-iso-pro:hover > span:nth-child(3),
        .contact-iso-pro:focus-within > span:nth-child(3) {
          opacity: 0.6;
          transform: translate(10px, -10px);
        }

        .dark .contact-social-card {
          border-color: rgb(51 65 85 / 0.8);
          background: rgb(30 41 59 / 0.52);
        }

        .dark .contact-social-text {
          color: rgb(96 165 250);
          background-color: rgb(15 23 42 / 0.9);
        }

        .dark .contact-social-icon,
        .dark .contact-iso-pro > span {
          color: rgb(96 165 250);
          border-color: rgb(96 165 250);
        }

        @media (max-width: 767px) {
          .contact-social-card {
            width: 100%;
          }

          .contact-social-card ul {
            flex-direction: row;
          }
        }
      `}</style>
    </section>
  );
}
