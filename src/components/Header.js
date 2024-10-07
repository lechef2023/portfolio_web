import React from "react";
import { Link } from "react-router-dom";

function Header({ cartItems }) {
  return (
    <header>
      <h1>Catálogo Web</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/cart">Carrito ({cartItems.length})</Link>
      </nav>
    </header>
  );
}

export default Header;
