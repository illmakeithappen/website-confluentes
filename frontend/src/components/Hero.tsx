import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero section-full">
      <div className="hero-background">
        <div className="hero-bg-element element-1" style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}></div>
        <div className="hero-bg-element element-2" style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
        }}></div>
      </div>
      
      <div className="container-wide">
        <div className="hero-content">
          <div className={`hero-text-wrapper ${loaded ? 'loaded' : ''}`}>
            <span className="hero-label animate-in">Confluentes Real Estate</span>
            
            <h1 className="hero-title">
              <span className="title-word animate-in stagger-1">Nachhaltige</span>
              <span className="title-word animate-in stagger-2">Vermögenswerte</span>
              <span className="title-word italic animate-in stagger-3">für Generationen</span>
            </h1>
            
            <div className="hero-line animate-in stagger-4"></div>
            
            <p className="hero-description animate-in stagger-5">
              Als Ihr vertrauensvoller Partner begleiten wir Sie mit Erfahrung, 
              Struktur und Weitblick beim Aufbau Ihres Immobilienvermögens. 
              Seit über 15 Jahren gestalten wir gemeinsam Ihre finanzielle Zukunft.
            </p>
            
            <div className="hero-cta animate-in stagger-5">
              <button className="btn btn-outline">
                Beratung vereinbaren
              </button>
              <button className="btn btn-text">
                Portfolio entdecken
              </button>
            </div>
          </div>
          
          <div className={`hero-metrics ${loaded ? 'loaded' : ''}`}>
            <div className="metric-item">
              <span className="metric-value">500+</span>
              <span className="metric-label">Vermittelte Objekte</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-value">250M€</span>
              <span className="metric-label">Investitionsvolumen</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-value">98%</span>
              <span className="metric-label">Kundenzufriedenheit</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
