import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/User/Home";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Cart from "./Pages/User/Cart";
import ProductDetails from "./Pages/User/ProductDetails";
import Dashboard from "./Pages/Admin/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import Navbar from "./Components/Navbar";
import Orders from "./Pages/User/Orders";

export default function App() {
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);

  if (existing) {
    const updatedCart = cart.map(item =>
      item.id === product.id
        ? { ...item, qty: item.qty + 1 }
        : item
    );
    setCart(updatedCart);
  } else {
    setCart([...cart, { ...product, qty: 1 }]);
  }
  };

  return (
    <BrowserRouter>
      <Navbar cart={cart} />

      <Routes>
        {/* USER */}
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* ORDERS */}
        <Route path="/orders" element={<Orders cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}