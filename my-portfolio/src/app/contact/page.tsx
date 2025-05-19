import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Get in touch with me',
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Contact <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h3>
            <p className="text-white/80 mb-6">
              I'm currently looking for new opportunities in software engineering
              and machine learning. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-white">
                <span className="mr-4">📧</span>
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center text-white">
                <span className="mr-4">📱</span>
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <span className="mr-4">🔗</span>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-white">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-white/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-white">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-white/50"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-white">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-white/50"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}