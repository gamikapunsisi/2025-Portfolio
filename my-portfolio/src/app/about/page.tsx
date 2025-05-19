import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about my background and skills',
}

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-64 h-64 mx-auto">
            <Image
              src="/profile.jpg" // Replace with your image
              alt="Profile"
              fill
              className="rounded-full object-cover"
            />
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