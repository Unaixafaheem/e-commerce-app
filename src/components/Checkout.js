import React, { useState } from "react";
import { useCart } from "../context/CartContext";

import PaymentModal from "./PaymentModal";

const Checkout = ({ onClose }) => {
  const { cart, total, clearCart, toggleCart } = useCart();
  const [openPayment, setOpenPayment] = useState(false);

  const handleConfirm = () => {
    setOpenPayment(true);
  };

  const handlePaid = () => {
    clearCart();
    setOpenPayment(false);
    if (onClose) onClose();
    toggleCart(); // close cart after order
    alert("Order placed! Thank you.");
  };

  return (
    <div className="checkout-panel">
      <h2>Checkout</h2>
      <div className="order-list">
        {cart.map((it) => (
          <div key={it.id} className="order-row">
            <span>{it.name} x {it.quantity}</span>
            <span>${(it.price * it.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="checkout-total">Total: ${total.toFixed(2)}</div>
      <div className="checkout-actions">
        <button onClick={handleConfirm} disabled={cart.length===0}>Proceed to Payment</button>
        <button onClick={onClose}>Back</button>
      </div>

      <PaymentModal
        isOpen={openPayment}
        onClose={() => setOpenPayment(false)}
        amount={total}
        onSuccess={handlePaid}
      />
    </div>
  );
};

export default Checkout;
