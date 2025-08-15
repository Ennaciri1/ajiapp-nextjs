'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef(null)

  // Client-side hydration fix
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Stable smooth scroll function
  const smoothScrollTo = useCallback((target, isTop = false) => {
    if (!isClient) return
    
    // Close mobile menu immediately
    setMobileMenuOpen(false)
    
    // Handle external pages
    if (pathname !== '/') {
      window.location.href = `/#${target}`
      return
    }
    
    // Scroll to top
    if (isTop) {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      })
      return
    }

    // Scroll to element with stable offset
    const element = document.getElementById(target)
    if (element) {
      const headerHeight = headerRef.current?.offsetHeight || 70
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 10

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      })
    }
  }, [pathname, isClient])

  // Stable scroll handler with throttling
  useEffect(() => {
    if (!isClient) return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset > 20
          setIsScrolled(scrolled)
          ticking = false
        })
        ticking = true
      }
    }

    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClient])

  // Handle window resize - stable
  useEffect(() => {
    if (!isClient) return

    const handleResize = () => {
      // Close mobile menu on desktop resize
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen, isClient])

  // Stable body scroll lock
  useEffect(() => {
    if (!isClient) return

    if (mobileMenuOpen) {
      // Save current scroll position
      const scrollY = window.pageYOffset
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }

    return () => {
      // Cleanup on unmount
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [mobileMenuOpen, isClient])

  // Handle escape key - stable
  useEffect(() => {
    if (!isClient || !mobileMenuOpen) return

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen, isClient])

  // Stable event handlers
  const toggleMobileMenu = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  const handlePageNavigation = useCallback((e, targetPath) => {
    e.preventDefault()
    closeMobileMenu()
    
    // Small delay to ensure menu closes
    setTimeout(() => {
      window.location.href = targetPath
    }, 100)
  }, [closeMobileMenu])

  // Navigation items
  const navItems = [
    { id: 'top', label: 'Why Aji', isTop: true },
    { id: 'howitworks', label: 'How It Works' },
    { id: 'services', label: 'Services' },
    { id: 'blog', label: 'Blog', isExternal: true, href: '/blog' },
    { id: 'download', label: 'Download' },
    { id: 'footer', label: 'Contact' }
  ]

  // Server-side fallback
  if (!isClient) {
    return (
      <header className="header" ref={headerRef}>
        <div className="container">
          <div className="header-logo">
            <Link href="/">
              <Image 
                src="/assets/logos/aji-logo.svg" 
                alt="AjiApp" 
                width={80}
                height={45}
                priority
              />
            </Link>
          </div>

          <nav className="header-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.isExternal ? (
                    <Link href={item.href} className="nav-link">
                      {item.label}
                    </Link>
                  ) : (
                    <Link href={`/#${item.id}`} className="nav-link">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-cta">
            <Link href="/#download" className="btn">
              Download App
            </Link>
          </div>
        </div>
      </header>
    )
  }

  return (
    <>
      <header 
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        ref={headerRef}
      >
        <div className="container">
          {/* Logo */}
          <div className="header-logo">
            <Link href="/" onClick={closeMobileMenu}>
              <Image 
                src="/assets/logos/aji-logo.svg" 
                alt="AjiApp" 
                width={80}
                height={45}
                priority
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-button ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation */}
          <nav className={`header-nav ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.isExternal ? (
                    <Link 
                      href={item.href}
                      onClick={(e) => handlePageNavigation(e, item.href)}
                      className="nav-link"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button 
                      onClick={() => smoothScrollTo(item.id, item.isTop)}
                      className="nav-link"
                      type="button"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="header-cta">
            <button 
              onClick={() => smoothScrollTo('download')}
              className="btn"
              type="button"
            >
              Download App
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  )
}