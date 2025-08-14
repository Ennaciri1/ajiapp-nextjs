import '../../components/PrivacyPolicy/PrivacyPolicy.css'

export const metadata = {
  title: 'Privacy Policy | AjiApp',
  description: 'AjiApp Privacy Policy - How we collect, use, and protect your personal data.',
}

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1 className="privacy-title">Privacy Policy</h1>

        <p className="privacy-intro">
          This Privacy Policy explains how AjiApp ("we", "us", "our") collects, uses, discloses, and safeguards your
          personal data when you visit ajiapp.com or use our mobile application. It is designed to comply with the
          GDPR, CCPA, and FTC guidance.
        </p>

        <div className="privacy-section">
          <h2 className="section-title">1. Information We Collect</h2>
          <ul className="privacy-list">
            <li><span className="highlight">Account Registration:</span> Name, email address, password</li>
            <li><span className="highlight">Profile Data:</span> Profile picture, preferences, bio</li>
            <li><span className="highlight">Support Correspondence:</span> Emails and chat logs</li>
            <li><span className="highlight">Usage Data:</span> Pages visited, features used, session duration</li>
            <li><span className="highlight">Device & Log Data:</span> IP address, device type, OS, crash reports</li>
            <li><span className="highlight">Cookies & Tracking:</span> Cookies, web beacons, local storage</li>
            <li><span className="highlight">Social Media Login:</span> Name and email from Google/Facebook</li>
            <li><span className="highlight">Analytics:</span> Data from Google Analytics, Facebook Pixel, etc.</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2 className="section-title">2. How We Use Your Information</h2>
          <ul className="privacy-list">
            <li>To operate and maintain AjiApp services</li>
            <li>To personalize content and communications</li>
            <li>To detect abuse and secure our systems</li>
            <li>To send newsletters and promotional offers</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2 className="section-title">3. Sharing of Information</h2>
          <ul className="privacy-list">
            <li><span className="highlight">With Service Providers:</span> For hosting, analytics, support</li>
            <li><span className="highlight">Legal Requirements:</span> Court orders, legal obligations</li>
            <li><span className="highlight">With Your Consent:</span> For other purposes you approve</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2 className="section-title">4. Contact Us</h2>
          <p>If you have questions or want to exercise your rights, contact us at: <span className="contact-email">contact@ajiapp.ma</span></p>
        </div>

        <p className="privacy-updated">Last updated: May 6, 2025</p>
      </div>
    </div>
  )
}
