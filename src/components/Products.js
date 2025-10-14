import React from "react";
import { useCart } from "../context/CartContext";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

export default function Products() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Product 1", price: 50, image: product1 },
    { id: 2, name: "Product 2", price: 30, image: product2 },
    { id: 3, name: "Product 3", price: 20, image: product3 },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        flexWrap: "wrap",
        padding: "40px",
      }}
    >
      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
            width: "220px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={p.image}
            alt={p.name}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button
            onClick={() => addToCart(p)}
            style={{
              background: "black",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
