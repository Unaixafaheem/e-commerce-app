import React from "react";
import { CartProvider, useCart } from "./context/CartContext";
import product1 from "./assets/product1.jpg";
import product2 from "./assets/product2.jpg";
import product3 from "./assets/product3.jpg";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./index.css";

function TheApp() {
  const { notification, darkMode, isCartOpen } = useCart();

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      {/* Navbar */}
      <Navbar />

      {/* Products Section */}
      <main>
        <Products
          products={[
            { id: 1, name: "Product 1", price: 100, image: product1 },
            { id: 2, name: "Product 2", price: 150, image: product2 },
            { id: 3, name: "Product 3", price: 200, image: product3 },
          ]}
        />
      </main>

      {/* Cart Drawer — opens & closes with toggle */}
      <div className={`cart-panel ${isCartOpen ? "open" : ""}`}>
        <Cart />
      </div>

      {/* Notification bubble */}
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <TheApp />
    </CartProvider>
  );
}
