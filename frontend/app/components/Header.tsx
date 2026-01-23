"use client"; 

import { Button } from "./ui/button";
import { Menu, Search, User, Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-light tracking-wide text-neutral-900 hover:opacity-80 transition-opacity duration-200">
              <span className="font-normal">MAISON</span>
              <span className="text-amber-600 ml-1">ROYAL</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/rooms" className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200">
              Rooms & Suites
            </Link>
            <Link href="/dining" className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200">
              Dining
            </Link>
            <Link href="/experiences" className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200">
              Experiences
            </Link>
            <Link href="/meetings" className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200">
              Meetings & Events
            </Link>
            <Link href="/gallery" className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200">
              Gallery
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/search" className="text-neutral-700 hover:text-neutral-900">
              <Button variant="ghost" size="sm" className="text-neutral-700 hover:text-neutral-900">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </Link>
            <Link href="/signin" className="text-neutral-700 hover:text-neutral-900">
              <Button variant="ghost" size="sm" className="text-neutral-700 hover:text-neutral-900">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </Link>
            <Link href="/booking" className="bg-neutral-900 hover:bg-neutral-800 text-white px-6">
              <Button className="bg-neutral-900 hover:bg-neutral-800 text-white px-6">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:text-neutral-900"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden py-6 border-t border-neutral-200/50"
          >
            <nav className="flex flex-col space-y-4">
              <Link href="/rooms" className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 py-2 text-left" onClick={() => setIsMenuOpen(false)}>
                Rooms & Suites
              </Link>
              <Link href="/dining" className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 py-2 text-left" onClick={() => setIsMenuOpen(false)}>
                Dining
              </Link>
              <Link href="/experiences" className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 py-2 text-left" onClick={() => setIsMenuOpen(false)}>
                Experiences
              </Link>
              <Link href="/meetings" className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 py-2 text-left" onClick={() => setIsMenuOpen(false)}>
                Meetings & Events
              </Link>
              <Link href="/gallery" className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 py-2 text-left" onClick={() => setIsMenuOpen(false)}>
                Gallery
              </Link>
            </nav>
            <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-neutral-200/50">
              <Link href="/search" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="justify-start text-neutral-700 hover:text-neutral-900 w-full">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </Link>
              <Link href="/signin" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="justify-start text-neutral-700 hover:text-neutral-900 w-full">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </Link>
              <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-neutral-900 hover:bg-neutral-800 text-white w-full">
                  Book Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}