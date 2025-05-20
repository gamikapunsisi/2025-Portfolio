'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">
                {skill.icon}
              </div>
              <h3 className="font-medium">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: skill.level }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}