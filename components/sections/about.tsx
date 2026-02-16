'use client'

import React from "react"

import type { Profile } from '@/types'
import { AnimatedSection } from '../animated-section'
import { motion } from 'framer-motion'

interface AboutProps {
  profile: Profile
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <AnimatedSection className="scroll-snap-align-start bg-background py-20 sm:py-32" id="about">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About
          </h2>
          <div className="mt-2 h-1 w-20 bg-accent" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Main bio */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              {profile.bio}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {profile.currentFocus}
            </p>
          </motion.div>

          {/* Stats and highlights */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-lg border border-muted bg-card p-6">
              <p className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Experience
              </p>
              <p className="text-3xl font-bold text-foreground">
                {profile.yearsExperience}+ Years
              </p>
            </div>

            <div className="rounded-lg border border-muted bg-card p-6">
              <p className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Based In
              </p>
              <p className="text-3xl font-bold text-foreground">
                San Francisco, CA
              </p>
            </div>

            <div className="rounded-lg border border-muted bg-card p-6">
              <p className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Availability
              </p>
              <p className="text-3xl font-bold text-foreground">
                Available Now
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
