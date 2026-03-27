import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home({ addToCart, addToWishlist, wishlist = [] }) {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    gender: [],
    brand: [],
    rating: 0,
    price: 5000,
  });

  const [sort, setSort] = useState("");

  const [open, setOpen] = useState({
    gender: false,
    brand: false,
    rating: false,
  });

  const toggleSection = (section) => {
    setOpen({ ...open, [section]: !open[section] });
  };

  const handleCheckbox = (e, field) => {
    const value = e.target.value;

    setFilters((prev) => ({
      ...prev,
      [field]: e.target.checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value),
    }));
  };

  const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 499,
      brand: "Puma",
      gender: "Men",
      rating: 4,
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/687093/49/mod02/fnd/IND/fmt/png/Men's-Slim-Fit-Polo-T-shirt",
    },
    {
      id: 2,
      name: "Jeans",
      price: 999,
      brand: "Levis",
      gender: "Men",
      rating: 3,
      image: "https://sp.yimg.com/ib/th?id=OPAC.wFxGRC%2f%2bsEeksA474C474&o=5&pid=21.1&w=160&h=105",
    },
    {
      id: 3,
      name: "Shirt",
      price: 799,
      brand: "Nike",
      gender: "Men",
      rating: 5,
      image: "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000016006267-Brown-BROWN-1000016006267_03-2100.jpg",
    },
  ];

  // 🔍 FILTER + SORT
  const filteredProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (filters.gender.length === 0 || filters.gender.includes(p.gender)) &&
      (filters.brand.length === 0 || filters.brand.includes(p.brand)) &&
      (filters.rating === 0 || p.rating >= filters.rating) &&
      p.price <= filters.price
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  // 📄 PAGINATION
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* 🧊 FILTER SIDEBAR */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-72 bg-white shadow-xl p-5 rounded-2xl m-4"
      >
        <h2 className="text-2xl font-bold mb-5">Filters</h2>

        {/* Gender */}
        <div className="mb-4">
          <div onClick={() => toggleSection("gender")}
            className="flex justify-between cursor-pointer font-semibold hover:text-blue-600">
            Gender <span>{open.gender ? "−" : "+"}</span>
          </div>

          {open.gender &&
            ["Men", "Women"].map((g) => (
              <label key={g} className="block mt-1">
                <input type="checkbox" value={g}
                  onChange={(e) => handleCheckbox(e, "gender")} />
                <span className="ml-2">{g}</span>
              </label>
            ))}
        </div>

        {/* Brand */}
        <div className="mb-4">
          <div onClick={() => toggleSection("brand")}
            className="flex justify-between cursor-pointer font-semibold hover:text-blue-600">
            Brand <span>{open.brand ? "−" : "+"}</span>
          </div>

          {open.brand &&
            ["Puma", "Nike", "Levis"].map((b) => (
              <label key={b} className="block mt-1">
                <input type="checkbox" value={b}
                  onChange={(e) => handleCheckbox(e, "brand")} />
                <span className="ml-2">{b}</span>
              </label>
            ))}
        </div>

        {/* Rating */}
        <div className="mb-4">
          <div onClick={() => toggleSection("rating")}
            className="flex justify-between cursor-pointer font-semibold hover:text-blue-600">
            Rating <span>{open.rating ? "−" : "+"}</span>
          </div>

          {open.rating && (
            <>
              <label className="block mt-1">
                <input type="radio" name="rating"
                  onChange={() => setFilters({ ...filters, rating: 4 })} />
                <span className="ml-2">⭐ 4 & above</span>
              </label>

              <label className="block mt-1">
                <input type="radio" name="rating"
                  onChange={() => setFilters({ ...filters, rating: 3 })} />
                <span className="ml-2">⭐ 3 & above</span>
              </label>
            </>
          )}
        </div>

        {/* Price */}
        <div>
          <h4 className="font-semibold mb-2">₹ {filters.price}</h4>
          <input
            type="range"
            min="0"
            max="5000"
            value={filters.price}
            onChange={(e) =>
              setFilters({ ...filters, price: Number(e.target.value) })
            }
            className="w-full"
          />
        </div>
      </motion.div>

      {/* 🛍 PRODUCTS */}
      <div className="flex-1 p-6">

        {/* SEARCH + SORT */}
        <div className="flex justify-between mb-6">
          <input
            type="text"
            placeholder="Search products..."
            className="border p-3 w-1/2 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border p-3 rounded-xl shadow-sm"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort</option>
            <option value="low">Price Low → High</option>
            <option value="high">Price High → Low</option>
          </select>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {currentProducts.map((p) => {
            const isInWishlist = wishlist.some(item => item.id === p.id);

            return (
              <motion.div
                key={p.id}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >

                <div className="relative">
                  <Link to={`/product/${p.id}`}>
                    <img src={p.image} alt={p.name}
                      className="w-full h-52 object-cover" />
                  </Link>

                  {/* ❤️ */}
                  <button
                    onClick={() => addToWishlist(p)}
                    className="absolute top-3 right-3 text-2xl bg-white rounded-full p-2 shadow"
                  >
                    {isInWishlist ? "❤️" : "🤍"}
                  </button>
                </div>

                <div className="p-4">
                  <h2 className="font-semibold text-lg">{p.name}</h2>

                  <p className="text-green-600 font-bold text-lg">
                    ₹{p.price}
                  </p>

                  <p className="text-yellow-500">⭐ {p.rating}</p>

                  <button
                    onClick={() => addToCart(p)}
                    className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-4 mt-8">

          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Prev
          </button>

          <span className="font-bold text-lg">
            {currentPage} / {totalPages || 1}
          </span>

          <button
            onClick={() =>
              setCurrentPage(prev => Math.min(prev + 1, totalPages))
            }
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Next
          </button>

        </div>

      </div>
    </div>
  );
}