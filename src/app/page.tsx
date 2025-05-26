'use client'

import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import Projects from '@/components/sections/projects'
import { Blog } from '@/components/sections/blog'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </main>
  )
}