"use client";

import React from "react";

import type { Profile } from "@/types";
import { AnimatedSection } from "../animated-section";
import { motion } from "framer-motion";
import { useState } from "react";

interface ContactProps {
  profile: Profile;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact">
      <AnimatedSection className="scroll-snap-align-start bg-secondary/5 py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Let's Connect
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a project in mind? Let's talk!
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-lg border border-muted bg-card px-4 py-2 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-lg border border-muted bg-card px-4 py-2 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1 block w-full rounded-lg border border-muted bg-card px-4 py-2 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading || submitted}
                  className="w-full rounded-lg bg-accent px-6 py-2 font-semibold text-white transition-all disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {submitted
                    ? "✓ Message sent!"
                    : loading
                      ? "Sending..."
                      : "Send Message"}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-start gap-4 rounded-lg border border-muted bg-card p-4 transition-all hover:border-accent hover:bg-accent/5"
              >
                <div className="rounded-lg bg-accent/10 p-3">
                  <svg
                    className="h-6 w-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-accent">
                    {profile.email}
                  </p>
                </div>
              </a>

              {/* Socials */}
              <div>
                <h3 className="mb-4 font-semibold text-foreground">Follow</h3>
                <div className="flex gap-3">
                  {profile.socials
                    .filter((s) => s.name !== "Email")
                    .map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-muted bg-card p-3 text-muted-foreground transition-all hover:border-accent hover:bg-accent hover:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.name}
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {social.name === "GitHub" && (
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          )}
                          {social.name === "Twitter" && (
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75-2.35 7.31-7 7.31-7z" />
                          )}
                          {social.name === "LinkedIn" && (
                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                          )}
                        </svg>
                      </motion.a>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};
