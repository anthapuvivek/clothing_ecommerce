import { useState, useEffect } from "react";

export default function Orders({ cart, setCart }) {

  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // 💾 SAVE ORDERS
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const handleOrder = () => {
    if (cart.length === 0) return;

    const confirmOrder = window.confirm(
      `Pay ₹${total} using ${paymentMethod}? 💳`
    );

    if (!confirmOrder) return;

    const newOrder = {
      id: Date.now(),
      items: cart,
      total: total,
      payment: paymentMethod,
      date: new Date().toLocaleString(),
      status: "Paid ✅",
      tracking: "Preparing your order 📦",
    };

    setOrders([newOrder, ...orders]);
    setCart([]);

    alert(`Payment via ${paymentMethod} Successful 🎉`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-6">🧾 Orders</h1>

      {/* 🛒 CURRENT CART */}
      {cart.length > 0 && (
        <div className="bg-white p-5 rounded-2xl shadow-lg mb-6">

          <h2 className="text-xl font-semibold mb-3">Current Order</h2>

          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} × {item.qty}</span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}

          <h3 className="font-bold mt-3 text-lg">Total: ₹{total}</h3>

          {/* 💳 PAYMENT METHODS */}
          <h3 className="mt-4 font-semibold">Choose Payment</h3>

          <div className="grid grid-cols-3 gap-3 mt-3">

            <button
              onClick={() => setPaymentMethod("COD")}
              className={`p-3 rounded-lg border ${
                paymentMethod === "COD"
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
            >
              💵 COD
            </button>

            <button
              onClick={() => setPaymentMethod("UPI")}
              className={`p-3 rounded-lg border ${
                paymentMethod === "UPI"
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
            >
              📱 UPI
            </button>

            <button
              onClick={() => setPaymentMethod("Card")}
              className={`p-3 rounded-lg border ${
                paymentMethod === "Card"
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
            >
              💳 Card
            </button>

          </div>

          {/* PLACE ORDER */}
          <button
            onClick={handleOrder}
            className="mt-5 w-full bg-green-500 text-white py-3 rounded-xl text-lg hover:bg-green-600"
          >
            Pay ₹{total}
          </button>

        </div>
      )}

      {/* 📦 ORDER HISTORY */}
      <h2 className="text-2xl font-semibold mb-4">Order History</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">No past orders</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-5 rounded-2xl shadow-md mb-4"
          >

            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>{order.date}</span>
              <span>{order.payment}</span>
            </div>

            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} × {item.qty}</span>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}

            <h3 className="font-bold mt-3 text-lg">
              Total: ₹{order.total}
            </h3>

            <p className="text-green-600 font-semibold">
              {order.status}
            </p>

            <p className="text-blue-600 font-medium mt-1">
              {order.tracking}
            </p>

          </div>
        ))
      )}

    </div>
  );
}