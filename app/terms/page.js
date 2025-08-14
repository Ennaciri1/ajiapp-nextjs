import '../../components/TermsAndConditions/TermsAndConditions.css'

export const metadata = {
  title: 'Terms and Conditions | AjiApp',
  description: 'AjiApp Terms and Conditions of Use',
}

export default function TermsAndConditions() {
  return (
    <div className="terms-wrapper">
      <div className="terms-container">
        <h1>Terms and Conditions of Use</h1>
        <p className="updated-date">Last Updated: 26/06/25</p>
        <p>
          Welcome to AJI – Your All-in-One Travel Companion for Morocco. By
          using the AJI mobile application ("App"), you agree to these Terms and
          Conditions. Please read them carefully before proceeding.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using this App, you confirm that you are at least 18
          years old and agree to be bound by these Terms. If you do not agree,
          please do not use the App.
        </p>

        <h2>2. Services Provided</h2>
        <p>AJI provides a range of services to assist travelers in Morocco, including:</p>
        <ul>
          <li>eSIM purchasing and activation</li>
          <li>Visa guidance and links</li>
          <li>Hotel and flight booking</li>
          <li>Ticket booking for events</li>
          <li>Local transportation and taxi services</li>
          <li>Emergency contact access</li>
          <li>Tourist and cultural guides</li>
        </ul>

        <h2>3. Contact</h2>
        <p>
          For any questions about these Terms, please contact us:<br />
          Email: <a href="mailto:aji@ajiapp.tech">aji@ajiapp.tech</a><br />
          Website: <a href="https://www.ajiapp.com">www.ajiapp.com</a>
        </p>
      </div>
    </div>
  )
}
