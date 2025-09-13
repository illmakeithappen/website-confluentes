import React, { useState } from 'react';
import './Properties.css';

interface Property {
  id: number;
  title: string;
  location: string;
  city: string;
  price: string;
  yield: string;
  size: string;
  type: string;
  status: 'available' | 'reserved' | 'sold';
  featured?: boolean;
}

interface PropertiesProps {
  isPreview?: boolean;
}

const Properties: React.FC<PropertiesProps> = ({ isPreview = false }) => {
  const [filter, setFilter] = useState('all');
  const [hoveredProperty, setHoveredProperty] = useState<number | null>(null);

  const properties: Property[] = [
    {
      id: 1,
      title: 'Premium Tower München',
      location: 'Maxvorstadt',
      city: 'München',
      price: '12.500.000',
      yield: '4.2',
      size: '3.200',
      type: 'commercial',
      status: 'available',
      featured: true
    },
    {
      id: 2,
      title: 'Wohnquartier Berlin',
      location: 'Mitte',
      city: 'Berlin',
      price: '8.900.000',
      yield: '3.8',
      size: '2.100',
      type: 'residential',
      status: 'available'
    },
    {
      id: 3,
      title: 'Retail Center Hamburg',
      location: 'Innenstadt',
      city: 'Hamburg',
      price: '5.200.000',
      yield: '5.1',
      size: '1.500',
      type: 'retail',
      status: 'reserved'
    },
    {
      id: 4,
      title: 'Student Living Frankfurt',
      location: 'Westend',
      city: 'Frankfurt',
      price: '15.800.000',
      yield: '4.5',
      size: '4.200',
      type: 'residential',
      status: 'available',
      featured: true
    }
  ];

  const displayProperties = isPreview 
    ? properties.filter(p => p.featured).slice(0, 2) 
    : (filter === 'all' ? properties : properties.filter(p => p.type === filter));

  if (isPreview) {
    return (
      <section className="properties-section section-large">
        <div className="container-wide">
          <div className="properties-header">
            <div className="header-left">
              <span className="section-label">Portfolio</span>
              <h2 className="large-heading">
                Ausgewählte
                <span className="text-italic"> Objekte</span>
              </h2>
            </div>
            <div className="header-right">
              <p className="body-large">
                Handverlesene Immobilien mit überdurchschnittlichem 
                Renditepotenzial in Deutschlands Top-Lagen.
              </p>
              <button className="btn btn-text">
                Alle Objekte ansehen
              </button>
            </div>
          </div>

          <div className="properties-showcase">
            {displayProperties.map((property) => (
              <div 
                key={property.id} 
                className="property-showcase-card"
                onMouseEnter={() => setHoveredProperty(property.id)}
                onMouseLeave={() => setHoveredProperty(null)}
              >
                <div className="property-image-container">
                  <div className="property-image-placeholder">
                    <div className={`property-overlay ${hoveredProperty === property.id ? 'active' : ''}`}>
                      <button className="view-btn">Exposé ansehen</button>
                    </div>
                  </div>
                  <div className="property-badge" data-status={property.status}>
                    {property.status === 'available' && 'Verfügbar'}
                    {property.status === 'reserved' && 'Reserviert'}
                  </div>
                </div>
                <div className="property-info">
                  <div className="property-header">
                    <h3>{property.title}</h3>
                    <span className="property-location">{property.location}, {property.city}</span>
                  </div>
                  <div className="property-metrics">
                    <div className="metric">
                      <span className="metric-value">{property.price}€</span>
                      <span className="metric-label">Kaufpreis</span>
                    </div>
                    <div className="metric">
                      <span className="metric-value">{property.yield}%</span>
                      <span className="metric-label">Rendite p.a.</span>
                    </div>
                    <div className="metric">
                      <span className="metric-value">{property.size}m²</span>
                      <span className="metric-label">Fläche</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="properties-full section-large">
      <div className="container-wide">
        <div className="properties-full-header">
          <span className="section-label">Portfolio</span>
          <h1 className="display-heading">
            Immobilien mit
            <span className="text-italic"> Perspektive</span>
          </h1>
        </div>

        <div className="properties-filter">
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Alle Objekte
              <span className="tab-count">{properties.length}</span>
            </button>
            <button 
              className={`filter-tab ${filter === 'residential' ? 'active' : ''}`}
              onClick={() => setFilter('residential')}
            >
              Wohnen
              <span className="tab-count">{properties.filter(p => p.type === 'residential').length}</span>
            </button>
            <button 
              className={`filter-tab ${filter === 'commercial' ? 'active' : ''}`}
              onClick={() => setFilter('commercial')}
            >
              Gewerbe
              <span className="tab-count">{properties.filter(p => p.type === 'commercial').length}</span>
            </button>
            <button 
              className={`filter-tab ${filter === 'retail' ? 'active' : ''}`}
              onClick={() => setFilter('retail')}
            >
              Einzelhandel
              <span className="tab-count">{properties.filter(p => p.type === 'retail').length}</span>
            </button>
          </div>
        </div>

        <div className="properties-list">
          {displayProperties.map((property, index) => (
            <div key={property.id} className="property-list-item">
              <div className="property-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="property-details">
                <div className="property-main">
                  <h3>{property.title}</h3>
                  <p>{property.location}, {property.city}</p>
                </div>
                <div className="property-stats">
                  <div className="stat">
                    <span className="stat-label">Kaufpreis</span>
                    <span className="stat-value">{property.price}€</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Rendite</span>
                    <span className="stat-value">{property.yield}%</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Fläche</span>
                    <span className="stat-value">{property.size}m²</span>
                  </div>
                </div>
                <div className="property-action">
                  <div className="property-status" data-status={property.status}>
                    {property.status === 'available' && 'Verfügbar'}
                    {property.status === 'reserved' && 'Reserviert'}
                    {property.status === 'sold' && 'Verkauft'}
                  </div>
                  <button className="btn-circle">
                    <span>→</span>
                  </button>
                </div>
              </div>
              <div className="property-image-small"></div>
            </div>
          ))}
        </div>

        <div className="properties-newsletter">
          <div className="newsletter-content">
            <h3 className="medium-heading">
              Exklusive Objekte.
              <span className="text-italic"> Vor allen anderen.</span>
            </h3>
            <p className="body-large">
              Erhalten Sie Zugang zu Off-Market-Immobilien und neuen 
              Investmentchancen bevor diese öffentlich verfügbar sind.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse" 
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-solid">
                Anmelden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
