import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section section-large">
      <div className="container-wide">
        <div className="contact-header">
          <span className="section-label">Kontakt</span>
          <h1 className="display-heading">
            Lassen Sie uns
            <span className="text-italic"> sprechen</span>
          </h1>
        </div>

        <div className="contact-grid">
          <div className="contact-info-section">
            <div className="info-intro">
              <p className="body-large">
                Der erste Schritt zu Ihrem erfolgreichen Immobilieninvestment 
                beginnt mit einem persönlichen Gespräch.
              </p>
            </div>

            <div className="info-blocks">
              <div className="info-block">
                <h3>München</h3>
                <div className="info-details">
                  <p>
                    Maximiliansplatz 12<br />
                    80333 München
                  </p>
                  <a href="tel:+4989123456789" className="info-link">
                    +49 89 123 456 789
                  </a>
                  <a href="mailto:muenchen@confluentes.de" className="info-link">
                    muenchen@confluentes.de
                  </a>
                </div>
              </div>

              <div className="info-block">
                <h3>Berlin</h3>
                <div className="info-details">
                  <p>
                    Unter den Linden 21<br />
                    10117 Berlin
                  </p>
                  <a href="tel:+4930987654321" className="info-link">
                    +49 30 987 654 321
                  </a>
                  <a href="mailto:berlin@confluentes.de" className="info-link">
                    berlin@confluentes.de
                  </a>
                </div>
              </div>

              <div className="info-block">
                <h3>Öffnungszeiten</h3>
                <div className="info-details">
                  <p>
                    Montag – Freitag<br />
                    9:00 – 18:00 Uhr<br />
                    <br />
                    Termine nach Vereinbarung
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="name">Name *</label>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="email">E-Mail *</label>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <label htmlFor="phone">Telefon</label>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Betreff wählen *</option>
                    <option value="beratung">Erstberatung</option>
                    <option value="objekt">Objektanfrage</option>
                    <option value="portfolio">Portfolioanalyse</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="message">Ihre Nachricht *</label>
                </div>
              </div>

              <div className="form-submit">
                <button type="submit" className="btn btn-outline">
                  Nachricht senden
                </button>
                <span className="form-note">
                  * Pflichtfelder
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className="contact-cta">
          <div className="cta-content">
            <h2 className="medium-heading">
              Direkt einen Termin vereinbaren?
            </h2>
            <p className="body-large">
              Nutzen Sie unser Online-Buchungssystem für eine schnelle Terminvereinbarung.
            </p>
            <button className="btn btn-text">
              Zur Terminbuchung
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
