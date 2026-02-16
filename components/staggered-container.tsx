'use client'

import React from "react"

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface StaggeredContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
  children,
  className,
  staggerDelay = 0.1,
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={item}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  )
}
