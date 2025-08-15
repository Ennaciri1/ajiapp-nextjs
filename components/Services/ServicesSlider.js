'use client'

import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

// Import Slick styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ServicesSlider() {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const getSlidesToShow = () => {
    if (windowWidth < 480) return 1
    if (windowWidth < 768) return 1
    if (windowWidth < 992) return 2
    if (windowWidth < 1200) return 2.5
    return 3
  }

  const getCenterPadding = () => {
    if (windowWidth < 480) return '20px'
    if (windowWidth < 768) return '30px'
    return '60px'
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    centerMode: true,
    centerPadding: getCenterPadding(),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '60px'
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '50px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
          dots: true,
          arrows: true
        }
      }
    ]
  }

  const services = [
    { 
      img: '/assets/Portes/Hotels AJIAPP.webp',
      alt: "Hotels"
    },
    { 
      img: '/assets/Portes/E-sim AJIAPP.webp',
      alt: "E-SIM"
    },
    { 
      img: '/assets/Portes/Visa AJIAPP.webp',
      alt: "Visa"
    },
    { 
      img: '/assets/Portes/visit Morocco AJIAPP.webp',
      alt: "Visit Morocco"
    },
    { 
      img: '/assets/Portes/Your team AJIAPP.webp',
      alt: "Your Team"
    }
  ]

  if (windowWidth === 0) {
    return <div>Loading...</div>
  }

  return (
    <section id="services" className="services-slider-wrapper">
      <div className="services-slider-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">Everything you need for your Moroccan adventure</p>
        
        <Slider {...settings}>
          {services.map((service, index) => (
            <div className="service-slide" key={index}>
              <Image 
                src={service.img} 
                alt={service.alt} 
                width={280}
                height={200}
                className="service-image" 
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}