import React from "react";
import ProductList from "../components/ProductList";

function Home({ addToCart }) {
  const products = [
    { id: 1, name: "Producto 1", price: 10 },
    { id: 2, name: "Producto 2", price: 20 },
  ];

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default Home;
