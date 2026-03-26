import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/User/Home";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Cart from "./Pages/User/Cart";
import ProductDetails from "./Pages/User/ProductDetails";
// import ProductCard from "../../Components/ProductCard";
import Dashboard from "./Pages/Admin/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import Navbar from "./Components/Navbar";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        {/* USER */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />

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

       

        <Route path="/cart" element={<Cart />} />

      </Routes>
    </BrowserRouter>
  );
}
