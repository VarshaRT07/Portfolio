'use client'

import React from "react"
import Image from "next/image"

import type { Project } from '@/types'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Github, ChevronDown } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  index: number
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasImage = Boolean(project.image?.trim())

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="group"
    >
      <motion.article
        className="relative overflow-hidden rounded-xl border border-muted bg-card transition-all hover:border-muted-foreground/20 hover:shadow-lg"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        animate={{
          boxShadow: isExpanded
            ? '0 20px 40px rgba(0, 0, 0, 0.08)'
            : '0 4px 12px rgba(0, 0, 0, 0.04)',
        }}
      >
        {/* Image or gradient placeholder */}
        <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-accent/20 via-secondary/10 to-muted/30 sm:h-52">
          {hasImage ? (
            <Image
              src={project.image!}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 752px"
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-accent/30 sm:text-5xl">
                {project.title.slice(0, 2)}
              </span>
            </div>
          )}
        </div>

        <div className="p-5 sm:p-6">
          {/* Title & description */}
          <div className="mb-4 flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold text-foreground sm:text-xl">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {project.shortDescription}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-muted bg-muted/50 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-expanded={isExpanded}
              aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
            >
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </button>
          </div>

          {/* Always-visible action buttons */}
          <div className="mb-4 flex flex-wrap gap-3">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:shadow-md hover:shadow-accent/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-4 w-4" />
                View Source Code
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-transparent px-4 py-2.5 text-sm font-semibold text-accent transition-all hover:bg-accent/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" />
                View Demo
              </motion.a>
            )}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-muted bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="rounded-full border border-muted bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                +{project.stack.length - 4}
              </span>
            )}
          </div>

          {/* Expandable details */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden border-t border-muted pt-4"
              >
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="mb-2 text-sm font-semibold text-foreground">
                    Key Features
                  </p>
                  <ul className="space-y-1.5">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-2 text-sm font-semibold text-foreground">
                    Challenges
                  </p>
                  <ul className="space-y-1.5">
                    {project.challenges.map((challenge) => (
                      <li
                        key={challenge}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/80" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.article>
    </motion.div>
  )
}
