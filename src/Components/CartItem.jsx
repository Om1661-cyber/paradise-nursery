import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items || []);
  const dispatch = useDispatch();
  const [checkoutMessage, setCheckoutMessage] = useState('');

  // Helper to safely parse numeric price from string "$15" or number 15
  const getNumericPrice = (costOrPrice) => {
    if (typeof costOrPrice === 'number') return costOrPrice;
    if (typeof costOrPrice === 'string') {
      const parsed = parseFloat(costOrPrice.replace(/[^0-9.]/g, ''));
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  };

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    const total = cart.reduce((accum, item) => {
      const unitPrice = getNumericPrice(item.cost || item.price);
      return accum + unitPrice * item.quantity;
    }, 0);
    return Math.round(total * 100) / 100;
  };

  // Calculate total cost for an individual item
  const calculateTotalCost = (item) => {
    const unitPrice = getNumericPrice(item.cost || item.price);
    return Math.round(unitPrice * item.quantity * 100) / 100;
  };

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name || item.id));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name || item.id));
  };

  const handleContinueShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleCheckoutShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setCheckoutMessage('Coming Soon! Online checkout will be available in the next release.');
    alert('Coming Soon! Online checkout will be available in the next release.');
  };

  const totalCartAmount = calculateTotalAmount();
  const totalItemCount = cart.reduce((accum, item) => accum + item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-header-card">
        <h2 className="cart-title">Your Shopping Cart</h2>
        <div className="cart-summary-stats">
          <div className="stat-pill">
            <span className="stat-label">Total Plants:</span>
            <span className="stat-value">{totalItemCount}</span>
          </div>
          <div className="stat-pill highlight">
            <span className="stat-label">Total Cart Amount:</span>
            <span className="stat-value">${totalCartAmount}</span>
          </div>
        </div>
      </div>

      {checkoutMessage && (
        <div className="checkout-banner" role="status">
          <span>🌿 {checkoutMessage}</span>
          <button
            type="button"
            className="close-banner-btn"
            onClick={() => setCheckoutMessage('')}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      )}

      {cart.length === 0 ? (
        <div className="empty-cart-card">
          <div className="empty-cart-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>You haven't added any beautiful plants to your cart yet.</p>
          <button
            type="button"
            className="continue-shopping-btn"
            onClick={handleContinueShopping}
          >
            Browse Plants
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items-list">
            {cart.map((item) => {
              const itemTotal = calculateTotalCost(item);
              const unitPrice = getNumericPrice(item.cost || item.price);

              return (
                <div key={item.id || item.name} className="cart-item-card">
                  <div className="cart-item-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                  </div>

                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    {item.description && (
                      <p className="cart-item-desc">{item.description}</p>
                    )}
                    <div className="cart-item-unit-price">
                      <span className="price-tag">Unit Price:</span> ${unitPrice}
                    </div>
                  </div>

                  <div className="cart-item-quantity-section">
                    <span className="quantity-label">Quantity</span>
                    <div className="quantity-controls">
                      <button
                        type="button"
                        className="qty-btn decrement-btn"
                        onClick={() => handleDecrement(item)}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        -
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button
                        type="button"
                        className="qty-btn increment-btn"
                        onClick={() => handleIncrement(item)}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-subtotal">
                    <span className="subtotal-label">Subtotal</span>
                    <span className="subtotal-amount">${itemTotal}</span>
                  </div>

                  <div className="cart-item-actions">
                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => handleRemove(item)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart-footer-card">
            <div className="cart-total-display">
              <span className="total-title">Total Cost:</span>
              <span className="total-number">${totalCartAmount}</span>
            </div>

            <div className="cart-action-buttons">
              <button
                type="button"
                className="continue-shopping-btn"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
              <button
                type="button"
                className="checkout-btn"
                onClick={handleCheckoutShopping}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;
