'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiExternalLink, FiArrowRight, FiFilter, FiX } from 'react-icons/fi'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  github: string
  demo: string
  category: string
  image: string
  accentColor: string
  featured: boolean
  features: string[]
  impact: {
    metric: string
    value: string
    label: string
  }[]
}

interface Category {
  id: string
  name: string
}

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Maths Online LMS',
    description: 'Math LMS is a web application that allows students to learn and practice math problems. It is built with Laravel, PHP, and MySql.',
    tags: ['Laravel', 'PHP', 'MySql'],
    github: '#',
    demo: 'https://mathsonline.lk',
    category: 'Web',
    image: '/math-lms.png',
    accentColor: '#8b5cf6',
    featured: true,
    features: [
      'Interactive math problem solving',
      'Real-time progress tracking',
      'Automated grading system & Live Classes',
      'Student performance analytics & report',
      'Payment Integration',
      'Admin Dashboard'
    ],
    impact: [
      { metric: '200+', value: '200+', label: 'Active Students' },
      { metric: '85%', value: '85%', label: 'Completion Rate' },
      { metric: '4.8', value: '4.8', label: 'User Rating' }
    ]
  },
  {
    id: 2,
    title: 'Online Bus Booking System',
    description: 'Online Bus Booking is a web application that allows users to book buses for their trips. It is built with Node.js, Express, MongoDB, Typescript, Tailwind CSS, and Mongoose.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Typescript', 'Tailwind CSS', 'Mongoose'],
    github: 'https://github.com/gamikapunsisi/E-Bus-Booking-System-AWS-Backend.git',
    demo: 'https://ebusreserve.site',
    category: 'Web',
    image: '/bus-booking.jpg',
    accentColor: '#10b981',
    featured: true,
    features: [
      'User Authentication',
      'Real-time Bus Seat Booking',
      'Payment Integration',
      'Admin Dashboard'
    ],
    impact: [
      { metric: '1K+', value: '1K+', label: 'Daily Users' },
      { metric: '40%', value: '40%', label: 'Carbon Reduction' },
      { metric: '95%', value: '95%', label: 'Customer Satisfaction' }
    ]
  },
  // Add 6-8 more projects...
  {
    id: 3,
    title: 'Online Train Seat Booking System',
    description: 'Online Train Seat Booking is a web application that allows users to book trains for their trips. It is built with Laravel, PHP, MySql.',
    tags: ['Laravel', 'PHP', 'MySql'],
    github: '#',
    demo: '#',
    category: 'Web',
    image: '/train-booking.png',
    accentColor: '#10b981',
    featured: true,
    features: [
      'User Authentication',
      'Real-time Train Seat Booking',
      'Payment Integration',
      'Admin Dashboard'
    ],
    impact: [
      { metric: '1K+', value: '1K+', label: 'Daily Users' },
      { metric: '40%', value: '40%', label: 'Real-time' },
      { metric: '95%', value: '95%', label: 'Customer Satisfaction' }
    ]
  },
  {
    id: 4,
    title: 'Vehicle Damage Detection System',
    description: 'Vehicle Damage Detection System is a web application that allows users to detect damage in vehicles. It is built with Python, OpenCV, and Flask.',
    tags: ['Python', 'OpenCV', 'Flask', 'TensorFlow', 'Keras', 'YOLO'],
    github: 'https://github.com/gamikapunsisi/Vehical-Damage-Detection.git',
    demo: '#',
    category: 'AI',
    image: '/damage-detection.jpg',
    accentColor: '#10b981',
    featured: true,
    features: [
      'Vehicle Damage Detection',
      'Real-time Damage Detection',
      'Image Processing',
      'Object Detection'
    ],
    impact: [
      { metric: '1K+', value: '1K+', label: 'Users' },
      { metric: '40%', value: '40%', label: 'Accuracy' },
      { metric: '95%', value: '95%', label: 'Speed' }
    ]
  },

  {
    id: 5,
    title: 'Chatbot for Call Center',
    description: 'Chatbot for Call Center is a web application that allows users to chat with a bot. It is built with Python, Rasa, and Flask.',
    tags: ['Python', 'Rasa', 'Flask', 'TensorFlow','NLTK'],
    github: 'https://github.com/gamikapunsisi/BOTZ.git',
    demo: '#',
    category: 'AI',
    image: '/botz.jpg',
    accentColor: '#10b981',
    featured: true,
    features: [
      'Chatbot for Call Center Issue',
      'Real-time Chat'
    
    
    ],
    impact: [
      { metric: '1K+', value: '1K+', label: 'Users' },
      { metric: '40%', value: '40%', label: 'Accuracy' },
      { metric: '95%', value: '95%', label: 'Customer Satisfaction' }
    ]
  },

  {
    id: 6,
    title: 'Hotel Reservation Website',
    description: 'Hotel Reservation System is a web application that allows users to reserve hotels for their trips. It is built with Laravel, PHP, MySql.',
    tags: ['Laravel', 'PHP', 'MySql'],
    github: 'https://github.com/gamikapunsisi/Hotel_Reservation.git',
    demo: '#',
    category: 'Web',
    image: '/hotel-reservation.jpg',
    accentColor: '#10b981',
    featured: true,
    features: [
      'Hotel Reservation',
      'Real-time Room Reservation',
      'Payment Integration'
    
    
    ],
    impact: [
      { metric: '1K+', value: '1K+', label: 'Users' },
      { metric: '40%', value: '40%', label: 'Rating' },
      { metric: '95%', value: '95%', label: 'Customer Satisfaction' }
    ]
  },


    // Add 6-8 more projects...

]

const categories: Category[] = [
  { id: 'all', name: 'All Projects' },
  { id: 'AI', name: 'AI/ML' },
  { id: 'Web', name: 'Web' },
  { id: 'Mobile', name: 'Mobile' },
  { id: 'Design', name: 'Design' }
]

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  
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

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [showFullImage, setShowFullImage] = useState(false);

  return (
    <>
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
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          className="bg-background/95 backdrop-blur-sm rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
        >
          <div className="relative h-64 w-full cursor-pointer" onClick={() => setShowFullImage(true)}>
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
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 text-white hover:bg-white/20"
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
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 w-2 h-2 rounded-full bg-primary" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-white">Project Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.impact.map((item, index) => (
                    <div key={index} className="p-4 rounded-xl bg-white/5">
                      <div className="text-2xl font-bold text-primary">{item.value}</div>
                      <div className="text-sm text-white/60">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Full Image Modal */}
      <AnimatePresence>
        {showFullImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4"
            onClick={() => setShowFullImage(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="relative max-w-[90vw] max-h-[90vh]"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={800}
                className="object-contain max-h-[90vh]"
              />
              <button 
                onClick={() => setShowFullImage(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white"
              >
                <FiX />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  
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
                  ? 'bg-primary text-black'
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
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors"
          >
            Let's Collaborate
          </a>
        </motion.div>
      </div>
    </section>
  )
}