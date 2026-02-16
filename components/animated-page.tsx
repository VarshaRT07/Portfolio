'use client'

import { motion } from 'framer-motion'
import type React from 'react'

interface AnimatedPageProps {
  children: React.ReactNode
}

export const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}
