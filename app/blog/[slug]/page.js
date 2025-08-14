'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import '@/components/BlogPost/BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()

  // Function to scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight - 20
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  // Check if this is the Morocco travel guide
  if (slug !== 'morocco-travel-guide') {
    return (
      <div className="blog-post-container">
        <div className="blog-post-not-found">
          <h1>Article not found</h1>
          <p>The article you're looking for does not exist or has been moved.</p>
          <Link href="/blog" className="back-to-blog">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-post-container">

    

      {/* Article Header */}
      <header className="blog-post-hero">
        <Image 
          src="/assets/blog/SAHARA-DESERT-in-Morocco.webp"
          alt="Morocco Travel Guide"
          fill
          style={{ objectFit: 'cover' }}
          className="blog-post-hero-image"
          priority
        />
        <div className="blog-post-hero-overlay">
          <div className="blog-post-hero-content">
            <div className="blog-post-category">Travel Guide</div>
            <h1 className="blog-post-title">About Morocco — Travel Guide</h1>
            <div className="blog-post-meta">
              <span className="blog-post-author">By AJI Team</span>
              <span>•</span>
              <span className="blog-post-date">January 2025</span>
              <span>•</span>
              <span className="blog-post-read-time">Complete Guide</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="blog-post-main">
        {/* Table of Contents */}
        <div className="table-of-contents">
          <div className="toc-header">
            <h2>Table of Contents</h2>
            <p>Click on a section to navigate directly</p>
          </div>
          <div className="toc-grid">
            <button className="toc-item" onClick={(e) => scrollToSection(e, 'about-morocco')}>
              <span className="toc-text">About Morocco</span>
            </button>
            <button className="toc-item" onClick={(e) => scrollToSection(e, 'geography')}>
              <span className="toc-text">Geography & Climate</span>
            </button>
            <button className="toc-item" onClick={(e) => scrollToSection(e, 'currency')}>
              <span className="toc-text">Currency (Dirham)</span>
            </button>
            <button className="toc-item" onClick={(e) => scrollToSection(e, 'languages')}>
              <span className="toc-text">Languages</span>
            </button>
            <button className="toc-item" onClick={(e) => scrollToSection(e, 'royal-family')}>
              <span className="toc-text">Kingdom of Morocco</span>
            </button>
            <button className="toc-item" onClick={(e) => scrollToSection(e, 'culture')}>
              <span className="toc-text">Culture & Traditions</span>
            </button>
            <button className="toc-item" onClick={(e) => scrollToSection(e, 'historical-sites')}>
              <span className="toc-text">Historical Sites</span>
            </button>
            <button className="toc-item" onClick={(e) => scrollToSection(e, 'cuisine')}>
              <span className="toc-text">Moroccan Cuisine</span>
            </button>
            <button className="toc-item" onClick={(e) => scrollToSection(e, 'phrases')}>
              <span className="toc-text">Useful Phrases</span>
            </button>
          </div>
        </div>

        <article className="blog-post-content">
          {/* Basic Information */}
          <div className="article-section" id="about-morocco">
            <h3>About Morocco</h3>
            <ul className="info-list">
              <li>Morocco is in Northwest Africa, bordering Spain (via the Strait of Gibraltar), Mauritania to the south, Algeria to the east, and the Atlantic Ocean to the west.</li>
              <li><strong>Population of Morocco:</strong> Around 37 million people (2025)</li>
              <li><strong>Capital city:</strong> Rabat</li>
              <li><strong>Other major cities in Morocco:</strong> Casablanca, Marrakech, Fes, Tangier</li>
              <li><strong>Time zone in Morocco:</strong> GMT+1</li>
              <li><strong>Government:</strong> Morocco is a kingdom in North Africa, ruled by King Mohammed VI since 1999, from the Alaouite dynasty</li>
            </ul>
          </div>

          {/* Geography */}
          <div className="article-section" id="geography">
            <h3>Geography of Morocco — Natural Beauty & Landscapes</h3>
            <ul className="info-list">
              <li>Morocco has coastlines on both the Atlantic Ocean and the Mediterranean Sea, totaling around 3,500 km</li>
              <li><strong>Diverse geography includes:</strong></li>
              <li>• Atlas Mountains (High Atlas, Middle Atlas, Anti-Atlas)</li>
              <li>• Rif Mountains in the north</li>
              <li>• The Sahara Desert in the south and southeast</li>
              <li><strong>Highest mountain in Morocco:</strong> Mount Toubkal (4,167 meters)</li>
            </ul>
            
            <h4>Climate in Morocco:</h4>
            <ul className="info-list">
              <li>Mediterranean climate in the north (mild winters, hot summers)</li>
              <li>Oceanic climate along the Atlantic coast (cool and breezy)</li>
              <li>Snow in Morocco's mountains</li>
              <li>Hot desert climate in the south</li>
            </ul>
            
            <div className="image-grid">
              <div className="article-image">
                <Image 
                  src="/assets/blog/High-Atlas-mountains-morocco.webp"
                  alt="Atlas Mountains" 
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
                <figcaption>Atlas Mountains</figcaption>
              </div>
              <div className="article-image">
                <Image 
                  src="/assets/blog/SAHARA-DESERT-in-Morocco.webp"
                  alt="Sahara Desert" 
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
                <figcaption>Sahara Desert dunes</figcaption>
              </div>
              <div className="article-image">
                <Image 
                  src="/assets/blog/Atlantic-coast-surf-Morocco.webp"
                  alt="Atlantic coast" 
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
                <figcaption>Atlantic coast</figcaption>
              </div>
            </div>
          </div>

          {/* Currency */}
          <div className="article-section" id="currency">
            <h3>Currency in Morocco — Moroccan Dirham (MAD)</h3>
            <div className="article-image">
              <Image 
                src="/assets/blog/Moroccan-dirham-banknote-and-coins.webp"
                alt="Moroccan Dirham banknotes and coins" 
                width={500}
                height={350}
                style={{ objectFit: 'cover' }}
              />
              <figcaption>Moroccan Dirham banknotes and coins</figcaption>
            </div>
            <ul className="info-list">
              <li>The local currency is the Moroccan Dirham (MAD)</li>
              <li><strong>Exchange rates (approximate):</strong></li>
              <li>• 1 Euro = about 11 MAD</li>
              <li>• 1 US Dollar = about 10 MAD</li>
              <li>Cash in Morocco is preferred in markets and taxis</li>
              <li>Credit cards in Morocco are accepted in major hotels, restaurants, and shops</li>
              <li>ATMs in Morocco are widely available in cities and tourist areas</li>
              <li>Bargaining in Moroccan markets is common and expected</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="article-section" id="languages">
            <h3>Languages Spoken in Morocco — Communication Tips</h3>
            <ul className="info-list">
              <li>The main language is Moroccan Arabic (Darija)</li>
              <li>French in Morocco is widely spoken</li>
              <li>Berber (Tamazight) is spoken by many communities</li>
              <li>English in Morocco is increasingly used in tourism</li>
              <li>Spanish is spoken in the northern regions of Morocco</li>
            </ul>
          </div>

          {/* Royal Family */}
          <div className="article-section" id="royal-family">
            <h3>The Kingdom of Morocco — Royal Family & History</h3>
            <div className="article-image">
              <Image 
                src="/assets/blog/King-mohamed-VI, Moulay-Hassan-and-Moulay-Rachid.webp"
                alt="King Mohammed VI and his son" 
                width={500}
                height={350}
                style={{ objectFit: 'cover' }}
              />
              <figcaption>King Mohammed VI and his son</figcaption>
            </div>
            <ul className="info-list">
              <li>Morocco has been ruled by the Alaouite dynasty since 1666</li>
              <li>Gained independence in 1956, transitioning into a modern monarchy</li>
              <li>Today's monarch is King Mohammed VI, ruling since 1999</li>
            </ul>
          </div>

          {/* Culture */}
          <div className="article-section" id="culture">
            <h3>Moroccan Culture — Traditions & Identity</h3>
            <p>
              Morocco has a vibrant, multicultural identity shaped by Arab, Berber, African, 
              Andalusian, and French influences.
            </p>
            <ul className="info-list">
              <li>This cultural blend is visible in Moroccan architecture, music, traditions, and daily life</li>
            </ul>
            
            <div className="article-image">
              <Image 
                src="/assets/blog/Moroccan-clothing-and-crafts.webp"
                alt="Traditional clothing or crafts" 
                width={500}
                height={350}
                style={{ objectFit: 'cover' }}
              />
              <figcaption>Traditional clothing or crafts</figcaption>
            </div>

            <h4>Traditional Moroccan Clothing</h4>
            <ul className="info-list">
              <li><strong>Djellaba</strong> — traditional robe worn by men and women</li>
              <li><strong>Caftan</strong> — ornate dress worn by women for special occasions</li>
              <li>Traditional clothing reflects Moroccan heritage and cultural pride</li>
            </ul>

            <h4>Moroccan Hospitality</h4>
            <ul className="info-list">
              <li>Guests are welcomed with kindness, mint tea, and a smile</li>
              <li>Morocco blends tradition and modernity, making it a unique cultural destination</li>
            </ul>
          </div>

          {/* Historical Sites */}
          <div className="article-section" id="historical-sites">
            <h3>Top Historical & UNESCO Sites in Morocco</h3>
            <div className="article-image">
              <Image 
                src="/assets/blog/Fes-medina.webp"
                alt="Fes Medina or Ait Ben Haddou" 
                width={500}
                height={350}
                style={{ objectFit: 'cover' }}
              />
              <figcaption>Fes Medina or Ait Ben Haddou</figcaption>
            </div>
            <ul className="info-list">
              <li><strong>Fes el-Bali</strong> — ancient medina of Fes, car-free with markets and madrasas</li>
              <li><strong>Ait Ben Haddou</strong> — clay village featured in Hollywood movies</li>
              <li><strong>Marrakech Medina</strong> — historic center with souks, palaces, and mosques</li>
              <li><strong>Volubilis</strong> — well-preserved Roman ruins with mosaics</li>
              <li><strong>Essaouira</strong> — coastal town with fortifications and art culture</li>
            </ul>
          </div>

          {/* Cuisine */}
          <div className="article-section" id="cuisine">
            <h3>What to Eat in Morocco — Traditional Moroccan Cuisine</h3>
            <ul className="info-list">
              <li><strong>Tagine</strong> — slow-cooked stew with meat, chicken, or vegetables</li>
              <li><strong>Couscous Morocco</strong> — served with vegetables and meat, a Friday favorite</li>
              <li><strong>Pastilla</strong> — layered pastry with chicken or seafood, sweet and savory</li>
              <li><strong>Harira soup</strong> — made with lentils, chickpeas, tomatoes, and herbs</li>
              <li><strong>Mint tea</strong> — national drink and sign of hospitality</li>
            </ul>

            <h4>Moroccan sweets:</h4>
            <ul className="info-list">
              <li><strong>Shebakia</strong> — fried pastry dipped in honey</li>
              <li><strong>Briwat</strong> — sweet or savory stuffed pastries</li>
            </ul>

            <div className="image-grid cuisine-grid">
              <div className="article-image">
                <Image 
                  src="/assets/blog/Moroccan-Tagine.webp"
                  alt="Tagine dish" 
                  width={250}
                  height={200}
                  style={{ objectFit: 'cover' }}
                />
                <figcaption>Tagine dish</figcaption>
              </div>
              <div className="article-image">
                <Image 
                  src="/assets/blog/Moroccan-couscous.webp"
                  alt="Couscous plate" 
                  width={250}
                  height={200}
                  style={{ objectFit: 'cover' }}
                />
                <figcaption>Couscous plate</figcaption>
              </div>
              <div className="article-image">
                <Image 
                  src="/assets/blog/Moroccan-pastilla.webp"
                  alt="Pastilla pie" 
                  width={250}
                  height={200}
                  style={{ objectFit: 'cover' }}
                />
                <figcaption>Pastilla pie</figcaption>
              </div>
              <div className="article-image">
                <Image 
                  src="/assets/blog/Moroccan-harrira.webp"
                  alt="Harira soup" 
                  width={250}
                  height={200}
                  style={{ objectFit: 'cover' }}
                />
                <figcaption>Harira soup</figcaption>
              </div>
              <div className="article-image">
                <Image 
                  src="/assets/blog/Moroccan-Mint-tea.webp"
                  alt="Mint tea" 
                  width={250}
                  height={200}
                  style={{ objectFit: 'cover' }}
                />
                <figcaption>Mint tea</figcaption>
              </div>
              <div className="article-image">
                <Image 
                  src="/assets/blog/Moroccan-Shebakia.webp"
                  alt="Shebakia and Briwat" 
                  width={250}
                  height={200}
                  style={{ objectFit: 'cover' }}
                />
                <figcaption>Shebakia and Briwat</figcaption>
              </div>
            </div>
          </div>

          {/* Phrases */}
          <div className="article-section" id="phrases">
            <h3>Useful Moroccan Phrases for Tourists</h3>
            <p><strong>English - Moroccan Arabic (Darija)</strong></p>
            <div className="phrases-grid">
              <div className="phrase-item">
                <strong>Hello</strong> - Salam
              </div>
              <div className="phrase-item">
                <strong>Thank you</strong> - Shukran
              </div>
              <div className="phrase-item">
                <strong>How much is it?</strong> - Bsh-hal hada?
              </div>
              <div className="phrase-item">
                <strong>Yes / No</strong> - Ah / La
              </div>
              <div className="phrase-item">
                <strong>Delicious</strong> - Bnin!
              </div>
              <div className="phrase-item">
                <strong>Please</strong> - Afak
              </div>
              <div className="phrase-item">
                <strong>I don't understand</strong> - Ma fhemtsh
              </div>
              <div className="phrase-item">
                <strong>Goodbye</strong> - Bslama
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Navigation */}
      <nav className="blog-post-navigation">
        <Link href="/blog" className="back-to-blog">
          ← Back to Blog
        </Link>
      </nav>
    </div>
  )
}