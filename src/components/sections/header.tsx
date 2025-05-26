'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleNavClick = (hash: string) => {
    // Close mobile menu
    setMobileMenuOpen(false)
    
    // If already on home page, scroll to section
    if (pathname === '/') {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } 
    // Otherwise navigate to home page with hash
    else {
      router.push(`/#${hash}`)
    }
  }

  const navLinks = [
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: 'contact' },
  ]

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl font-bold text-white hover:text-primary transition-colors flex items-center gap-2"
        >
          <span>Gamika Punsisi</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-primary ${
                    pathname === link.href ? 'text-primary font-medium' : 'text-white/80'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={`/#${link.href}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={`transition-colors hover:text-primary ${
                    pathname.includes(link.href) ? 'text-primary font-medium' : 'text-white/80'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
          
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className="hover:bg-white/10 text-white"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-white/10 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 text-left transition-colors hover:text-primary ${
                    pathname === link.href ? 'text-primary font-medium' : 'text-white/80'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={`/#${link.href}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={`py-2 text-left transition-colors hover:text-primary ${
                    pathname.includes(link.href) ? 'text-primary font-medium' : 'text-white/80'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="pt-2 border-t border-white/10 mt-2">
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-white/10 text-white"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="h-5 w-5 mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 mr-2" />
                    Dark Mode
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}