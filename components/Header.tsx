'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react'

// Navigation data structure as per PRD
const NAVIGATION_DATA: Record<string, string[]> = {
  'News & Analysis': [
    'Daily News',
    'Market Updates',
    'Policy & Regulations',
    'Start-up Watch'
  ],
  'Policy & Governance': [
    'Ethics & Responsible AI',
    'India AI Policy Updates',
    'Government Initiatives',
    'International AI Collaboration'
  ],
  'Industry Verticals': [
    'Healthcare & Life Sciences',
    'Finance & FinTech',
    'Manufacturing & Industry 4.0',
    'Agriculture & FoodTech',
    'Education & Skilling',
    'Retail & E-Commerce',
    'Smart Cities & Mobility',
    'Cybersecurity & Defence',
    'Media & Entertainment'
  ],
  'Technology & Innovation': [
    'Generative AI',
    'Machine Learning & Deep Learning',
    'Robotics & Automation',
    'Data Analytics & Cloud AI',
    'Edge Computing & IoT',
    'AI Chips & Hardware',
    'Quantum & Emerging Tech',
    'Data Centre & AI Infrastructure',
    'Enterprise AI Solutions'
  ],
  'AI Leadership': [
    'INTERVIEWS',
    'FEATURE',
    'INSIGHTS'
  ],
  'AI Special': [
    'REPORTS',
    'ANALYSIS',
    'Academic & Research Voice',
    'AI Tools Kit',
    'Events',
    'AI Talent & Workforce',
    'AI Research & Development'
  ],
  'Regions': [
    'North America',
    'Europe',
    'Asia Pacific',
    'India',
    'China',
    'Middle East & North Africa',
    'Australia & New Zealand',
    'Global/International'
  ]
}

// URL generation helper
const generateUrl = (parent: string, child: string): string => {
  const parentSlug = parent.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')
  const childSlug = child.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')
  return `/${parentSlug}/${childSlug}`
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
  const [currentDate, setCurrentDate] = useState('')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const logoSrc = theme === 'dark' ? '/ai-l.png' : '/ai.png';

  // Format current date
  useEffect(() => {
    setMounted(true)
    const formatDate = () => {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const now = new Date()
      const day = days[now.getDay()]
      const date = now.getDate().toString().padStart(2, '0')
      const month = months[now.getMonth()]
      const year = now.getFullYear()
      return `${day}, ${date} ${month}, ${year}`
    }
    setCurrentDate(formatDate())
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [activeDropdown])

  // Toggle dropdown function
  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category)
  }

  return (
    <header className="sticky top-0 z-50">
      {/* TOP BAR */}
      <div className="h-12 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span>📅</span>
            <span>{currentDate}</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/editorial-calendar" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Editorial Calendar
            </Link>
            <Link href="/newsletter" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Newsletter
            </Link>
          </div>
        </div>
      </div>

      {/* LOGO BAR */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <Image
                src={logoSrc}
                alt="AI Spectrum India - The Business of AI and Industry Transformation"
                width={280}
                height={60}
                className="h-18 w-auto"
                priority
              />
            </Link>

            {/* Subscribe Button - Hidden on mobile */}
            <Link
              href="/subscribe"
              className="hidden md:inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-bold transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              🚀 Subscribe Now
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <nav
        className="bg-gradient-to-r from-[#0a1628] via-[#0f172a] to-[#0a1628] text-white"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1 flex-1">
              {/* HOME Link */}
              <Link
                href="/"
                className="px-4 py-2 text-sm font-semibold uppercase rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Home
              </Link>

              {/* Menu items with dropdowns */}
              {Object.keys(NAVIGATION_DATA).map((category) => (
                <div
                  key={category}
                  className="relative"
                  ref={activeDropdown === category ? dropdownRef : null}
                >
                  <button
                    onClick={() => toggleDropdown(category)}
                    className="px-4 py-2 text-sm font-semibold uppercase rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center gap-1"
                    aria-expanded={activeDropdown === category}
                    aria-haspopup="true"
                  >
                    {category.split(' ')[0]}
                    <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === category ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === category && (
                    <div className="absolute top-full left-0 mt-2 min-w-[300px] bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl py-3 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div role="menu" aria-labelledby="menu-button">
                        {NAVIGATION_DATA[category].map((item) => (
                          <Link
                            key={item}
                            href={generateUrl(category, item)}
                            role="menuitem"
                            className="block px-4 py-2.5 mx-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-150"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* AI Investor Corner - Direct Link */}
              <Link
                href="/ai-investor-corner"
                className="px-4 py-2 text-sm font-semibold uppercase rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center gap-1"
              >
                💼 Investor
              </Link>
            </div>

            {/* Right side - Theme Toggle + Mobile Menu Button */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2.5 hover:bg-white/10 rounded-lg transition-all duration-200"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun size={20} className="hover:rotate-45 transition-transform duration-300" />
                  ) : (
                    <Moon size={20} className="hover:-rotate-12 transition-transform duration-300" />
                  )}
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 hover:bg-white/10 rounded-lg transition-all duration-200"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#1e293b] border-t border-gray-700 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top duration-300">
              <div className="py-4 space-y-2">
                {/* HOME */}
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm font-semibold uppercase hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Categories with Accordion */}
                {Object.keys(NAVIGATION_DATA).map((category) => (
                  <div key={category} className="border-b border-gray-700 last:border-0">
                    <button
                      onClick={() => setExpandedMobile(expandedMobile === category ? null : category)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold uppercase hover:bg-white/10 transition-colors"
                    >
                      {category}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${expandedMobile === category ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {expandedMobile === category && (
                      <div className="pb-2 pl-4 space-y-1 animate-in slide-in-from-top duration-200">
                        {NAVIGATION_DATA[category].map((item) => (
                          <Link
                            key={item}
                            href={generateUrl(category, item)}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setExpandedMobile(null)
                            }}
                          >
                            • {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* AI Investor Corner */}
                <Link
                  href="/ai-investor-corner"
                  className="block px-4 py-2 text-sm font-semibold uppercase hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  💼 AI Investor Corner
                </Link>

                {/* Subscribe Button - Mobile */}
                <div className="px-4 pt-4">
                  <Link
                    href="/subscribe"
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-bold transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🚀 Subscribe Now
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
