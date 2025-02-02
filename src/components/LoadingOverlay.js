// src/components/LoadingOverlay.js
import React from 'react';
// LoadingOverlay自身でCSSを読み込むのもOKだが、PageTransition側で読み込むならここで読み込まなくてもOK
// import './style/LoadingOverlay.css';

const LoadingOverlay = ({ isActive, children }) => {
  return (
    <div className={`loading-overlay ${isActive ? 'active' : ''}`}>
      <div className="loading-content">
        {children}
      </div>
    </div>
  );
};

export default LoadingOverlay;