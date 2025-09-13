import React, { useEffect, useRef, useState } from 'react';
import './About.css';

interface AboutProps {
  isPreview?: boolean;
}

const About: React.FC<AboutProps> = ({ isPreview = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  if (isPreview) {
    return (
      <section ref={sectionRef} className="about-section section-large">
        <div className="container-wide">
          <div className="about-grid">
            <div className={`about-left ${isVisible ? 'visible' : ''}`}>
              <span className="section-label">Über Confluentes</span>
              <h2 className="large-heading">
                Wir gestalten
                <span className="text-italic"> Zukunft</span>
              </h2>
            </div>
            
            <div className={`about-right ${isVisible ? 'visible' : ''}`}>
              <div className="about-content">
                <p className="body-large">
                  Mit über 15 Jahren Erfahrung im Immobilienmarkt sind wir Ihr 
                  vertrauensvoller Berater für Kapitalanlage-Immobilien.
                </p>
                <p className="body-regular">
                  Wir verstehen, dass der Aufbau von Vermögen mehr ist als nur 
                  eine Investition – es ist die Gestaltung Ihrer finanziellen 
                  Zukunft. Unser Name "Confluentes" symbolisiert den Zusammenfluss 
                  von Expertise, Vision und persönlicher Betreuung.
                </p>
                
                <div className="about-stats">
                  <div className="stat-block">
                    <span className="stat-number">15+</span>
                    <span className="stat-text">Jahre Expertise</span>
                  </div>
                  <div className="stat-block">
                    <span className="stat-number">500+</span>
                    <span className="stat-text">Erfolgreiche Projekte</span>
                  </div>
                </div>
                
                <button className="btn btn-text">
                  Mehr über uns erfahren
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-visual">
          <div className="visual-element"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="about-full section-large">
      <div className="container-narrow">
        <div className="about-header">
          <span className="section-label">Über uns</span>
          <h1 className="display-heading">
            Erfahrung trifft
            <span className="text-italic"> Innovation</span>
          </h1>
        </div>

        <div className="about-intro">
          <div className="intro-grid">
            <div className="intro-left">
              <h3 className="medium-heading">Unsere Philosophie</h3>
            </div>
            <div className="intro-right">
              <p className="body-large">
                Confluentes Real Estate wurde mit einer klaren Vision gegründet: 
                Menschen dabei zu unterstützen, durch kluge Immobilieninvestitionen 
                nachhaltige Vermögenswerte aufzubauen.
              </p>
              <p className="body-regular">
                Was als kleine Beratungsfirma begann, hat sich zu einem angesehenen 
                Partner für anspruchsvolle Investoren entwickelt. Unser Name – 
                lateinisch für "Zusammenfluss" – symbolisiert unsere Philosophie: 
                Wir bringen Expertise, Marktkenntnis und persönliche Betreuung 
                zusammen, um für unsere Kunden optimale Ergebnisse zu erzielen.
              </p>
            </div>
          </div>
        </div>

        <div className="about-values">
          <h3 className="section-title">Unsere Werte</h3>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-number">01</span>
              <h4>Vertrauen</h4>
              <p>Die Basis jeder erfolgreichen Zusammenarbeit</p>
            </div>
            <div className="value-card">
              <span className="value-number">02</span>
              <h4>Expertise</h4>
              <p>Fundiertes Wissen und kontinuierliche Weiterbildung</p>
            </div>
            <div className="value-card">
              <span className="value-number">03</span>
              <h4>Nachhaltigkeit</h4>
              <p>Langfristige Strategien für dauerhaften Erfolg</p>
            </div>
            <div className="value-card">
              <span className="value-number">04</span>
              <h4>Innovation</h4>
              <p>Moderne Ansätze in einem traditionellen Markt</p>
            </div>
          </div>
        </div>

        <div className="about-team">
          <div className="team-header">
            <h3 className="medium-heading">Das Team</h3>
            <p className="body-large">
              Experten mit Leidenschaft für exzellente Beratung
            </p>
          </div>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="member-info">
                <h4>Maximilian Weber</h4>
                <span className="member-role">Geschäftsführer</span>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="member-info">
                <h4>Dr. Sarah Schmidt</h4>
                <span className="member-role">Leiterin Investment</span>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="member-info">
                <h4>Thomas Müller</h4>
                <span className="member-role">Senior Berater</span>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="member-info">
                <h4>Anna Fischer</h4>
                <span className="member-role">Marktanalyse</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
