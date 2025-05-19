export function Footer() {
    return (
      <footer className="bg-background/50 backdrop-blur-sm py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80">
            © {new Date().getFullYear()} Gamika Punsisi. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    )
  }