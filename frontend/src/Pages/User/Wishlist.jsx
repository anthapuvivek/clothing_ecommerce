export default function Wishlist({ wishlist, removeFromWishlist }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">❤️ Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty ❤️</p>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.id}
            className="border p-4 mb-3 flex justify-between"
          >
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p>₹{item.price}</p>
            </div>

            <button
              onClick={() => removeFromWishlist(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}