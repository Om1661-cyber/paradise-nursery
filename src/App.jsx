import React, { useState, useEffect } from 'react';
import ProductList from './Components/ProductList';
import AboutUs from './Components/AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [initialShowCart, setInitialShowCart] = useState(false);

  // Sync initial view with URL path and handle browser navigation
  useEffect(() => {
    const syncRouteFromPath = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('cart')) {
        setShowProductList(true);
        setInitialShowCart(true);
      } else if (path.includes('plants')) {
        setShowProductList(true);
        setInitialShowCart(false);
      } else {
        setShowProductList(false);
        setInitialShowCart(false);
      }
    };

    syncRouteFromPath();
    window.addEventListener('popstate', syncRouteFromPath);
    return () => window.removeEventListener('popstate', syncRouteFromPath);
  }, []);

  const handleGetStartedClick = () => {
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', '/plants');
    }
    setShowProductList(true);
    setInitialShowCart(false);
  };

  const handleHomeClick = () => {
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', '/');
    }
    setShowProductList(false);
    setInitialShowCart(false);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="landing-overlay">
            <div className="landing-hero-content">
              <div className="landing-brand-badge">
                <span className="badge-leaf">🌿</span> Premium Botanical Nursery
              </div>
              <h1 className="landing-title">Paradise Nursery</h1>
              <div className="landing-divider"></div>
              <p className="landing-tagline">Where Greenery Meets Serenity</p>
              <button
                type="button"
                className="get-started-button"
                onClick={handleGetStartedClick}
                aria-label="Get Started and explore our plants"
              >
                Get Started
              </button>
            </div>

            <div className="landing-about-section">
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <ProductList
          onHomeClick={handleHomeClick}
          initialShowCart={initialShowCart}
        />
      )}
    </div>
  );
}

export default App;
