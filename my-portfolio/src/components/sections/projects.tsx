'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiExternalLink, FiArrowRight, FiFilter, FiX } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'AI Fashion Assistant',
    description: 'Computer vision app that recommends outfits based on your wardrobe with 92% accuracy',
    tags: ['AI', 'Python', 'OpenCV'],
    github: '#',
    demo: '#',
    category: 'AI',
    image: '/images/ai-fashion.jpg',
    accentColor: '#8b5cf6',
    featured: true
  },
  {
    id: 2,
    title: 'Sustainable E-Commerce',
    description: 'Carbon-neutral marketplace with blockchain supply chain verification',
    tags: ['React', 'Node.js', 'Web3'],
    github: '#',
    demo: '#',
    category: 'Web',
    image: '/images/ecommerce.jpg',
    accentColor: '#10b981',
    featured: true
  },
  // Add 6-8 more projects...
]

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'AI', name: 'AI/ML' },
  { id: 'Web', name: 'Web' },
  { id: 'Mobile', name: 'Mobile' },
  { id: 'Design', name: 'Design' }
]

const ProjectCard = ({ project, onClick }) => {
  const cardRef = useRef()
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={onClick}
      className="relative overflow-hidden rounded-2xl cursor-pointer group bg-background/50 backdrop-blur-sm border border-white/10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map(tag => (
            <span 
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-white/10 text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-white/80 text-sm line-clamp-1">{project.description}</p>
          <FiArrowRight className="text-white ml-2" />
        </div>
      </div>
    </motion.div>
  )
}

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={e => e.stopPropagation()}
        className="bg-background/95 backdrop-blur-sm rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
      >
        <div className="relative h-64 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white"
          >
            <FiX />
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex flex-wrap gap-4 justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold text-white">{project.title}</h2>
              <p className="text-white/80 mt-2">{project.description}</p>
            </div>
            <div className="flex gap-3">
              <a 
                href={project.github}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 text-white hover:bg-white/20"
              >
                <FiGithub /> Code
              </a>
              {project.demo && (
                <a 
                  href={project.demo}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white hover:bg-primary/90"
                >
                  <FiExternalLink /> Live Demo
                </a>
              )}
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4 text-white">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm bg-white/10 text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-white">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary" />
                  <span className="text-white/80">Real-time outfit recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary" />
                  <span className="text-white/80">92% accuracy rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary" />
                  <span className="text-white/80">Integration with major retailers</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-white">Project Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-white/60">Daily Users</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="text-2xl font-bold text-primary">40%</div>
                  <div className="text-sm text-white/60">Conversion Boost</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="min-h-screen py-20 px-4 sm:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Innovative solutions blending technology and design
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-12 justify-center"
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold mb-8 text-white text-center"
          >
            Featured Work
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map(project => (
              <ProjectCard 
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-8 text-white text-center"
          >
            {activeCategory === 'all' ? 'All Projects' : categories.find(c => c.id === activeCategory)?.name}
          </motion.h2>
          
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: 'spring' }}
                >
                  <ProjectCard 
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal 
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-white/80 mb-8">
            Whether you need cutting-edge AI solutions or beautiful web experiences, I can help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Let's Collaborate
          </a>
        </motion.div>
      </div>
    </section>
  )
}