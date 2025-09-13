import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 20;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="logo-bars-loading">
            <div className="bar-loading bar-1"></div>
            <div className="bar-loading bar-2"></div>
            <div className="bar-loading bar-3"></div>
            <div className="bar-loading bar-4"></div>
            <div className="bar-loading bar-5"></div>
            <div className="bar-loading bar-6"></div>
            <div className="bar-loading bar-7"></div>
          </div>
        </div>
        
        <div className="loading-text">
          <span className="loading-title">CONFLUENTES</span>
          <span className="loading-subtitle">REAL ESTATE</span>
        </div>
        
        <div className="loading-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="progress-number">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
