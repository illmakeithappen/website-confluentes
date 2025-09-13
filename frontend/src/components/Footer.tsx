import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-main">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-mark-footer">
                  <div className="logo-bars-footer">
                    <div className="logo-bar-footer"></div>
                    <div className="logo-bar-footer"></div>
                    <div className="logo-bar-footer"></div>
                    <div className="logo-bar-footer"></div>
                    <div className="logo-bar-footer"></div>
                    <div className="logo-bar-footer"></div>
                    <div className="logo-bar-footer"></div>
                  </div>
                </div>
                <span className="logo-text-footer">Confluentes</span>
              </div>
              
              <p className="footer-tagline">
                Ihr Partner für nachhaltigen<br />
                Vermögensaufbau durch Immobilien.
              </p>
              
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  LinkedIn
                </a>
                <a href="#" className="social-link" aria-label="Xing">
                  Xing
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  Instagram
                </a>
              </div>
            </div>

            <div className="footer-nav">
              <div className="footer-column">
                <h4>Unternehmen</h4>
                <ul>
                  <li><a href="#">Über uns</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Karriere</a></li>
                  <li><a href="#">Partner</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Leistungen</h4>
                <ul>
                  <li><a href="#">Investmentberatung</a></li>
                  <li><a href="#">Objektvermittlung</a></li>
                  <li><a href="#">Portfoliomanagement</a></li>
                  <li><a href="#">Finanzierung</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Ressourcen</h4>
                <ul>
                  <li><a href="#">Marktberichte</a></li>
                  <li><a href="#">Investment Guide</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-contact">
              <h4>Newsletter</h4>
              <p>Erhalten Sie exklusive Markteinblicke und Investmentchancen.</p>
              <form className="footer-newsletter">
                <input 
                  type="email" 
                  placeholder="E-Mail-Adresse" 
                  className="footer-input"
                />
                <button type="submit" className="footer-submit">
                  →
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>© {currentYear} Confluentes Real Estate GmbH</p>
            <div className="legal-links">
              <a href="#">Impressum</a>
              <a href="#">Datenschutz</a>
              <a href="#">AGB</a>
              <a href="#">Cookie-Einstellungen</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
