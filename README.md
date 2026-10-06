# Paradise Nursery Shopping Application

**Paradise Nursery** is a modern React and Redux shopping application dedicated to indoor plant enthusiasts. The application provides an intuitive e-commerce experience allowing customers to browse houseplants grouped by specialized categories, view plant details, add plants to their shopping cart, manage cart item quantities, and simulate an online checkout.

## Features

- **Landing Page**: Welcome banner featuring the Paradise Nursery company branding, background imagery, company overview, and a "Get Started" call-to-action button.
- **Categorized Plant Catalog**: Browse houseplants organized into three curated categories:
  - *Air Purifying Plants* (Snake Plant, Spider Plant, Peace Lily, Boston Fern, Rubber Plant, Aloe Vera)
  - *Aromatic & Fragrant Plants* (Lavender, Jasmine, Rosemary, Mint, Lemon Balm, Eucalyptus)
  - *Low Maintenance & Succulents* (ZZ Plant, Golden Pothos, Jade Plant, Cast Iron Plant, String of Pearls, Echeveria)
- **Product Cards**: Every plant showcases a high-resolution thumbnail, name, description, price, and an interactive "Add to Cart" button.
- **Dynamic Cart State**: 
  - "Add to Cart" button updates to "Added to Cart" and becomes disabled once added.
  - Cart counter in the navigation bar dynamically reflects the total quantity of items in real time.
- **Shopping Cart Management**:
  - View selected plant thumbnails, names, and unit prices.
  - Dynamically calculated subtotals for each plant.
  - Increment (+) and decrement (-) quantity controls with safe minimum limits.
  - Delete item button to remove individual houseplants from the cart.
  - Dynamic total cart cost calculation.
- **Seamless Navigation**:
  - Responsive navigation bar with links to Home, Plants, and Cart available across pages.
  - "Continue Shopping" button returning directly to the plant catalog.
  - "Checkout" button displaying a "Coming Soon" status notification.

## Technologies Used

- **React 19**
- **Redux Toolkit** (`@reduxjs/toolkit` & `react-redux`)
- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **Vite**

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Om1661-cyber/paradise-nursery.git
   cd paradise-nursery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To run the application in development mode:
```bash
npm run dev
```

### Building for Production

To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```