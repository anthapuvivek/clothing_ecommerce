import ProductCard from "../../Components/ProductCard";

export default function Home() {
  
  <h1 className="text-4xl text-blue-500">Tailwind Working 🚀</h1>

  const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 499,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Jeans",
      price: 999,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Shirt",
      price: 799,
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}