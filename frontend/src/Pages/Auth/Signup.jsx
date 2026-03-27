import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Signup Data:", formData);
    alert("Signup Successful!");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl">

        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-black text-white p-8">
          <h1 className="text-4xl font-bold mb-2">STYLE HUB</h1>
          <p className="text-gray-300">Join With Us ✨</p>
        </div>

        {/* Right Section */}
        <div className="p-8">

          <h2 className="text-3xl font-bold text-center mb-6">Signup</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Signup
            </button>

          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-black">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}