import Link from 'next/link'
import Image from 'next/image'
import '@/components/Blog/Blog.css'

export const metadata = {
  title: 'Morocco Travel Guide | AjiApp Blog',
  description: 'Discover the magic of Morocco through our comprehensive travel guide. Learn about culture, geography, cuisine, and practical travel tips.',
  keywords: ['Morocco travel guide', 'Morocco tourism', 'Travel Morocco', 'Morocco culture', 'Morocco destinations'],
}

export default function BlogPage() {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <div className="blog-header-content">
          <h1 className="blog-title">Discover Morocco</h1>
          <p className="blog-subtitle">
            Your ultimate travel companion for exploring the beauty, culture, and adventures 
            that Morocco has to offer. From ancient medinas to desert dunes.
          </p>
         
        </div>
      </header>

      <main className="blog-main">
        <div className="blog-content">
          <div className="blog-card-wrapper">
            <Link href="/blog/morocco-travel-guide" className="blog-card-link">
              <article className="blog-card">
                <div className="blog-card-image">
                  <Image 
                    src="/assets/blog/SAHARA-DESERT-in-Morocco.webp"
                    alt="Morocco Travel Guide"
                    width={500}
                    height={280}
                    className="blog-card-img"
                    priority
                  />
                  <div className="blog-category">Travel Guide</div>
                </div>
                
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-date">January 2025</span>
                    <span className="blog-read-time">Complete Guide</span>
                  </div>
                  
                  <h2 className="blog-card-title">About Morocco — Complete Travel Guide</h2>
                  
                  <p className="blog-card-excerpt">
                    Your complete guide to exploring the Kingdom of Morocco. Discover the geography, 
                    culture, cuisine, and everything you need to know about this fascinating country. 
                    From bustling medinas to the serene Sahara Desert.
                  </p>

                  <div className="blog-card-tags">
                    <span className="tag">Morocco</span>
                    <span className="tag">Travel</span>
                    <span className="tag">Culture</span>
                    <span className="tag">Cuisine</span>
                    <span className="tag">History</span>
                  </div>

                  <div className="blog-card-cta">
                    <span className="read-more">Read Full Guide</span>
                  </div>
                </div>
              </article>
            </Link>
          </div>

         
        </div>

      </main>
    </div>
  )
}