import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout({ cart, setCart }) {

  const navigate = useNavigate();
  const [address, setAddress] = useState("");

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);

  const handleOrder = () => {
    if (!address) {
      alert("Enter address");
      return;
    }

    alert("Order placed successfully 🎉");

    setCart([]); // clear cart
    navigate("/orders");
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <textarea
        placeholder="Enter your address"
        className="border p-2 w-full mb-4"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <h2 className="font-semibold mb-2">Order Summary</h2>

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.name} x {item.qty}</span>
          <span>₹{item.price * item.qty}</span>
        </div>
      ))}

      <h3 className="font-bold mt-4">Total: ₹{total}</h3>

      <button
        onClick={handleOrder}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Place Order
      </button>

    </div>
  );
}