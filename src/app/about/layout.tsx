import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about my background and skills',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 