'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ArrowDown, Mail, Github, Linkedin, Code, Cpu, Database, Smartphone, Sparkles, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TypeAnimation } from "@/components/ui/type-animation"
import { cn } from "@/lib/utils"

const floatingShapes = [
  { icon: <Code className="h-8 w-8" />, className: "top-20 left-1/4" },
  { icon: <Cpu className="h-8 w-8" />, className: "top-1/3 right-20" },
  { icon: <Database className="h-8 w-8" />, className: "bottom-1/4 left-16" },
  { icon: <Smartphone className="h-8 w-8" />, className: "bottom-20 right-1/3" },
]

const creativeElements = [
  { icon: <Sparkles className="h-4 w-4" />, className: "top-1/4 left-1/3" },
  { icon: <Star className="h-4 w-4" />, className: "top-1/2 right-1/4" },
  { icon: <Zap className="h-4 w-4" />, className: "bottom-1/3 left-1/2" },
]

export function Hero() {
  const heroRef = useRef(null)
  const [currentShape, setCurrentShape] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShape((prev) => (prev + 1) % floatingShapes.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Interactive Mouse Trail Effect */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
          scale: isHovering ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              opacity: 0.1
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              transition: {
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        ))}
      </div>

      {/* Creative Floating Elements */}
      <AnimatePresence>
        {creativeElements.map((element, index) => (
          <motion.div
            key={`creative-${index}`}
            className={cn("absolute text-primary/30 z-0", element.className)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {element.icon}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Enhanced Floating Tech Icons */}
      <AnimatePresence>
        {floatingShapes.map((shape, index) => (
          <motion.div
            key={index}
            className={cn(
              "absolute text-primary/40 z-0",
              shape.className,
              index !== currentShape ? "opacity-0" : "opacity-100"
            )}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: index === currentShape ? [0.4, 0.6, 0.4] : 0,
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {shape.icon}
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Enhanced Text Content with Creative Effects */}
        <motion.div
          className="lg:w-2/3 text-center lg:text-left space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight"
            >
              <motion.span 
                className="block mb-4"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.1)",
                    "0 0 20px rgba(255,255,255,0.2)",
                    "0 0 10px rgba(255,255,255,0.1)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Hello, I'm
              </motion.span>
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Gamika Punsisi
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.div 
            className="text-2xl sm:text-3xl text-muted-foreground mb-12 h-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Software Engineer',
                'ML Enthusiast',
                'Full Stack Developer',
                'Problem Solver'
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center lg:justify-start gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="px-10 py-6 text-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="px-10 py-6 text-lg border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Contact Me</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Profile Image with Creative Effects */}
        <motion.div
          className="lg:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -15, 0]
          }}
          transition={{ 
            delay: 0.3, 
            duration: 0.5,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl group">
            <Image
              src="/profile.jpg"
              alt="Gamika Punsisi"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.button 
          onClick={() => scrollToSection('about')}
          className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-8 w-8 text-primary" />
          <motion.div
            className="absolute inset-0 bg-primary/20"
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.div>

      {/* Enhanced Social Links with Creative Effects */}
      <motion.div 
        className="fixed left-8 bottom-8 hidden md:flex flex-col gap-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col gap-4 p-4 rounded-xl bg-background/80 backdrop-blur-md border border-border shadow-xl">
          {[
            { icon: <Mail className="h-6 w-6" />, href: "mailto:gamikadev@gmail.com", label: "Email Me" },
            { icon: <Github className="h-6 w-6" />, href: "https://github.com/gamikapunsisi", label: "GitHub" },
            { icon: <Linkedin className="h-6 w-6" />, href: "https://www.linkedin.com/in/gamikapunsisi", label: "LinkedIn" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
              <motion.span 
                className="absolute left-full ml-3 whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 group-hover:left-14 transition-all duration-300"
                initial={{ x: -20 }}
                whileHover={{ x: 0 }}
              >
                {item.label}
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-primary/10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 