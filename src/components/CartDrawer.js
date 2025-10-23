// src/components/CartDrawer.js
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

function CartDrawer() {
  const { cartItems, removeFromCart, total } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          fontSize: "24px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        🛒 ({cartItems.length})
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            right: 0,
            top: 0,
            width: "320px",
            height: "100vh",
            background: "#fff",
            boxShadow: "-2px 0 10px rgba(0,0,0,0.1)",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} style={{ marginBottom: "10px" }}>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              ))}
              <h3>Total: ${total.toFixed(2)}</h3>
              <button onClick={() => alert("Proceeding to checkout...")}>Checkout</button>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default CartDrawer;
