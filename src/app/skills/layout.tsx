import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Skills',
  description: 'Technologies and tools I work with',
}

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 