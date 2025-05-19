'use client'

import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowDown, Mail, Github, Linkedin, Code, Cpu, Database, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TypeAnimation } from "@/components/ui/type-animation";
import { cn } from "@/lib/utils";

const floatingShapes = [
  { icon: <Code className="h-6 w-6" />, className: "top-20 left-1/4" },
  { icon: <Cpu className="h-6 w-6" />, className: "top-1/3 right-20" },
  { icon: <Database className="h-6 w-6" />, className: "bottom-1/4 left-16" },
  { icon: <Smartphone className="h-6 w-6" />, className: "bottom-20 right-1/3" },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["end end", "start start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [currentShape, setCurrentShape] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShape((prev) => (prev + 1) % floatingShapes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Particles and Floating Elements */}
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10"
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                opacity: 0.1
              }}
              animate={{
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                transition: {
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
          ))}
        </div>

        {/* Floating Tech Icons */}
        <AnimatePresence>
          {floatingShapes.map((shape, index) => (
            <motion.div
              key={index}
              className={cn(
                "absolute text-primary/30 z-0",
                shape.className,
                index !== currentShape ? "opacity-0" : "opacity-100"
              )}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: index === currentShape ? [0.3, 0.5, 0.3] : 0,
                y: [0, -20, 0]
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          {/* Text Content */}
          <motion.div
            className="lg:w-2/3 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block">Hello, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Gamika Punsisi
              </span>
            </motion.h1>
            
            <motion.div 
              className="text-xl sm:text-2xl text-muted-foreground mb-8 h-12"
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
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="px-8 shadow-lg hover:shadow-primary/30 transition-all"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="px-8 border-primary/30 hover:border-primary hover:bg-primary/5"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image with Floating Effect */}
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
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg group">
              <Image
                src="/profile.jpg"
                alt="Gamika Punsisi"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          style={{ opacity }}
        >
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition backdrop-blur-sm"
            aria-label="Scroll down"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="h-6 w-6 text-primary" />
            </motion.div>
          </button>
        </motion.div>

        {/* Social Links with Hover Effects */}
        <motion.div 
          className="fixed left-6 bottom-6 hidden md:flex flex-col gap-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col gap-4 p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-border shadow-lg">
            <motion.a 
              href="mailto:your.email@example.com" 
              aria-label="Email"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.1 }}
            >
              <Mail className="h-5 w-5" />
              <span className="absolute left-full ml-2 whitespace-nowrap text-xs font-medium opacity-0 group-hover:opacity-100 group-hover:left-12 transition-all duration-300">
                Email Me
              </span>
            </motion.a>
            <motion.a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.1 }}
            >
              <Github className="h-5 w-5" />
              <span className="absolute left-full ml-2 whitespace-nowrap text-xs font-medium opacity-0 group-hover:opacity-100 group-hover:left-12 transition-all duration-300">
                GitHub
              </span>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin className="h-5 w-5" />
              <span className="absolute left-full ml-2 whitespace-nowrap text-xs font-medium opacity-0 group-hover:opacity-100 group-hover:left-12 transition-all duration-300">
                LinkedIn
              </span>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Animated Section Transitions */}
      <motion.section 
        id="about"
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
        <About />
      </motion.section>
      
      <motion.section 
        id="skills"
        className="py-20 bg-muted/50 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
        <Skills />
      </motion.section>
      
      <motion.section 
        id="projects"
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
        <Projects />
      </motion.section>
      
      <motion.section 
        id="contact"
        className="py-20 bg-muted/50 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
        <Contact />
      </motion.section>
    </div>
  );
}