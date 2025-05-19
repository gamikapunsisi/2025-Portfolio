'use client'

export function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        Contact <span className="text-primary">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm currently looking for new opportunities in software engineering
            and machine learning. Feel free to reach out!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="mr-4">📧</span>
              <span>your.email@example.com</span>
            </div>
            <div className="flex items-center">
              <span className="mr-4">📱</span>
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <span className="mr-4">🔗</span>
              <a href="#" className="text-primary hover:underline">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
  )
} 