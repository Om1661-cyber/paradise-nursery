import React from 'react';
import { useSelector } from 'react-redux';
import './ProductList.css';

function Navbar({ onHomeClick, onPlantsClick, onCartClick, activeTab = 'plants' }) {
  const cartItems = useSelector((state) => state.cart.items || []);
  const totalItemCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <header className="navbar">
      <div
        className="navbar-brand"
        onClick={onHomeClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onHomeClick && onHomeClick(e)}
      >
        <div className="brand-logo">🌿</div>
        <div className="brand-details">
          <span className="brand-title">Paradise Nursery</span>
          <span className="brand-subtitle">Where Greenery Meets Serenity</span>
        </div>
      </div>

      <nav className="navbar-links">
        <button
          type="button"
          className="nav-link-btn"
          onClick={onHomeClick}
          aria-label="Navigate to Home"
        >
          Home
        </button>

        <button
          type="button"
          className={`nav-link-btn ${activeTab === 'plants' ? 'active' : ''}`}
          onClick={onPlantsClick}
          aria-label="Navigate to Plants"
        >
          Plants
        </button>

        <button
          type="button"
          className={`cart-btn ${activeTab === 'cart' ? 'active' : ''}`}
          onClick={onCartClick}
          aria-label={`Shopping cart with ${totalItemCount} items`}
        >
          <span className="cart-icon" aria-hidden="true">🛒</span>
          <span className="cart-label">Cart</span>
          <span className="cart-badge">{totalItemCount}</span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
