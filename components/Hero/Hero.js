'use client'

import Image from 'next/image'

export default function Hero() {
  const scrollToDownload = () => {
    const element = document.getElementById('download')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <Image 
            src="/assets/images/phone-mockup.webp"
            alt="Phone Mockup" 
            width={800}
            height={600}
            priority
          />
        </div>
        
        <div className="hero-text">
          <h1>Your only guide to Morocco</h1>
          <p>A travel guide app that helps users plan their trip in Morocco.</p>
          
          <div className="download-button-container">
            <button 
              onClick={scrollToDownload}
              className="download-button"
            >
              Download Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}