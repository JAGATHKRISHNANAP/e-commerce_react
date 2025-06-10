import React, { useState, useEffect } from 'react'

const HeroBanner = ({ onShopNow }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const slides = [
    {
      id: 1,
      title: "Welcome to E-commerce",
      subtitle: "Discover Amazing Products at Unbeatable Prices",
      description: "Browse through thousands of quality products from top brands. Fast delivery, secure payments, and excellent customer service.",
      buttonText: "Shop Now",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      emoji: "🛒"
    },
    {
      id: 2,
      title: "Flash Sale - Up to 70% Off",
      subtitle: "Limited Time Offer on Electronics",
      description: "Don't miss out on incredible deals on smartphones, laptops, and gadgets. Sale ends soon!",
      buttonText: "View Deals",
      background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
      emoji: "⚡"
    },
    {
      id: 3,
      title: "New Arrivals",
      subtitle: "Latest Products Just Added",
      description: "Be the first to discover our newest collection of trending products and exclusive items.",
      buttonText: "Explore New",
      background: "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)",
      emoji: "✨"
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section style={{
      position: 'relative',
      height: '400px',
      borderRadius: '16px',
      overflow: 'hidden',
      marginBottom: '32px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
    }}>
      {/* Slides Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: slide.background,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: index === currentSlide ? 1 : 0,
              transform: `translateX(${(index - currentSlide) * 100}%)`,
              transition: 'all 0.6s ease-in-out',
              color: 'white'
            }}
          >
            {/* Content */}
            <div style={{
              textAlign: 'center',
              maxWidth: '600px',
              padding: '0 24px',
              zIndex: 2
            }}>
              <div style={{
                fontSize: '64px',
                marginBottom: '16px',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
              }}>
                {slide.emoji}
              </div>
              
              <h1 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                margin: '0 0 12px 0',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                lineHeight: '1.2'
              }}>
                {slide.title}
              </h1>
              
              <h2 style={{
                fontSize: '20px',
                fontWeight: '500',
                margin: '0 0 16px 0',
                opacity: 0.95,
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.2)'
              }}>
                {slide.subtitle}
              </h2>
              
              <p style={{
                fontSize: '16px',
                margin: '0 0 24px 0',
                opacity: 0.9,
                lineHeight: '1.5',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)'
              }}>
                {slide.description}
              </p>
              
              <button
                onClick={onShopNow}
                style={{
                  padding: '16px 32px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.3)'
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)'
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)'
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)'
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                }}
              >
                {slide.buttonText} →
              </button>
            </div>

            {/* Background Pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='4'/%3E%3Ccircle cx='53' cy='53' r='4'/%3E%3Ccircle cx='7' cy='53' r='4'/%3E%3Ccircle cx='53' cy='7' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              zIndex: 1
            }} />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '50px',
          height: '50px',
          background: 'rgba(255, 255, 255, 0.2)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          fontSize: '20px',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseOver={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.3)'
          e.target.style.transform = 'translateY(-50%) scale(1.1)'
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.2)'
          e.target.style.transform = 'translateY(-50%) scale(1)'
        }}
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '50px',
          height: '50px',
          background: 'rgba(255, 255, 255, 0.2)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          fontSize: '20px',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseOver={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.3)'
          e.target.style.transform = 'translateY(-50%) scale(1.1)'
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.2)'
          e.target.style.transform = 'translateY(-50%) scale(1)'
        }}
      >
        →
      </button>

      {/* Slide Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        zIndex: 3
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.5)',
              background: index === currentSlide 
                ? 'rgba(255, 255, 255, 0.9)' 
                : 'rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              if (index !== currentSlide) {
                e.target.style.background = 'rgba(255, 255, 255, 0.6)'
              }
            }}
            onMouseOut={(e) => {
              if (index !== currentSlide) {
                e.target.style.background = 'rgba(255, 255, 255, 0.3)'
              }
            }}
          />
        ))}
      </div>

      {/* Auto-play Indicator */}
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(0, 0, 0, 0.3)',
        padding: '8px 12px',
        borderRadius: '20px',
        zIndex: 3
      }}>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: isAutoPlaying ? '#28a745' : '#dc3545',
          animation: isAutoPlaying ? 'pulse 1.5s infinite' : 'none'
        }} />
        <span style={{
          color: 'white',
          fontSize: '12px',
          fontWeight: '500'
        }}>
          {isAutoPlaying ? 'Auto' : 'Manual'}
        </span>
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
    </section>
  )
}

export default HeroBanner