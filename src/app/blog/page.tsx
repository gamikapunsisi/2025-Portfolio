'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getLatestMediumPosts, MediumPost } from '@/lib/medium'

// Simple icon components
const MediumIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
)

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
)

export default function Blog() {
  const [mounted, setMounted] = useState(false)
  const [posts, setPosts] = useState<MediumPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const mediumPosts = await getLatestMediumPosts('yourusername', 2)
      setPosts(mediumPosts)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) {
    return null
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <section id="blog" className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Latest <span className="text-primary">Articles</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Insights and thoughts on web development, programming, and technology
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-background/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:-translate-y-1"
            >
              {/* Blog Image */}
              <div className="h-48 relative overflow-hidden">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-primary/20 to-primary/40 flex items-center justify-center">
                    <MediumIcon />
                  </div>
                )}
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Category and Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-white/60">
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-white">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 mb-4">
                  {post.description}
                </p>

                {/* Read Time and Link */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">
                    {post.readTime}
                  </span>
                  <Link
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    Read Article
                    <ExternalLinkIcon />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-white/80 mb-6">
            Want to read more? Check out my Medium profile for all articles.
          </p>
          <Link
            href="https://medium.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all shadow-lg hover:shadow-xl border border-white/10"
          >
            <span className="mr-2">
              <MediumIcon />
            </span>
            View All Articles on Medium
          </Link>
        </div>
      </div>
    </section>
  )
} 