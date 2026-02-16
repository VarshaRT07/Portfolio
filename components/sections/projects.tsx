'use client'

import React from "react"

import { projects } from '@/data/projects'
import { ProjectCard } from '../project-card'
import { AnimatedSection } from '../animated-section'
import { motion } from 'framer-motion'

export const Projects: React.FC = () => {
  return (
    <AnimatedSection
      className="scroll-snap-align-start bg-secondary/5 py-20 sm:py-32"
      id="projects"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Featured Projects
          </h2>
          <div className="mt-2 h-1 w-20 bg-accent" />
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
