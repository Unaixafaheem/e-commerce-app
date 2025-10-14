import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const cart = useCart();
  const addToCart = cart?.addToCart;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} width="200" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart && addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
