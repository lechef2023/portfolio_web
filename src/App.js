import React, { useState } from "react";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import styles from "./styles.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Tienda Online</h1>
      {/* Componente de catálogo de productos */}
      <Home addToCart={addToCart} />
      
      {/* Componente de carrito de compras */}
      <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;

