import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/User/Home";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Cart from "./Pages/User/Cart";
import ProductDetails from "./Pages/User/ProductDetails";
import Orders from "./Pages/User/Orders";
import Wishlist from "./Pages/User/Wishlist";
import UserProfile from "./UserProfile";
import Dashboard from "./Pages/Admin/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import Navbar from "./Components/Navbar";

export default function App() {

  // 🛒 CART (LOCAL STORAGE)
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

  // ❤️ WISHLIST (LOCAL STORAGE FIXED)
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    const exists = wishlist.find(item => item.id === product.id);

    if (exists) {
      // ❌ REMOVE
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      // ✅ ADD
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <Navbar cart={cart} wishlist={wishlist} />

      <Routes>

        {/* 🏠 HOME */}
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              wishlist={wishlist}
            />
          }
        />

        {/* 🛒 CART */}
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />

        {/* 📦 PRODUCT DETAILS */}
        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />

        {/* 📜 ORDERS */}
        <Route
          path="/orders"
          element={<Orders cart={cart} setCart={setCart} />}
        />

        {/* ❤️ WISHLIST */}
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              removeFromWishlist={removeFromWishlist}
            />
          }
        />

        <Route path="/profile" element={<UserProfile />} />

        {/* 🔐 AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🛠 ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}