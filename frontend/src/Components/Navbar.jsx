import { Link } from "react-router-dom";

export default function Navbar({ cart, wishlist }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
  <div className="flex gap-6">
    <Link to="/" className="hover:text-yellow-300">Home</Link>
    <Link to="/login" className="hover:text-yellow-300">Login</Link>
    <Link to="/signup" className="hover:text-yellow-300">Signup</Link>
  </div>

  <Link to="/cart" className="bg-yellow-400 text-black px-3 py-1 rounded">
    Cart ({cart.length})
  </Link>
  <Link to="/wishlist">
  ❤️ ({wishlist?.length || 0})
  </Link>
  
  <Link
  to="/profile"
  className="hover:text-blue-500 font-medium"
>
  Profile
</Link>
</nav>
  );
}