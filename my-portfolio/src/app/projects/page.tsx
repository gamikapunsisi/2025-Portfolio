'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiGithub, FiExternalLink, FiStar, FiGitBranch } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useState } from 'react'

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

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <motion.section 
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Projects</span>
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my collection of projects that showcase my skills and passion for building innovative solutions
          </p>
        </div>

        {/* Category Filters */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex rounded-xl bg-gray-100 dark:bg-gray-700 p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id 
                    ? 'bg-white dark:bg-gray-600 shadow-sm text-blue-600 dark:text-blue-400' 
                    : 'hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
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
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Stats and Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 text-sm">
                    <span className="flex items-center text-gray-600 dark:text-gray-300">
                      <FiStar className="mr-1 text-yellow-500" /> {project.stars}
                    </span>
                    <span className="flex items-center text-gray-600 dark:text-gray-300">
                      <FiGitBranch className="mr-1 text-blue-500" /> {project.forks}
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <Link 
                      href={project.github} 
                      className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <FiGithub size={18} />
                    </Link>
                    {project.demo && (
                      <Link 
                        href={project.demo} 
                        className="flex items-center px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm transition-colors"
                      >
                        Visit
                        <FiExternalLink className="ml-1" size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <Link 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            <FiGithub className="mr-2" /> View All Projects on GitHub
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}