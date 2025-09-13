import React, { useState } from 'react';
import './Services.css';

interface ServicesProps {
  isPreview?: boolean;
}

const Services: React.FC<ServicesProps> = ({ isPreview = false }) => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      number: '01',
      title: 'Investmentberatung',
      description: 'Individuelle Anlagestrategien basierend auf Ihrer finanziellen Situation.',
      details: 'Wir entwickeln maßgeschneiderte Investmentstrategien, die auf Ihre persönlichen Ziele und Ihre Risikobereitschaft abgestimmt sind. Durch fundierte Marktanalysen und jahrelange Expertise maximieren wir Ihr Renditepotenzial.',
      features: ['Portfolioanalyse', 'Risikobewertung', 'Renditeoptimierung', 'Steuerliche Optimierung']
    },
    {
      number: '02',
      title: 'Objektvermittlung',
      description: 'Zugang zu exklusiven Immobilienprojekten und Off-Market-Angeboten.',
      details: 'Unser Netzwerk ermöglicht uns Zugang zu den besten Objekten am Markt – oft bevor diese öffentlich angeboten werden. Wir begleiten Sie von der Objektauswahl bis zum erfolgreichen Abschluss.',
      features: ['Marktanalyse', 'Due Diligence', 'Vertragsverhandlung', 'Transaktionsbegleitung']
    },
    {
      number: '03',
      title: 'Vermögensverwaltung',
      description: 'Professionelle Betreuung Ihres Immobilienportfolios.',
      details: 'Wir übernehmen die aktive Verwaltung Ihrer Immobilieninvestments und sorgen für eine kontinuierliche Wertsteigerung. Regelmäßige Reports halten Sie über die Performance Ihres Portfolios auf dem Laufenden.',
      features: ['Asset Management', 'Wertsteigerung', 'Performance Monitoring', 'Quartalsberichte']
    },
    {
      number: '04',
      title: 'Finanzierungsberatung',
      description: 'Optimale Finanzierungsstrukturen durch unser Bankennetzwerk.',
      details: 'Durch unsere langjährigen Partnerschaften mit führenden Finanzinstituten sichern wir Ihnen die besten Konditionen. Wir strukturieren Ihre Finanzierung optimal und nutzen alle verfügbaren Fördermöglichkeiten.',
      features: ['Konditionsvergleich', 'Fördermittelberatung', 'Finanzierungsstrukturierung', 'Bankenkommunikation']
    }
  ];

  if (isPreview) {
    return (
      <section className="services-section section-large">
        <div className="container-wide">
          <div className="services-header">
            <span className="section-label">Leistungen</span>
            <h2 className="large-heading">
              Ganzheitliche
              <span className="text-outline"> Beratung</span>
            </h2>
          </div>

          <div className="services-preview-grid">
            {services.map((service, index) => (
              <div key={index} className="service-preview-card">
                <span className="service-number">{service.number}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="btn-arrow">
                  <span className="arrow">→</span>
                </button>
              </div>
            ))}
          </div>

          <div className="services-cta">
            <button className="btn btn-outline">
              Alle Leistungen entdecken
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="services-full section-large">
      <div className="container-wide">
        <div className="services-full-header">
          <span className="section-label">Leistungen</span>
          <h1 className="display-heading">
            Ihr Weg zum
            <span className="text-italic"> Erfolg</span>
          </h1>
        </div>

        <div className="services-interactive">
          <div className="services-nav">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-nav-item ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <span className="nav-number">{service.number}</span>
                <span className="nav-title">{service.title}</span>
                <span className="nav-indicator"></span>
              </div>
            ))}
          </div>

          <div className="services-content">
            <div className="service-detail">
              <h2 className="medium-heading">{services[activeService].title}</h2>
              <p className="body-large">{services[activeService].details}</p>
              
              <div className="service-features">
                <h4>Unsere Leistungen im Detail:</h4>
                <div className="features-grid">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-dot"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="btn btn-text">
                Beratungstermin vereinbaren
              </button>
            </div>
          </div>
        </div>

        <div className="services-process">
          <h2 className="section-title">Unser Prozess</h2>
          <div className="process-timeline">
            <div className="timeline-line"></div>
            <div className="timeline-items">
              <div className="timeline-item">
                <div className="timeline-marker">1</div>
                <div className="timeline-content">
                  <h4>Analyse</h4>
                  <p>Erfassung Ihrer Ausgangssituation und Ziele</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div className="timeline-content">
                  <h4>Strategie</h4>
                  <p>Entwicklung eines maßgeschneiderten Plans</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div className="timeline-content">
                  <h4>Umsetzung</h4>
                  <p>Professionelle Begleitung bei der Realisierung</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">4</div>
                <div className="timeline-content">
                  <h4>Betreuung</h4>
                  <p>Langfristige Optimierung Ihres Portfolios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
