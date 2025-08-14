import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import BackToTop from '@/components/BackToTop/BackToTop'
import Download from '@/components/Download/Download'

// Metadata configuration (sans viewport)
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

// Viewport configuration séparée (NOUVEAU dans Next.js 15)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8B181A' },
    { media: '(prefers-color-scheme: dark)', color: '#8B181A' },
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning>
        <div className="app">
          <Header />
          <main>{children}</main>
          <Download />
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  )
}