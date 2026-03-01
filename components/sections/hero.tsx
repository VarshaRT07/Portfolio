"use client";

import React from "react";

import type { Profile } from "@/types";
import { motion, type Variants } from "framer-motion";

interface HeroProps {
  profile: Profile;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const words = profile.name.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/10"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-secondary/20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Name animation */}
          <motion.div
            className="mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 text-center">
              {words.map((word, i) => (
                <motion.h1
                  key={i}
                  className="gradient-text text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
                  variants={wordVariants}
                >
                  {word}
                </motion.h1>
              ))}
            </div>
          </motion.div>

          {/* Role and tagline */}
          <motion.div
            className="mb-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1 text-sm font-semibold text-accent sm:text-base">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {profile.role}
            </p>
            <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl lg:mx-0">
              {profile.tagline}
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 font-semibold text-accent-foreground shadow-sm transition-all hover:shadow-lg hover:shadow-accent/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-accent px-8 py-3 font-semibold text-accent transition-all hover:bg-accent/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Tech stack indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {["React", "Next.js", "TypeScript", "Node.js", "Python"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-muted bg-muted/50 px-3 py-1 text-sm font-medium text-foreground/70"
                >
                  {tech}
                </span>
              ),
            )}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <svg
              className="h-6 w-6 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
