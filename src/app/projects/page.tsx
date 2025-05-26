'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const projects = [
  {
    id: 1,
    title: 'MJ Money 101',
    description: 'Financial resource website offering an intuitive, customizable spreadsheet to streamline personal finance management. With features like income/expense tracking, smart budgeting, and interactive charts.',
    tags: ['Web Design', 'Laravel'],
    github: '#',
    demo: '#',
    category: 'web',
    stars: 128,
    forks: 42,
    featured: true,
    image: '/images/mj-money.jpg'
  },
  {
    id: 2,
    title: 'Stock Price Predictor',
    description: 'Advanced ML model using LSTM networks to forecast stock market trends with 85% accuracy',
    tags: ['Python', 'TensorFlow', 'LSTM'],
    github: '#',
    demo: '#',
    category: 'ml',
    stars: 89,
    forks: 31,
    featured: true,
    image: '/images/stock-predictor.jpg'
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'Full-featured online store with cart, payments, and admin dashboard',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
    category: 'web',
    stars: 56,
    forks: 12,
    featured: true,
    image: '/images/ecommerce.jpg'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio with dark mode and animated transitions',
    tags: ['Next.js', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    category: 'web',
    stars: 72,
    forks: 28,
    image: '/images/portfolio.jpg'
  },
  {
    id: 5,
    title: 'Task Management App',
    description: 'Collaborative task manager with real-time updates and drag-and-drop interface',
    tags: ['React', 'Firebase'],
    github: '#',
    demo: '#',
    category: 'web',
    stars: 64,
    forks: 19,
    image: '/images/task-app.jpg'
  }
]

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Development' },
  { id: 'ml', name: 'Machine Learning' }
]

// Simple icon components to avoid hydration issues
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
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

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  // Return null on server-side and first render
  if (!mounted) {
    return null
  }

  return (
    <section 
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my collection of projects that showcase my skills and passion for building innovative solutions
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-gray-100 dark:bg-gray-700 p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id 
                    ? 'bg-white dark:bg-gray-600 shadow-sm text-gray-900 dark:text-blue-400' 
                    : 'hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-5xl opacity-90">
                      {project.category === 'ml' ? '🤖' : '💻'}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Stats and Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 text-sm">
                    <span className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="mr-1">⭐</span> {project.stars}
                    </span>
                    <span className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="mr-1">🔀</span> {project.forks}
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <Link 
                      href={project.github} 
                      className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <GithubIcon />
                    </Link>
                    {project.demo && (
                      <Link 
                        href={project.demo} 
                        className="flex items-center px-3 py-1 bg-white dark:bg-green-500 hover:bg-gray-100 dark:hover:bg-green-600 text-gray-900 dark:text-white rounded-md text-sm transition-colors border border-gray-200 dark:border-transparent"
                      >
                        Visit
                        <ExternalLinkIcon />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <Link 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-white dark:bg-gradient-to-r from-blue-500 to-purple-600 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-100 dark:hover:from-blue-600 dark:hover:to-purple-700 transition-all shadow-lg hover:shadow-xl border border-gray-200 dark:border-transparent"
          >
            <GithubIcon /> View All Projects on GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}