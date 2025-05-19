import { Metadata } from 'next'
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: 'My Skills',
  description: 'Technologies and tools I work with',
}

const skills = [
  { name: 'Python', level: '90%' },
  { name: 'JavaScript/TypeScript', level: '85%' },
  { name: 'React/Next.js', level: '80%' },
  { name: 'TensorFlow/PyTorch', level: '75%' },
  { name: 'Node.js', level: '70%' },
  { name: 'AWS', level: '65%' },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-white/80">{skill.level}</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}