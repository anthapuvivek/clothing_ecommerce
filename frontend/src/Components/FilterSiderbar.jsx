import { useState } from "react";

export default function FilterSidebar({ setFilters }) {

  const [localFilters, setLocalFilters] = useState({
    gender: "",
    category: "",
    type: "",
    brand: "",
    price: 2000,
  });

  const handleChange = (field, value) => {
    setLocalFilters({ ...localFilters, [field]: value });
  };

  const applyFilters = () => {
    setFilters(localFilters);
  };

  const clearFilters = () => {
    const reset = {
      gender: "",
      category: "",
      type: "",
      brand: "",
      price: 2000,
    };
    setLocalFilters(reset);
    setFilters(reset);
  };

  return (
    <div style={{ width: "250px", padding: "10px", borderRight: "1px solid #ddd" }}>

      <h2>Filters</h2>

      {/* GENDER */}
      <h4>Gender</h4>
      <select onChange={(e) => handleChange("gender", e.target.value)}>
        <option value="">All</option>
        <option>Men</option>
        <option>Women</option>
        <option>Men and Women</option>
        <option>Boys</option>
        <option>Girls</option>
        <option>Boys and Girls</option>
        <option>Baby Boys</option>
        <option>Baby Girls</option>
        <option>Baby Boys and Baby Girls</option>
        <option>Unisex</option>
        <option>Couple</option>
      </select>

      {/* CATEGORY */}
      <h4>Category</h4>
      <select onChange={(e) => handleChange("category", e.target.value)}>
        <option value="">All</option>
        <option>Topwear</option>
        <option>Bottomwear</option>
        <option>Winter Wear</option>
        <option>Ethnic Wear</option>
      </select>

      {/* TYPE */}
      <h4>Type</h4>
      <select onChange={(e) => handleChange("type", e.target.value)}>
        <option value="">All</option>
        <option>Shirt</option>
        <option>Pant</option>
        <option>Kurta</option>
        <option>T-Shirt</option>
        <option>Jeans</option>
      </select>

      {/* BRAND */}
      <h4>Brand</h4>
      <select onChange={(e) => handleChange("brand", e.target.value)}>
        <option value="">All</option>
        <option>Nike</option>
        <option>Levis</option>
        <option>Puma</option>
      </select>

      {/* PRICE */}
      <h4>Max Price: ₹{localFilters.price}</h4>
      <input
        type="range"
        min="0"
        max="5000"
        value={localFilters.price}
        onChange={(e) => handleChange("price", e.target.value)}
      />

      <br /><br />

      <button onClick={applyFilters}>Apply</button>
      <button onClick={clearFilters} style={{ marginLeft: "10px" }}>
        Clear
      </button>

    </div>
  );
}