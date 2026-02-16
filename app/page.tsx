'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Blog } from '@/components/sections/blog'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { profile } from '@/data/profile'

export default function Page() {
  return (
    <main
      id="top"
      className="scroll-snap-type-y-mandatory overflow-x-hidden bg-background text-foreground"
    >
      <Navbar />
      <Hero profile={profile} />
      <About profile={profile} />
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      <Contact profile={profile} />
      <Footer profile={profile} />
    </main>
  )
}
