import { useLocation } from "react-router-dom";

export default function ProductDetails({ addToCart }) {
  const { state: product } = useLocation();

  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="p-6">
      
      <img
        src={product.image}
        alt={product.name}
        className="w-64 h-64 object-cover rounded mb-4"
      />

      <h1 className="text-3xl font-bold">{product.name}</h1>

      <p className="text-green-600 text-xl mt-2">
        ₹{product.price}
      </p>

      <p className="mt-4">{product.description}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>

    </div>
  );
}