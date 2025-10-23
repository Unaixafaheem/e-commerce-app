import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [bounced, setBounced] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setBounced(true);
    setTimeout(() => setBounced(false), 350);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3 className="p-name">{product.name}</h3>
      <p className="p-price">${product.price.toFixed(2)}</p>
      <button className={`add-btn ${bounced ? "bounced" : ""}`} onClick={handleAdd}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
