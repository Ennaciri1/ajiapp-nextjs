import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="footer" className="aji-footer">
      <div className="footer-logo">
        <Image 
          src="/assets/logoWhite.svg" 
          alt="AJI logo" 
          width={90}
          height={60}
        />
      </div>

      <div className="footer-content">
        <div className="footer-left">
          <Image 
            src="/assets/email-icon.svg" 
            alt="email icon" 
            width={44}
            height={44}
            className="email-icon" 
          />
          <div className="email-text">
            <div className="email-label">Email Us</div>
            <a href="mailto:Contact@ajiapp.com" className="email-link">
              Contact@ajiapp.com
            </a>
          </div>
        </div>

        <div className="footer-right">
          <p>© 2025 AJI | All rights reserved</p>

          <div className="footer-links">
            <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <span className="footer-separator"> | </span>
            <Link href="/terms" className="footer-link">Terms &amp; Conditions</Link>
            <span className="footer-separator"> | </span>
            <Link href="/account-deletion" className="footer-link">Account Deletion</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
