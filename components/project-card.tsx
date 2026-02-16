'use client'

import React from "react"

import type { Project } from '@/types'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface ProjectCardProps {
  project: Project
  index: number
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      className="group cursor-pointer"
    >
      <motion.div
        className="relative rounded-lg border border-muted bg-card p-6 transition-all"
        animate={{
          boxShadow: isExpanded
            ? '0 20px 60px rgba(0, 0, 0, 0.1)'
            : '0 4px 6px rgba(0, 0, 0, 0.05)',
        }}
      >
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {project.shortDescription}
            </p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <svg
              className="h-5 w-5 text-accent"
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

        {/* Tech stack */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-accent bg-accent/10 px-2 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="rounded-full border border-muted bg-muted/50 px-2 py-1 text-xs font-medium text-muted-foreground">
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        {/* Expandable content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-muted pt-4"
            >
              {/* Description */}
              <p className="mb-4 text-sm text-muted-foreground">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold text-foreground">
                  Key Features:
                </p>
                <ul className="space-y-1">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold text-foreground">
                  Challenges:
                </p>
                <ul className="space-y-1">
                  {project.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-destructive flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent/80"
                    whileHover={{ x: 4 }}
                  >
                    GitHub
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                      />
                    </svg>
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent/80"
                    whileHover={{ x: 4 }}
                  >
                    Live Demo
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                      />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
