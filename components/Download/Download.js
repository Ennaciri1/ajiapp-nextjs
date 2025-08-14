import Image from 'next/image'

export default function Download() {
  return (
    <div id="download" className="app-download-container">
      <div className="download-card">
        <h2 className="card-subtitle">JOIN THE OTHERS</h2>
        <h1 className="card-title">Download The App Now</h1>
        <p className="card-description">
          Enjoy the Moroccan adventure in the smoothest way possible.
        </p>
        
        <div className="store-buttons">
          <a 
            href="https://apps.apple.com/us/app/ajiapp/id6747616013" 
            className="store-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Image 
              src="/assets/images/app-store.png"
              alt="Download on the App Store" 
              width={180}
              height={60}
              className="store-button"
            />
          </a>
          <a 
            href="https://play.google.com/store/apps/details?id=com.ajiapp.app&hl=en" 
            className="store-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Image 
              src="/assets/images/play-store.png"
              alt="Get it on Google Play" 
              width={180}
              height={60}
              className="store-button"
            />
          </a>
        </div>
      </div>
    </div>
  )
}