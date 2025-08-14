import Image from 'next/image'

export default function WhyAji() {
  return (
    <section id="whyaji" className="why-aji-section">
      <div className="why-aji-container">
        <h2 className="why-aji-title">WHY AJI?</h2>
        <h3 className="why-aji-subtitle">Your all-in travel guide to Morocco</h3>
        <p className="why-aji-subdesc">
          Aji is an all in one travel guide to Morocco. Want to learn how to get your visa? buy an e-sim? or discover touristic sites and activities during your stay in Morocco? AJl is here to help you plan all aspects of your next trip to Morocco. Download AJI now!
        </p>

        <div className="phone-images">
          <Image 
            src="/assets/images/phone.webp"
            alt="Aji App Features" 
            width={800}
            height={600}
            className="phone-image"
          />
        </div>
      </div>
    </section>
  )
}