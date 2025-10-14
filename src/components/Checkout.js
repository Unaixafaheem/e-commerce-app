import React from "react";
import { useCart } from "../context/CartContext";



const Checkout = () => {
  const { cart, total } = useCart();

  const handleCheckout = () => {
    alert("Checkout successful! Total: $" + total);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>No items to checkout</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} = ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button onClick={handleCheckout}>Confirm Checkout</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
