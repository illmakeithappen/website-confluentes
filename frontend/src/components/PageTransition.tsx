import React from 'react';
import './PageTransition.css';

interface PageTransitionProps {
  isTransitioning: boolean;
}

const PageTransition: React.FC<PageTransitionProps> = ({ isTransitioning }) => {
  return (
    <div className={`page-transition ${isTransitioning ? 'active' : ''}`}>
      <div className="transition-layer layer-1"></div>
      <div className="transition-layer layer-2"></div>
      <div className="transition-layer layer-3"></div>
    </div>
  );
};

export default PageTransition;
