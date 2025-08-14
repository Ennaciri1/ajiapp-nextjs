'use client'

import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const scrollToTop = () => {
    if (!isClient) return
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toggleVisibility = () => {
    if (!isClient) return
    
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    if (!isClient) return

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    
    // Check initial scroll position
    toggleVisibility()
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [isClient])

  // Don't render on server or before client is ready
  if (!isClient || !isVisible) {
    return null
  }

  return (
    <button 
      className="back-to-top-button" 
      onClick={scrollToTop}
      aria-label="Back to top"
      type="button"
    >
      ↑
    </button>
  )
}