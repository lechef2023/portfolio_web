import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;

