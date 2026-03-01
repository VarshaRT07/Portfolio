"use client";

import React from "react";

import { skillsByCategory } from "@/data/skills";
import type { SkillCategory } from "@/types";
import { AnimatedSection } from "../animated-section";
import { StaggeredContainer } from "../staggered-container";
import { motion } from "framer-motion";

const categoryOrder: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Databases",
  "DevOps",
];
const categoryColors: Record<SkillCategory, string> = {
  Frontend: "bg-blue-100 text-blue-900",
  Backend: "bg-purple-100 text-purple-900",
  Databases: "bg-green-100 text-green-900",
  DevOps: "bg-orange-100 text-orange-900",
};

export const Skills: React.FC = () => {
  return (
    <section id="skills">
      <AnimatedSection className="scroll-snap-align-start bg-secondary/5 py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Skills & Tech
            </h2>
            <div className="mt-2 h-1 w-20 bg-accent" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {categoryOrder.map((category) => (
              <motion.div
                key={category}
                className="rounded-lg border border-muted bg-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillsByCategory[category]?.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className={`rounded-full px-3 py-1 text-sm font-medium ${categoryColors[category]}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.05,
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};
