'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Shield, Menu, X } from 'lucide-react'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Shield className="h-8 w-8 text-brand-primary transition-transform group-hover:scale-110" />
            <span className="font-bold text-xl text-text-primary group-hover:text-brand-primary transition-colors">
              GT-LFI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: '#context', label: 'Contexto' },
              { href: '#proposal', label: 'Proposta' },
              { href: '#news', label: 'Novidades' },
              { href: '#tech', label: 'Tecnologias' },
              { href: '#team', label: 'Equipe' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-full text-text-secondary hover:text-brand-primary hover:bg-brand-surface-1 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-brand-surface-1 transition-colors"
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
          <div className="md:hidden py-4 px-2 border-t">
            <div className="flex flex-col space-y-1">
              {[
                { href: '#context', label: 'Contexto' },
                { href: '#proposal', label: 'Proposta' },
                { href: '#news', label: 'Novidades' },
                { href: '#tech', label: 'Tecnologias' },
                { href: '#team', label: 'Equipe' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-brand-surface-1 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

