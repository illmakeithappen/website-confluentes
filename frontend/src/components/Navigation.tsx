import React, { useState } from 'react';
import './Navigation.css';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  scrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage, scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Über uns' },
    { id: 'services', label: 'Leistungen' },
    { id: 'properties', label: 'Portfolio' },
    { id: 'contact', label: 'Kontakt' },
  ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand" onClick={() => handleNavClick('home')}>
          <div className="logo-wrapper">
            <div className="logo-mark">
              <div className="logo-bars">
                <div className="logo-bar"></div>
                <div className="logo-bar"></div>
                <div className="logo-bar"></div>
                <div className="logo-bar"></div>
                <div className="logo-bar"></div>
                <div className="logo-bar"></div>
                <div className="logo-bar"></div>
              </div>
            </div>
            <span className="logo-text">Confluentes</span>
          </div>
        </div>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className={`nav-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
