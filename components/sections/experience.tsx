'use client'

import React from "react"

import { experiences } from '@/data/experience'
import { AnimatedSection } from '../animated-section'
import { motion } from 'framer-motion'

export const Experience: React.FC = () => {
  return (
    <AnimatedSection
      className="scroll-snap-align-start bg-background py-20 sm:py-32"
      id="experience"
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
            Professional Experience
          </h2>
          <div className="mt-2 h-1 w-20 bg-accent" />
        </motion.div>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-muted" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-16"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 top-1 h-8 w-8 rounded-full border-4 border-background bg-accent shadow-lg"
                whileHover={{ scale: 1.2 }}
              />

              {/* Content */}
              <div className="rounded-lg border border-muted bg-card p-6">
                <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.position}
                    </h3>
                    <p className="text-accent font-semibold">
                      {exp.company}
                      {exp.location ? (
                        <span className="text-muted-foreground font-medium">
                          {' '}
                          • {exp.location}
                        </span>
                      ) : null}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-muted-foreground">
                      {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                    </p>
                  </div>
                </div>

                {exp.highlights?.length ? (
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    {exp.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : exp.description ? (
                  <p className="mt-4 text-muted-foreground">{exp.description}</p>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-accent bg-accent/10 px-2 py-1 text-xs font-medium text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
