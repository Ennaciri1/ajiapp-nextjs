export default function HowItWorks() {
  return (
    <section id="howitworks" className="how-it-works-section">
      <div className="how-it-works-container">
        <h2 className="how-it-works-title">How It Works</h2>
        <p className="how-it-works-subtitle">Very Simple</p>

        <div className="steps-row">
          <div className="step">
            <div className="circle">1</div>
            <p className="step-text">Download the app</p>
          </div>

          <div className="line"></div>

          <div className="step">
            <div className="circle">2</div>
            <p className="step-text">Discover our services</p>
          </div>

          <div className="line"></div>

          <div className="step">
            <div className="circle">3</div>
            <p className="step-text">Enjoy your trip</p>
          </div>
        </div>
      </div>
    </section>
  )
}