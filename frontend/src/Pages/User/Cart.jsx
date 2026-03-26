import React from "react";

export default function Cart({ cart = [], setCart }) {

  const increaseQty = (id) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cart
      .map(item =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter(item => item.qty > 0);

    setCart(updated);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-4 mb-2 flex justify-between items-center"
            >
              <div>
                <h2>{item.name}</h2>
                <p className="text-green-600">
                  ₹{item.price} × {item.qty}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-300 px-2 rounded"
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-gray-300 px-2 rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <h2 className="text-xl font-bold mt-4">
            Total: ₹{total}
          </h2>
        </>
      )}
    </div>
  );
}