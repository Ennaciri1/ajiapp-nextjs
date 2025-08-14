import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import BackToTop from '@/components/BackToTop/BackToTop'

export const metadata = {
  title: 'AjiApp - Your Guide to Morocco',
  description: 'A travel guide app that helps users plan their trip in Morocco.',
  keywords: ['Morocco', 'Travel', 'AjiApp', 'Tourism', 'Guide'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  )
}