import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Carousel className="product-carousel">
            {product.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={product.name} />
              </div>
            ))}
          </Carousel>
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;


