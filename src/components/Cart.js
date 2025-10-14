import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    isCartOpen,
    toggleCart,
  } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart-panel ${isCartOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button className="close-btn" onClick={toggleCart}>
          ✕
        </button>
      </div>

      <div className="cart-list">
        {cartItems.length === 0 ? (
          <p>Your cart is empty 🛍️</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="ci-info">
                <p>{item.name}</p>
                <p>${item.price} × {item.quantity}</p>
              </div>
              <div className="ci-actions">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="close-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-footer">
        <p className="total">Total: ${total.toFixed(2)}</p>
        <div className="cart-buttons">
          <button className="checkout-btn" onClick={() => alert("Proceeding to checkout!")}>
            Checkout
          </button>
          <button className="close-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
