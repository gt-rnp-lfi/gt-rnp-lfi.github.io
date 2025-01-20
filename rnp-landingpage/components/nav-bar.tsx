'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Shield, Menu, X } from 'lucide-react'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-brand-primary" />
            <span className="font-bold text-xl text-text-primary">CyberLearn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-text-secondary hover:text-brand-primary transition-colors">
              Recursos
            </Link>
            <Link href="#about" className="text-text-secondary hover:text-brand-primary transition-colors">
              Sobre
            </Link>
            <Link href="#news" className="text-text-secondary hover:text-brand-primary transition-colors">
              Novidades
            </Link>
            <Link href="#tech" className="text-text-secondary hover:text-brand-primary transition-colors">
              Tecnologias
            </Link>
            <Link href="#team" className="text-text-secondary hover:text-brand-primary transition-colors">
              Equipe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-text-secondary" />
            ) : (
              <Menu className="h-6 w-6 text-text-secondary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-text-secondary hover:text-brand-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Recursos
              </Link>
              <Link
                href="#about"
                className="text-text-secondary hover:text-brand-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="#news"
                className="text-text-secondary hover:text-brand-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Novidades
              </Link>
              <Link
                href="#tech"
                className="text-text-secondary hover:text-brand-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tecnologias
              </Link>
              <Link
                href="#team"
                className="text-text-secondary hover:text-brand-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Equipe
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

