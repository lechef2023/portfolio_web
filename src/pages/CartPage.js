import React from "react";

function CartPage({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice}</h3>
          <button>Finalizar Compra</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;


