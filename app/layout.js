import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import BackToTop from '@/components/BackToTop/BackToTop'
import Download from '@/components/Download/Download'

// Metadata configuration
export const metadata = {
  title: 'AjiApp - Your Guide to Morocco',
  description: 'A travel guide app that helps users plan their trip in Morocco.',
  keywords: ['Morocco', 'Travel', 'AjiApp', 'Tourism', 'Guide'],
  robots: 'index, follow',
  authors: [{ name: 'AjiApp Team' }],
  creator: 'AjiApp',
  publisher: 'AjiApp',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AjiApp - Your Guide to Morocco',
    description: 'A travel guide app that helps users plan their trip in Morocco.',
    url: 'https://ajiapp.com',
    siteName: 'AjiApp',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AjiApp - Your Guide to Morocco',
    description: 'A travel guide app that helps users plan their trip in Morocco.',
  },
}

// Viewport configuration optimisé
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 3, // Réduit pour éviter les problèmes de zoom
  userScalable: true,
  themeColor: '#8B181A',
  viewportFit: 'cover', // Pour les devices avec notch
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Preload critical CSS pour éviter layout shift */}
        <link rel="preload" as="style" href="/globals.css" />
        {/* Meta pour éviter layout shift sur mobile */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body suppressHydrationWarning className="loading">
        {/* Wrapper avec classe loading pour éviter flash */}
        <div className="app">
          <Header />
          <main role="main" className="main-content">
            {children}
          </main>
          <Download />
          <Footer />
          <BackToTop />
        </div>
        
        {/* Script pour enlever classe loading après hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                document.body.classList.remove('loading');
              });
            `,
          }}
        />
      </body>
    </html>
  )
}