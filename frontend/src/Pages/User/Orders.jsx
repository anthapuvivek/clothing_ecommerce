export default function Orders({ cart, setCart }) {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleOrder = () => {
    alert("Order Placed Successfully 🎉");
    setCart([]); // clear cart after order
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Order Summary</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="border p-3 mb-2">
              <h2>{item.name}</h2>
              <p>₹{item.price} × {item.qty}</p>
            </div>
          ))}

          <h2 className="text-xl font-bold mt-4">
            Total: ₹{total}
          </h2>

          <button
            onClick={handleOrder}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}