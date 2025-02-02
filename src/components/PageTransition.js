// src/components/PageTransition.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingOverlay from './LoadingOverlay';

// style フォルダの中なら相対パスはこのように
import '../style/LoadingOverlay.css';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setTransitioning(true);
    const timer = setTimeout(() => setTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <LoadingOverlay isActive={transitioning}>
        <div style={{ fontWeight: 'bold' }}>Loading...</div>
      </LoadingOverlay>
      <div
        className="page-content"
        style={{
          opacity: transitioning ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition;