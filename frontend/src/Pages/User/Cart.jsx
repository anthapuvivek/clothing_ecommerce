import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>No items</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            {item.name} - ₹{item.price}
          </div>
        ))
      )}
    </div>
  );
}