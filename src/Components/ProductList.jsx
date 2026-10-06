import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import CartItem from './CartItem';
import Navbar from './Navbar';
import './ProductList.css';

function ProductList({ onHomeClick, initialShowCart = false }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items || []);
  const [showCart, setShowCart] = useState(initialShowCart);

  // Derive disabled states from Redux cartItems directly during render
  const addedToCart = useMemo(() => {
    const map = {};
    cartItems.forEach((item) => {
      map[item.name] = true;
      if (item.id) map[item.id] = true;
    });
    return map;
  }, [cartItems]);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          id: 'snake-plant',
          name: 'Snake Plant',
          image:
            'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description:
            'Produces oxygen at night and removes toxins, making it ideal for bedrooms.',
          cost: '$15',
          price: 15,
          category: 'Air Purifying Plants',
        },
        {
          id: 'spider-plant',
          name: 'Spider Plant',
          image:
            'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description:
            'Filters formaldehyde and xylene from indoor air, extraordinarily resilient.',
          cost: '$12',
          price: 12,
          category: 'Air Purifying Plants',
        },
        {
          id: 'peace-lily',
          name: 'Peace Lily',
          image:
            'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description:
            'Graceful white blooms that filter airborne mold spores and toxins.',
          cost: '$18',
          price: 18,
          category: 'Air Purifying Plants',
        },
        {
          id: 'boston-fern',
          name: 'Boston Fern',
          image:
            'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
          description:
            'Adds lush natural humidity to indoor air and thrives in indirect light.',
          cost: '$14',
          price: 14,
          category: 'Air Purifying Plants',
        },
        {
          id: 'rubber-plant',
          name: 'Rubber Plant',
          image:
            'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description:
            'Bold, glossy dark foliage that cleanses indoor toxins with minimal upkeep.',
          cost: '$20',
          price: 20,
          category: 'Air Purifying Plants',
        },
        {
          id: 'aloe-vera',
          name: 'Aloe Vera',
          image:
            'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description:
            'Purifies the air and provides soothing, healing natural gel for skin.',
          cost: '$10',
          price: 10,
          category: 'Air Purifying Plants',
        },
      ],
    },
    {
      category: 'Aromatic & Fragrant Plants',
      plants: [
        {
          id: 'lavender',
          name: 'Lavender',
          image:
            'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=600&auto=format&fit=crop',
          description:
            'Famous soothing floral scent that promotes tranquility and restful sleep.',
          cost: '$16',
          price: 16,
          category: 'Aromatic & Fragrant Plants',
        },
        {
          id: 'jasmine',
          name: 'Jasmine',
          image:
            'https://images.unsplash.com/photo-1592729645009-b96d1e63d122?q=80&w=600&auto=format&fit=crop',
          description:
            'Sweet, captivating fragrance that enlivens living rooms and sunlit patios.',
          cost: '$22',
          price: 22,
          category: 'Aromatic & Fragrant Plants',
        },
        {
          id: 'rosemary',
          name: 'Rosemary',
          image:
            'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description:
            'Crisp, woody aroma that enhances cognitive focus and culinary creations.',
          cost: '$15',
          price: 15,
          category: 'Aromatic & Fragrant Plants',
        },
        {
          id: 'mint',
          name: 'Mint',
          image:
            'https://cdn.pixabay.com/photo/2016/01/07/18/13/mint-1126282_1280.jpg',
          description:
            'Refreshing herbal fragrance that naturally deters insects and revitalizes air.',
          cost: '$10',
          price: 10,
          category: 'Aromatic & Fragrant Plants',
        },
        {
          id: 'lemon-balm',
          name: 'Lemon Balm',
          image:
            'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
          description:
            'Invigorating citrus scent known for uplifting moods and calming the mind.',
          cost: '$14',
          price: 14,
          category: 'Aromatic & Fragrant Plants',
        },
        {
          id: 'eucalyptus',
          name: 'Eucalyptus',
          image:
            'https://cdn.pixabay.com/photo/2018/06/10/20/30/eucalyptus-3467266_1280.jpg',
          description:
            'Distinctive rejuvenating fragrance known for soothing respiratory airways.',
          cost: '$25',
          price: 25,
          category: 'Aromatic & Fragrant Plants',
        },
      ],
    },
    {
      category: 'Low Maintenance & Succulents',
      plants: [
        {
          id: 'zz-plant',
          name: 'ZZ Plant',
          image:
            'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=600&auto=format&fit=crop',
          description:
            'Virtually indestructible plant thriving in low light and irregular watering.',
          cost: '$24',
          price: 24,
          category: 'Low Maintenance & Succulents',
        },
        {
          id: 'golden-pothos',
          name: 'Golden Pothos',
          image:
            'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=600&auto=format&fit=crop',
          description:
            'Rapidly growing trailing vine that adapts effortlessly to almost any lighting.',
          cost: '$12',
          price: 12,
          category: 'Low Maintenance & Succulents',
        },
        {
          id: 'jade-plant',
          name: 'Jade Plant',
          image:
            'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=600&auto=format&fit=crop',
          description:
            'Plump emerald succulent leaves known as the traditional money plant.',
          cost: '$15',
          price: 15,
          category: 'Low Maintenance & Succulents',
        },
        {
          id: 'cast-iron-plant',
          name: 'Cast Iron Plant',
          image:
            'https://images.unsplash.com/photo-1597055181300-e3633a207518?q=80&w=600&auto=format&fit=crop',
          description:
            'Toughest indoor plant around; withstands low light, drafts, and dust.',
          cost: '$28',
          price: 28,
          category: 'Low Maintenance & Succulents',
        },
        {
          id: 'string-of-pearls',
          name: 'String of Pearls',
          image:
            'https://images.unsplash.com/photo-1611211232932-da3113c5b960?q=80&w=600&auto=format&fit=crop',
          description:
            'Delightful cascade of bead-like succulent foliage, stunning in hanging planters.',
          cost: '$18',
          price: 18,
          category: 'Low Maintenance & Succulents',
        },
        {
          id: 'echeveria',
          name: 'Echeveria',
          image:
            'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?q=80&w=600&auto=format&fit=crop',
          description:
            'Symmetrical rosette succulent with pastel teal tones that thrives in bright light.',
          cost: '$11',
          price: 11,
          category: 'Low Maintenance & Succulents',
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleHomeNav = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', '/');
    }
    if (onHomeClick) {
      onHomeClick(e);
    }
  };

  const handlePlantsNav = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', '/plants');
    }
    setShowCart(false);
  };

  const handleCartNav = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', '/cart');
    }
    setShowCart(true);
  };

  return (
    <div className="product-list-page">
      {/* Navbar visible on both Product Listing and Cart pages */}
      <Navbar
        onHomeClick={handleHomeNav}
        onPlantsClick={handlePlantsNav}
        onCartClick={handleCartNav}
        activeTab={showCart ? 'cart' : 'plants'}
      />

      {showCart ? (
        <CartItem onContinueShopping={handlePlantsNav} />
      ) : (
        <main className="product-list-container">
          <div className="catalog-hero-header">
            <h1 className="catalog-title">Houseplant Catalog</h1>
            <p className="catalog-subtitle">
              Bring tranquility, oxygen, and beauty into your living space with our premium nursery selection.
            </p>
          </div>

          <div className="categories-wrapper">
            {plantsArray.map((categoryGroup) => (
              <section key={categoryGroup.category} className="category-section">
                <div className="category-header">
                  <h2 className="category-title">{categoryGroup.category}</h2>
                  <div className="category-divider"></div>
                </div>

                <div className="plants-grid">
                  {categoryGroup.plants.map((plant) => {
                    const isAdded = !!addedToCart[plant.name] || !!addedToCart[plant.id];

                    return (
                      <article key={plant.id} className="plant-card">
                        <div className="plant-image-container">
                          <img
                            src={plant.image}
                            alt={plant.name}
                            className="plant-thumbnail"
                            loading="lazy"
                          />
                          <span className="plant-price-badge">{plant.cost}</span>
                        </div>

                        <div className="plant-info">
                          <h3 className="plant-name">{plant.name}</h3>
                          <p className="plant-description">{plant.description}</p>
                          <div className="plant-footer">
                            <span className="plant-cost-text">{plant.cost}</span>
                            <button
                              type="button"
                              className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
                              disabled={isAdded}
                              onClick={() => handleAddToCart(plant)}
                              aria-label={
                                isAdded
                                  ? `${plant.name} already added to cart`
                                  : `Add ${plant.name} to cart`
                              }
                            >
                              {isAdded ? (
                                <>
                                  <span className="check-icon">✓</span> Added to Cart
                                </>
                              ) : (
                                'Add to Cart'
                              )}
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </main>
      )}
    </div>
  );
}

export default ProductList;
