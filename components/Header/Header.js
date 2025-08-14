'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()

  // Fix hydration mismatch
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Custom smooth scroll function
  const smoothScrollTo = useCallback((target, isTop = false) => {
    if (!isClient) return
    
    setMobileMenuOpen(false)
    
    if (pathname !== '/') {
      document.body.classList.add('page-transitioning')
      setTimeout(() => {
        window.location.href = `/#${target}`
      }, 300)
      return
    }
    
    const scrollToTarget = () => {
      const currentPosition = window.pageYOffset
      let targetPosition
      
      if (isTop) {
        targetPosition = 0
      } else {
        const element = document.getElementById(target)
        if (!element) return
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top
        targetPosition = elementPosition + window.pageYOffset - headerOffset
      }
      
      const distance = targetPosition - currentPosition
      const duration = 1000
      let start = null
      
      const animation = (currentTime) => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const progress = Math.min(timeElapsed / duration, 1)
        
        const easeInOutCubic = (t) => {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
        }
        
        const easedProgress = easeInOutCubic(progress)
        window.scrollTo(0, currentPosition + distance * easedProgress)
        
        if (progress < 1) {
          requestAnimationFrame(animation)
        }
      }
      
      requestAnimationFrame(animation)
    }
    
    setTimeout(scrollToTarget, 100)
  }, [pathname, isClient])

  // Handle scroll effects
  useEffect(() => {
    if (!isClient) return

    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(scrollPosition > 50)
          
          if (scrollPosition > lastScrollY && scrollPosition > 100) {
            setIsHeaderVisible(false)
          } else {
            setIsHeaderVisible(true)
          }
          
          lastScrollY = scrollPosition
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isClient])

  // Handle resize
  useEffect(() => {
    if (!isClient) return

    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen, isClient])

  // Block scroll when mobile menu is open
  useEffect(() => {
    if (!isClient) return

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen, isClient])

  // Escape key to close menu
  useEffect(() => {
    if (!isClient) return

    const handleEscapeKey = (event) => {
      if (event.keyCode === 27 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [mobileMenuOpen, isClient])

  // Handle page load
  useEffect(() => {
    if (!isClient) return
    document.body.classList.remove('page-transitioning')
  }, [isClient])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  const handlePageNavigation = useCallback((e, targetPath) => {
    e.preventDefault()
    closeMobileMenu()
    
    if (!isClient) return
    
    document.body.classList.add('page-transitioning')
    
    setTimeout(() => {
      window.location.href = targetPath
    }, 300)
  }, [closeMobileMenu, isClient])

  // Don't render interactive elements until client-side
  if (!isClient) {
    return (
      <header className="header">
        <div className="container">
          <div className="header-logo">
            <Link href="/">
              <Image 
                src="/assets/logos/aji-logo.svg" 
                alt="Aji" 
                width={80}
                height={80}
                priority
              />
            </Link>
          </div>

          <nav className="header-nav" role="navigation" aria-label="Navigation principale">
            <ul>
              <li><Link href="/#top">Why Aji</Link></li>
              <li><Link href="/#howitworks">How It Works</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/#download">Download</Link></li>
              <li><Link href="/#footer">Contact</Link></li>
            </ul>
          </nav>

          <div className="header-cta">
            <Link href="/#download" className="btn">
              <span>Download App</span>
            </Link>
          </div>
        </div>
      </header>
    )
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''} ${isHeaderVisible ? 'visible' : 'hidden'}`}>
        <div className="container">
          <div className="header-logo">
            <Link href="/" onClick={closeMobileMenu}>
              <Image 
                src="/assets/logos/aji-logo.svg" 
                alt="Aji" 
                width={80}
                height={80}
                priority
              />
            </Link>
          </div>

          <button 
            className={`mobile-menu-button ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav 
            className={`header-nav ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}
            role="navigation"
            aria-label="Navigation principale"
          >
            <ul>
              <li>
                <a 
                  href="#top" 
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo('top', true)
                  }}
                >
                  Why Aji
                </a>
              </li>
              
              <li>
                <a 
                  href="#howitworks" 
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo('howitworks')
                  }}
                >
                  How It Works
                </a>
              </li>
              
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo('services')
                  }}
                >
                  Services
                </a>
              </li>
              
              <li>
                <a 
                  href="/blog" 
                  onClick={(e) => handlePageNavigation(e, '/blog')}
                >
                  Blog
                </a>
              </li>
              
              <li>
                <a 
                  href="#download" 
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo('download')
                  }}
                >
                  Download
                </a>
              </li>
              
              <li>
                <a 
                  href="#footer" 
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo('footer')
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-cta">
            <a 
              href="#download" 
              className="btn"
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo('download')
              }}
            >
              <span>Download App</span>
            </a>
          </div>
        </div>
      </header>

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