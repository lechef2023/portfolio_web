import React from "react";
import ProductList from "../components/ProductList";

function Home({ addToCart }) {
  const products = [
    { 
      id: 1, 
      name: "Producto 1", 
      price: 10, 
      images: [
        "https://via.placeholder.com/300x200?text=Producto+1+Imagen+1", 
        "https://via.placeholder.com/300x200?text=Producto+1+Imagen+2"
      ] 
    },
    { 
      id: 2, 
      name: "Producto 2", 
      price: 20, 
      images: [
        "https://via.placeholder.com/300x200?text=Producto+2+Imagen+1", 
        "https://via.placeholder.com/300x200?text=Producto+2+Imagen+2"
      ] 
    }
  ];
  
  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default Home;

