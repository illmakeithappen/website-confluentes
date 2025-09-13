import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Properties from './components/Properties';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import CustomCursor from './components/CustomCursor';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    // Handle scroll events
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handlePageChange = (page: string) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo(0, 0);
      setTransitioning(false);
    }, 600);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <About isPreview={true} />
            <Services isPreview={true} />
            <Properties isPreview={true} />
          </>
        );
      case 'about':
        return <About isPreview={false} />;
      case 'services':
        return <Services isPreview={false} />;
      case 'properties':
        return <Properties isPreview={false} />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <CustomCursor />
      <div className="noise-overlay"></div>
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={handlePageChange} 
        scrolled={scrolled}
      />
      <PageTransition isTransitioning={transitioning} />
      <main className={`main-content ${transitioning ? 'transitioning' : ''}`}>
        {renderPage()}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
