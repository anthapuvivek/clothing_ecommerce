import { useParams } from "react-router-dom";

export default function ProductDetails({ addToCart }) {
  const { id } = useParams();

  // Dummy products (same as Home)
  const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 499,
      description: "Comfortable cotton t-shirt",
      image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/687093/49/mod02/fnd/IND/fmt/png/Men's-Slim-Fit-Polo-T-shirt",
    },
    {
      id: 2,
      name: "Jeans",
      price: 999,
      description: "Stylish blue jeans",
      image: "https://sp.yimg.com/ib/th?id=OPAC.wFxGRC%2f%2bsEeksA474C474&o=5&pid=21.1&w=160&h=105",
    },
    {
      id: 3,
      name: "Shirt",
      price: 799,
      description: "Formal white shirt",
      image: "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000016006267-Brown-BROWN-1000016006267_03-2100.jpg",
    }
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6 flex gap-10">
      
      {/* LEFT: IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="w-72 h-72 object-cover"
      />

      {/* RIGHT: DETAILS */}
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-green-600 text-xl mt-2">₹{product.price}</p>
        <p className="mt-4">{product.description}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}