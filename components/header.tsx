"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
            <span className="font-bold text-primary text-lg">S</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline">StreamLine</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="hover:opacity-80 transition">
            Features
          </a>
          <a href="#testimonials" className="hover:opacity-80 transition">
            Testimonials
          </a>
          <a href="#pricing" className="hover:opacity-80 transition">
            Pricing
          </a>
          <a href="#contact" className="hover:opacity-80 transition">
            Contact
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            Sign In
          </Button>
          <Button className="bg-accent text-accent-foreground hover:opacity-90">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/20 px-4 py-4 space-y-3">
          <a href="#features" className="block hover:opacity-80 transition py-2">
            Features
          </a>
          <a href="#testimonials" className="block hover:opacity-80 transition py-2">
            Testimonials
          </a>
          <a href="#pricing" className="block hover:opacity-80 transition py-2">
            Pricing
          </a>
          <a href="#contact" className="block hover:opacity-80 transition py-2">
            Contact
          </a>
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              className="flex-1 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Sign In
            </Button>
            <Button className="flex-1 bg-accent text-accent-foreground hover:opacity-90">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  )
}
