"use client";

import React from "react";

import { blogPosts } from "@/data/blog";
import { AnimatedSection } from "../animated-section";
import { motion } from "framer-motion";

export const Blog: React.FC = () => {
  return (
    <section id="blog">
      <AnimatedSection className="scroll-snap-align-start bg-background py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Latest Articles
            </h2>
            <div className="mt-2 h-1 w-20 bg-accent" />
          </motion.div>

          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.url}
                className="group block rounded-lg border border-muted bg-card p-6 transition-all hover:border-accent hover:shadow-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                whileHover={{ x: 4 }}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center gap-3 sm:mt-0">
                    <span className="inline-block rounded-full bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                      {post.category}
                    </span>
                    <span className="whitespace-nowrap text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};
