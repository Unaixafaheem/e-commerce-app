import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    isCartOpen,
    toggleCart,
  } = useCart();

  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment successful! 🎉");
    clearCart();
    setShowCheckout(false);
  };

  return (
    <div className={`cart-panel ${isCartOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h3>{showCheckout ? "Billing Details" : "Your Cart"}</h3>
        <button className="close-btn" onClick={toggleCart}>
          ✕
        </button>
      </div>

      {!showCheckout ? (
        <>
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

          {cartItems.length > 0 && (
            <div className="cart-footer">
              <p className="total">Total: ${total.toFixed(2)}</p>
              <div className="cart-buttons">
                <button
                  className="checkout-btn"
                  onClick={() => setShowCheckout(true)}
                >
                  Proceed to Checkout
                </button>
                <button className="close-btn" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email Address:
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Billing Address:
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              required
              maxLength="16"
              value={formData.cardNumber}
              onChange={handleChange}
            />
          </label>
          <label>
            Expiry Date:
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              required
              value={formData.expiry}
              onChange={handleChange}
            />
          </label>
          <label>
            CVV:
            <input
              type="password"
              name="cvv"
              required
              maxLength="3"
              value={formData.cvv}
              onChange={handleChange}
            />
          </label>

          <div className="cart-buttons">
            <button type="submit" className="checkout-btn">
              Pay ${total.toFixed(2)}
            </button>
            <button
              type="button"
              className="close-btn"
              onClick={() => setShowCheckout(false)}
            >
              Back to Cart
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
