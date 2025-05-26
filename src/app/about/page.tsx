'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Spinner } from '@/components/ui/spinner'

export default function About() {
  const [imageError, setImageError] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-64 h-64 mx-auto">
            <div className="relative w-full h-full">
              {mounted ? (
                !imageError ? (
                  <Image
                  src="/profile.jpg"
                  alt="Profile"
                    width={256}
                    height={256}
                    priority
                    className="rounded-full object-cover w-full h-full border-4 border-primary"
                    style={{ objectFit: 'cover' }}
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      console.error('Error loading image:', e);
                      setImageError(true);
                    }}
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl border-4 border-primary">
                    GP
                  </div>
                )
              ) : (
                <div className="w-full h-full rounded-full bg-gray-200 animate-pulse flex items-center justify-center">
                  <Spinner />
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Software Engineer & ML Enthusiast</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate developer with expertise in building web applications and 
              machine learning models. Currently working as an Associate Software Engineer.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My journey in tech started with a curiosity about how things work, and 
              has evolved into building solutions that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <span className="mr-2">🎓</span>
                <span>Computer Science Graduate</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span>Your Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}