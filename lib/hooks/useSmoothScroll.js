'use client'

import { useCallback } from 'react'
import { usePathname } from 'next/navigation'

export const useSmoothScroll = () => {
  const pathname = usePathname()

  const scrollToElement = useCallback((elementId, offset = 100) => {
    if (pathname !== '/') {
      window.location.href = `/#${elementId}`
      return
    }

    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }, [pathname])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  const navigateWithSmoothScroll = useCallback((target, isExternal = false, offset = 100) => {
    if (isExternal) {
      return
    }

    if (pathname === '/') {
      setTimeout(() => {
        scrollToElement(target, offset)
      }, 100)
    } else {
      window.location.href = `/#${target}`
    }
  }, [pathname, scrollToElement])

  const handleLinkClick = useCallback(
    (e, target, isExternal = false) => {
      if (isExternal) {
        return
      }

      e.preventDefault()

      if (pathname === '/') {
        setTimeout(() => {
          scrollToElement(target, 100)
        }, 100)
      } else {
        window.location.href = `/#${target}`
      }
    },
    [pathname, scrollToElement]
  )

  const handlePageNavigation = useCallback(() => {
    scrollToTop()
  }, [scrollToTop])

  return {
    scrollToElement,
    scrollToTop,
    navigateWithSmoothScroll,
    handleLinkClick,
    handlePageNavigation,
  }
}
