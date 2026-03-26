import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home({ addToCart }) {

  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 499,
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/687093/49/mod02/fnd/IND/fmt/png/Men's-Slim-Fit-Polo-T-shirt",
      description: "Comfortable cotton t-shirt",
    },
    {
      id: 2,
      name: "Jeans",
      price: 999,
      image: "https://sp.yimg.com/ib/th?id=OPAC.wFxGRC%2f%2bsEeksA474C474&o=5&pid=21.1&w=160&h=105",
      description: "Stylish denim jeans",
    },
    {
      id: 3,
      name: "Shirt",
      price: 799,
      image: "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000016006267-Brown-BROWN-1000016006267_03-2100.jpg",
      description: "Formal shirt",
    },
  ];

  return (
    <div className="p-6">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">Products</h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 mb-6 w-full rounded"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {products
          .filter(p =>
            p.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((p) => (

          <div
            key={p.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            
            {/* Clickable Image */}
            <Link to={`/product/${p.id}`}>
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="mt-2 font-semibold">{p.name}</h2>
            </Link>

            {/* Price */}
            <p className="text-green-600 font-bold">₹{p.price}</p>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(p)}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}