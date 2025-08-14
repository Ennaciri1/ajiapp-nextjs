export const smoothScrollTo = (elementId, offset = 100) => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

export const smoothScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export const smoothScrollToElement = (element, offset = 100) => {
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

export const handleSmoothNavigation = (target, isExternal = false, offset = 100) => {
  if (isExternal) {
    return
  }

  if (window.location.pathname === '/') {
    setTimeout(() => {
      smoothScrollTo(target, offset)
    }, 100)
  } else {
    window.location.href = `/#${target}`
  }
}
