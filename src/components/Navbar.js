import React from "react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { itemCount = 0, toggleCart, darkMode, toggleDarkMode } = useCart() || {};

  return (
    <header className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="brand">My E-Shop</div>

      <div className="nav-actions">
        {/* Theme Toggle Button */}
        <button
          className="theme-btn"
          onClick={toggleDarkMode}
          aria-label="Toggle theme"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        {/* Cart Button */}
        <button
          className="cart-button"
          onClick={toggleCart}
          aria-label="Open cart"
        >
          <span className="cart-emoji">🛒</span>
          {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
